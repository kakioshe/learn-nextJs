import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Batman = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {
        props.shows.map(
          show => (
            <li key={ show.id }>
              <Link href="/batman/[id]" as={`/batman/${show.id}`}>
                <a>{ show.name }</a>
              </Link>
            </li>
          )
        )
      }
    </ul>
  </Layout>
)

Batman.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`show data fetched. count: ${data.length}`);

  return {
    shows: data.map( entry => entry.show )
  };
};

export default Batman;