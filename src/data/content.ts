import rawContent from './Content.json';
import type { ContentItem } from '../types/content';

function isContentItem(value: unknown): value is ContentItem {
  if (!isRecord(value)) return false;
  return typeof value.id === 'number' && typeof value.season === 'string' && typeof value.name === 'string' && typeof value.description === 'string' && typeof value['image-01'] === 'string' && Array.isArray(value.pages) && value.pages.every(isContentPage);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isContentPage(value: unknown): boolean {
  return isRecord(value) && typeof value.img === 'string' && typeof value.text === 'string';
}

export const contentData: ContentItem[] = rawContent.filter(isContentItem).filter((item) => item.name.trim() !== '' && item['image-01'].trim() !== '');
