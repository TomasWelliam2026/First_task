import Logo from '../assets/img/6a0c63265ec9ccc9e7f030dd_Riley Logo.svg'

const Header = () => {
    return (
        <header>
            <div className="w-full flex justify-center">
                <div className="flex container w-full space-x-8 px-28">
                    <div className='flex w-2/3 relative h-16'>
                        <div className="w-64 h-16 absolute">
                            <img className="h-full mx-1" width='113' src={Logo} alt='logo' />
                        </div>
                        <div className='w-full flex justify-end ml-32 pl-32'>
                            <div className='text-center flex justify-center text-gray-600 items-center cursor-pointer px-4'>
                                Team
                                <select className='pl-1' ></select>
                            </div>
                            <div className='text-center flex justify-center text-gray-600 items-center cursor-pointer px-4'>
                                Use Case
                                <select className='pl-1' ></select>
                            </div>
                            <div className='text-center flex justify-center text-gray-600 items-center cursor-pointer px-4'>
                                Resources
                                <select className='pl-1' ></select>
                            </div>
                            <div className='text-center flex justify-center text-gray-600 items-center cursor-pointer px-4'>
                                CostomerStories
                                <select className='pl-1' ></select>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-1/3 justify-end'>
                        <div className='text-center flex justify-center text-gray-600 items-center px-6'>
                            Login
                        </div>
                        <div className='text-center flex justify-center text-gray-600 items-center px-6'>
                            Book a Demo
                        </div>
                    </div>
                </div>
            </div>
        </header>
    ) ;
}

export default Header ;
