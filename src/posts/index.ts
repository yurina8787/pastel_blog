import post1 from './1.md';
import post2 from './2.md';
import post3 from './3.md';

export interface PostMeta {
    id: number;
    title: string;
    author: string;
    date: string;
    excerpt: string;
    category: string;
    mdContent: string;
}

export const postsMeta: PostMeta[] = [
    {
        id: 1,
        title: '初めての投稿です！',
        author: 'Yuki',
        date: '2025-07-15',
        excerpt: 'はじめまして！このブログでは、日常のきらめきや好きなものについて綴っていきたいと思います。',
        category: '日記',
        mdContent: post1,
    },
    {
        id: 2,
        title: 'お気に入りのパステルカフェ',
        author: 'Yuki',
        date: '2025-07-18',
        excerpt: '最近見つけた、とっても可愛いパステルカラーのカフェに行ってきました。スイーツも空間も最高でした！',
        category: 'おでかけ',
        mdContent: post2,
    },
    {
        id: 3,
        title: 'DIYグリッターアクセサリー',
        author: 'Yuki',
        date: '2025-07-22',
        excerpt: '週末はお家でキラキラのアクセサリー作りに挑戦！思ったより簡単にできて、とっても楽しかったです。',
        category: '趣味',
        mdContent: post3,
    },
];
