import { JRPass } from '@/types/pass';
import { OFFICIAL_PASSES } from '@/data/officialPasses';

export function getAllPasses(): JRPass[] {
  return OFFICIAL_PASSES.slice().sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}

export function getPopularPasses(limit: number = 6): JRPass[] {
  return getAllPasses()
    .filter(pass => pass.popularity >= 4)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
}

export function getPassById(id: string): JRPass | undefined {
  return getAllPasses().find(pass => pass.id === id);
}
