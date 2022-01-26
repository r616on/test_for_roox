import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function ItemUser({ className, item }) {
  return (
    <div
      className={classNames("ItemUser", {
        [className]: className,
      })}
    >
      <div className="ItemUser__element ItemUser__name ">
        <div className="ItemUser__element-grei">ФИО:</div>
        <div className="ItemUser__element-black">{item.name}</div>
      </div>
      <div className="ItemUser__element ItemUser__cyti">
        <div className="ItemUser__element-grei">город:</div>
        <div className="ItemUser__element-black">{item.address.city}</div>
      </div>
      <div className="ItemUser__element ItemUser__company">
        <div className="ItemUser__element-grei">Компания:</div>
        <div className="ItemUser__element-black">{item.company.name}</div>
      </div>
      <Link to={`/users/${item.id}`} className="ItemUser__link">
        Подробнее
      </Link>
    </div>
  );
}

export default ItemUser;
