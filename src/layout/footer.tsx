import Logo from '../assets/img/6a0c63265ec9ccc9e7f030dd_Riley Logo.svg';

const Footer = () => {
    return (
        <footer className='w-full h-[622px] flex justify-center'>
            <div className='w-[1905px] px-[80px] pb-[80px]'>
                <div className='w-[1280px] h-full mx-auto'>
                    <div className="w-full h-[542px] flex flex-col py-[64px]">
                        <div className='h-full flex justify-between pl-[30px]'>
                            <div className='w-[150.77px] h-[176px] flex flex-col justify-start'>
                                <div className="w-full h-[32px] flex justify-start cursor-pointer  mb-[32px]">
                                    <img className="w-[86px] h-[32px] mx-[12px]" src={Logo} alt='logo' />
                                </div>
                                <div className='w-full h-[56px] flex flex-col justify-start text-gray-600 items-center'>
                                    <p className="w-full flex text-start">support@askriley.io</p>
                                    <p className="w-full flex text-start">San Francisco, CA</p>
                                </div>
                                <div className='w-full h-[24px] text-center flex justify-start text-gray-600 items-center cursor-pointer mt-[32px]'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#475467"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='flex flex-col w-[173.36px] h-[296px] justify-between'>
                                <div className='flex h-full items-center'>
                                    <div className="w-full h-[196px]">
                                        <p className='text-[1rem] cursor-pointer text-start hover:text-gray-500 text-gray-900 py-[8px]'>
                                            Carrers
                                        </p>
                                        <p className='text-[1rem] cursor-pointer text-start  hover:text-gray-500 text-gray-900 py-[8px]'>
                                            Events
                                        </p>
                                        <p className='text-[1rem] cursor-pointer text-start  hover:text-gray-500 text-gray-900 py-[8px]'>
                                            FQA
                                        </p>
                                        <p className='text-[1rem] cursor-pointer text-start  hover:text-gray-500 text-gray-900 py-[8px]'>
                                            Press
                                        </p>
                                        <p className='text-[1rem] cursor-pointer  text-start  hover:text-gray-500 text-gray-900 py-[8px]'>
                                            Trust Center
                                        </p>
                                    </div>
                                </div>
                                <div className='w-full h-[36px]'>
                                    <p className='text-[1rem] cursor-pointer text-start tracking-[-0.4px] font-bold  hover:text-gray-500 text-gray-700 py-[12px]'>
                                        Make the case for Riley
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between pt-[32px] mt-[64px]  border-t-[1px] border-gray-200 ">
                            <div className="text-[0.875rem] text-gray-600 ">
                                © 2026 Riley AI. All rights reserved.
                            </div>
                            <div className="w-[174.27px] flex justify-between">
                                <div className="text-[0.875rem] cursor-pointer  text-gray-600 ">
                                    Teams
                                </div>
                                <div className="text-[0.875rem] cursor-pointer  text-gray-600 ">
                                    Privacy
                                </div>
                                <div className="text-[0.875rem] cursor-pointer  text-gray-600 ">
                                    Support
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer ;