import React from "react";
import { useEffect } from "react";
import { Form, Field } from "react-final-form";
import { getItems } from "../../store-toolkit/UserListSliceThunk";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import FormItem from "../FormItem/FormItem";
import { useState } from "react";

function ProfileUser({ id }) {
  const { items } = useSelector((store) => store.UserList);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const user = items.find((item) => +item.id === +id);
  let data = {
    name: "Иван Иванов",
    City: "Москва",
    Comment: "",
    EMail: "123@google.com",
    Phone: "895361677723",
    Street: "Ленина",
    UserName: "Ваня",
    Website: "нет",
    ZipCode: "нет",
  };
  if (user) {
    data = {
      name: user.name,
      City: user.address.city,
      Comment: "",
      EMail: user.email,
      Phone: user.phone,
      Street: user.address.street,
      UserName: user.username,
      Website: user.website,
      ZipCode: user.address.zipcode,
    };
  }

  const required = (value) => (value ? undefined : "Required");
  const handelSubmiting = (values) => {
    console.log(JSON.stringify(values));
  };
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="ProfileUser">
      <div className="ProfileUser__top">
        <h1 className="ProfileUser__title">Список пользователей</h1>
        <Button
          onClick={() => setDisabled(false)}
          disabled={!disabled}
          className="ProfileUser__edit"
          blue
        >
          Редактировать
        </Button>
      </div>
      <Form
        onSubmit={handelSubmiting}
        validate={required}
        initialValues={data}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="ProfileUser__form form">
            <div className="form__row">
              <Field className="form__item" name="name">
                {({ input, meta }) => (
                  <FormItem
                    input={input}
                    meta={meta}
                    label="Name"
                    disabled={disabled}
                  />
                )}
              </Field>

              <Field className="form__item" name="UserName" validate={required}>
                {({ input, meta }) => (
                  <FormItem
                    input={input}
                    meta={meta}
                    label="User name"
                    disabled={disabled}
                  />
                )}
              </Field>
              <Field className="form__item" name="EMail" validate={required}>
                {({ input, meta }) => (
                  <FormItem
                    input={input}
                    meta={meta}
                    label="E-mail"
                    disabled={disabled}
                  />
                )}
              </Field>
              <Field className="form__item" name="Street" validate={required}>
                {({ input, meta }) => (
                  <FormItem
                    input={input}
                    meta={meta}
                    label="Street"
                    disabled={disabled}
                  />
                )}
              </Field>
              <Field className="form__item" name="City" validate={required}>
                {({ input, meta }) => (
                  <FormItem
                    input={input}
                    meta={meta}
                    label="City"
                    disabled={disabled}
                  />
                )}
              </Field>
              <Field className="form__item" name="ZipCode" validate={required}>
                {({ input, meta }) => (
                  <FormItem
                    input={input}
                    meta={meta}
                    label="Zip code"
                    disabled={disabled}
                  />
                )}
              </Field>
              <Field className="form__item" name="Phone" validate={required}>
                {({ input, meta }) => (
                  <FormItem
                    input={input}
                    meta={meta}
                    label="Phone"
                    disabled={disabled}
                  />
                )}
              </Field>
              <Field className="form__item" name="Website" validate={required}>
                {({ input, meta }) => (
                  <FormItem
                    input={input}
                    meta={meta}
                    label="Website"
                    disabled={disabled}
                  />
                )}
              </Field>
              <Field className="form__item" name="Comment">
                {({ input, meta }) => (
                  <FormItem
                    input={input}
                    meta={meta}
                    textarea
                    disabled={disabled}
                    label="Comment"
                  />
                )}
              </Field>
            </div>
            <div className="form__bottom">
              <Button
                type="submit"
                className="form__submit"
                disabled={disabled}
                green={!disabled}
              >
                Отправить
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default ProfileUser;
