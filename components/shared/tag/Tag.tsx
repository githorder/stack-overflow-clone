import React from "react";

export default function Tag({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      className="subtle-medium background-light800_dark300 rounded-md text-light400_light500 uppercase py-2 px-4"
      {...props}
    >
      {children}
    </span>
  );
}
