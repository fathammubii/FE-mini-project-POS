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
        categoryId: ''
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/pos/api/detailproduct/${id}`);
                const productData = response.data.length > 0 ? response.data[0] : null;
                if (productData) {
                    setProductDetails({
                        title: productData.title,
                        price: productData.price,
                        image: productData.image,
                        categoryId: productData.categoryId
                    });
                }
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8080/pos/api/category/list');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchProductDetails();
        fetchCategories();
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
        const updatedProductDetails = {
            title: productDetails.title,
            image: productDetails.image,
            price: parseFloat(productDetails.price),
            categoryId: parseInt(productDetails.categoryId)
        };
        try {
            await axios.put(`http://localhost:8080/pos/api/updateproduct/${id}`, updatedProductDetails);
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
                        <h4>Nama Kategori</h4>
                        <select
                            name="categoryId"
                            value={productDetails.categoryId}
                            onChange={handleChange}
                            className='border rounded p-2 w-1/2'
                        >
                            <option value="">Pilih Kategori</option>
                            {categories.map((category) => (
                                <option key={category.categoryId} value={category.categoryId}>
                                    {category.categoryName}
                                </option>
                            ))}
                        </select>
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

                    <br></br>
                    <button type="submit">{'Submit >'}</button>
                </form>
            </div>
        </div>
    );
};

export default EditProductPage;
