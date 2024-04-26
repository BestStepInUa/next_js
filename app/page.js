import Link from 'next/link';
import PostDetail from './components/PostDetail';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
};

export default async function Home() {
  const posts = await fetchData();

  return (
    <div>
      <h1>Головна сторінка</h1>
      {posts.map(post => (
        <PostDetail post={post} />
      ))}
    </div>
  );
}
