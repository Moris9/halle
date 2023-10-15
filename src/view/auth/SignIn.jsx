import InputField from "../../components/fields/InputField";
import Checkbox from "../../components/checkbox";
import Auth from "../../layouts/AuthLayout.jsx";
import {useState} from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";


export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: ''});
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

  }

  return (
      <Auth>
        <Helmet>
          <title>خدمت از ما-ورود</title>
        </Helmet>
        <div className="flex w-full justify-center">
          {/* Sign in section */}
          <div className="mt-16 mb-16 h-full w-[500px] px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
            <h4 className="mb-6 text-4xl font-bold text-navy-700 dark:text-white">
              ورود به حساب کاربری
            </h4>
            <form onSubmit={handleSubmit}>

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
                  type="password"
                  name="password"
                  onChange={handleChange}
              />
              {/* Checkbox */}
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex items-center">
                  <Checkbox />
                  <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                    فراموشم نکن!
                  </p>
                </div>
                <a
                    className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                    href=" "
                >
                  رمز عبورم را فراموش کردم؟
                </a>
              </div>
              <button type="submit" className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                ورود به حساب کاربری
              </button>
            </form>

            {error && <p className="text-red-600">{error}</p>}
            <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            آیا حساب کاربری ندارید؟
          </span>
              <Link
                  to="/register"
                  className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              >
                ایجاد حساب
              </Link>
            </div>
          </div>
        </div>

      </Auth>
  );
}
