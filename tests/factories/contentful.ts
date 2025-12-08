import { Asset, Entry } from "contentful";
import { BlogPostSkeleton } from "../../types/contentful";

const mockDate =
  "2025-12-08T12:00:00Z";

export function createMockAsset(): Asset<undefined, string> {
  return {
    sys: {
      id: "mock-asset",
      type: "Asset",
      createdAt: mockDate,
      updatedAt: mockDate,
      revision: 1,
      publishedVersion: 1,
      locale: "en-US",
      space: {
        sys: { id: "space-id", type: "Link", linkType: "Space" }
      },
      environment: {
        sys: { id: "env-id", type: "Link", linkType: "Environment" }
      }
    },
    fields: {
      file: {
        url: "//images.ctfassets.net/default.jpg",
        details: { size: 12345, image: { width: 300, height: 200 } },
        fileName: "default.jpg",
        contentType: "image/jpeg"
      }
    },
    metadata: { tags: [] }
  };
}

export function createMockPost(
    id: string,
    overrides?: Partial<Entry<BlogPostSkeleton>>
  ): Entry<BlogPostSkeleton> {
    const defaultFields = {
        title: `Mock Post ${id}`,
        abstract: "Mock abstract",
        url: `/posts/${id}`,
        thumbnail: createMockAsset()
      };
    
      const mergedFields = {
        ...defaultFields,
        ...(overrides?.fields ?? {})
      };
    return {
      sys: {
        id,
        type: "Entry",
        createdAt: mockDate,
        updatedAt: mockDate,
        revision: 1,
        publishedVersion: 1,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "post"  // ← literal "post" fixes your error
          }
        },
        space: {
          sys: { id: "space-id", type: "Link", linkType: "Space" }
        },
        environment: {
          sys: { id: "env-id", type: "Link", linkType: "Environment" }
        }
      },
      fields: mergedFields,
      metadata: { tags: [] },
      ...overrides
    };
  }