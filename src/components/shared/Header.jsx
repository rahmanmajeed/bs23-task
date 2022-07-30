import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { setUserLoggedIn } from "../../store/global/actions";

function Header() {
  const m_root = routes.slice(0, 1);
  const {app, currentLoggedUser} = useSelector((state) => state.global)
  const dispatch = useDispatch();

  const handleLogout = () => {
       dispatch(setUserLoggedIn({}, false))
  }

  return (
    <>
      <nav className="fixed box-border top-0 left-0 bg-[#242424] w-full h-16 p-6 flex justify-between items-center gap-40 font-mono">
        <div className="text-base md:text-3xl text-[#FAF9F6] font-normal md:font-semibold">
          <NavLink to={m_root[0].path}>{app}</NavLink>
        </div>
        <div className="hidden md:flex md:justify-between md:items-center md:gap-5 md:text-[#FAF9F6]">
          {routes.slice(1).map((route) => (
            <NavLink key={route.slug} to={route.path}>
              {route.name}
            </NavLink>
          ))}

          {/** dropdown menu */}
          <div class="flex gap-3 justify-between ">
            <button type="button" className="hover:bg-slate-600 h-full p-4" onClick={handleLogout}>{currentLoggedUser?.username} &#x276F; {'logout'}</button>
            </div>
           
        </div>
      </nav>
    </>
  );
}

export default Header;
