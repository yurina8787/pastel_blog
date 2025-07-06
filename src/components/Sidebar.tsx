import { Rss, Twitter, Instagram } from 'lucide-react';

interface SidebarProps {
    posts: any[];
    categories: string[];
    onCategoryClick: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ posts, categories, onCategoryClick }) => (
    <aside className="md:w-1/3 lg:w-1/4 space-y-8">
        {/* プロフィール */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg shadow-purple-500/10 border border-purple-100">
            <h3 className="text-xl font-bold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">Profile</h3>
            <div className="flex flex-col items-center">
                <img src="https://placehold.co/100x100/f5d0fe/a855f7?text=Yuki" alt="筆者のアバター" className="rounded-full border-4 border-white shadow-md" />
                <p className="font-bold text-lg mt-3 text-gray-700">Yuki</p>
                <p className="text-sm text-gray-500 mt-1 text-center">パステルとキラキラが好き。日々のときめきをシェアします。</p>
                <div className="flex space-x-4 mt-4 text-pink-400">
                    <a href="#" className="hover:text-pink-600 transition-colors"><Rss /></a>
                    <a href="#" className="hover:text-pink-600 transition-colors"><Twitter /></a>
                    <a href="#" className="hover:text-pink-600 transition-colors"><Instagram /></a>
                </div>
            </div>
        </div>

        {/* カテゴリー */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg shadow-purple-500/10 border border-purple-100">
            <h3 className="text-xl font-bold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">Categories</h3>
            <ul className="space-y-2">
                {categories.map(cat => (
                    <li key={cat}>
                        <a href="#" onClick={(e) => { e.preventDefault(); onCategoryClick(cat); }} className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all flex items-center">
                            <span className="w-2 h-2 bg-pink-300 rounded-full mr-3"></span>
                            {cat}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        {/* 最近の投稿 */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg shadow-purple-500/10 border border-purple-100">
            <h3 className="text-xl font-bold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">Recent Posts</h3>
            <ul className="space-y-4">
                {posts.slice(0, 3).map(post => (
                    <li key={post.id} className="flex items-start space-x-3">
                        <img src={`https://placehold.co/80x80/${post.id === 1 ? 'e9d5ff' : post.id === 2 ? 'a7f3d0' : 'fbcfe8'}/fff?text=✨`} alt="投稿のサムネイル" className="w-16 h-16 rounded-lg object-cover border border-gray-200" />
                        <div>
                            <a href="#" className="font-semibold text-gray-700 hover:text-purple-600 transition-colors leading-tight">{post.title}</a>
                            <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </aside>
);

export default Sidebar;
