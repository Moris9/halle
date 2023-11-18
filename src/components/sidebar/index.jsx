import { HiX } from "react-icons/hi";
import {Link} from "react-router-dom";
import {IoLinkSharp} from "react-icons/io5";
import {IoPerson ,IoPeople , IoBag, IoServer} from "react-icons/io5";

import {BiCategory, BiLogOut, BiMoney, BiSolidServer} from "react-icons/bi";
const Sidebar = ({ open, onClose }) => {

  const AdminNavigation = [
    { name: 'داشبورد', href: '/admin/dashboard',icon:<BiSolidServer/>, current: document.URL.endsWith('dashboard') },
    { name: 'کابران', href: '/admin/users',icon:<IoPeople/>, current: document.URL.endsWith('users') },
    { name: 'متخصصین', href: '/admin/experts',icon: <IoPerson/>, current: document.URL.endsWith('expertsss') },
    { name: 'دسته بندی ها', href: '/admin/categories',icon:<BiCategory/>, current: document.URL.endsWith('categories') },
    { name: 'ساب کتگوری ها', href: '/admin/sub-categories',icon:<IoBag/>, current: document.URL.endsWith('sub-categories') },
    { name: 'سرویس ها', href: '/admin/services',icon:<IoServer/>, current: document.URL.endsWith('services') },
    { name: 'نظرات', href: '/admin/comments',icon:<IoLinkSharp/> ,current: document.URL.endsWith('comments') },
  ]

  const SpecialistNavigation = [
    {name: 'داشبورد' , href: '/specialist/dashboard', icon: <BiSolidServer/> , current: document.URL.endsWith('dashboard')},
    {name: 'عضویت ویژه' , href: '/specialist/vip', icon: <BiMoney/> , current: document.URL.endsWith('vip')},
    {name: 'پروفایل' , href: '/specialist/profile', icon: <IoPerson/> , current: document.URL.endsWith('profile')}
  ]

  const UserNavigation = [
    {name: 'داشبورد' , href: '/user/dashboard', icon: <BiSolidServer/> , current: document.URL.endsWith('dashboard')},
    {name: 'پروفایل' , href: '/user/profile', icon: <IoPerson/> , current: document.URL.endsWith('profile')},
    {name: 'خروج' , href: '/user/logout', icon: <BiLogOut/> , current: document.URL.endsWith('logout')}
  ]

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mt-[10px] flex items-center`}>
        <div className="mt-1 ml-1 font-poppins text-6xl p-5 logo-font font-bold uppercase">
          خدمت از ما
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        {((document.URL.includes('specialist') ? SpecialistNavigation : (document.URL.includes('admin') ?  AdminNavigation : UserNavigation)).map((item) => (
            <Link
                key={item.name}
                to={item.href}
                className="text-gray-800 hover:text-gray-500 px-3 py-2 text-sm font-medium"
            >
              <div className="relative mb-3 flex hover:cursor-pointer">
                <li className="my-[3px] flex cursor-pointer items-center px-8">
          <span className="font-bold text-brand-500 dark:text-white">
            {item.icon}
          </span>
                  <p className="leading-1 ml-4 flex font-bold text-navy-700 dark:text-white">{item.name}</p>
                </li>
                {item.current && (
                    <div className="absolute right top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400"></div>
                )}
              </div>
            </Link>
        )))}
      </ul>



      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
