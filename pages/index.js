import Head from 'next/head';
import Layout, {name} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Preview from '../components/preview';
import { getDataDivideByTheme, getDataDivideByTime } from '../lib/posts';


export default function Home({ dataDivideByTheme, dataDivideByTime, sortedPostsData }) {
  return (
    <Layout home theme={dataDivideByTheme} time={dataDivideByTime}>
      <Head>
        <title>enderman's blog</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>[Hello, this is enderman's blog that is being constructed!]</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {sortedPostsData.map(Preview)}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const sortedPostsData = getSortedPostsData();
  const dataDivideByTheme = getDataDivideByTheme();
  const dataDivideByTime = getDataDivideByTime();
  return {
    props: {
      dataDivideByTheme,
      dataDivideByTime,
      sortedPostsData,
    },
  };
}