import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

// fetch data from the file system
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // snip off the file extension, use name as id
    const id = fileName.replace(/\.md$/, "");

    //read in the file as a string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // return an object with the id and data
    return {
      id,
      ...matterResult.data,
    };
  });

  // sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // the returned list MUST be an array of objects, with a 'params' key and 'id' key
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

// Can also fetch data from external sources, such as a database or API
//
// import someDatabaseSDK from 'someDatabaseSDK';
//
// const databaseClient = someDatabaseSDK.createClient(...);
//
// export async function getSortedPostsData() {
//   const res = await fetch('https://api.example.com/posts');
//   { return res.json(); || return databaseClient.query('SELECT posts...'); }
// }

// For server side rendering, when you need to pre-render a page whose data must be fetched:
// export async function getServerSideProps(context) {
// return {
// props: {
// component properties
// },
// };
//}

// SWR, a React hook for client side data fetching; useful for static generation without data and fetching data on the client side
// import { useSWR } from 'swr';
//
// function Profile() {
//  const {data, error} = useSWR('/api/user', fetch);
//
//  if (error) return <div>failed to load</div>;
//  if (!data) return <div>loading...</div>;
//  return <div>Hello, {data.name}</div>;
//}
