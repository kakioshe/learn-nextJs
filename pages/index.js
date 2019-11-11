import Link from 'next/link';

const Index = () => (
  <div>
    <p>Hello, Next!</p>
    <Link href="/about">
      <a title="about page">About Page</a>
    </Link>
  </div>
);

export default Index;