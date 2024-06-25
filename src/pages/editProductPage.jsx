import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState({
        title: '',
        price: '',
        image: '',
        categoryId: '',
        categoryName: ''
    });

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/pos/api/detailproduct/${id}`);
                const productData = response.data.length > 0 ? response.data[0] : null;
                if (productData) {
                    setProductDetails(productData);
                }
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetails({
            ...productDetails,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/pos/api/updateproduct/${id}`, productDetails);
            alert('Product updated successfully!');
            navigate('/product-list');
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product.');
        }
    };

    return (
        <div>
            <div className='flex'>
                <h1 className='flex-none text-left'>Form Produk</h1>
                <div className='grow'></div>
                <div>
                    <button><Link to={`/product-list`}>{"< Kembali"}</Link></button>
                </div>
            </div>

            <br />
            <hr />

            <div className='text-left'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h4>Nama Produk</h4>
                        <input 
                        type="text" 
                        name="title" 
                        value={productDetails.title} 
                        onChange={handleChange} 
                        className='border rounded p-2 w-1/2'
                        />
                    </div>
                    <div>
                        <label>ID Kategori:</label>
                        <input type="text" name="categoryId" value={productDetails.categoryId} onChange={handleChange} />
                    </div>
                    <div>
                        <h4>URL Gambar</h4>
                        <input type="text" 
                        name="image" 
                        value={productDetails.image} 
                        onChange={handleChange} 
                        className='border rounded p-2 w-1/2'
                        />
                    </div>
                    <div>
                        <h4>Harga Satuan:</h4>
                        <input type="number" 
                        name="price" 
                        value={productDetails.price} 
                        onChange={handleChange} 
                        className='border rounded p-2 w-1/2'
                        />
                    </div>


                    <div>
                        <label>Nama Kategori:</label>
                        <input type="text" name="categoryName" value={productDetails.categoryName} onChange={handleChange} />
                    </div>

                    <br></br>
                    <button type="submit">{'Submit >'}</button>
                </form>
            </div>
        </div>
    );
};

export default EditProductPage;
