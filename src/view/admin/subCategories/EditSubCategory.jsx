import InputField from "../../../components/fields/InputField.jsx";
import Admin from "../../../layouts/AdminLayout.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import axiosClient from "../../axios-client.js";

export default function EditSubCategory() {
    const { id } = useParams();
    const [data,setData] = useState('')
    const [loading,setLoading]=useState(false);
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [image, setImage] = useState(null);
    const [CategoryData,setCategoryData] = useState('')
    const [category, setCategory] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryResponse = await axiosClient.get(`/category`);
                setCategoryData(categoryResponse.data);

                const subcategoryResponse = await axiosClient.get(`/subcategory/${id}`);
                setData(subcategoryResponse.data);
                setTitle(subcategoryResponse.data.title);
                setSlug(subcategoryResponse.data.slug);
                setImage(subcategoryResponse.data.image);

                setLoading(true); // You can set loading to false when all data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the async function to initiate data fetching
    }, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create a FormData object to send the form data and image
        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append('title', title);
        formData.append('slug', slug);
        formData.append('category_id', category);
        if(image!==null){
            formData.append('image', image)
        }
        // Send a PUT request with the FormData
        axiosClient.post(`/subcategory/${id}`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data', // Replace with your desired content type
            },
        })
            .then(response => {
                console.log('Data updated successfully:', response.data);
                // Redirect to the data list or perform other actions
                // window.location.href = "/admin/sub-categories";
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    };

    const handleIconChange = (e) => {
        const selectedIcon = e.target.files[0];
        setImage(selectedIcon);
    };


    return (
            <Admin currentRoute="تغییر کتگوری">
                {/* Card widget */}

                {/* Tables & Charts */}
                <div className="mt-5 grid grid-cols-1">
                    <form onSubmit={handleSubmit}>
                        <InputField
                            variant="category"
                            extra="mb-3"
                            label="نام*"
                            placeholder="اسم کتگوری"
                            id="title"
                            type="text"
                            value={title}
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <InputField
                            variant="category"
                            extra="mb-3"
                            label="اسلاگ*"
                            placeholder="url slug"
                            id="slug"
                            type="text"
                            value={slug}
                            name="slug"
                            onChange={(e) => setSlug(e.target.value)}
                        />

                        <div className="">
                            <label htmlFor="category" className="text-sm text-navy-700 dark:text-white">کتگوری*</label>
                            <select name="category_id"  value={category} defaultValue={data.id}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl  border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 text-black dark:text-white" id="category">
                                <option >یک کتگوری را انتخاب کنید</option>
                                {loading ?
                                    CategoryData.map(item=>{
                                        return (<option key={item.id} value={item.id} selected={item.id == data.id}>
                                            {item.title}
                                        </option>)
                                    }):'در حال بارگذاری'

                                }

                            </select>
                        </div>

                        <InputField
                            variant="category"
                            extra="mb-3"
                            label="عکس"
                            id="image"
                            type="file"
                            name="image"
                            onChange={handleIconChange}
                        />
                        <div className="p-5 ">
                            <img src={`http://localhost:8000/images/category/${data.image}`} alt="image"/>
                        </div>


                        <button  type="submit" className="linear mt-2 w-full rounded-xl bg-orange-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-orange-700 active:bg-orange-200 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-200 dark:active:bg-orange-200">
                            ذخیره
                        </button>
                    </form>
                </div>
            </Admin>

  )
}