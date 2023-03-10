import React, { FC } from 'react'
import { Button } from './Header';
import DownloadButton from './svg/DownloadButton';

type Props = {}

export const Hero: FC<Props> = (props) => {
    return (
        <div className="grid grid-cols-4 gap-5 px-6 py-14
            md:grid-cols-8
            md:px-10 md: md:py-20
            lg:grid-cols-12
            lg:px-10 lg:py-[120px]"
        >
            <div className="col-start-1 col-end-5 text-white text-left
                md:col-start-1 md:col-end-6
                lg:col-start-3 lg:col-end-11 lg:text-center
                xl:col-start-3 xl:col-end-11"
            >
                <div className="">
                    <h1 className="text-5xl font-ginto-nord">
                        IMAGINE A PLACE...
                    </h1>
                    <div className="text-xl mt-10 font-gg-sans">
                    ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                    </div>
                </div>
                <div className="flex flex-wrap direction-column align-middle
                 lg:justify-center">
                    <Button className='flex items-center justify-center bg-white text-dark-not-black font-medium rounded-full cursor-pointer hover:text-blurple hover:shadow-xl
                     transition duration-200 ease-in-out
                     mr-6 mt-6  px-8 py-4'
                    >
                        <DownloadButton className='inline mr-2 z-10' />
                        Download for Windows
                    </Button>
                    <Button className='bg-not-quite-black rounded-full text-white cursor-pointer 
                    hover:bg-dark-not-black hover:shadow-xl
                     transition duration-200 ease-in-out 
                     px-8 py-4
                     lg:ml-6 mt-6'
                    >
                        Open Discord in your browser
                    </Button>
                </div>
            </div>
        </div>
    );
}
