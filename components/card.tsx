import { timeConverter } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface cardDataprops{
    cardData:{
        cover_image: string,
        published_at: string,
        public_reactions_count:string,
        comments_count:number,
        title:string
        reading_time_minutes:string,
        description:string
        url:string
    }
}

function Card({ cardData }:cardDataprops) {

    return (
      <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
        <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
          <Image
            src={cardData?.cover_image}
            height={1080}
            width={1920}
            alt=""
            className='h-full w-full group-hover:scale-110 transition-all duration-300'
          />
        </div>
        <div className="p-2 sm:p-3 flex flex-col">
          <div className="flex justify-between items-center text-[#16f2b3] text-sm">
            <p>{timeConverter(cardData.published_at)}</p>
            <div className="flex items-center gap-3">
              <p className="flex items-center gap-1">
                <span>{cardData.public_reactions_count}</span>
              </p>
              {cardData.comments_count > 0 &&
                <p className="flex items-center gap-1">
                  <span>{cardData.comments_count}</span>
                </p>
              }
            </div>
          </div>
          <Link target='_blank' href={cardData.url}>
            <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
              {cardData.title}
            </p>
          </Link>
          <p className='mb-2 text-sm text-[#16f2b3]'>
            {`${cardData.reading_time_minutes} Min Read`}
          </p>
          <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
            {cardData.description}
          </p>
        </div>
      </div>
    );
};

export default Card