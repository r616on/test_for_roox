import classNames from "classnames";
import React from "react";
import "./style.scss";

function FormItem({ input, meta, label, textarea, disabled }) {
  return (
    <div className="form__item">
      <label className="label">
        {label}
        {!textarea && (
          <input
            {...input}
            className={classNames("form__element", {
              disabled: disabled,
            })}
            disabled={disabled}
            style={
              meta.error && meta.touched ? { borderColor: "#D91313" } : null
            }
          />
        )}
        {textarea && (
          <textarea
            {...input}
            className={classNames("form__element", {
              textarea: textarea,
              disabled: disabled,
            })}
            disabled={disabled}
            style={
              meta.error && meta.touched ? { borderColor: "#D91313" } : null
            }
          />
        )}
      </label>
    </div>
  );
}

export default FormItem;
