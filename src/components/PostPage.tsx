import { Calendar, User, MessageSquare } from 'lucide-react';

interface PostPageProps {
    post: any;
    onBack: () => void;
}

const PostPage: React.FC<PostPageProps> = ({ post, onBack }) => (
    <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-10 rounded-2xl shadow-xl shadow-purple-500/10 border border-purple-100">
        <button
            onClick={onBack}
            className="mb-8 inline-flex items-center text-purple-600 hover:text-pink-600 font-semibold transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6" /></svg>
            記事一覧へ戻る
        </button>

        <article>
            <p className="text-base text-pink-500 font-semibold">{post.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>{post.title}</h1>
            <div className="flex items-center text-sm text-gray-500 space-x-6 mb-8 border-b border-t border-gray-200 py-3">
                <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{post.author}</span>
                </div>
            </div>

            <div
                className="prose lg:prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>

        {/* コメントセクション */}
        <div className="mt-12 pt-8 border-t-2 border-dashed border-pink-200">
            <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center gap-3">
                <MessageSquare className="text-pink-400" />
                Comments (2)
            </h3>
            <div className="space-y-6">
                {/* Mock Comment 1 */}
                <div className="flex items-start space-x-4">
                    <img src="https://placehold.co/48x48/c4b5fd/4c1d95?text=A" alt="コメントした人のアバター" className="w-12 h-12 rounded-full" />
                    <div className="flex-1 bg-purple-50 p-4 rounded-lg border border-purple-100">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-purple-800">Aoi</p>
                            <p className="text-xs text-gray-400">2025-07-23</p>
                        </div>
                        <p className="mt-2 text-gray-600">素敵な記事ですね！私もパステルカラーが大好きなので、読んでいてとても癒やされました。</p>
                    </div>
                </div>
                {/* Mock Comment 2 */}
                <div className="flex items-start space-x-4">
                    <img src="https://placehold.co/48x48/f9a8d4/831843?text=S" alt="コメントした人のアバター" className="w-12 h-12 rounded-full" />
                    <div className="flex-1 bg-pink-50 p-4 rounded-lg border border-pink-100">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-pink-800">Sakura</p>
                            <p className="text-xs text-gray-400">2025-07-24</p>
                        </div>
                        <p className="mt-2 text-gray-600">アクセサリー作り、参考になります！今度挑戦してみますね！</p>
                    </div>
                </div>
            </div>
            {/* Comment Form */}
            <div className="mt-8">
                <h4 className="font-bold text-lg text-gray-700 mb-3">コメントを残す</h4>
                <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition" rows={4} placeholder="素敵なコメントをお待ちしています..."></textarea>
                <button className="mt-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                    コメントを送信
                </button>
            </div>
        </div>
    </div>
);

export default PostPage;
