// _app.js is the top-level component that will be common across all pages of the app. global CSS can ONLY be imported here; global CSS imported anywhere else might unintentionally affect other pages.
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
