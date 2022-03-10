import React from "react";
import {
  arrowUp,
  facebookIcon,
  linkedIcon,
  youtubeIcon,
} from "../helpers/icons/icons";

const Footer = () => {
  return (
    <footer className="bg-primary ">
      <div className="container flex items-center justify-between py-5">
        <div className="flex items-center text-gray-600 fill-current gap-2">
          {facebookIcon}
          {youtubeIcon}
          {linkedIcon}
        </div>

        <div className="flex items-center gap-2">
          <p className="text-white">
            جميع الحقوق محفوظة © 2021 للهيئة العاملة للتأمين الصحي الشامل
          </p>

          <p className="bg-gray-900/20 text-white fill-current rounded-lg cursor-pointer">
            {arrowUp}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
