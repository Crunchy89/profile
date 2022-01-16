/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useRecoilState } from "recoil";
import { toggleSidebar } from "../configs/states";
import { menu } from "../configs/menu";
import { NavLink} from "react-router-dom";

const Header = () => {
  const [Open, setOpen] = useRecoilState(toggleSidebar);
  const Menu = menu;
  const handleToggle = () => {
    setOpen(!Open);
  };
  const [Scroll, setScroll] = React.useState(false);
  const [scrollPosition, setSrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (scrollPosition > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <>
    <header
      className={`c-header fixed-top ${
        Scroll ? "c-header-dark" : "bg-transparent"
      } px-3`}
      style={{ border: "none", transition: "1s" }}
    >
      <div className="c-header-nav mr-auto"></div>
      <div className="form-inline my-2 my-lg-0 d-none d-md-block d-lg-block">
        <ul className="c-header-nav mr-auto">
          {Menu.map((row, index) =>
            row.dropdown.length > 0 ? (
              <li className="c-header-nav-item dropdown" key={index}>
                <a
                  className="c-header-nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className={`${row.icon} mr-1`}></i>
                  {row.title}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {row.dropdown.map((drop, i) => (
                    <NavLink
                      className="dropdown-item text-light"
                      activeClassName="dropdown-item text-light active"
                      to={drop.link}
                      key={i}
                    >
                      {drop.title}
                    </NavLink>
                  ))}
                </div>
              </li>
            ) : (
              <li className="c-header-nav-item" key={index}>
                <NavLink
                  className="c-header-nav-link text-light"
                  activeClassName="c-header-nav-link text-light active"
                  to={row.link}
                >
                  <i className={`${row.icon} mr-1`}></i>
                  {row.title}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
      <button
        className="c-header-toggler d-sm-none"
        type="button"
        onClick={handleToggle}
      >
        {Open ? (
          <span className="cil-x text-light"></span>
        ) : (
          <span className="cil-menu text-light"></span>
        )}
      </button>
    </header>
    </>
  );
};

export default Header;
