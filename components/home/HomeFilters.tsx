"use client";

import { useState } from "react";

import { HomePageFilters as filters } from "@/constants/filters";

import { Button } from "../ui/button";

export default function () {
  const [activeBtn, setActiveBtn] = useState("");

  return (
    <div className="flex flex-wrap items-center gap-3 max-md:hidden min-h-[45px]">
      {filters.map((f) => (
        <Button
          onClick={() => setActiveBtn(f.value)}
          className={`body-medium py-3 px-6 rounded-lg capitalize transition-colors shadow-none ${
            activeBtn === f.value
              ? "bg-primary-100 dark:bg-dark-400 text-primary-500"
              : "background-light800_dark300 text-light400_light500"
          }`}
          key={f.value}
        >
          {f.name}
        </Button>
      ))}
    </div>
  );
}
