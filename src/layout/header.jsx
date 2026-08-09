
import Logo from '../assets/img/6a0c63265ec9ccc9e7f030dd_Riley Logo.svg'
import Dropdown from '../components/dropdown.jsx';

const Header = () => {

    return (
        <header className='fixed top-0 left-0  w-full h-[64px] flex justify-center '>
            <div className='w-full z-50 bg-white h-[64px] px-[20px]'>
                <div className="w-[1440px] h-ful flexl flex  px-[64px] mx-auto justify-between ">
                    <div className="w-full grid grid-cols-12 items-center relative ">
                        <div className="col-span-2 h-[35.44px] cursor-pointer float-left absolute">
                            <img className="h-full mx-[12px]" width='113' src={Logo} alt='logo' />
                        </div>
                        <div className='w-full h-full flex justify-between items-center'>
                            <div className="w-full h-full flex">
                                <div className='flex w-full'>
                                    <div className='w-[716.11px] flex ml-[185.234px] pl-[200px] items-center'>
                                        <Dropdown 
                                            title={"Team"}
                                            list={[
                                                "Revenue & Finace",
                                                "Marketing",
                                                "Product",
                                                "Reserch & Insights"
                                            ]}
                                        />
                                        <Dropdown 
                                            title={"UseCase"}
                                            list={[
                                                "Revenue Health Modal",
                                                "Forecast Integrity",
                                                "Discover Revenue Drivers",
                                                "Revenue Intervention Signals"
                                            ]}
                                        />
                                        <Dropdown 
                                            title={"Resources"}
                                            list={[
                                                "Blog",
                                                "Release Notes"
                                            ]}
                                        />
                                        <div className='relative text-center text-[14px] flex justify-center text-gray-600 items-center cursor-pointer px-[10px] py-[5px] mx-[5px] mr-[23px] h-[20px]'>
                                            CustomerStories
                                        </div>
                                    </div>
                                    <div className='flex w-full justify-end items-center'>
                                        <div className='text-center flex justify-center cursor-pointer hover:text-gray-500  text-gray-700 items-center  px-[10px] py-[5px] mx-[5px] mr-[23px] h-[28px]'>
                                            Login
                                        </div>
                                        <div className='text-[14px] text-center cursor-pointer flex justify-center hover:text-gray-500 text-gray-700 items-center px-[10px] py-[5px] mr-[23px] h-[28px]'>
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
