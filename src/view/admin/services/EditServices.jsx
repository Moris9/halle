import InputField from "../../../components/fields/InputField.jsx";
import Admin from "../../../layouts/AdminLayout.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import axiosClient from "../../axios-client.js";

export default function EditServices() {
    const { id } = useParams();
    const [data,setData] = useState('')
    const [loading,setLoading]=useState(false);
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [SubCategoryData,setSubCategoryData] = useState('')
    const [subcategory, setSubCategory] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryResponse = await axiosClient.get(`/admin/subcategories`);
                setSubCategoryData(categoryResponse.data);

                const subcategoryResponse = await axiosClient.get(`/admin/services/${id}`);
                setData(subcategoryResponse.data);
                setTitle(subcategoryResponse.data.title);
                setSlug(subcategoryResponse.data.slug);

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
        formData.append('subcategory_id', subcategory);

        // Send a PUT request with the FormData
        axiosClient.post(`/admin/services/${id}`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data', // Replace with your desired content type
            },
        })
            .then(response => {
                console.log('Data updated successfully:', response.data);
                // Redirect to the data list or perform other actions
                window.location.href = "/admin/services";
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    };



    return (
            <Admin currentRoute="تغییر سرویس">
                {/* Card widget */}

                {/* Tables & Charts */}
                <div className="mt-5 grid grid-cols-1">
                    <form onSubmit={handleSubmit}>
                        <InputField
                            variant="category"
                            extra="mb-3"
                            label="نام*"
                            placeholder="اسم سرویس"
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
                            <label htmlFor="category" className="text-sm text-navy-700 dark:text-white">ساب کتگوری*</label>
                            <select name="category_id"  value={subcategory} defaultValue={data.id}
                                    onChange={(e) => setSubCategory(e.target.value)}
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl  border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 text-black dark:text-white" id="category">
                                <option >یک کتگوری را انتخاب کنید</option>
                                {loading ?
                                    SubCategoryData.map(item=>{
                                        return (<option key={item.id} value={item.id} selected={item.id == data.id}>
                                            {item.title}
                                        </option>)
                                    }):'در حال بارگذاری'

                                }

                            </select>
                        </div>

                        <button  type="submit" className="linear mt-2 w-full rounded-xl bg-orange-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-orange-700 active:bg-orange-200 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-200 dark:active:bg-orange-200">
                            ذخیره
                        </button>
                    </form>
                </div>
            </Admin>

  )
}