import { describe, expect, it } from 'vitest';
import { contentData } from './content';

describe('content data', () => {
  it('exposes only valid non-empty content', () => {
    expect(contentData.length).toBeGreaterThan(0);
    expect(contentData.every((item) => item.name.trim() && item['image-01'].trim())).toBe(true);
    expect(contentData.every((item) => item.pages.every((page) => page.img && page.text))).toBe(true);
  });
});
