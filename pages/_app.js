import "../styles/theme.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../util/theme");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
