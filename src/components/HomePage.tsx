import BlogPostPreview from './BlogPostPreview';

interface HomePageProps {
    posts: any[];
    onPostSelect: (id: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ posts, onPostSelect }) => (
    <div className="space-y-12">
        {posts.map(post => (
            <BlogPostPreview key={post.id} post={post} onPostSelect={onPostSelect} />
        ))}
    </div>
);

export default HomePage;
