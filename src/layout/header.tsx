import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';

import Logo from '../assets/img/6a0c63265ec9ccc9e7f030dd_Riley Logo.svg'
import Dropdown from '../components/dropdown.jsx';
import AuthContext from '../context';

const Header = () => {
    const navigator = useNavigate();

    const { login, user, SignOut } = useContext(AuthContext) ;

    const initial = () => {
        if( !login ) navigator('/signin') ;
    }
    useEffect(() => {
        initial() ;
    }, [login]) ;

    useEffect(() => {
        initial() ;
    }, []);

    return (
        <header className='w-full h-[16px] sm:h-[32px] md:h-[64px] fixed top-0 left-0 z-40 flex justify-center'>
            <div className='w-full h-[16px] sm:h-[32px] md:h-[64px] sm:px-[10px] md:px-[20px] z-50 bg-white'>
                <div className="w-[470px] sm:w-[940px] md:w-[1440px] flex mx-auto justify-between h-full px-[64px]">
                    <div className="w-full flex items-center relative ">
                        <div className="w-[58px] sm:w-[68px] md:w-[137px] h-[12px] sm:h-[23px] md:h-[35.44px] cursor-pointer float-left absolute flex justify-start">
                            <img className="w-[28px] sm:w-[56px] md:w-[113px] h-full mx-[12px]" src={Logo} alt='logo' />
                        </div>
                        <div className='w-full h-full flex justify-between items-center'>
                            <div className="w-full h-full flex">
                                <div className='flex w-full'>
                                    <div className='sm:w-[416px] md:w-[716.11px] ml-[46px] sm:ml-[92.1px] md:ml-[185.234px] pl-[50px] sm:pl-[100px] md:pl-[200px] flex items-center'>
                                        {
                                            user.username === 'admin' ?
                                            <>
                                            </>
                                            :
                                            <>
                                                <Dropdown 
                                                    title={{ name: "Team" }}
                                                    list={[
                                                        {
                                                            name:"Revenue & Finace"
                                                        },
                                                        {
                                                            name: "Marketing"

                                                        },
                                                        {
                                                            name: "Product"

                                                        },
                                                        {
                                                            name: "Reserch & Insights"
                                                        }
                                                    ]}
                                                />
                                                <Dropdown 
                                                    title={{ name: "UseCase" }}
                                                    list={[
                                                        {
                                                            name: "Revenue Health Modal"
                                                        },
                                                        {
                                                            name: "Forecast Integrity"
                                                            
                                                        },
                                                        {
                                                            name: "Discover Revenue Drivers"

                                                        },
                                                        {
                                                            name: "Revenue Intervention Signals"
                                                        }
                                                    ]}
                                                />
                                                <Dropdown 
                                                    title={{
                                                        name: "Resources"}
                                                    }
                                                    list={[
                                                        {
                                                            name: "Blog"
                                                        },
                                                        {
                                                            name: "Release Notes"
                                                        }
                                                    ]}
                                                />
                                                <div className='text-[4.5px] sm:text-[8px] md:text-[14px] p-[4px] sm:p-[10px] md:p-[20px] pr-[8px] sm:pr-[20px] md:pr-[40px] flex justify-center text-gray-600 items-center relative text-center cursor-pointer'>
                                                    CustomerStories
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <div className='flex w-full justify-end items-center'>
                                        {
                                            login ?
                                                <>
                                                {
                                                    user.username === 'admin' ?
                                                        <Dropdown 
                                                            title={{
                                                                name:user.username,
                                                                avatar: "ssss"
                                                            }}
                                                            list={[
                                                                {
                                                                    name: "Sign Out",
                                                                    request: SignOut
                                                                }
                                                            ]}
                                                        />
                                                    :
                                                        <Dropdown 
                                                            title={{
                                                                name:user.username,
                                                                avatar: "ssss"
                                                            }}
                                                            list={[
                                                                {
                                                                    name: "Password Reset",
                                                                    link: "/update"
                                                                },
                                                                {
                                                                    name: "Sign Out",
                                                                    request: SignOut
                                                                }
                                                            ]}
                                                        />
                                                    }
                                                </>
                                                
                                            :  
                                                <div className='text-[4.5px] sm:text-[8px] md:text-[14px] px-[4px] sm:px-[7px] md:px-[10px] py-[1px] sm:py-[3px] md:py-[5px] mx-[1px] sm:mx-[3px] md:mx-[5px] mr-[8px] sm:mr-[16px] md:mr-[23px] h-[16px] sm:h-[21px] md:h-[28px] text-center flex justify-center cursor-pointer hover:text-gray-500  text-gray-700 items-center '
                                                    onClick={() => {
                                                        navigator('/signin');
                                                    }}
                                                >
                                                    Login
                                                </div>
                                        }
                                        
                                        <div className='text-[4.5px] sm:text-[8px] md:text-[14px] px-[4px] sm:px-[7px] md:px-[10px] py-[1px] sm:py-[3px] md:py-[5px] mr-[8px] sm:mr-[16px] md:mr-[23px] h-[16px] sm:h-[21px] md:h-[28px] text-center cursor-pointer flex justify-center hover:text-gray-500 text-gray-700 items-center'>
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
