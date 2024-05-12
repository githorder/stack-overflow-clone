import Image from "next/image";

import Tag from "../tag/Tag";

const networks = [
  {
    text: "Would it be appropriate to point out an error in another paper during a referee report?",
  },
  {
    text: "How can an airconditioning machine exist?",
  },
  {
    text: "Interrogated every time crossing UK Border as citizen",
  },
  {
    text: "Low digit addition generator",
  },
  {
    text: "What is an example of 3 numbers that do not make up a vector?",
  },
];

const tags = [
  {
    text: "Javascript",
    value: "20152+",
  },
  {
    text: "Next.js",
    value: "18493+",
  },
  {
    text: "React.js",
    value: "16269+",
  },
  {
    text: "Node.js",
    value: "15121+",
  },
  {
    text: "Python",
    value: "14431+",
  },
  {
    text: "Microsoft Azure",
    value: "9429+",
  },
  {
    text: "PostgreSql",
    value: "9429+",
  },
  {
    text: "Machine Learning",
    value: "9429+",
  },
];

export default function RightSidebar() {
  return (
    <section className="light-border pt-[164px] pb-[50px] px-[26px] background-light900_dark200 lg:w-[350px] sticky left-0 top-0 flex h-screen overflow-y-auto border-l shadow-light-300 dark:shadow-none max-lg:hidden no-scrollbar flex-col gap-[60px]">
      <div className="flex flex-col gap-[26px]">
        <h3 className="h3-bold text-dark200_light900">Hot Network</h3>
        <div className="flex flex-col gap-[30px]">
          {networks.map((n, i) => (
            <a
              href="#"
              className="flex gap-[10px] justify-between items-start"
              key={i}
            >
              <span className="body-medium text-dark500_light700 max-w-[248px]">
                {n.text}
              </span>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="arrow right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[26px]">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="flex flex-col gap-[30px]">
          {tags.map((n, i) => (
            <a href="#" className="flex justify-between items-center" key={i}>
              <Tag key={i}>{n.text}</Tag>
              <span className="small-medium text-dark500_light700">
                {n.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
