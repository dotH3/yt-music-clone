import React from 'react'
import { DotsVerticalIcon, SolidArrowUpIcon } from './Icons'

const PlayerBar = () => {
    return (
        <div className='bg-[#212121] p-3 w-full absolute bottom-0'>
            <div className='flex justify-between items-center px-4'>

                <div className='flex gap-5'>
                    <div>{'<'}</div>
                    <div>{'X'}</div>
                    <div>{'>'}</div>
                </div>

                <div className='flex text-sm items-center gap-4'>
                    <div className='flex flex-col'>
                        <div className='font-bold'>Ya no miento</div>
                        <div className='flex gap-1'>
                            <div>Viejas Locas</div>

                            <div>•</div>

                            <div>Contra la Pared</div>

                            <div>•</div>

                            <div>2021</div>
                        </div>
                    </div>
                    <div className='text-sm'>
                        <DotsVerticalIcon className='w-3 h-3 text-red' />

                    </div>
                </div>

                <SolidArrowUpIcon className='w-4' />
            </div>
        </div>
    )
}

export default PlayerBar