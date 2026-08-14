
import { useContext } from "react";

import adminService from "../../services/admin";
import PaginationComponent from "../../components/pagination";

const AdminHomePage = () => {

    const getPageInfo = async () => {
        const res = await adminService.getUsers(10) ;
    }
    return (
        <>
            <div className='w-full'>
                <section className="w-[470px] sm:w-[940px] md:w-[1440px] h-[170px] sm:h-[340px] md:h-[680px] pt-[36px] sm:pt-[72px] md:pt-[144px] pl-[15px] sm:pl-[31px] md:pl-[62px] pr-[11px] sm:pr-[23px] md:pr-[46px] top-[5px] sm:top-[10px] md:top-[20px] flex mx-auto justify-center ">
                    <div className="w-[144.25px] sm:w-[288.5px] md:w-[577.78px] mr-[8px] sm:mr-[16px] md:mr-[32px] flex flex-col">
                        <PaginationComponent/>
                    </div>
                </section>
            </div>
        </>
    ) ;
}

export default AdminHomePage ;