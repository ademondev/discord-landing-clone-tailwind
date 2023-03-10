import React, { FC, ReactNode, useState } from 'react'
import DiscordLogo from './svg/DiscordLogo';
import { GiHamburgerMenu } from 'react-icons/gi';

type Props = {}

const headerLinks = [
    {
        content: 'Download'
    },
    {
        content: 'Nitro'
    },
    {
        content: 'Discover'
    },
    {
        content: 'Safety'
    },
    {
        content: 'Support'
    },
    {
        content: 'Blog'
    },
    {
        content: 'Careers'
    }
];

export const Header: FC<Props> = (props) => {
    return (
        <header className="">
            <nav className='flex flex-row justify-end lg:justify-between items-center h-20'>
                <DiscordLogo className='text-white w-32 ml-6' />
                <ul className='hidden flex-row lg:flex'>
                    {headerLinks.map((link, index) => (
                        <HeaderLink key={index} content={link.content} className='text-white font-medium hover:underline underline-offset-1
                        p-1 m-1 text-base'>
                            {link.content}
                        </HeaderLink>
                    ))}
                </ul>
                <Button className='rounded-full bg-white text-dark-not-black cursor-pointer 
                    hover:shadow-lg 
                    hover:text-blurple transition
                    duration-200 ease-in-out
                    float-right
                    ml-auto
                    mr-4
                    lg:ml-0 
                    font-gg-sans
                    font-medium
                    '
                >
                    Login
                </Button>
                <GiHamburgerMenu className='text-white float-right text-5xl lg:hidden
                     p-2 w-[10000] h-[10000]'
                />
            </nav>
        </header>
    )
}

interface HeaderLinkProps {
    children: ReactNode;
    content: string;
    className?: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ content, children, className }) => {
    return (
        <li className='px-4'>
            <a href='#' className={`${className}`}>
                {children}
            </a>
        </li>
    )
}

interface ButtonInterface {
    children: ReactNode;
    className?: string;

}

export const Button: FC<ButtonInterface> = ({ children, className }) => {
    return (
        <a
            className={`px-6 py-2 font-bold ${className}`}
        >
            {children}
        </a>
    )
}
