import {useState} from "react";
import Auth from "../../layouts/AuthLayout.jsx";
import {Helmet} from "react-helmet";
import InputField from "../../components/fields/InputField.jsx";
import {Link} from "react-router-dom";



function SingUp() {
    const [formData, setFormData] = useState({ email: '', password: ''});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <Auth>
            <Helmet>
                <title>حله-ایجاد حساب کاربری</title>
            </Helmet>
            <div className="flex justify-center">
                {/* Sign in section */}
                <div className="mt-16 mb-16 h-full w-[500px] px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
                    <h4 className="mb-5 text-4xl font-bold text-navy-700 dark:text-white">
                        ایجاد حساب کاربری
                    </h4>

                    <form onSubmit={handleSubmit}>

                        <InputField
                            variant="auth"
                            extra="mb-3"
                            label="نام*"
                            placeholder="نام و نام خانوادگی"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            type="text"
                        />
                        {/* Email */}
                        <InputField
                            variant="auth"
                            extra="mb-3"
                            label="ایمیل*"
                            placeholder="mail@simmmple.com"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            type="email"
                        />

                        {/* Password */}
                        <InputField
                            variant="auth"
                            extra="mb-3"
                            label="رمزعبور*"
                            placeholder="Min. 8 characters"
                            id="password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                        />

                        {/* Password */}
                        <InputField
                            variant="auth"
                            extra="mb-3"
                            label="رمزعبور*"
                            placeholder="رمزعبور را دوباره وارد کنید"
                            id="c_password"
                            name="c_password"
                            type="password"
                            onChange={handleChange}
                        />

                        <button type="submit" className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                            ایجاد حساب کاربری
                        </button>
                    </form>

                    <div className="mt-4">
                        <Link to="/login" className="text-sm font-medium text-blue-700 ">
                            آیا حساب کاربری دارید؟
                        </Link>
                    </div>
                </div>
            </div>

        </Auth>
    )

}
export default SingUp