import { PassRecommendation } from '@/types/pass';

interface RouteInfo {
  from: string;
  to: string;
  duration: number;
}

export const exportToPDF = (recommendations: PassRecommendation[], route: RouteInfo) => {
  // 创建PDF内容
  const content = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>周游券推荐报告</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .logo { font-size: 24px; font-weight: bold; color: #dc2626; }
        .route-info { background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
        .recommendation { border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 20px; }
        .pass-name { font-size: 20px; font-weight: bold; color: #111827; }
        .pass-price { font-size: 18px; color: #dc2626; font-weight: bold; }
        .savings { background: #dcfce7; color: #166534; padding: 5px 10px; border-radius: 4px; display: inline-block; }
        .advantages { margin-top: 15px; }
        .advantage { margin: 5px 0; }
        .footer { text-align: center; margin-top: 30px; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">🚄 FindMyJR-Pass</div>
        <h1>周游券推荐报告</h1>
        <p>生成时间: ${new Date().toLocaleString('zh-CN')}</p>
      </div>

      <div class="route-info">
        <h2>您的旅行计划</h2>
        <p><strong>出发地:</strong> ${route.from}</p>
        <p><strong>目的地:</strong> ${route.to}</p>
        <p><strong>旅行天数:</strong> ${route.duration}天</p>
      </div>

      <h2>推荐通票</h2>
      ${recommendations.map((rec, index) => `
        <div class="recommendation">
          <div class="pass-name">${index + 1}. ${rec.pass.name.en}</div>
          <div class="pass-price">¥${rec.pass.price.adult.regular.toLocaleString()}</div>
          <div class="savings">节省 ¥${rec.savings.toLocaleString()}</div>
          <p><strong>推荐理由:</strong> ${rec.reason}</p>
          <div class="advantages">
            <h4>适用场景:</h4>
            ${rec.pass.bestFor.length > 0
              ? rec.pass.bestFor.map(tag => `<div class="advantage">• ${tag}</div>`).join('')
              : '<div class="advantage">• 暂无标签</div>'}
          </div>
        </div>
      `).join('')}

      <div class="footer">
        <p>感谢使用FindMyJR-Pass - 您的日本铁路通票专家</p>
        <p>更多信息请访问: https://findmyjrpass.com</p>
      </div>
    </body>
    </html>
  `;

  // 创建新窗口并打印
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }
};

export const exportToJSON = (data: unknown, filename: string) => {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const shareResults = async (recommendations: PassRecommendation[], _route: RouteInfo) => {
  void _route;
  const shareData = {
    title: '周游券推荐结果',
    text: `我在FindMyJR-Pass找到了最适合的周游券！推荐: ${recommendations[0]?.pass.name.en}，节省¥${recommendations[0]?.savings.toLocaleString()}`,
    url: window.location.href,
  };

  if (navigator.share && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      console.log('分享失败:', error);
      fallbackShare(shareData);
    }
  } else {
    fallbackShare(shareData);
  }
};

const fallbackShare = (shareData: { text: string; url: string }) => {
  // 复制到剪贴板
  const text = `${shareData.text}\n${shareData.url}`;
  navigator.clipboard.writeText(text).then(() => {
    alert('分享内容已复制到剪贴板！');
  }).catch(() => {
    // 如果剪贴板API不可用，显示分享文本
    prompt('请复制以下内容分享:', text);
  });
};

export const generateQRCode = (url: string): Promise<string> => {
  return new Promise((resolve) => {
    // 这里可以使用qrcode库生成二维码
    // 为了简化，我们返回一个占位符
    resolve(`data:image/svg+xml;base64,${btoa(`
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="white"/>
        <text x="100" y="100" text-anchor="middle" font-family="Arial" font-size="12">QR Code</text>
        <text x="100" y="120" text-anchor="middle" font-family="Arial" font-size="10">${url}</text>
      </svg>
    `)}`);
  });
};
