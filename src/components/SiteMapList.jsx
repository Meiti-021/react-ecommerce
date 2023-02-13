import React from "react";

const SiteMapList = ({ title, options }) => {
  return (
    <ul className="site-map-list">
      <h4> {title}</h4>
      {options.map((item) => {
        return (
          <li key={item.content}>
            <a href={item.address}>{item.content}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SiteMapList;
