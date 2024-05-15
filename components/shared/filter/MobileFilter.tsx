"use client";

import { HomePageFilters as filters } from "@/constants/filters";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  placeholder: string;
  otherClasses?: string;
  containerClasses?: string;
}

export default function MobileFilter({
  placeholder,
  otherClasses,
  containerClasses,
}: Props) {
  return (
    <div className={`${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses} body-regular py-2.5 px-5 background-light800_dark300 text-dark500_light700 light-border border`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>
        <SelectContent className="background-light900_dark200 text-dark500_light700 light-border-2">
          <SelectGroup>
            {filters.map((f) => (
              <SelectItem
                className="cursor-pointer hover:background-light800_dark400"
                key={f.value}
                value={f.value}
              >
                {f.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
