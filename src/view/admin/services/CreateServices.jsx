import Admin from "../../../layouts/AdminLayout.jsx";
import InputField from "../../../components/fields/InputField.jsx";
import {useEffect, useState} from "react";
import {useStateContext} from "../../../Contex/ContextProvider.jsx";
import axiosClient from "../../axios-client.js";

export default function CreateServices() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [subcategory, setSubCategory] = useState('');

    const {token} = useStateContext();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // ارسال درخواست GET به API Laravel
        axiosClient.get(`/admin/subcategories`)
            .then((response) => {
                setData(response.data);
                setLoading(true);
            })
            .catch((error) => {
                console.error('خطا در درخواست به API Laravel:', error);
            });
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('slug', slug);
        formData.append('subcategory_id', subcategory);

        try {
            await axiosClient.post(`/admin/services`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });
            setTitle('');
            setSlug('')
            setSubCategory('')
            window.location.href = "/admin/services";
        } catch (error) {
            console.error('خطا در ارسال درخواست: ', error);
        }
    };


    return (

            <Admin currentRoute="ایجاد سرویس">
                <div className="mt-5 grid grid-cols-1">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <InputField
                            variant="category"
                            label="نام*"
                            placeholder="اسم سرویس"
                            id="name"
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <InputField
                            variant="category"
                            label="url*"
                            placeholder="URl سرویس"
                            id="slug"
                            type="text"
                            name="slug"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                        />

                        <div className="">
                            <label htmlFor="category" className="text-sm text-navy-700 dark:text-white">ساب کتگوری*</label>
                            <select name="category_id"  value={subcategory}
                                    onChange={(e) => setSubCategory(e.target.value)}
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl  border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 text-black dark:text-white" id="category">
                                <option >یک ساب کتگوری را انتخاب کنید</option>

                                {loading ? (
                                    data.map(item=>{
                                        return (<option key={item.id} value={item.id}>{item.title}</option>)
                                    })
                                ):("در حال بارگذاری")}

                            </select>
                        </div>



                        <button  type='submit' className="linear mt-2 w-full rounded-xl bg-orange-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-orange-700 active:bg-orange-200 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-200 dark:active:bg-orange-200">
                            ذخیره
                        </button>
                    </form>
                </div>
            </Admin>

        )
}