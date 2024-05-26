
"use client";
import Image from "next/image";
import React, { useState } from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "primary",
  label = "Button",
  action = () => {},
  color,
  fontStyle,
  disabled = false,
  leftIcon1,
  leftIcon2,
  iconWidth,
  iconHeight,
  iconColor,
  width,
  height,
  fontSize,
  radius,
  fontWeight,
  underline = false,
  columnGap,
  lineHeight,
  textDecoration,
  backgroundColor,
  borderColor,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getButtonStyles = () => {
    switch (type) {
      case "primary":
        return {
          backgroundColor: isHovered ? "#0C0932" : "#00AF50",
          color: isHovered? "#00AF50": color,
          
          width,
          height,
          fontSize,
          borderRadius: radius,
          fontWeight,
          lineHeight
        };
      case "secondary":
        return {
          backgroundColor: isHovered ? "#0C0932" : "#FFFFF0",
          color: isHovered? "00AF50": color,
          width,
          height,
          fontSize,
          borderRadius: radius,
          fontWeight,
          lineHeight,
          columnGap
        };
      case "outline":
        return {
          border: "2px solid #07C168",
          color: "#0C0932",
          width,
          height,
          borderRadius: radius,
          fontWeight,
          fontSize
        };
      default:
        return {
          backgroundColor: isHovered ? "darkgreen" : "green",
          color: "white"
        };
    }
  };

  const renderIcon = (icon) => {
    if (icon && typeof icon === "object" && icon.src) {
      return (
        <Image
          src={icon.src}
          alt="icon"
          width={iconWidth}
          height={iconHeight}
          style={{ color: iconColor }}
        />
      );
    } else if (typeof icon === "string") {
      return (
        <div
          src={icon}
          alt="icon"
          style={{ width: iconWidth, height: iconHeight, color: iconColor }}
        />
      );
    }
    return null;
  };

  return (
    <button
      className={`button ${isHovered ? "hovered" : ""} ${className}`}
      onClick={action}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        gap: columnGap,
        cursor: disabled ? "not-allowed" : "pointer",
        outline: "none",
        textDecoration: underline ? "underline" : "none",
        backgroundColor,
        fontSize,
        color,
        border: borderColor,
        ...getButtonStyles(),
        border: isHovered ? "1px solid #07C168" : "none",
 
        
      }}
    >
      <div className="flex gap-1 items-center">
        {leftIcon1 && renderIcon(leftIcon1)}
        {leftIcon2 && renderIcon(leftIcon2)}
      </div>
      <span style={{ color, fontStyle, textDecoration }}>{label}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
  ]),
  label: PropTypes.string,
  action: PropTypes.func,
  color: PropTypes.string,
  fontStyle: PropTypes.string,
  disabled: PropTypes.bool,
  leftIcon1: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  leftIcon2: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  iconColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  radius: PropTypes.string,
  fontWeight: PropTypes.string,
  underline: PropTypes.bool,
  columnGap: PropTypes.string,
  lineHeight: PropTypes.string,
  textDecoration: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string
};

export default Button;
