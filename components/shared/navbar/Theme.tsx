"use client";

import Image from "next/image";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { themes } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";

export default function Theme() {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="sun"
              width={20}
              height={20}
              className="active-theme"
              priority
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="moon"
              width={20}
              height={20}
              className="active-theme"
              priority
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-200 dark:bg-dark-300 bg-white">
          {themes.map((item) => (
            <MenubarItem
              className="flex gap-4 items-center px-2.5 focus:bg-light-700 dark:focus:bg-dark-400 py-2 cursor-pointer"
              key={item.value}
              onClick={() => {
                setMode(item.value);

                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={item.icon}
                width={16}
                height={16}
                alt={item.value}
                className={`${mode === item.value && "active-theme"}`}
                priority
              />

              <p
                className={`body-semibold text-light-500 ${
                  mode === item.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
