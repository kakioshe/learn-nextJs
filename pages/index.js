import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <p>Hello, Next!</p>
    <ul>
      <PostLink title="Hello Next.js"/>
      <PostLink title="Learning things"/>
    </ul>
  </Layout>
);

export default Index;