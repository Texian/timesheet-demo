import Link from "next/link";
import Head from "next/head";
import Script from "next/script"; // optimizes the <script> element when additional scripts are called
import Layout from "../components/layout";

export default function Register() {
  return (
    <Layout>
      {" "}
      {/* Creating a CSS component allows it to both replace the <></> container while applying the specified CSS to everything between */}
      <Head>
        <title>Register</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" // 'strategy' says when a third party script should load; 'lazyOnload' loads during browser idle time
        onLoad={() =>
          // 'onLoad' is called immediately after the script has loaded
          console.log("Facebook SDK loaded")
        }
      />
      <h1> Registration</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </Layout>
  );
}
