import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { arrowDown, arrowUp, searchIcon } from "../helpers/icons/icons";

import tameeniLogoImage from "../images/logo.png";
import logoImage from "../images/UHIA.png";

const Header = () => {
  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);

  const toggleList1Handler = () => setShowList1((prevState) => !prevState);
  const toggleList2Handler = () => setShowList2((prevState) => !prevState);

  const list1ShowHandler = () => {
    toggleList1Handler();
    setShowList2(false);
  };

  const list2ShowHandler = () => {
    toggleList2Handler();
    setShowList1(false);
  };

  return (
    <header className="font container flex  gap-20 min-h-[120px] select-none">
      <div className="flex gap-2 items-center">
        <img src={tameeniLogoImage} alt="" className="w-24 h-24" />
        <img src={logoImage} alt="" className="w-24 h-24" />
      </div>
      <ul className="flex gap-16 font-black">
        <li className="flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-secondary " : "text-primary "
            }
          >
            الرئيسية
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-secondary " : "text-primary "
            }
          >
            الملف الشخصى
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-secondary " : "text-primary "
            }
          >
            الخدمات
          </NavLink>
        </li>
        <li className="flex  items-center">
          <p
            className="text-primary  flex fill-current relative cursor-pointer"
            onClick={list1ShowHandler}
          >
            عن الهيئة
          </p>
          <div className="relative text-primary fill-current">
            <span className=" cursor-pointer" onClick={list1ShowHandler}>
              {showList1 ? arrowUp : arrowDown}
            </span>
            {showList1 && (
              <ul className="absolute right-[-160px] bottom-[-215px] bg-white w-48 border-t-2 border-secondary">
                <li className="py-1 pr-2 border-b border-primary">
                  مجلس الادارة
                </li>
                <li className="py-1 pr-2 border-b border-primary">
                  الادارة التنفيذية
                </li>
                <li className="py-1 pr-2 border-b border-primary">التقارير</li>
                <li className="py-1 pr-2 border-b border-primary">عن النظام</li>
                <li className="py-1 pr-2 border-b border-primary">
                  شركاء النجاح
                </li>
              </ul>
            )}
          </div>
        </li>
        <li className="flex  items-center">
          <p
            className="text-primary  flex fill-current relative cursor-pointer"
            onClick={list2ShowHandler}
          >
            اتصل بنا
          </p>
          <div className="relative text-primary fill-current">
            <span className=" cursor-pointer" onClick={list2ShowHandler}>
              {showList2 ? arrowUp : arrowDown}
            </span>
            {showList2 && (
              <ul className="absolute right-[-130px] bottom-[-116px] bg-white w-48 border-t-2 border-secondary">
                <li className="py-1 pr-2 border-b border-primary">
                  الادارة التنفيذية
                </li>
                <li className="py-1 pr-2 border-b border-primary">الفروع</li>
              </ul>
            )}
          </div>
        </li>

        <li className="text-primary  fill-current cursor-pointer flex items-center">
          {searchIcon}
        </li>
      </ul>
    </header>
  );
};

export default Header;
