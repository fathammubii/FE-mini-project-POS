import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

    const validationSchema = yup.object().shape({
        title: yup.string().required('Nama Produk wajib diisi'),
        categoryId: yup.string().required('Kategori wajib dipilih'),
        image: yup.string().required('URL Gambar wajib diisi').url('URL Gambar tidak valid'),
        price: yup.number().typeError('Harga Satuan harus berupa angka').required('Harga Satuan wajib diisi').positive('Harga Satuan harus positif')
    });

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: productDetails
    });

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
                    reset(productData); // Reset form to update with new default values
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
    }, [id, reset]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetails({
            ...productDetails,
            [name]: value
        });
    };

    const onSubmit = async (data) => {
        const updatedProductDetails = {
            title: data.title,
            image: data.image,
            price: parseFloat(data.price),
            categoryId: parseInt(data.categoryId)
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h4>Nama Produk</h4>
                        <input 
                            type="text" 
                            name="title" 
                            {...register('title')} 
                            className='border rounded p-2 w-1/2'
                        />
                        <p className="text-red-500">{errors.title?.message}</p>
                    </div>
                    <div>
                        <h4>Nama Kategori</h4>
                        <select
                            name="categoryId"
                            {...register('categoryId')}
                            className='border rounded p-2 w-1/2'
                        >
                            <option value="">Pilih Kategori</option>
                            {categories.map((category) => (
                                <option key={category.categoryId} value={category.categoryId}>
                                    {category.categoryName}
                                </option>
                            ))}
                        </select>
                        <p className="text-red-500">{errors.categoryId?.message}</p>
                    </div>
                    <div>
                        <h4>URL Gambar</h4>
                        <input 
                            type="text" 
                            name="image" 
                            {...register('image')} 
                            className='border rounded p-2 w-1/2'
                        />
                        <p className="text-red-500">{errors.image?.message}</p>
                    </div>
                    <div>
                        <h4>Harga Satuan</h4>
                        <input 
                            type="number" 
                            name="price" 
                            {...register('price')} 
                            className='border rounded p-2 w-1/2'
                        />
                        <p className="text-red-500">{errors.price?.message}</p>
                    </div>

                    <br></br>
                    <button type="submit">{'Submit >'}</button>
                </form>
            </div>
        </div>
    );
};

export default EditProductPage;
