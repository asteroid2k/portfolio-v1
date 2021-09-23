import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/theme.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
