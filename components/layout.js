import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css"; // to work with CSS modules, the file name MUST end with 'module.css'
import utilStyles from "../styles/utils.module.css";
import Link from "next/link"; // Enables client-side navigation, which is faster than the default server-side navigation within the same app. < href> should be used to navigate to an external page.

const name = "Christian Walters";
export const siteTitle = "Next.js: Timesheet";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {" "}
      {/*the className must be 'styles.[name of CSS class]'; this allows Next to auto-generate unique class names for each component */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Next Timesheet"
          content="Basic coding test, creating a timesheet"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/../public/images/unknown-3.png"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                {/* 'priority' attribute will preload the image */}
                <Image
                  priority
                  src="/../public/images/unknown-3.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
