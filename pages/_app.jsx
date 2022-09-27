import Menus from "layouts/Menus";
import { useRouter } from "next/router";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <div className="flex w-full h-full">
      {pathname !== "/" && pathname !== "/login" && <Menus />}

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
