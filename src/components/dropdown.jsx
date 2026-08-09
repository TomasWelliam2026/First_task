import { useRef } from "react";

import DropdownMenu from "./dropdown_menu";

const Dropdown = (props) => {
    const { title, list } = props ;
    const drop = useRef() ;

    return (
        <>
            <div className='relative text-center text-[14px] flex justify-center text-gray-600 items-center cursor-pointer p-[20px] pr-[40px]'
                onMouseEnter={() => {
                    drop.current.handleOpen()
                }}
                onMouseLeave={() => {
                    drop.current.handleOpen()
                }}
            >
                {title}
                <select className='flex w-[14.39px] absolute m-[20px] ml-0 top-0 bottom-0 right-0 align-left' disabled></select>
                <DropdownMenu
                    ref={drop}
                    list={list}
                />
            </div>
            
        </>
    );
}

export default Dropdown ;