// Google Analytics 配置和工具函数

const configuredMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const GA_MEASUREMENT_ID = configuredMeasurementId && /^G-[A-Z0-9]+$/.test(configuredMeasurementId) && !configuredMeasurementId.includes('XXXX')
  ? configuredMeasurementId
  : undefined;

// 检查是否启用了 Google Analytics
export const isAnalyticsEnabled = () => {
  return typeof window !== 'undefined'
    && Boolean(GA_MEASUREMENT_ID)
    && window.__findMyRailPassConsent?.analyticsAllowed === true
    && typeof window.gtag === 'function';
};

// 页面浏览事件
export const pageview = (url: string) => {
  if (isAnalyticsEnabled() && GA_MEASUREMENT_ID) {
    window.gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// 自定义事件追踪
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (isAnalyticsEnabled()) {
    window.gtag?.('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// 声明全局 gtag 函数类型
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}
