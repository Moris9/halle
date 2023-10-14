import InputField from "../../../components/fields/InputField.jsx";
import Admin from "../../../layout/AdminLayout.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import {Navigate, useLocation} from "react-router-dom";
import {useStateContext} from "../../../Contex/ContextProvider.jsx";

export default function EditCategory({props}) {
    const { id } = useParams();
    const [data,setData] = useState('')
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    const {user} = useStateContext();

    useEffect(() => {
        // Fetch data to edit using the 'id' from the URL
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/category/${id}`)
            .then(response => {
                setData(response.data);
                setName(response.data.name)
                setSlug(response.data.slug)
                setImage(response.data.image)
                setDescription(response.data.description)
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

        formData.append('name', name);
        formData.append('slug', slug);
        formData.append('description', description);

        if(image!==null){
            formData.append('image', image)
        }
        // Send a PUT request with the FormData
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/category/${id}`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data', // Replace with your desired content type
            },
        })
            .then(response => {

                console.log('Data updated successfully:', response.data);
                // Redirect to the data list or perform other actions
                window.location.href = "/admin/category";
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
        <>

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
                            id="name"
                            type="text"
                            value={name}
                            name="name"
                            onChange={(e) => setName(e.target.value)}
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
                            id="image"
                            type="file"
                            name="image"
                            onChange={handleIconChange}
                        />
                        <div className="p-5 ">
                            <img src={`https:api.azmazanjan.ir/images/category/${data.image}`} alt="image"/>
                        </div>
                        <InputField
                            variant="category"
                            extra="mb-3"
                            label="توضیحات*"
                            id="description"
                            placeholder="توضیحات"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            name="description"
                        />

                        <button  type="submit" className="linear mt-2 w-full rounded-xl bg-orange-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-orange-700 active:bg-orange-200 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-200 dark:active:bg-orange-200">
                            ذخیره
                        </button>
                    </form>
                </div>
            </Admin>

        </>)
}