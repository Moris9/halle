import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";
import Admin from "../../../layouts/AdminLayout.jsx";
import InputField from "../../../components/fields/InputField.jsx";

function ExpertProfileEdit() {
    const [bio, setBio] = useState('');
    const [tel, setTel] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        //send GET request to API catch all category
        axiosClient.get(`/expert/dashboard`)
            .then((response) => {
                setBio(response.data.expertDetails.bio)
                setTel(response.data.expertDetails.tel)
                setAddress(response.data.expertDetails.address)
            })
            .catch((error) => {
                console.error('خطا در درخواست به API Laravel:', error);
            });
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('bio', bio);
        formData.append('tel', tel);
        formData.append('address', address);

        try {
            await axiosClient.post(`/expert-profile`, formData);
            setBio('');
            setTel('')
            setAddress('');
            window.location.href = "/specialist/profile";
        } catch (error) {
            console.error('خطا در ارسال درخواست: ', error);
        }
    };



    return (
        <>
            <Admin currentRoute="تغییر پروفایل">
                {/* Card widget */}

                {/* Tables & Charts */}
                <div className="mt-5 grid grid-cols-1">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <label htmlFor="bio">درباره شما</label>
                        <textarea
                            placeholder="درباره شما"
                            id="bio"
                            name="bio"
                            value={bio}
                            className="w-full mt-5"
                            rows="8"
                            onChange={(e) => setBio(e.target.value)}
                        ></textarea>

                        <InputField
                            variant="tel"
                            label="شماره تماس*"
                            placeholder="شماره تماستان را وارد کنید"
                            id="tel"
                            type="text"
                            name="tel"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                        />

                        <InputField
                            variant="tel"
                            label="محل کار*"
                            placeholder="محل کار تان را وارد کنید"
                            id="tel"
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />


                        <button  type='submit' className="linear mt-2 w-full rounded-xl bg-orange-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-orange-700 active:bg-orange-200 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-200 dark:active:bg-orange-200">
                            ذخیره
                        </button>
                    </form>
                </div>
            </Admin>

        </>
    )
}

export default ExpertProfileEdit