import { useEffect, useState } from "react";
import TableProductList from "../component/tableProductList";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/pos/api/listproduct');
                setProducts(response.data);
            } catch (error) {
                console.log('Error fetching products: ', error);
            }
        };
        fetchProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="text-left">
            <div className='flex'>
                <h1 className='flex-none text-left'>Daftar Produk</h1>
                <div className='grow'></div>
                <div>
                    <button><Link to={`/add-product`}>+ Tambah Produk</Link></button>
                </div>
            </div>
            <div>
                <TableProductList
                    products={currentProducts}
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </div>
    )
};

export default ProductListPage;
