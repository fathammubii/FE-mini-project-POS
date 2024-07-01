import axios from "axios";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

const AddCategoryPage = () => {
    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        const newCetegory = {
            categoryName: data.categoryName
        };

        try {
            await axios.post('http://localhost:8080/pos/api/category/add', newCetegory);
            alert('Category added successfully!');
            navigate('/category-list')

        } catch (error) {
            console.error('Error Adding Category: ', error);
            alert('Error Adding Category.');
        }
    }

    const validationSchema = Yup.object().shape({
        categoryName: Yup.string().required('Nama Kategori wajib diisi')
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema)
    });

    return (
        <div className="text-left">
            <div className='flex'>
                <h1 className='flex-none text-left'>Add Category Form</h1>
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
                        {errors.title && <div className="text-red-500">{errors.categoryName.message}</div>}
                    </div>

                    <br/>
                    <button type="submit">{'Submit >'}</button>
                </form>
            </div>
        </div>

    )
}

export default AddCategoryPage;