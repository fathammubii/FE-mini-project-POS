import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddProductPage = () => {
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState({
        title: '',
        price: '',
        image: '',
        categoryId: ''
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8080/pos/api/category/list');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetails({
            ...productDetails,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProductDetails = {
            title: productDetails.title,
            image: productDetails.image,
            price: parseFloat(productDetails.price),
            categoryId: parseInt(productDetails.categoryId)
        };
        try {
            await axios.post('http://localhost:8080/pos/api/addproduct', newProductDetails);
            alert('Product added successfully!');
            navigate('/product-list');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product.');
        }
    };

    return (
        <div>
            <div className='flex'>
                <h1 className='flex-none text-left'>Add Product Form</h1>
                <div className='grow'></div>
                <div>
                    <button><Link to={`/product-list`}>{"< Back"}</Link></button>
                </div>
            </div>

            <br />
            <hr />

            <div className='text-left'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h4>Product Name</h4>
                        <input 
                        type="text" 
                        name="title" 
                        value={productDetails.title} 
                        onChange={handleChange} 
                        className='border rounded p-2 w-1/2'
                        />
                    </div>
                    <div>
                        <h4>Category Name</h4>
                        <select
                            name="categoryId"
                            value={productDetails.categoryId}
                            onChange={handleChange}
                            className='border rounded p-2 w-1/2'
                        >
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category.categoryId} value={category.categoryId}>
                                    {category.categoryName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h4>Image URL</h4>
                        <input type="text" 
                        name="image" 
                        value={productDetails.image} 
                        onChange={handleChange} 
                        className='border rounded p-2 w-1/2'
                        />
                    </div>
                    <div>
                        <h4>Unit Price</h4>
                        <input type="number" 
                        name="price" 
                        value={productDetails.price} 
                        onChange={handleChange} 
                        className='border rounded p-2 w-1/2'
                        />
                    </div>

                    <br />
                    <button type="submit">{'Submit >'}</button>
                </form>
            </div>
        </div>
    );
};

export default AddProductPage;
