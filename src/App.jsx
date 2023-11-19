import './App.css'
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom';
import Home from "./view/Home.jsx";
import AdminPanel from "./view/admin/index.jsx"
import Users from "./view/admin/Users.jsx";
import Experts from "./view/admin/Experts.jsx";
import Comments from "./view/admin/Comments.jsx";
import Category from "./view/admin/categories/Category.jsx";
import Services from "./view/Services.jsx";
import SubCategory from "./view/admin/subCategories/SubCategory.jsx";
import ExpertDashboard from "./view/Expert/index.jsx";
import VIP from "./view/Expert/VIP.jsx";
import ProfileOverview from "./view/Expert/profile/index.jsx";
import UserDashboard from "./view/User/index.jsx";
import SignIn from "./view/auth/SignIn.jsx";
import SingUp from "./view/auth/Singup.jsx";
import AboutUs from "./view/AboutUs.jsx";
import ExpertRegister from "./view/auth/ExpertRegister.jsx";
import Price from "./view/Price.jsx";
import ServicesPanel from "./view/admin/services/Services.jsx";
import MainService from "./view/MainService.jsx";
import {ContextProvider} from "./Contex/ContextProvider.jsx";
import CreateCategory from "./view/admin/categories/CreateCategory.jsx";
import EditCategory from "./view/admin/categories/EditCategory.jsx";
import SubCreateCategory from "./view/admin/subCategories/SubCreateCategory.jsx";
import EditSubCategory from "./view/admin/subCategories/EditSubCategory.jsx";
import CreateServices from "./view/admin/services/CreateServices.jsx";
import EditServices from "./view/admin/services/EditServices.jsx";
import ExpertProfileEdit from "./view/Expert/profile/ExpertProfileEdit.jsx";
import axiosClient from "./view/axios-client.js";
import {useEffect, useState} from "react";

function App() {
    const [adminCheck, setAdmin] = useState(false);
    const [expert, setExpert] = useState(false);
    const PrivateRoute = () => {
        const token = localStorage.getItem('ACCESS_TOKEN');
        // If authorized, return an outlet that will render child elements
        // If not, return element that will navigate to login page
        return token == null  ? <Navigate to="/login" /> : <Outlet />;
    }

    const PrivateCheckRoute = () => {
        const token = localStorage.getItem('ACCESS_TOKEN');

        if (token == null) {
            return <Navigate to="/login" />;
        }

        useEffect(() => {
            const fetchCurrentUser = async () => {
                try {
                    const response = await axiosClient.post('/user');
                    const userType = response.data.type;
                    setAdmin(userType === 'admin');
                    setExpert(userType === 'expert');

                } catch (error) {
                    console.error('Error fetching current user:', error);
                }
            };
            if (token) {
                fetchCurrentUser();
            }}, [token]);

        return adminCheck || expert ? <Outlet /> : <Navigate to="/login" />;

    }

    const home = [
        { element: <Home/>, path: '/' },
        { element: <AboutUs/>, path: '/about-us' },
        { element: <ExpertRegister/> , path: "/providers"},
        { element: <Services/> , path : '/services'},
        { element: <MainService/> , path : '/sub-services'},
        { element: <Price/> , path: "/prices"},
        { element: <SignIn/> , path: '/login'},
        { element: <SingUp/> , path: '/register'},
    ]
    const admin = [
        { element: <AdminPanel/>, path: '/admin/dashboard' },
        { element: <Users/>, path: '/admin/users' },
        { element: <Experts/>, path: '/admin/experts' },
        { element: <Category/>, path: '/admin/categories' },
        { element: <CreateCategory/>, path: '/admin/categories/create' },
        { element: <EditCategory/>, path: '/admin/categories/edit/:id' },
        { element: <Comments/>, path: '/admin/comments' },
        { element: <SubCategory/>, path: '/admin/sub-categories' },
        { element: <SubCreateCategory/>, path: '/admin/sub-categories/create' },
        { element: <EditSubCategory/>, path: '/admin/sub-categories/edit/:id' },
        { element: <ServicesPanel/>, path: '/admin/services' },
        { element: <CreateServices/>, path: '/admin/services/create' },
        { element: <EditServices/>, path: '/admin/services/edit/:id' },
    ]

    const specialist = [
        { element: <ExpertDashboard/> , path: '/specialist/dashboard'},
        { element: <VIP/> , path: '/specialist/vip'},
        { element: <ExpertProfileEdit/> , path: '/specialist/profile-edit'},
        { element: <ProfileOverview/> , path: '/specialist/profile'},
    ]

    const user = [
        { element: <UserDashboard/> , path: '/dashboard'},
    ]
  return (

      <ContextProvider>
          <BrowserRouter>
                    <Routes>
                        {
                            home.map((item)=>(
                                <Route path={item.path}  key={item.id} exact element={item.element} />
                            ))
                        }
                        <Route path='/admin' element={<PrivateCheckRoute/>}>
                            {
                                admin.map((item)=>(
                                    <Route path={item.path}  key={item.id} exact element={item.element} />
                                ))
                            }
                        </Route>
                        <Route path='/specialist' element={<PrivateCheckRoute/>}>
                            {
                                specialist.map((item)=>(
                                    <Route path={item.path}  key={item.id} exact element={item.element} />
                                ))
                            }
                        </Route>
                        <Route path='/' element={<PrivateRoute/>}>
                            {
                                user.map((item)=>(
                                    <Route path={item.path}  key={item.id} exact element={item.element} />
                                ))
                            }
                        </Route>
                    </Routes>
                </BrowserRouter>
      </ContextProvider>
  )
}

export default App
