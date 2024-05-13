import Link from "next/link";
import Image from "next/image";

import Tag from "../tag/Tag";

import { questions, tags } from "@/constants";

export default function RightSidebar() {
  return (
    <section className="light-border pt-[164px] pb-[50px] px-[26px] background-light900_dark200 w-[350px] sticky right-0 top-0 flex h-screen overflow-y-auto border-l shadow-light-300 dark:shadow-none max-xl:hidden no-scrollbar flex-col gap-[64px]">
      <div className="flex flex-col gap-[28px]">
        <h3 className="h3-bold text-dark200_light900">Top questions</h3>
        <div className="flex flex-col gap-[30px] w-full">
          {questions.map((q) => (
            <Link
              href={`/questions/${q._id}`}
              className="flex gap-[28px] justify-between items-start"
              key={q._id}
            >
              <p className="body-medium text-dark500_light700 max-w-[248px]">
                {q.text}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[28px]">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="flex flex-col gap-[16px]">
          {tags.map((t) => (
            <div key={t._id}>
              <Tag _id={t._id} name={t.text} totalVal={t.value} showCount />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
