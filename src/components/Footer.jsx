import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTelegram,
  BsTwitter,
  FaShopify,
} from "../database/icons";
import { sitemapData } from "../database/mockdata";
import SiteMapList from "./SiteMapList";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__site-map">
        {sitemapData.map((list) => {
          return (
            <SiteMapList
              {...list}
              key={`${Math.random() * 1000000000000000000}`}
            />
          );
        })}
      </div>
      <div className="footer__contact">
        <div className="footer-logo">
          <FaShopify />
        </div>
        <ul className="social-media-links">
          <li>
            <BsTelegram />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsGithub />
          </li>
        </ul>
      </div>
      <div className="footer__copy-right">
        <p>© 2023 تمامی حقوق این وبسایت برای مالک محفوظ میباشد.</p>
      </div>
    </footer>
  );
};

export default Footer;
