import Link from 'next/link';

const PostDetail = ({ post }) => {
  return (
    <div key={post.id} className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href={`/post/` + post.id}>Детальніше</Link>
    </div>
  );
};

export default PostDetail;
