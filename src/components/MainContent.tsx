import React, { FC } from 'react'
import { Button } from './Header';
import DownloadButton from './svg/DownloadButton';

type Props = {}

export const MainContent: FC<Props> = (props) => {
    return (<div className="container justify-center md:mx-auto">
        <FeatureSectionOne />
        <FeatureSectionTwo />
        <FeatureSectionThree />
        <FeatureSectionFour />
        <CTA />
    </div>);
}

const FeatureSectionOne: FC<Props> = (props) => {
    return (
        <div className="grid grid-cols-4 gap-5 px-6 py-14 gap-y-0
            md:grid-cols-8
            md:px-10 md: md:py-20
            lg:grid-cols-12
            lg:px-10 lg:py-[120px]"
        >
            <img src='/featureImage1.svg'
                className="col-start-1 col-end-5
                    lg:col-end-8"
            />
            <div className="flex flex-col justify-center mt-5 col-start-1 col-end-5 row-span-2
                    md:col-start-5 md:col-end-9 md:mt-0
                    lg:col-start-9 lg:col-end-13"
            >
                <h2 className='text-xl font-extrabold md:text-5xl font-gg-sans text-dark-not-black'>Create an invite-only where you belong</h2>
                <div className="mt-6 md:text-lg font-gg-sans font-normal">
                    Discord servers are organized into topic-based channels
                    where you can collaborate, share, and just talk about your
                    day without clogging up a grcup chat.
                </div>
            </div>
        </div>
    );
}

const FeatureSectionTwo: FC<Props> = (props) => {
    return (
        <div className="grid grid-cols-4 gap-5 px-6 py-14 gap-y-0
            md:grid-cols-8
            md:px-10 md:py-20
            lg:grid-cols-12
            lg:px-10 lg:py-[120px]"
        >
            <img src="/featureImage2.svg"
                className="col-start-1 col-end-5 row-start-1 row-end-2
                    md:col-start-5 md:col-end-9 md:row-start-1 md:row-end-2
                    lg:col-start-6 lg:col-end-13"
            />
            <div className="mt-5 col-start-1 col-end-5 row-start-3 row-end-4
                md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-2
                lg:col-start-1 lg:col-end-5 lg:my-auto"
            >
                <h2 className="text-xl font-extrabold md:text-5xl font-gg-sans">Where hanging out is easy</h2>
                <div className="mt-6 md:text-lg font-gg-sans font-normal">
                    Grab a seat in a voice channel when you're free.
                    Friends in your server can see you're around and
                    instantly pop in to talk without having to call.
                </div>
            </div>
        </div>
    );
}

const FeatureSectionThree: FC<Props> = (props) => {
    return (
        <div className="grid grid-cols-4 gap-5 px-6 py-14 gap-y-0
            md:grid-cols-8
            md:px-10 md: md:py-20
            lg:grid-cols-12
            lg:px-10 lg:py-[120px]"
        >
            <img src='/featureImage3.svg'
                className="col-start-1 col-end-5
                        lg:col-end-8"
            />
            <div className="flex flex-col justify-center mt-5 col-start-1 col-end-5 row-span-2
                    md:col-start-5 md:col-end-9 md:mt-0
                    lg:col-start-9 lg:col-end-13"
            >
                <h2 className='text-xl font-extrabold md:text-5xl font-gg-sans text-dark-not-black'>From few to a fandom</h2>
                <div className="mt-6 md:text-lg font-gg-sans font-normal">
                    Get any community running with moderation tools
                    and custom member access. Give members special
                    powers, set up private channels, and more.
                </div>
            </div>
        </div>
    );
}



const FeatureSectionFour: FC = () => {
    return (
        <div className="grid grid-cols-4 gap-5 px-6 py-14 gap-y-0
            md:grid-cols-8
            md:px-10 md: md:py-20
            lg:grid-cols-12
            lg:px-10 lg:py-[120px]"
        >
            <div className="mt-5 col-start-1 col-end-5 row-span-1
                    md:col-start-1 md:col-end-9 md:mt-0 md:text-center 
                    lg:col-start-1 lg:col-end-13"
            >
                <h2 className='text-xl font-extrabold md:text-4xl text-dark-not-black font-ginto-nord'>RELIABLE TECH FOR
                    STAYING CLOSE</h2>
                <div className="mt-6 md:text-lg font-gg-sans font-normal">
                    Low-latency voice and video feels like you're in the
                    same room. Wave hello over video, watch friends
                    stream their games, or gather up and have a
                    drawing session with screen share.
                </div>
            </div>
            <img src='/featureImage4.svg'
                className="col-start-1 col-end-5 row-span-1 justify-center items-stretch w-full
                    md:col-start-1 md:col-end-9
                    lg:col-start-1 lg:col-end-13
                    "
            />
        </div>
    );
}

const CTA: FC = () => {
    return (
        <div className="relative flex flex-col justify-center items-center px-6 mb-20">
            <div className="absolute top-0">
                <img src="/sparkles.svg" alt="sparkles" 
                    className="align-top overflow-clip"
                />
            </div> 
            <h4 className='text-[32px] font-bold font-gg-sans'>Ready to start your journey?</h4>
            <Button className='flex text-white bg-blurpleButton rounded-full mt-10 font-medium text-center text-xl
                      items-center justify-center
                      px-8 py-4
                      hover:bg-blurple-hover hover:shadow-xl
                      w-[90%] mr-0
                      md:w-[42%] cursor-pointer transition-all duration-200 ease-in-out'>
                <DownloadButton className='inline mr-2 z-10' />
                <span className='whitespace-nowrap ml-2 z-0 font-gg-sans font-medium '>Download from Google Play</span>
            </Button>
        </div>
    );
}
