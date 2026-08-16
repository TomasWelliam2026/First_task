
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import PaginationComponent from "../../components/pagination";
import AuthContext from "../../context";

const AdminHomePage = () => {
    const { login } = useContext(AuthContext) ;
    const navigator = useNavigate() ;

    useEffect(() => {
        if( !login ) navigator("/signin") ;
    }, []) ;

    return (
        <>
            <div className='w-full'>
                <section className="w-[470px] sm:w-[940px] md:w-[1440px] pt-[20px] sm:pt-[52px] md:pt-[104px] px-[11px] sm:px-[23px] md:px-[46px] top-[5px] sm:top-[10px] md:top-[20px] flex mx-auto justify-center ">
                    <div className="w-full h-[832px] flex flex-col px-3">
                        <PaginationComponent/>
                    </div>
                </section>
            </div>
        </>
    ) ;
}

export default AdminHomePage ;