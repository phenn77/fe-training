import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompactDisc,
  faMusic,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Navbar = () => {
  const nav = [
    {
      url: "/artist",
      name: "artist",
      icon: faUser,
      class: "",
    },
    {
      url: "/album",
      name: "album",
      icon: faCompactDisc,
      class: "fa-spin",
    },
    {
      url: "/single",
      name: "single",
      icon: faMusic,
      class: "",
    },
  ];

  return (
    <div className="flex items-center fixed h-full right-0">
      <nav className="navbar rounded-l-2xl">
        <ul>
          {nav.map((val) => (
            <Link key={val.name} to={val.url}>
              <li
                key={val.name}
                className="block text-center py-1 pr-3"
                title={val.name.toUpperCase()}
              >
                <FontAwesomeIcon
                  icon={val.icon}
                  className={`fa-2x ${val.class}`}
                  fade
                />
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
