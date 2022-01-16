/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useRecoilState } from "recoil";
import { toggleSidebar } from "../configs/states";
import { menu } from "../configs/menu";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [Open, setOpen] = useRecoilState(toggleSidebar);
  const Menu = menu;
  const handleToggle = () => {
    setOpen(!Open);
  };
  return (
    <div
      className={`c-sidebar c-sidebar-dark ${Open ? "c-sidebar-show" : "show"}`}
      role="navigation"
    >
      <ul className="c-sidebar-nav">
        <li className="c-sidebar-nav-title"></li>

        {Menu.map((row, index) =>
          row.dropdown.length > 0 ? (
            <li className="c-sidebar-nav-dropdown" key={index}>
              <a className="c-sidebar-nav-dropdown-toggle" href="#">
                <i className={`c-sidebar-nav-icon ${row.icon}`}></i>
                {row.title}
              </a>
              <ul className="c-sidebar-nav-dropdown-items">
                {row.dropdown.map((drop, i) => (
                  <li className="c-sidebar-nav-item" key={i}>
                    <NavLink
                      className="c-sidebar-nav-link"
                      activeClassName=" c-sidebar-nav-link active"
                      to={drop.link}
                      onClick={handleToggle}
                    >
                      <span className="c-sidebar-nav-icon"></span> {drop.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li className="c-sidebar-nav-item" key={index}>
              <NavLink
                className="c-sidebar-nav-link"
                to={row.link}
                activeClassName="c-sidebar-nav-link active"
                onClick={handleToggle}
              >
                <i className={`c-sidebar-nav-icon ${row.icon}`}></i>
                {row.title}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
