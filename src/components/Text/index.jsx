import React from "react";

const sizes = {
  "5xl": "text-[40px] font-normal",
  xs: "text-[15px] font-normal",
  lg: "text-lg font-normal",
  "6xl": "text-[44px] font-normal leading-[119%]",
  "7xl": "text-[45px] font-normal leading-[119%]",
  "8xl": "text-5xl font-normal",
  s: "text-base font-normal",
  "2xl": "text-2xl font-normal",
  "3xl": "text-[28px] font-normal",
  "4xl": "text-[32px] font-normal",
  xl: "text-xl font-normal",
  md: "text-[17px] font-normal leading-[26px]",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700_01 font-zcoolkuaile ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
