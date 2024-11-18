import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";


const RightSideBar = () => {
  const topQuestions = [
    {
      _id: "1",
      title: "How to center a div in tailwind css",
    },
    {
      _id: "2",
      title: "How to Optimize a Large-Scale React Application?",
    },
    {
      _id: "3",
      title: "How to Implement Secure User Authentication?",
    },
    {
      _id: "4",
      title: "What Are the Key Considerations When Migrating a Monolithic?",
    },
    {
      _id: "5",
      title:
        "How to Implement Real-Time Features in a Next.js Application Using WebSockets?",
    },
  ];

  const popularTags = [
    {
      _id: "1",
      name: "Javascript",
      totalQuestion: 5,
    },
    {
      _id: "2",
      name: "Java",
      totalQuestion: 9,
    },
    {
      _id: "3",
      name: "SpringBoot",
      totalQuestion: 10,
    },
    {
      _id: "4",
      name: "React Js",
      totalQuestion: 9,
    },
    {
      _id: "5",
      name: "Next JS",
      totalQuestion: 7,
    },
  ];

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
          <div className="mt-7 flex flex-col gap-[30px]">
            {popularTags.map((tag) => (
              <RenderTag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestion={tag.totalQuestion}
                showCount
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default RightSideBar;