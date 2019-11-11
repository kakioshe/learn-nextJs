import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <p>Hello, Next!</p>
    <ul>
      <PostLink id="hello-nextjs"/>
      <PostLink id="learn-nextjs"/>
      <PostLink id="deploy-nextjs"/>
    </ul>
  </Layout>
);

export default Index;