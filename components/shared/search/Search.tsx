import Image from "next/image";

import { Input } from "@/components/ui/input";

interface Props {
  placeholder: string;
  iconSrc: string;
  iconAlt: string;
  className?: string;
  iconPosition: string;
}

export default function Search({
  placeholder,
  iconSrc,
  iconAlt,
  className,
  iconPosition,
}: Props) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="background-light800_darkgradient relative flex grow items-center gap-1 rounded-xl px-4 min-h-[45px]">
        {iconPosition === "left" && (
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={24}
            height={24}
            className="cursor-pointer"
            priority
          />
        )}

        <Input
          type="text"
          placeholder={placeholder}
          className="paragraph-regular no-focus placeholder bg-transparent border-none shadow-none outline-none text-dark400_light900"
        />

        {iconPosition === "right" && (
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={24}
            height={24}
            className="cursor-pointer"
            priority
          />
        )}
      </div>
    </div>
  );
}
