import type { EntryCollection, EntryFieldTypes } from 'contentful'

export type ProjectFields = {
  abstract: EntryFieldTypes.Text
  date: EntryFieldTypes.Date
  description: EntryFieldTypes.RichText
  slug: EntryFieldTypes.Text
  stack: EntryFieldTypes.Text
  thumbnail: EntryFieldTypes.AssetLink
  title: EntryFieldTypes.Text
  url: EntryFieldTypes.Text
  articleUrl: EntryFieldTypes.Text
}

export type ProjectsSkeleton = {
  contentTypeId: 'projects'
  fields: ProjectFields
}

export type Projects = EntryCollection<
  ProjectsSkeleton,
  undefined,
  string
>['items']

export type BlogPostSkeleton = {
  contentTypeId: 'post'
  fields: {
    title: EntryFieldTypes.Text
    url: EntryFieldTypes.Text
    thumbnail: EntryFieldTypes.AssetLink
    abstract: EntryFieldTypes.Text
  }
}

export type BlogPosts = EntryCollection<
  BlogPostSkeleton,
  undefined,
  string
>['items']
