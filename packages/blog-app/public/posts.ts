import type { PostCollection } from '@/types';
const today = new Date(Date.now());
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const lastMonth = new Date();
lastMonth.setDate(lastMonth.getDate() - 31);

/* Mock data for testing - real data is generated during build */
const posts: PostCollection = [
  {
    title: 'Today post',
    slug: 'today-post',
    createdAt: today,
    modifiedAt: today,
    summary: 'A post written at today',
    tags: [ { name: 'C++' }, { name: 'glibc' } ],
    thumbnailUrl: '/public/logos.jpeg',
  },
  {
    title: 'Yesterday post',
    slug: 'yesterday-post',
    createdAt: yesterday,
    modifiedAt: yesterday,
    summary: 'A post written at yesterday',
    tags: [ { name: 'C++' }, { name: 'glibc' } ],
    thumbnailUrl: '/public/logos.jpeg',
  },
  {
    title: 'Last month post',
    slug: 'last-month-post',
    createdAt: lastMonth,
    modifiedAt: lastMonth,
    summary: 'A post written in last month',
    tags: [ { name: 'C++' }, { name: 'glibc' } ],
    thumbnailUrl: '/public/logos.jpeg',
  },
  {
    title: 'Today post 2 with no tags',
    slug: 'today-post-2',
    createdAt: lastMonth,
    modifiedAt: lastMonth,
    summary: 'A post written in today',
    tags: [],
    thumbnailUrl: '/public/logos.jpeg',
  },
]

export default posts;
