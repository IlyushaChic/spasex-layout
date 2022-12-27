import React from "react";
import "./template.css";

const Header = () => {
  const menu = [
    { title: "Главная" },
    { title: "Технология" },
    { title: "График полетов" },
    { title: "Гарантии" }, 
    { title: "О компании" },
    { title: "Контакты" },
  ];

  return (
    <div className="header__container">
      <div className="header__body">
        <div className="header__logo">
          <div className="header__logo-spacex" />
        </div>
        <div className="header__block-info">
          {menu.map((elem) => (
            <div key={elem.title} className="header__block-info_elems">
              {elem.title}
            </div>
          ))}
        </div>



        <div className="header__body-burger">Меню</div>
      </div>
    </div>
  );
};

export default Header;
