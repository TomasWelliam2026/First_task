import { useState, useEffect } from 'react';
import adminService from '../services/admin';
import { toast } from 'react-toastify';

function PaginationComponent() {

    const [todos, setTodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [pageNumbers, setPageNumbers] = useState([]) ;

    const fetchData = async (cnt:any) => {
        try {
            const response:any = await adminService.getUsers(cnt) ;
            const data = response.data ;

            setTodos(data.list);

            let pageNumberlist:any = [];
            for (let i = 1; i <= Math.ceil(data.allcount / itemsPerPage); i++) {
                pageNumberlist.push(i);
            }
            setPageNumbers(pageNumberlist) ;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const deleteUser = async (id:any) => {
        const res = await adminService.deleteUser(id) ;
        if( res.data.code === 200 ) {
            toast.success(res.data.msg) ;
            fetchData(currentPage) ;
        } else {
            toast.error(res.data.msg) ;
        }
    }

    useEffect(() => {
        fetchData(1);
    }, []);

    useEffect(() => {
        fetchData(currentPage) ;
    }, [currentPage]) ;
    
    const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

    return (
        <div className="relative h-[832px] w-full h-full p-4 flex flex-col justify-between">
            <div className="w-full flex rounded-tl-md rounded-tr-md">
                <div className="w-full grid grid-cols-10 gap-0 h-auto justify-start">
                    <div className='col-span-10 ... grid grid-cols-10 flex justify-between gap-0'>
                        <div className='... p-4 pr-0 font-bold bg-gray-200 '>Id</div>
                        <div className='col-span-4 ... p-4 pr-0 font-bold bg-gray-200 '>Username</div>
                        <div className='col-span-4 ... p-4 pr-0 font-bold bg-gray-200 '>Email</div>
                        <div className='... p-4 pr-0 font-bold bg-gray-200  text-center'>Operation</div>
                    </div>
                    {
                        todos && todos.map((item:any, index) => (
                            <div key={index} className='col-span-10 ... grid grid-cols-10 flex justify-between gap-0 '>
                                <div className='... p-4 pr-0'>
                                    <div className={` text-gray-800 py-2 rounded-sm`}>
                                        <h2 className="text-sm">
                                            {item.id}
                                        </h2>
                                    </div>
                                </div>
                                <div className='col-span-4 ... p-4 pr-0'>
                                    <div className={` text-gray-800 py-2 rounded-sm`}>
                                        <h2 className="text-sm ">
                                            {item.username}
                                        </h2>
                                    </div>
                                </div>
                                <div className='col-span-4 ... p-4 pr-0'>
                                    <div className={` text-gray-800 py-2 rounded-sm`}>
                                        <h2 className="text-sm ">
                                            {item.email}
                                        </h2>
                                    </div>
                                </div>
                                <div className='... p-4 pr-0 flex items-center' >
                                    <div className="flex w-full justify-center items-center ">
                                        <div className="w-full text-sm text-white text-center bg-gray-600 py-2 rounded-md  cursor-pointer" onClick={() => {
                                            deleteUser(item.id)
                                        }}>
                                            delete
                                        </div>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
            <ul className="flex gap-2 justify-center flex-wrap mt-8">
                {
                    pageNumbers.map((number) => (
                        <li key={number} className="">
                            <button
                                onClick={() => paginate(number)}
                                className={`px-3 py-1 rounded-full 
                                ${currentPage === number
                                    ? 'bg-green-700 text-white'
                                    : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                {number}
                            </button>
                        </li>
                ))}
            </ul>
        </div>
    );
}

export default PaginationComponent;