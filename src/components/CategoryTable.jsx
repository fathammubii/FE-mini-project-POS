
import { Link } from "react-router-dom";

const CategoryTable = ({categories}) => {

    return (
        <div>
            <table className='table-auto text-center w-full'>
                <thead>
                    <tr>
                        <th className='border-y-2 border-gray-200 p-2'>
                            <div className="flex space-x-1 items-center">
                                <div className='basis-1/5'></div>
                                <div className='flex flex-col'>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </button>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div>ID Category</div>
                            </div>
                        </th>
                        <th className='border-y-2 border-gray-200 p-2'>
                            <div className="flex space-x-1 items-center">
                                <div className='basis-1/5'></div>
                                <div className='flex flex-col'>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </button>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div>Nama Category</div>
                            </div>
                        </th>
                        <th className='border-y-2 border-gray-200 p-2'>
                            <div className="flex space-x-1 items-center">
                                <div className='basis-1/5'></div>
                                <div className='flex flex-col'>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </button>
                                    <button className='p-0 bg-white rounded-none scale-75'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div>Jumlah Produk Terkait</div>
                            </div>
                        </th>
                        <th className='border-y-2 border-gray-200 p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={index}>
                            <td>{category.categoryId}</td>
                            <td>{category.categoryName}</td>
                            <td></td>
                            <td>
                            <div className='grid grid-cols-3'>
                                    <button className='p-0 m-1'><Link to={`/`}>Detail</Link></button>
                                    <button className='p-0 m-1'><Link to={`/`}>Edit</Link></button>
                                    <button className='p-0 m-1'onClick={'/'}>Hapus</button>
                                </div>
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>

    )


}

export default CategoryTable;