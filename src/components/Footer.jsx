import React from "react";
import { sitemapData } from "../database/mockdata";
import SiteMapList from "./SiteMapList";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__site-map">
        {sitemapData.map((list) => {
          return <SiteMapList {...list} />;
        })}
      </div>
      <div className="footer__contact"></div>
      <div className="footer__copy-right"></div>
    </footer>
  );
};

export default Footer;
