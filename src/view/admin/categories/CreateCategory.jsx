import Admin from "../../../layouts/AdminLayout.jsx";
import InputField from "../../../components/fields/InputField.jsx";
import {useState} from "react";
import {useStateContext} from "../../../Contex/ContextProvider.jsx";
import axiosClient from "../../axios-client.js";

export default function CreateCategory() {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [icon, setIcon] = useState(null);
    const {token} = useStateContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('slug', slug);
        formData.append('icon', icon);

        try {
            await axiosClient.post(`/admin/categories`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });
            setTitle('');
            setSlug('')
            setIcon(null);
            window.location.href = "/admin/categories";
        } catch (error) {
            console.error('خطا در ارسال درخواست: ', error);
        }
    };


    return (

            <Admin currentRoute="ایجاد کتگوری">
                {/* Card widget */}

                {/* Tables & Charts */}
                <div className="mt-5 grid grid-cols-1">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <InputField
                            variant="category"
                            label="نام*"
                            placeholder="اسم کتگوری"
                            id="name"
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <InputField
                            variant="category"
                            label="url*"
                            placeholder="URl کتگوری"
                            id="slug"
                            type="text"
                            name="slug"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                        />

                        <InputField
                            variant="category"
                            extra="mb-3"
                            label="عکس*"
                            id="icon"
                            name="icon"
                            type="file"
                            onChange={(e) => setIcon(e.target.files[0])}
                        />


                        <button  type='submit' className="linear mt-2 w-full rounded-xl bg-orange-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-orange-700 active:bg-orange-200 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-200 dark:active:bg-orange-200">
                            ذخیره
                        </button>
                    </form>
                </div>
            </Admin>

        )
}