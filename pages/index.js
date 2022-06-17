// Next.js as a React framework reduces the amount of code needed compared to pure React, which is a library that provides essential UI primitives but requires extra work to combine into a full web app. Babel script, for example, is removed and handled by Next and doesn't need to be thought about by the coder.

import Head from 'next/head'; // Head, instead of head, is a React component that handles the <head> tag
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
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
        <h3 className='text-2xl font-bold underline'>Tailwind Test Text</h3>
      </section>
    </Layout>
  );
}
