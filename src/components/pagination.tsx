import React, { useState, useEffect } from 'react';
import adminService from '../services/admin';
import { toast } from 'react-toastify';

function PaginationComponent() {

    const [todos, setTodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2);
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

            console.log(pageNumberlist) ;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const deleteUser = async (id:any) => {
        const res = await adminService.deleteUser(id) ;
        if( res.data.code === 200 ) {
            toast.success(res.data.msg) ;
        } else {
            toast.error(res.data.msg) ;
        }
        console.log(res) ;
    }

    useEffect(() => {
        fetchData(1);
    }, []);

    useEffect(() => {
        fetchData(currentPage) ;
    }, [currentPage]) ;
    
    const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

    return (
        <div className="max-w-3xl h-full mx-auto p-4 flex flex-col justify-between">
            <div className="grid grid-cols-4 gap-4">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Username</td>
                            <td>Email</td>
                            <td>Operation</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((item:any, index) => (
                                <tr key={index}>
                                    <td className='flex'>
                                        <div className={` text-gray-800 p-4 rounded-sm`}>
                                            <h2 className="text-sm font-semibold mb-2">
                                                {item.id}
                                            </h2>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={` text-gray-800 p-4 rounded-sm`}>
                                            <h2 className="text-sm font-semibold mb-2">
                                                {item.username}
                                            </h2>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={` text-gray-800 p-4 rounded-sm`}>
                                            <h2 className="text-sm font-semibold mb-2">
                                                {item.email}
                                            </h2>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={` text-gray-800 p-4 rounded-sm`}>
                                            <div className="text-sm font-semibold cursor-pointer mb-2" onClick={() => {
                                                deleteUser(item.id)
                                            }}>
                                                delete
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                        ))}
                    </tbody>
                </table>
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