import React from "react";
import { useEffect } from "react";
import ItemUser from "../ItemUser/ItemUser";
import { getItems } from "../../store-toolkit/UserListSliceThunk";
import spin from "../../img/spin.gif";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";

function UserList() {
  const { items } = useSelector((store) => store.UserList);
  const { loading, error } = useSelector(
    (store) => store.UserList.requestStatus
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="UserList">
      <h1 className="UserList__title title">Список пользователей</h1>
      <div className="UserList__row ">
        {loading && (
          <div style={{ width: "100px", margin: "0 auto" }}>
            <img style={{ width: "100%" }} src={spin} alt="preloader" />
          </div>
        )}

        {error ? (
          <span style={{ color: "red", textAlign: "center" }}>
            ОЙ....Ошибка загрузки данных
          </span>
        ) : null}
        {!error &&
          items.map((item) => {
            return (
              <ItemUser key={item.id} item={item} className="UserList__item" />
            );
          })}
      </div>
      <div className="UserList__pagination">
        Найдено {items.length} пользователей
      </div>
    </div>
  );
}

export default UserList;
