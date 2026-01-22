"use client";

import React, { useState } from "react";

interface SwitchProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const Switch: React.FC<SwitchProps> = ({
  defaultChecked = false,
  checked: controlledChecked,
  onChange,
  disabled = false,
  size = "md",
  color = "#2CB4B4",
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;

    const newChecked = !checked;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    onChange?.(newChecked);
  };

  // 根據尺寸設定樣式
  const sizeClasses = {
    sm: {
      container: "w-8 h-4",
      circle: "w-3 h-3",
      translate: "translate-x-4",
    },
    md: {
      container: "w-12 h-6",
      circle: "w-5 h-5",
      translate: "translate-x-6",
    },
    lg: {
      container: "w-16 h-8",
      circle: "w-7 h-7",
      translate: "translate-x-8",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleToggle}
      className={`
        ${currentSize.container}
        relative inline-flex items-center rounded-full
        transition-colors duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${checked ? "" : "bg-gray-300"}
      `}
      style={{
        backgroundColor: checked ? color : undefined,
        ["--tw-ring-color" as string]: color,
      } as React.CSSProperties}
    >
      <span
        className={`
          ${currentSize.circle}
          inline-block rounded-full bg-white shadow-lg
          transform transition-transform duration-200 ease-in-out
          ${checked ? currentSize.translate : "translate-x-0.5"}
        `}
      />
    </button>
  );
};

export default Switch;
