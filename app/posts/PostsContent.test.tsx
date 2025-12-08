import { describe, test, expect } from 'vitest'
import { renderWithProviders } from '../../tests/utils/test-utils'
import { screen } from '@testing-library/react'
import { PostsContent } from './PostsContent'
import { BlogPosts } from '../../types/contentful'
import { Asset } from 'contentful'

// Mock data
const mockDate =
  "2025-12-08T12:00:00Z"

// TODO: Create factory
const mockAsset: Asset<undefined, string>  = {
  sys: {
    id: "test",
    type: "Asset",
    createdAt: mockDate,
    updatedAt: mockDate,
    revision: 1,
    publishedVersion: 1,
    locale: "en-US",
    space: {
      sys: {
        id: "space-id",
        type: "Link",
        linkType: "Space"
      }
    },
    environment: {
      sys: {
        id: "env-id",
        type: "Link",
        linkType: "Environment"
      }
    }
  },
  fields: {
    file: {
      url: "//images.ctfassets.net/thumb2.jpg",
      details: {
        size: 67890,
        image: { width: 300, height: 200 }
      },
      fileName: "thumb2.jpg",
      contentType: "image/jpeg"
    }
  },
  metadata: { tags: [] }
}

const mockPosts: BlogPosts = [
  {
    sys: {
        id: '1',
        type: 'Entry',
        createdAt: mockDate,
        updatedAt: mockDate,
        revision: 1,
        publishedVersion: 1,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'post'
          }
        },
        space: {
          sys: {
            id: 'space-id',
            type: 'Link',
            linkType: 'Space'
          }
        },
        environment: {
          sys: {
            id: 'env-id',
            type: 'Link',
            linkType: 'Environment'
          }
        }
      },
      fields: {
        title: 'First Post',
        abstract: 'This is the first post.',
        url: '/posts/first',
        thumbnail: mockAsset  
      },
      metadata: {
        tags: [] 
      }
  },
  {
    sys: {
        id: '2',
        type: 'Entry',
        createdAt: mockDate,
        updatedAt: mockDate,
        revision: 1,
        publishedVersion: 1,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'post'
          }
        },
        space: {
          sys: {
            id: 'space-id',
            type: 'Link',
            linkType: 'Space'
          }
        },
        environment: {
          sys: {
            id: 'env-id',
            type: 'Link',
            linkType: 'Environment'
          }
        }
      },
      fields: {
        title: 'Second Post',
        abstract: 'This is the second post.',
        url: '/posts/second',
        thumbnail: mockAsset  
      },
      metadata: {
        tags: [] 
      }
    }
]


describe('PostsContent', () => {
  function renderComponent(posts = mockPosts) {
    renderWithProviders(<PostsContent posts={posts} />)
  }

  test('renders the page title', () => {
    renderComponent()
    expect(screen.getByText('Posts')).toBeInTheDocument()
  })

  test('renders all post titles', () => {
    renderComponent()
    mockPosts.forEach(post => {
      expect(screen.getByText(post.fields.title)).toBeInTheDocument()
    })
  })

  test('renders all post abstracts', () => {
    renderComponent()
    mockPosts.forEach(post => {
      expect(screen.getByText(post.fields.abstract)).toBeInTheDocument()
    })
  })

  test('renders images with correct alt text', () => {
    renderComponent()
    mockPosts.forEach(post => {
      const img = screen.getByAltText(post.fields.title) as HTMLImageElement
      expect(img).toBeInTheDocument()
    })
  })

  test('renders links pointing to post URLs', () => {
    renderComponent()
    mockPosts.forEach(post => {
      const link = screen.getByText(post.fields.title).closest('a') as HTMLAnchorElement
      expect(link).toHaveAttribute('href', post.fields.url)
    })
  })
})
