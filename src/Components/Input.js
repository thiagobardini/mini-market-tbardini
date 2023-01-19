import React from "react";
import clsx from "clsx";

const Input = (props) => {
  const {
    placeholder,
    type = "text",
    className,
    required,
    onInput,
    ...rest
  } = props;

  const classNames = clsx({ input: true }, className);

  return (
    <>
      <label class="label">
        {placeholder}
        {required && <span className="input-required">*</span>}
        <div>
          <input
            type={type}
            placeholder={placeholder}
            className={classNames}
            required={required}
            {...rest}
          />
        </div>
      </label>
    </>
  );
};

export default Input;
