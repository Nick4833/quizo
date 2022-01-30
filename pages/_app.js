import Router from "next/router";
import "../styles/globals.css";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
