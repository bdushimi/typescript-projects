import {IBlogPost} from '../interfaces/IBlogPost';

export const blogPosts: Array<IBlogPost> = [
  {
    id: 0,
    title: 'Cool TypeScript',
    description: 'This is the description for blog post 0',
    viewCount: 103,
    publishedAt: '2020-03-15T10:00:00.000Z',
  },
  {
    id: 1,
    title: 'Version 2.0 Released',
    description: 'This is the description for blog post 1',
    viewCount: 295,
    publishedAt: '2020-06-07T12:30:00.000Z',
  },
  {
    id: 2,
    title: 'Another Post',
    description: 'This is the description for another post',
    viewCount: 592,
    publishedAt: '2020-07-15T09:12:34.000Z',
  },
  {
    id: 3,
    title: 'Community Updates',
    description: 'Important updates for you',
    viewCount: 122,
    publishedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 4,
    title: null,
    description: 'This blog post has a null title',
    viewCount: 122,
    publishedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 5,
    title: undefined,
    description: 'This blog post has an undefined title',
    viewCount: 3,
    publishedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 6,
    title: 'This blog post has a null description',
    description: null,
    viewCount: 90,
    publishedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 7,
    title: 'This blog post has an undefined description',
    description: undefined,
    viewCount: 122,
    publishedAt: '2020-01-01T00:00:00.000Z',
  },
];
