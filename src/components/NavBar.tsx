import { LogoWithName, ProfilePhoto } from './BrandImages'
import { ClockIcon, SearchLoopIcon } from './Icons'

const NavBar = () => {
    return (
        <div className='p-5 ps-2 flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                {/* <BurgerMenuIcon className='w-4' /> */}
                <LogoWithName />
            </div>

            <div className='flex'>
                <SearchLoopIcon className='w-5' />
            </div>

            <div className='flex items-center gap-3'>
                <ClockIcon className='w-6' />
                <ProfilePhoto />
            </div>
        </div>
    )
}

export default NavBar