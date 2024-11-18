import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/home/HomeFilter";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


const questions = [
  {
      _id: 1,
      title: "Cascading Deletes SQLAlchemy? and how to add in sql",
      tags: [
          { _id: "1", name: "python" },
          { _id: "2", name: "sql" }
      ],
      author: {
          _id: "author1",
          name: "John Doe",
          picture: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      upvote: 1000000,
      views: "100",
      answers: [
          { _id: "answer1", content: "Enable cascading deletes using SQLAlchemy relationships." },
          { _id: "answer2", content: "Use `cascade='all, delete'` in the relationship definition." }
      ],
      createdAt: new Date("2024-09-01T12:00:00Z")
  },
  {
      _id: 2,
      title: "How to add div in center",
      tags: [
          { _id: "1", name: "CSS" },
          { _id: "2", name: "html" }
      ],
      author: {
          _id: "author2",
          name: "Jane Doe",
          picture: "https://randomuser.me/api/portraits/women/2.jpg"
      },
      upvote: 15,
      views: "120",
      answers: [
          { _id: "answer1", content: "Use flexbox with `display: flex`, `justify-content: center`, and `align-items: center`." },
          { _id: "answer2", content: "Alternatively, use CSS grid with `place-items: center;`." }
      ],
      createdAt: new Date("2021-09-01T12:00:00Z")
  }
];



export default function Home(){
    return (
        <>
            <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href={'/ask-question'} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[40px] rounded-lg px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearchBar
        route="/"
        iconPosition = "left"
        imgSrc= "/assets/icons/search.svg"
        placeholder = "Search for questions"
        otherClasses = "flex-z"
        />
        <Filter
        filters={HomePageFilters}
        otherClasses = "min-h-[56px] sm:min-w-[170px]"
        containerClasses = "hidden max-md:flex"
        />
      </div>
      <HomeFilter/>
      
      <div className="mt-10 w-full flex-col gap-6">
        {/* Looping through  questions */}
        {questions.length>0?
        questions.map((question:any)=>(
        <QuestionCard 
        key={question._id}
        _id={question._id}
        title={question.title}
        tags={question.tags}
        author={question.author}
        upvote={question.upvote}
        views={question.views}
        answers={question.answers}
        createdAt={question.createdAt}
        />
        )):<NoResult 
        title = "There's no question to show"
        description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing other learn from. Get involved! 💡"
        link= "/ask-question"
        linkTitle="Ask a Question"
        />}
      </div>
        </>
    )
}