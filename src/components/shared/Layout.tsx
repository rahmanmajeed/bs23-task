import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";

function Layout({ children }: any) {
  const { isLoggedIn } = useSelector((state: any) => state.global);

  return (
    <div>
      <ToastContainer position="bottom-center" />
      {isLoggedIn && <Header />}
      <div className="mt-20 px-5">{children}</div>
      {isLoggedIn && <Footer />}
    </div>
  );
}

export default Layout;
