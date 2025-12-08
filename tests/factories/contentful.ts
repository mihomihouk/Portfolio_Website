import { Asset, Entry } from 'contentful'
import { BlogPostSkeleton, ProjectsSkeleton } from '../../types/contentful'
import { BLOCKS, Document } from '@contentful/rich-text-types'

// Shared mock date
const mockDate = '2025-12-08T12:00:00Z'

// Asset factory
export function createMockAsset(
  overrides?: Partial<Asset<undefined, string>>
): Asset<undefined, string> {
  return {
    sys: {
      id: 'asset-id',
      type: 'Asset',
      createdAt: mockDate,
      updatedAt: mockDate,
      revision: 1,
      publishedVersion: 1,
      locale: 'en-US',
      space: { sys: { id: 'space-id', type: 'Link', linkType: 'Space' } },
      environment: {
        sys: { id: 'env-id', type: 'Link', linkType: 'Environment' }
      }
    },
    fields: {
      file: {
        url: '//images.ctfassets.net/thumb.jpg',
        details: { size: 12345, image: { width: 300, height: 200 } },
        fileName: 'thumb.jpg',
        contentType: 'image/jpeg'
      }
    },
    metadata: { tags: [] },
    ...overrides
  }
}

// BlogPost factory
export function createMockPost(
  id: string,
  overrides?: Partial<Entry<BlogPostSkeleton, undefined, string>>
): Entry<BlogPostSkeleton, undefined, string> {
  return {
    sys: {
      id,
      type: 'Entry',
      createdAt: mockDate,
      updatedAt: mockDate,
      revision: 1,
      publishedVersion: 1,
      contentType: {
        sys: { type: 'Link', linkType: 'ContentType', id: 'post' }
      },
      space: { sys: { id: 'space-id', type: 'Link', linkType: 'Space' } },
      environment: {
        sys: { id: 'env-id', type: 'Link', linkType: 'Environment' }
      },
      locale: 'en-US'
    },
    fields: {
      title: `Mock Post ${id}`,
      abstract: 'Mock abstract',
      url: `/posts/${id}`,
      thumbnail: createMockAsset(),
      ...overrides?.fields
    },
    metadata: { tags: [] },
    ...overrides
  }
}

export const mockDescription: Document = {
  nodeType: BLOCKS.DOCUMENT,
  content: [],
  data: {}
}

// Project entry factory
export function createMockProject(
  id: string,
  overrides?: Partial<Entry<ProjectsSkeleton, undefined, string>>
): Entry<ProjectsSkeleton, undefined, string> {
  return {
    sys: {
      id,
      type: 'Entry',
      createdAt: mockDate,
      updatedAt: mockDate,
      revision: 1,
      publishedVersion: 1,
      contentType: {
        sys: { type: 'Link', linkType: 'ContentType', id: 'projects' }
      },
      space: { sys: { id: 'space-id', type: 'Link', linkType: 'Space' } },
      environment: {
        sys: { id: 'env-id', type: 'Link', linkType: 'Environment' }
      },
      locale: 'en-US'
    },
    fields: {
      title: `Mock Project ${id}`,
      abstract: 'This is a mock project abstract.',
      description: mockDescription,
      date: mockDate,
      slug: `mock-project-${id}`,
      stack: 'React, TypeScript',
      url: `/projects/${id}`,
      articleUrl: 'https://test.com',
      thumbnail: createMockAsset(),
      ...overrides?.fields
    },
    metadata: { tags: [] },
    ...overrides
  }
}
