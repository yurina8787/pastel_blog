import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import PostPage from './components/PostPage';
import Sparkles from './components/Sparkles';
import { postsMeta } from './posts';
import { marked } from 'marked';

// --- モックデータ ---
// 実際のブログ記事のデータに置き換えてください
const mockPosts = postsMeta;

const categories = ['日記', 'おでかけ', '趣味', 'コスメ'];

// --- メインアプリケーションコンポーネント ---
export default function App() {
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
    const [posts] = useState(mockPosts);

    useEffect(() => {
        // Google Fontsを動的に読み込む
        const link = document.createElement('link');
        link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Noto+Serif+JP:wght@400;700&display=swap";
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    const handlePostSelect = (id: number) => {
        setSelectedPostId(id);
        window.scrollTo(0, 0);
    };

    const handleBackToHome = () => {
        setSelectedPostId(null);
    };

    const handleCategoryClick = (category: string) => {
        // カテゴリーフィルター機能を実装する場合はここにロジックを追加
        console.log("Selected category:", category);
        // 例: setPosts(mockPosts.filter(p => p.category === category));
        // 今回はデモのため、ホームページに戻るだけにする
        setSelectedPostId(null);
    };

    const selectedPost = posts.find(p => p.id === selectedPostId);
    const selectedPostContent = selectedPost ? marked.parse(selectedPost.mdContent) : '';

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 font-sans">
            <Sparkles />
            <div className="relative z-10">
                <Header onTitleClick={handleBackToHome} />
                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-2/3 lg:w-3/4">
                            {selectedPost ? (
                                <PostPage post={{ ...selectedPost, content: selectedPostContent }} onBack={handleBackToHome} />
                            ) : (
                                <HomePage posts={posts} onPostSelect={handlePostSelect} />
                            )}
                        </div>
                        <Sidebar posts={posts} categories={categories} onCategoryClick={handleCategoryClick} />
                    </div>
                </main>
                <Footer />
            </div>
            <style>{`
        @keyframes sparkle {
          0% { transform: scale(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: scale(1); opacity: 0; }
        }
        .animate-sparkle {
          animation: sparkle linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .prose img {
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
        .prose ol, .prose ul {
          padding-left: 1.5rem;
        }
        .prose li::marker {
          color: #f472b6; /* pink-400 */
        }
      `}</style>
        </div>
    );
}
