// naming the file with '[]' will make it a dynamic page

import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// Do NOT use to fetch an API route, as this will cause a server-side render error
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// Do NOT use to fetch an API route, as this will cause a server-side render error
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

/* Fetching data from an external API endpoint:
export async function getAllPostIds() {
  const res = await fetch('..')
  const posts = await res.json()
  return posts.map((post) => {
    return {
      params: {
        id: post.id
      },
    };
  })
}
*/
