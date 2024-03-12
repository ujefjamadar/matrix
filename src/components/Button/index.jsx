import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[20px]",
};
const variants = {
  gradient: {
    red_A400_02_red_500: "bg-gradient text-white-A700_01",
    pink_600_orange_800: "bg-gradient1 text-white-A700_01",
  },
  fill: {
    red_A400_01: "bg-red-A400_01 text-white-A700_01",
    black_900_05: "bg-black-900_05 text-gray-300",
  },
};
const sizes = {
  md: "h-[54px] px-[21px] text-xl",
  xs: "h-[38px] px-4 text-xs",
  lg: "h-[70px] px-[35px] text-lg",
  sm: "h-[45px] px-[21px] text-[17px]",
  xl: "h-[80px] px-1.5 text-[64px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xl",
  color = "black_900_05",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "xs", "lg", "sm", "xl"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf(["red_A400_02_red_500", "pink_600_orange_800", "red_A400_01", "black_900_05"]),
};

export { Button };
