import {IImagePost} from '../interfaces/IImagePost';

export const imagePosts: Array<IImagePost> = [
  {
    id: 0,
    imageUrl: 'https://picsum.photos/id/1/300/300',
    caption: 'This is the caption for image post 0',
    comments: [
      'Wow, amazing shot!',
      'I like it!',
      'I like it too!',
      'Me three!',
    ],
    publishedAt: '2020-03-15T10:00:00.000Z',
  },
  {
    id: 1,
    imageUrl: 'https://picsum.photos/id/2/300/300',
    caption: 'This is the caption for image post 1',
    comments: ['Cool picture!', 'I like it!', 'I like it too!'],
    publishedAt: '2020-06-07T12:30:00.000Z',
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/id/3/300/300',
    caption: 'This is the caption for image post 2',
    comments: ['Beautiful!'],
    publishedAt: '2020-07-15T09:12:34.000Z',
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/id/4/300/300',
    caption: 'This is the caption for image post 3',
    comments: ['Just perfect!', 'Amazing vibes!'],
    publishedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/id/4/300/300',
    caption: null,
    comments: ['Just perfect!', 'Amazing vibes!'],
    publishedAt: '2020-01-01T00:00:00.000Z',
  },
];
