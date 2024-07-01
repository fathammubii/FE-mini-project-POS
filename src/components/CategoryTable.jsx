import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CategoryTable = ({ categories, onCategoryDelete }) => {
    const [productCounts, setProductsCounts] = useState({});

    useEffect(() => {
        const fetchProductCounts = async () => {
            const counts = {};
            for (let category of categories) {
                try {
                    const response = await axios.get(`http://localhost:8080/pos/api/listproduct/id?category_id=${category.categoryId}`);
                    counts[category.categoryId] = response.data.length;
                } catch (error) {
                    console.error('Error fetching product counts: ', error);
                }
            }
            setProductsCounts(counts);
        };
        fetchProductCounts();
    }, [categories]);

    const handleDelete = async (categoryId, categoryName) => {
        try {
            await axios.post(`http://localhost:8080/pos/api/category/deletecategory/${categoryId}`);
            alert(`Category ${categoryName} deleted successfully`);
            onCategoryDelete();
        } catch (error) {
            if (error.response && error.response.data) {
                alert(`Category ${categoryName} cannot be deleted: ${error.response.data.message}`);
            } else {
                alert(`Failed to delete category ${categoryName}`);
            }
        }
    };

    return (
        <div>
            <table className='table-auto text-center w-full'>
                <thead>
                    <tr>
                        <th className='border-y-2 border-gray-200 p-2'>ID Category</th>
                        <th className='border-y-2 border-gray-200 p-2'>Nama Category</th>
                        <th className='border-y-2 border-gray-200 p-2'>Jumlah Produk Terkait</th>
                        <th className='border-y-2 border-gray-200 p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={index}>
                            <td>{category.categoryId}</td>
                            <td>{category.categoryName}</td>
                            <td>{productCounts[category.categoryId] || 0}</td>
                            <td>
                                <div className='grid grid-cols-3'>
                                    <button className='p-0 m-1'><Link to={`/`}>Detail</Link></button>
                                    <button className='p-0 m-1'><Link to={`/`}>Edit</Link></button>
                                    <button className='p-0 m-1' onClick={() => handleDelete(category.categoryId, category.categoryName)}>Hapus</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CategoryTable;
