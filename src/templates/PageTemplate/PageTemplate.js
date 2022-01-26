import React, { Fragment } from "react";
import SortList from "../../components/SortList/SortList";
import "./style.scss";

function PageTemplate(props) {
  return (
    <Fragment>
      <main className="container main">
        <div className="row">
          <div className="col sort">
            <SortList />
          </div>
          <div className="col">{props.children}</div>
        </div>
      </main>
    </Fragment>
  );
}

export default PageTemplate;
