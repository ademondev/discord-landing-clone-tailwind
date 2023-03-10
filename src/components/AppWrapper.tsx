import React, { FC } from 'react'
import { Header } from './Header';
import { Hero } from './Hero';

type Props = {}

export const AppWrapper: FC<Props> = (props) => {
    return (
        <div className='bg-cover bg-center bg-no-repeat bg-background' style={{ backgroundImage: "url('/hero-bg.jpg')"}}>
            <div className='container mx-auto'> 
                    <Header />
                    <Hero />
            </div>
        </div>
    );
}
