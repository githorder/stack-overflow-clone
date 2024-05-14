import Search from "@/components/shared/search/Search";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

      <div className="max-sm:mt-0 mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <Search
          placeholder="Search for Questions Here..."
          iconAlt="seach icon"
          iconSrc="/assets/icons/search.svg"
          className=""
        />
      </div>
    </>
  );
}
