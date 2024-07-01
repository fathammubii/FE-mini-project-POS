import axios from "axios";
import * as Yup from 'yup';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

const EditCategoryPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        categoryName: Yup.string().required('Nama Kategori wajib diisi')
    });

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/pos/api/category/${id}`);
                setValue('categoryName', response.data.categoryName);
            } catch (error) {
                console.error('Error fetching category:', error);
                alert('Error fetching category.');
            }
        };

        fetchCategory();
    }, [id, setValue]);

    const onSubmit = async (data) => {
        const updatedCategory = {
            categoryName: data.categoryName
        };

        try {
            await axios.put(`http://localhost:8080/pos/api/category/updatecategoryname/${id}`, updatedCategory);
            alert('Category updated successfully!');
            navigate('/category-list');
        } catch (error) {
            console.error('Error updating category:', error);
            alert('Error updating category.');
        }
    };

    return (
        <div className="text-left">
            <div className='flex'>
                <h1 className='flex-none text-left'>Edit Category Form</h1>
                <div className='grow'></div>
                <div>
                    <button><Link to={`/category-list`}>{"< Kembali"}</Link></button>
                </div>
            </div>

            <br />
            <hr />

            <div className="'text-left">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h4>Category Name</h4>
                        <input 
                            type="text" 
                            name="categoryName" 
                            {...register('categoryName')}
                            className='border rounded p-2 w-1/2'
                        />
                        {errors.categoryName && <div className="text-red-500">{errors.categoryName.message}</div>}
                    </div>

                    <br/>
                    <button type="submit">{'Submit >'}</button>
                </form>
            </div>
        </div>
    );
}

export default EditCategoryPage;
