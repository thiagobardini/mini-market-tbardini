import React from "react";
import clsx from "clsx";

const Button = (props) => {
  const { outline, className, children, ...rest } = props;
  const classes = clsx(
    {
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
    },
    className
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
