import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryTable from "../components/CategoryTable";
import { fetchCategories } from "../store/categorySlice";

const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);
    const status = useSelector((state) => state.categories.status);
    const error = useSelector((state) => state.categories.error);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="text-left">
            <div className='flex'>
                <h1 className='flex-none text-left'>Daftar Kategori</h1>
                <div className='grow'></div>
                <div>
                    <button><Link to={`/add-category`}>+ Tambah Kategori</Link></button>
                </div>
            </div>
            <div>
                <CategoryTable categories={categories} />
            </div>
        </div>
    );
};

export default CategoryList;
