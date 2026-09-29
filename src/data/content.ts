import rawContent from './Content.json';
import type { ContentItem } from '../types/content';

function isContentItem(value: unknown): value is ContentItem {
  if (typeof value !== 'object' || value === null) return false;
  const item = value as Record<string, unknown>;
  return typeof item.id === 'number' && typeof item.season === 'string' && typeof item.name === 'string' && typeof item.description === 'string' && typeof item['image-01'] === 'string' && Array.isArray(item.pages) && item.pages.every((page) => typeof page === 'object' && page !== null && typeof (page as Record<string, unknown>).img === 'string' && typeof (page as Record<string, unknown>).text === 'string');
}

export const contentData: ContentItem[] = rawContent.filter(isContentItem).filter((item) => item.name.trim() !== '' && item['image-01'].trim() !== '');
