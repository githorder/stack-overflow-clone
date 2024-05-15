import Link from "next/link";

import Search from "@/components/shared/search/Search";
import { Button } from "@/components/ui/button";
import HomeFilters from "@/components/home/HomeFilters";
import MobileFilter from "@/components/shared/filter/MobileFilter";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "url_to_picture",
    },
    upvotes: 150000,
    views: 1000000,
    answers: [],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div",
    tags: [
      { _id: "3", name: "css" },
      { _id: "4", name: "html" },
    ],
    author: {
      _id: "2",
      name: "John Doe",
      picture: "url_to_picture",
    },
    upvotes: 700540,
    views: 2350000,
    answers: [],
    createdAt: new Date("2023-12-30T09:00:00.000Z"),
  },
];

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
          otherClasses="min-h-[45px] min-w-[170px]"
          containerClasses="hidden max-md:flex"
          placeholder="Select a Filter"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((q) => (
            <QuestionCard
              key={q._id}
              _id={q._id}
              title={q.title}
              tags={q.tags}
              author={q.author}
              upvotes={q.upvotes}
              views={q.views}
              createdAt={q.createdAt}
              answers={q.answers}
            />
          ))
        ) : (
          <NoResult
            title="There's no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
