import Dropdown from "../dropdown";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../view/axios-client.js";
import {useStateContext} from "../../Contex/ContextProvider.jsx";
import {FiAlignJustify} from "react-icons/fi";
import AxiosClient from "../../view/axios-client.js";

const Navbar = (props) => {
  const { brandText,onOpenSidenav } = props;
  const [user, setCurrentUser] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        // Send req to current user
        await axiosClient.post('/user', ).then((response)=>{
          setCurrentUser(response.data);
        })

      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };
    fetchCurrentUser();
  }, []);

  const handleLogout = async () => {
    try {
      // Make an API request to log the user out
      await AxiosClient.post(`/logout`);
      // Remove the access token from local storage
      localStorage.removeItem('ACCESS_TOKEN');
      // Redirect to the login page or update the UI
      window.location.href = "/";
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }


  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
      >
          <FiAlignJustify className="h-5 w-5" />
        </span>
      <div className="ml-[6px]">
        <div className="h-6 sm:w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:text-gray-400 dark:text-white dark:hover:text-white"
            href=" "
          >
            صفحه
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:text-gray-400 dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>

      </div>
      {/* Profile & Dropdown */}
      {user ? (
          <Dropdown
              button={
                <span
                    className="h-14 w-14 rounded-full bg-blue-500 text-xs items-center justify-center cursor-pointer text-white flex"
                >پروفایل</span>
              }
              children={
                <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {user.name}
                      </p>{" "}
                    </div>
                  </div>
                  <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

                  <div className="flex flex-col p-4">

                    <a
                        onClick={handleLogout} role="button"
                        className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                    >
                      خروج از حساب کاربری
                    </a>
                  </div>
                </div>
              }
              classNames={"py-2 top-8 max-sm:!right-[-200px] sm:-right-[180px] w-max"}
          />
      ):(
          ''
      )
      }
     </nav>
  );
};

export default Navbar;
