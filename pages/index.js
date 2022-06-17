// Next.js as a React framework reduces the amount of code needed compared to pure React, which is a library that provides essential UI primitives but requires extra work to combine into a full web app. Babel script, for example, is removed and handled by Next and doesn't need to be thought about by the coder.

import Head from 'next/head'; // Head, instead of head, is a React component that handles the <head> tag
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

// Using getStaticProps to fetch the post data allows the posts to be passed to 'Home' as props
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Introduction]</p>
        <p>
          This is a simple timesheet app built with Next.js. It is a work in progress.
        </p>
        {/* <h3 className='text-2xl font-bold underline'>Tailwind Test Text</h3> */}
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
