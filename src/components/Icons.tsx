import React from 'react'

interface Props {
    className?: string
}

export const DotsVerticalIcon = ({ className }: Props) => {
    return (
        <svg className={`text-gray-800 dark:text-white w-4 h-4 ${className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
    )
}

export const SearchLoopIcon = ({ className }: Props) => {
    return (
        <svg className={`w-6 h-6 text-gray-800 dark:text-white ${className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
    )
}

export const ClockIcon = ({ className }: Props) => {
    return (
        <svg className={`w-6 h-6 text-gray-800 dark:text-white ${className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    )
}

export const BurgerMenuIcon = ({ className }: Props) => {
    return (
        <svg className={`w-6 h-6 text-gray-800 dark:text-white ${className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
    )
}

export const SolidArrowUpIcon = ({ className }: Props) => {
    return (
        <svg className={`w-6 h-6 text-gray-800 dark:text-white ${className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
            <path d="M9.207 1A2 2 0 0 0 6.38 1L.793 6.586A2 2 0 0 0 2.207 10H13.38a2 2 0 0 0 1.414-3.414L9.207 1Z" />
        </svg>
    )
}
