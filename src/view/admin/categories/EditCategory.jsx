import InputField from "../../../components/fields/InputField.jsx";
import Admin from "../../../layouts/AdminLayout.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import axiosClient from "../../axios-client.js";

export default function EditCategory() {
    const { id } = useParams();
    const [data,setData] = useState('')
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        // Fetch data to edit using the 'id' from the URL
        axiosClient.get(`/admin/categories/${id}`)
            .then(response => {
                setData(response.data);
                setTitle(response.data.title)
                setSlug(response.data.slug)
                setIcon(response.data.icon)
            })
            .catch(error => {
                console.error('Error fetching data to edit:', error);
            });
    }, [id]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create a FormData object to send the form data and image
        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append('title', title);
        formData.append('slug', slug);

        if(icon!==null){
            formData.append('icon', icon)
        }
        // Send a PUT request with the FormData
        axiosClient.post(`/admin/categories/${id}`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data', // Replace with your desired content type
            },
        })
            .then(response => {
                console.log('Data updated successfully:', response.data);
                // Redirect to the data list or perform other actions
                window.location.href = "/admin/categories";
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    };

    const handleIconChange = (e) => {
        const selectedIcon = e.target.files[0];
        setIcon(selectedIcon);
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
                        <InputField
                            variant="category"
                            extra="mb-3"
                            label="عکس"
                            id="icon"
                            type="file"
                            name="icon"
                            onChange={handleIconChange}
                        />
                        <div className="p-5 ">
                            <img src={`http://localhost:8000/images/category/${data.icon}`} alt="image"/>
                        </div>


                        <button  type="submit" className="linear mt-2 w-full rounded-xl bg-orange-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-orange-700 active:bg-orange-200 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-200 dark:active:bg-orange-200">
                            ذخیره
                        </button>
                    </form>
                </div>
            </Admin>

  )
}