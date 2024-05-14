import Link from "next/link";

import Search from "@/components/shared/search/Search";
import { Button } from "@/components/ui/button";
import HomeFilters from "@/components/home/HomeFilters";
import MobileFilter from "@/components/shared/filter/MobileFilter";

export default function HomePage() {
  return (
    <>
      <div className="flex w-full max-sm:hidden justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link className="flex justify-end max-sm:w-full" href="/ask-question">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="max-sm:mt-0 max-sm:items-start max-sm:gap-5 mt-11 flex flex-col justify-between gap-10 max-sm:flex-col items-start max-md:flex-row max-md:items-center">
        <Search
          placeholder="Search questions..."
          iconAlt="seach icon"
          iconSrc="/assets/icons/search.svg"
          iconPosition="left"
          className="grow"
        />
        <HomeFilters />
        <MobileFilter
          otherClasses="min-h-[45px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
          placeholder="Select a Filter"
        />
      </div>
    </>
  );
}
