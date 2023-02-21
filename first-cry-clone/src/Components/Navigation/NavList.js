import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { hasProperty, isEmpty } from "../../utils/common";
import { Text } from "../../styledConstants";
import { NavIcon } from "./style";

export default function NavList({
  navData = [],
  toggleNavigation = () => {},
  hideSubmenu,
  className = "",
}) {
  return (
    <ul className={className}>
      {navData.length >= 0 &&
        navData.map((item, i) => {
          if (hasProperty(item, "active") && item.active) {
            return (
              <li
                className={`${item.expanded ? "active" : ""}`}
                key={`nav-${i}`}
              >
                {!isEmpty(item.subNav) ? (
                  <>
                    <div
                      className="nav-link flex flex-center"
                      onClick={
                        hasProperty(item, "subNav")
                          ? (e) => toggleNavigation(e, item.expanded, i)
                          : () => {}
                      }
                      role="list"
                    >
                      {item.icon && <NavIcon>{item.icon}</NavIcon>}
                      <Text
                        size="rg"
                        color={item.expanded ? "color9" : "color8"}
                      >
                        {item.title}
                      </Text>
                    </div>
                    {hasProperty(item, "expanded") && item.expanded && (
                      <NavList navData={item.subNav} className="sub-navlist" />
                    )}
                  </>
                ) : (
                  <NavLink
                    className="nav-link flex flex-center"
                    to={item.link}
                    onClick={hideSubmenu}
                  >
                    {item.icon && <NavIcon>{item.icon}</NavIcon>}
                    <Text size="rg" color="color8">
                      {item.title}
                    </Text>
                  </NavLink>
                )}
              </li>
            );
          } else {
            return !hasProperty(item, "expanded") ? ( // for subnav
              <li
                className={`${item.expanded ? "active" : ""}`}
                key={`nav-${i}`}
              >
                <NavLink className="nav-link flex flex-center" to={item.link}>
                  {item.icon && <NavIcon>{item.icon}</NavIcon>}
                  <Text size="rg" color="color8">
                    {item.title}
                  </Text>
                </NavLink>
              </li>
            ) : (
              ""
            );
          }
        })}
    </ul>
  );
}
