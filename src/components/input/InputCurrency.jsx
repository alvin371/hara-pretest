import React from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { PREFIX_RP } from "../../constants";
import Input from "./Input";

const InputCurrency = ({
  className,
  onChange,
  value,
  limitNumber = 12,
  ...props
}) => {
  const priceMask = createNumberMask({
    prefix: PREFIX_RP,
    thousandsSeparatorSymbol: ".",
    decimalSymbol: ",",
    integerLimit: limitNumber,
  });

  return (
    <MaskedInput
      className={className}
      value={value}
      onChange={onChange}
      mask={priceMask}
      render={(ref, props) => <Input ref={(input) => ref(input)} {...props} />}
      {...props}
    />
  );
};

export default InputCurrency;
