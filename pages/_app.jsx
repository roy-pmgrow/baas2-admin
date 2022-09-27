import Menus from "layouts/Menus";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex w-full h-full">
      <Menus />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
