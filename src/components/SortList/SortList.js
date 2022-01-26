import React from "react";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { UserListActions } from "../../store-toolkit/UserListSlice";
import "./style.scss";

function SortList() {
  const dispatch = useDispatch();
  return (
    <div className="SortList">
      <h1 className="SortList_title title">Сортировка</h1>
      <div className="SortList_row ">
        <Button
          onClick={() => dispatch(UserListActions.filterAdress())}
          className="SortList_item"
          blue
        >
          По городу
        </Button>
        <Button
          onClick={() => dispatch(UserListActions.filterCompany())}
          className="SortList_item"
          blue
        >
          по компании
        </Button>
      </div>
    </div>
  );
}

export default SortList;
