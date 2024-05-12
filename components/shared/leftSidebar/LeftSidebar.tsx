"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function LeftSidebar() {
  const path = usePathname();

  return (
    <section className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] no-scrollbar">
      <div className="flex flex-1 flex-col gap-6 pb-16">
        {sidebarLinks.map((item) => {
          const isActive =
            (path.includes(item.route) && item.route.length > 1) ||
            path === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                alt={item.label}
                width={20}
                height={20}
                src={item.imgURL}
                className={`${isActive ? "" : "invert-colors"}`}
                priority
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button
              size="lg"
              className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900"
            >
              <Image
                src="/assets/icons/account.svg"
                alt="sign in"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button
              size="lg"
              className="small-medium btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900"
            >
              <Image
                src="/assets/icons/sign-up.svg"
                alt="sign up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
}
