import {Disclosure, Menu, Transition} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from "react-router-dom";
import logo from "../assets/logo/PNG/Logo/Hale Logo Fr.png"
import {useStateContext} from "../Contex/ContextProvider.jsx";
import { Fragment } from 'react'
const navigation = [
    { name: 'صفحه اصلی', href: '/', current: true },
    { name: 'قیمت خدمات', href: '/prices', current: false },
    { name: 'پیوستن متخصصین', href: '/providers', current: false },
    { name: 'درباره ما', href: '/about-us', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function Navbar() {
    const {token} = useStateContext();

    return (
        <Disclosure as="nav" className="bg-white w-full pt-6">
                {({ open }) => (
                    <>
                        <div className="mx-auto px-2 pt-5 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start mr-20">
                                    <Link to="/" className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-15 w-24 sm:scale-[2.2]"
                                            src={logo}
                                            alt="وبسایت خدماتی حله"
                                        />
                                    </Link>
                                    <div className="hidden sm:mr-12 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className={classNames(
                                                        item.current ? 'text-black' : 'text-gray-800 hover:text-gray-500',
                                                        'px-3 py-2 text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-40 sm:pr-0">
                                    {token ? (
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">Open user menu</span>
                                                        <span
                                                            className="h-10 w-10 rounded-full bg-blue-500 text-xs items-center justify-center cursor-pointer text-white flex"
                                                        >پروفایل</span>
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="/dashboard"
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    پنل کاربری
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="/profile"
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    پروفایل
                                                                </Link>
                                                            )}
                                                        </Menu.Item>

                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    خروج از حساب کاربری
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>

                                    ):(
                                        <Link
                                            to="/login"
                                            className="relative cursor-pointer rounded-full bg-blue-500 text-sm text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 p-2"
                                        >
                                            ورود / ثبت نام
                                        </Link>
                                    )}



                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 max-sm:flex max-sm:flex-col ">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'text-black' : 'text-gray-800 hover:text-gray-500',
                                            'px-3 py-2 text-sm font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
    )
}

export default Navbar