import React from "react";

const sizes = {
  s: "text-[21px] font-bold leading-[27px]",
  md: "text-2xl font-bold leading-9",
  xs: "text-xs font-semibold leading-5",
  lg: "text-[64px] font-bold leading-[26px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
