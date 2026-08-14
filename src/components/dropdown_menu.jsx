import { useEffect, useState } from "react";
import React from 'react';
import { useNavigate } from "react-router";
const { forwardRef, useImperativeHandle } = React;

const DropdownMenu = forwardRef((props, ref) => {
    const { list } = props ;

    const navigator = useNavigate() ;
    const [open, setOpen] = useState(false) ;
    const [len, setLen] = useState(0) ;

    useImperativeHandle(ref, () => ({
        handleOpen() {
            setOpen(!open) ;
        }
    }))

    const initial = async () => {
        let maxLen = 0 ;
        for(let i=0; i<list.length; i++) {
            if( maxLen < list[i].name.length ) {
                maxLen = list[i].name.length ;
            }
        }
        await setLen(maxLen) ;
    }
    
    useEffect(() => {
        initial() ;
    }, []);

    return (
        <div className="absolute z-99 flex flex-col justify-start bg-white rounded-md drop-shadow-lg top-[62px] left-0"
            style={{
                display: ( open ? "flex" : "none" ),
                width: `${len*9 + 500/len}px`
            }}
            ref={ref}
        >
            {
                list && list.map((item, index) => (
                    ( item.link ?
                        <div className="text-start text-[14px] px-[24px] py-[12px]" key={index} onClick={() => {
                            navigator(item.link)
                        }} >
                            {item.name}
                        </div>
                      :
                        <div className="text-start text-[14px] px-[24px] py-[12px]" key={index} onClick={ item.request } >
                            {item.name}
                        </div>
                    )
                    
                ))
            }
        </div>
    ) ;
});

export default DropdownMenu ;