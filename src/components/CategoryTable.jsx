import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CategoryTable = ({ categories, onCategoryDelete }) => {
    const [productCounts, setProductsCounts] = useState({});
    const [categoryToDelete, setCategoryToDelete] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

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

    const handleDelete = (categoryId, categoryName) => {
        setCategoryToDelete({ id: categoryId, name: categoryName });
        setShowDeleteConfirmation(true);
    };

    const confirmDeleteCategory = async () => {
        const { id, name: categoryName } = categoryToDelete;
        try {
            await axios.post(`http://localhost:8080/pos/api/category/deletecategory/${id}`);
            setShowDeleteConfirmation(false);
            alert(`Category ${categoryName} deleted successfully`);
            onCategoryDelete();
        } catch (error) {
            if (error.response && error.response.data) {
                alert(`Category ${categoryName} cannot be deleted: ${error.response.data.message}`);
            } else {
                alert(`Failed to delete category ${categoryName}`);
            }
            setShowDeleteConfirmation(false);
            
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
                                    <button className='p-0 m-1'><Link to={`/detail-category/${category.categoryId}`}>Detail</Link></button>
                                    <button className='p-0 m-1'><Link to={`/`}>Edit</Link></button>
                                    <button className='p-0 m-1' onClick={() => handleDelete(category.categoryId, category.categoryName)}>Hapus</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showDeleteConfirmation && (
                <div className='fixed z-10 inset-0 overflow-y-auto'>
                    <div className='flex items-center justify-center min-h-screen px-4 text-center'>
                        <div className='fixed inset-0 bg-black opacity-50'></div>
                        <div className='relative z-10 bg-white p-6 rounded-lg'>
                            <h2 className='mb-4'>Delete Category</h2>
                            <p className='mb-4'>Are you sure you want to delete {categoryToDelete.name}?</p>
                            <div className='flex justify-center space-x-4'>
                                <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded' onClick={confirmDeleteCategory}>
                                    Delete
                                </button>
                                <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded' onClick={() => setShowDeleteConfirmation(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CategoryTable;
