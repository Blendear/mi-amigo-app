// Table of content for this file is written at the bottom

import "@/styles/sass/globals.scss";
import type { AppProps } from "next/app";
import store from "../store/redux/store-redux";
import { Provider } from "react-redux";
import Layout from "../layouts/layout/layout";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps<{}>) {
  return (
    //       _._. "Redux"
    <Provider store={store}>
      {/* //       _._. "Layout" - for wrapping "0. Base" with content that should appear on every page */}
      <Layout>
        <Head>
          {/* //       _._. Title & Meta tags - which will be visible in the browser tab & are good for SEO */}
          <title>Mi Amigo | Twój Ziomuś</title>
          {/* for example : <title>iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple</title>  */}
          <meta
            name="description"
            content="Max 155 or 160 characters. Google cuts the rest. Work in more keywords to the content here if there are some that didn't fit in the title. These keywords will appear in bold if a user's search contains them."
            //   for example : content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          />
        </Head>
        {/* //       _._. Base Next.js component, visible to users */}
        <Component {...pageProps} />
        <ToastContainer theme="dark" />
      </Layout>
    </Provider>
  );
}

export default MyApp;

//~~ _. MyApp
//
//       _._. "Redux"
//
//       _._. "Layout" - for wrapping "0. Base" with content that should appear on every page
//
//       _._. Title & Meta tags - which will be visible in the browser tab & are good for SEO
//
//       _._. Base Next.js component, visible to users
