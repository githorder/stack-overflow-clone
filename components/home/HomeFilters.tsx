"use client";

import { useState } from "react";

import { filters } from "@/constants";

import { Button } from "../ui/button";

export default function () {
  const [activeBtn, setActiveBtn] = useState("");

  return (
    <div className="flex items-center gap-3 max-md:hidden min-h-[45px]">
      {filters.map((f) => (
        <Button
          onClick={() => setActiveBtn(f.name)}
          className={`body-medium py-3 px-6 rounded-lg capitalize transition-colors ${
            activeBtn.toLocaleLowerCase() === f.name.toLocaleLowerCase()
              ? "bg-primary-100 dark:bg-dark-400 text-primary-500"
              : "background-light800_dark300 text-light400_light500"
          }`}
          key={f.name}
        >
          {f.name}
        </Button>
      ))}
    </div>
  );
}
