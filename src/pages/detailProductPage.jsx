import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailProductPage = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/pos/api/detailproduct/${id}`);
                const productData = response.data.length > 0 ? response.data[0] : null;
                setProductDetails(productData);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (!productDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='flex'>
                <h1 className='flex-none text-left'>Detail Produk</h1>
                <div className='grow'></div>
                <div>
                    <button><Link to={`/product-list`}>{"< Kembali"}</Link></button>
                </div>
            </div>

            <hr />
            <br />
            <div className="grid grid-cols-3 text-left">

                <div className="flex flex-col space-y-2">
                    <div>ID Produk</div>
                    <div>Nama Produk</div>
                    <div>Harga Satuan</div>
                    <div>URL Gambar</div>
                    <div>ID Kategori</div>
                    <div>Nama Kategori</div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div>: {productDetails.productId}</div>
                    <div>: {productDetails.title}</div>
                    <div>: Rp. {productDetails.price}</div>
                    <div className="truncate hover:text-balance">: {productDetails.image}</div>
                    <div>: {productDetails.categoryId}</div>
                    <div>: {productDetails.categoryName}</div>
                </div>

                <div className="ml-auto items-center justify-center">
                    <img src={productDetails.image} alt='gambar-product' className="max-h-40" />
                </div>

            </div>
        </div>
    );
}

export default DetailProductPage;
