import Link from 'next/link';
import React from 'react'
import RenderTag from '../shared/RenderTag';
import Metric from '../shared/Metric';
import { formatAndDivideNumber, getTimeStamp } from '@/lib/utils';

interface QuestionProp {
    _id:string;
    title:string;
    tags:{
        _id:string;
        name:string
    }[];
    author:{
        _id:string;
        name:string;
        picture:string;
    }
    upvote:any;
    views:number;
    answers:Array<object>;
    createdAt:Date;
}
const QuestionCard = ({_id,title,tags, author, upvote,views,answers,createdAt}:QuestionProp) => {
  return (
    <div className='card-wrapper mt-2 p-9 rounded-[10px] sm:px-11'>
        <div className='flex flex-col-reverse items-start gap-5  justify-between  sm:flex-row '>
        <div>
            <span className='subtle-regular text-dark-400_light700 line-clamp-1 flex sm:hidden'>
                {getTimeStamp(createdAt)}
            </span>
            <Link href={`/question/${_id}`}>
            <h3 className='sm:h3-semibold base-semibold text-dark-200_light900 line-clamp-1 flex-1  '>
                {title}
            </h3>
            </Link>
        </div>
        {/* If signed in add edit delete actions */}
        </div>
        <div className='mt-3.5 flex flex-wrap gap-2'>
            {tags.map((tag)=>(
                <RenderTag key={tag._id} _id={tag._id} name={tag.name}/>
            ))}

        </div>

        <div className='flex-between mt-6 w-full flex-wrap gap-3'>
            <Metric imgUrl = 'assets/icons/avatar.svg'
            alt="User"
            value={author.name}
            title= {`-asked ${getTimeStamp(createdAt)}`}
            href={`/profile/${author._id}`}
            isAuthor
            textStyles = "small-medium text-dark-400_light700"/>
            
            <Metric imgUrl = 'assets/icons/like.svg'
            alt="UpVotes"
            value={formatAndDivideNumber(upvote)}
            title= "Votes"
            textStyles = "small-medium text-dark-400_light800"/>

            <Metric imgUrl = 'assets/icons/message.svg'
            alt="Messages"
            value={(answers.length)}
            title= "Message"
            textStyles = "small-medium text-dark-400_light800"/>

            <Metric imgUrl = 'assets/icons/eye.svg'
            alt="Eye"
            value={formatAndDivideNumber(views)}
            title= "Views"
            textStyles = "small-medium text-dark-400_light800"/>
        </div>
    </div>
  )
}

export default QuestionCard