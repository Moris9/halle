import Admin from "../../../layouts/AdminLayout.jsx.jsx";
import InputField from "../../../components/fields/InputField.jsx";
import {useState} from "react";
import axios from "axios";
import {useStateContext} from "../../../Contex/ContextProvider.jsx";

export default function CreateCategory({props}) {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    const {user} = useStateContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('user_id', user.id);
        formData.append('slug', slug);
        formData.append('image', image);
        formData.append('description', description);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/category` ,formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('درخواست موفقیت‌آمیز بود: ', response.data);

            setName('');
            setSlug('')
            setImage(null);
            setDescription('');
            window.location.href = "/admin/category";
        } catch (error) {
            console.error('خطا در ارسال درخواست: ', error);
        }
    };


    return (
        <>
            <Admin currentRoute="ایجاد کتگوری">
                {/* Card widget */}

                {/* Tables & Charts */}
                <div className="mt-5 grid grid-cols-1">
                    <form onSubmit={handleSubmit}>
                        <InputField
                            variant="category"
                            label="نام*"
                            placeholder="اسم کتگوری"
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            id="image"
                            name="image"
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />

                        <InputField
                            variant="category"
                            extra="mb-3"
                            label="توضیحات*"
                            id="description"
                            name="description"
                            placeholder="توضیحات"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                        />

                        <button  type='submit' className="linear mt-2 w-full rounded-xl bg-orange-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-orange-700 active:bg-orange-200 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-200 dark:active:bg-orange-200">
                            ذخیره
                        </button>
                    </form>
                </div>
            </Admin>

        </>)
}