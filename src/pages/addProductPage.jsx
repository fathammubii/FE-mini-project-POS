import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const AddProductPage = () => {
    const navigate = useNavigate();
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

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Nama Produk wajib diisi'),
        price: Yup.number().required('Harga Satuan wajib diisi').typeError('Harga Satuan harus berupa angka').positive('Harga Satuan harus positif'),
        image: Yup.string().url('URL Gambar tidak valid').required('URL Gambar wajib diisi'),
        categoryId: Yup.string().required('Kategori wajib dipilih')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        const newProductDetails = {
            title: data.title,
            image: data.image,
            price: parseFloat(data.price),
            categoryId: parseInt(data.categoryId)
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
                    <button><Link to={`/product-list`}>{"< Kembali"}</Link></button>
                </div>
            </div>

            <br />
            <hr />

            <div className='text-left'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h4>Product Name</h4>
                        <input 
                            type="text" 
                            name="title" 
                            {...register('title')}
                            className='border rounded p-2 w-1/2'
                        />
                        {errors.title && <div className="text-red-500">{errors.title.message}</div>}
                    </div>
                    <div>
                        <h4>Category Name</h4>
                        <select 
                            name="categoryId" 
                            {...register('categoryId')} 
                            className='border rounded p-2 w-1/2'
                        >
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category.categoryId} value={category.categoryId}>
                                    {category.categoryName}
                                </option>
                            ))}
                        </select>
                        {errors.categoryId && <div className="text-red-500">{errors.categoryId.message}</div>}
                    </div>
                    <div>
                        <h4>Image URL</h4>
                        <input 
                            type="text" 
                            name="image" 
                            {...register('image')} 
                            className='border rounded p-2 w-1/2'
                        />
                        {errors.image && <div className="text-red-500">{errors.image.message}</div>}
                    </div>
                    <div>
                        <h4>Unit Price</h4>
                        <input 
                            type="number" 
                            name="price" 
                            {...register('price')} 
                            className='border rounded p-2 w-1/2'
                        />
                        {errors.price && <div className="text-red-500">{errors.price.message}</div>}
                    </div>

                    <br />
                    <button type="submit">{'Submit >'}</button>
                </form>
            </div>
        </div>
    );
};

export default AddProductPage;
