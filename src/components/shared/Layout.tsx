import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: any) {
  const { isLoggedIn } = useSelector((state: any) => state.global);

  return (
    <div>
      {isLoggedIn && <Header />}
      <div className="mt-20 px-5">{children}</div>
      {isLoggedIn && <Footer />}
    </div>
  );
}

export default Layout;
