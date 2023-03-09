import React, { FC } from 'react'
import { Header } from './Header';
import { Hero } from './Hero';

type Props = {}

export const AppWrapper: FC<Props> = (props) => {
    return (
        <div className='bg-cover bg-center bg-no-repeat bg-background' style={{ backgroundImage: "url('./src/assets/heroBackground.svg')"}}>
            <div className='md:container md:mx-auto'> 
                    <Header />
                    <Hero />
            </div>
        </div>
    );
}
