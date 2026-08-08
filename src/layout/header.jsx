import Logo from '../assets/img/6a0c63265ec9ccc9e7f030dd_Riley Logo.svg'

const Header = () => {
    return (
        <header className='flex'>
            <div className='fixed top-0 left-0 w-[1905px] z-50 bg-white h-[64px] px-[20px]'>
                <div className="w-[1440px] flex mx-auto justify-between h-full px-[64px]">
                    <div className="w-full flex items-center relative ">
                        <div className="w-[137px] h-[35.44px] float-left absolute">
                            <img className="h-full mx-[12px]" width='113' src={Logo} alt='logo' />
                        </div>
                        <div className='w-full h-full flex justify-between items-center'>
                            <div className="w-full h-full flex">
                                <div className='flex w-full'>
                                    <div className='w-[716.11px] flex ml-[185.234px] pl-[200px] items-center'>
                                        <div className='relative text-center text-[14px] flex justify-center text-gray-600 items-center cursor-pointer p-[20px] pr-[40px]'>
                                            Team
                                            <select className='flex w-[14.39px] absolute m-[20px] ml-0 top-0 bottom-0 right-0 align-left' ></select>
                                        </div>
                                        <div className='relative text-center text-[14px] flex justify-center text-gray-600 items-center cursor-pointer p-[20px] pr-[40px]'>
                                            UseCase
                                            <select className='flex w-[14.39px] absolute m-[20px] ml-0 top-0 bottom-0 right-0 align-left' ></select>
                                        </div>
                                        <div className='relative text-center text-[14px] flex justify-center text-gray-600 items-center cursor-pointer p-[20px] pr-[40px]'>
                                            Resources
                                            <select className='flex w-[14.39px] absolute m-[20px] ml-0 top-0 bottom-0 right-0 align-left' ></select>
                                        </div>
                                        <div className='relative text-center text-[14px] flex justify-center text-gray-600 items-center cursor-pointer px-[10px] py-[5px] mx-[5px] mr-[23px] h-[20px]'>
                                            CustomerStories
                                        </div>
                                    </div>
                                    <div className='flex w-full justify-end items-center'>
                                        <div className='text-center flex justify-center text-gray-600 items-center  px-[10px] py-[5px] mx-[5px] mr-[23px] h-[28px]'>
                                            Login
                                        </div>
                                        <div className='text-[14px] text-center cursor-pointer flex justify-center text-gray-600 items-center px-[10px] py-[5px] mr-[23px] h-[28px]'>
                                            Book a demo
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    ) ;
}

export default Header ;
