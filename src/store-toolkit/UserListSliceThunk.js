import { UserListActions } from "./UserListSlice";
import requestStatuses from "./requestStatuses";

export const getItems = () => (dispatch, getState) => {
  const { url } = getState().UserList;

  dispatch(UserListActions.setRequestStatus(requestStatuses.loading));

  fetch(url)
    .then((response) => {
      if (response.status > 300) {
        console.log("error" + response.status);
      }
      return response.json();
    })
    .then((items) => {
      dispatch(UserListActions.setItems(items));
      dispatch(UserListActions.setRequestStatus(requestStatuses.ok));
    })
    .catch(() => {
      dispatch(UserListActions.setRequestStatus(requestStatuses.setError));
      //   setTimeout(() => {
      //     dispatch(getItems());
      //   }, 3000);
    });
};
