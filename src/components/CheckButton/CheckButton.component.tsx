import React from "react";
import "./CheckButton.css";

type Props = {
  checked: boolean;
  className?: string;
  disabled?: boolean;
  name: string;
  onChange: (x: { name: string; checked: boolean }) => void;
  title: string;
};
// check button is used for the genre filtering
export const CheckButton: React.FC<Props> = ({
  checked,
  className = "",
  disabled,
  name,
  onChange,
  title
}) => {
  const onHandleChange = (event: React.MouseEvent) => {
    event.stopPropagation();
    onChange({ name, checked: !checked });
  };
  const ButtonCheckedClass = checked ? "CheckButton--checked" : "";
  return (
    <button
      className={`CheckButton ${ButtonCheckedClass} ${className}`}
      disabled={disabled}
      onClick={onHandleChange}
    >
      {title}
    </button>
  );
};
