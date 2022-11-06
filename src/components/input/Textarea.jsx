import classNames from "classnames";
import React from "react";
import defaultTheme from "../defaultTheme";

const Textarea = React.forwardRef(function Textarea(props, ref) {
  const { valid, disabled, className, children, ...other } = props;

  const textarea = defaultTheme.textarea;

  const baseStyle = textarea.base;
  const activeStyle = textarea.active;
  const disabledStyle = textarea.disabled;
  const validStyle = textarea.valid;
  const invalidStyle = textarea.invalid;

  function hasValidation(valid) {
    return valid !== undefined;
  }

  function validationStyle(valid) {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle;
    }
    return "";
  }

  const cls = classNames(
    baseStyle,
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    className
  );

  return (
    <textarea className={cls} ref={ref} disabled={disabled} {...other}>
      {children}
    </textarea>
  );
});

export default Textarea;
