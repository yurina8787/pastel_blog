import { Calendar, User } from 'lucide-react';

interface BlogPostPreviewProps {
    post: any;
    onPostSelect: (id: number) => void;
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ post, onPostSelect }) => (
    <article className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-pink-100 group">
        <div className="p-8">
            <p className="text-sm text-pink-500 font-semibold">{post.category}</p>
            <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-3 group-hover:text-pink-600 transition-colors" style={{ fontFamily: "'Noto Serif JP', serif" }}>{post.title}</h2>
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{post.author}</span>
                </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
            <button
                onClick={() => onPostSelect(post.id)}
                className="mt-6 inline-block bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
                続きを読む
            </button>
        </div>
    </article>
);

export default BlogPostPreview;
