import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const questions = [
  {
    _id: "1",
    text: "Would it be appropriate to point out an error in another paper during a referee report?",
  },
  {
    _id: "2",
    text: "How can an airconditioning machine exist?",
  },
  {
    _id: "3",
    text: "Interrogated every time crossing UK Border as citizen",
  },
  {
    _id: "4",
    text: "Low digit addition generator",
  },
  {
    _id: "5",
    text: "What is an example of 3 numbers that do not make up a vector?",
  },
];

export const tags = [
  {
    _id: "1",
    text: "Javascript",
    value: "20152+",
  },
  {
    _id: "2",
    text: "Next.js",
    value: "18493+",
  },
  {
    _id: "3",
    text: "React.js",
    value: "16269+",
  },
  {
    _id: "4",
    text: "Node.js",
    value: "15121+",
  },
  {
    _id: "5",
    text: "Python",
    value: "14431+",
  },
  {
    _id: "6",
    text: "Microsoft Azure",
    value: "9429+",
  },
  {
    _id: "7",
    text: "PostgreSql",
    value: "9429+",
  },
  {
    _id: "8",
    text: "Machine Learning",
    value: "9429+",
  },
];

export const filters = [
  { name: "Newest" },
  { name: "Recommended" },
  { name: "Frequent" },
  { name: "Unanswered" },
];
