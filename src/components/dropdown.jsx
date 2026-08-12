import { useRef } from "react";

import DropdownMenu from "./dropdown_menu";

const Dropdown = (props) => {
    const { title, list } = props ;
    const drop = useRef() ;

    return (
        <>
            <div className='text-[4.5px] sm:text-[8px] md:text-[14px] p-[4px] sm:p-[10px] md:p-[20px] pr-[8px] sm:pr-[20px] md:pr-[40px] flex justify-center text-gray-600 items-center relative text-center cursor-pointer'
                onMouseEnter={() => {
                    drop.current.handleOpen()
                }}
                onMouseLeave={() => {
                    drop.current.handleOpen()
                }}
            >
                {title.name}
                <select className='w-0 sm:w-[7.18px] md:w-[14.39px] m-[4px] sm:m-[10px] md:m-[20px] ml-0 flex absolute top-0 bottom-0 right-0 items-left' disabled></select>
                <DropdownMenu
                    ref={drop}
                    list={list}
                />
            </div>
            
        </>
    );
}

export default Dropdown ;