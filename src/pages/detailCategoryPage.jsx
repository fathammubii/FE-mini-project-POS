import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const DetailCategoryPage = () => {
    const { id } = useParams();
    const [categoryDetails, setCategoryDetails] = useState(null);

    useEffect(() => {
        const fetchCategoryDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/pos/api/category/${id}`);
                const categoryData = response.data;
                setCategoryDetails(categoryData);
            } catch (error) {
                console.error('Error fetching category details:', error);
            }
        };

        fetchCategoryDetails();
    }, [id]);

    if (!categoryDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='flex'>
                <h1 className='flex-none text-left'>Detail Kategori</h1>
                <div className='grow'></div>
                <div>
                    <button><Link to={`/category-list`}>Kembali</Link></button>
                </div>
            </div>

            <hr />
            <br />
            <div className="grid grid-cols-3 text-left">
                <div className="flex flex-col space-y-2">
                    <div>ID Kategori</div>
                    <div>Nama Kategori</div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div>: {categoryDetails.categoryId}</div>
                    <div>: {categoryDetails.categoryName}</div>
                </div>
            </div>
        </div>
    );
}

export default DetailCategoryPage;
