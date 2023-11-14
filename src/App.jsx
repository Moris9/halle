import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
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
import UserProfileOverview from "./view/User/profile/index.jsx";
import SignIn from "./view/auth/SignIn.jsx";
import SingUp from "./view/auth/Singup.jsx";
import AboutUs from "./view/AboutUs.jsx";
import ExpertRegister from "./view/auth/ExpertRegister.jsx";
import Price from "./view/Price.jsx";
import ServicesPanel from "./view/admin/services/Services.jsx";
import MainService from "./view/MainService.jsx";
import {ContextProvider} from "./Contex/ContextProvider.jsx";
function App() {
    const navigation = [
        { element: <Home/>, path: '/' },
        { element: <AboutUs/>, path: '/about-us' },
        { element: <ExpertRegister/> , path: "/providers"},
        { element: <Services/> , path : '/services'},
        { element: <MainService/> , path : '/sub-services'},
        { element: <SignIn/> , path: '/login'},
        { element: <Price/> , path: "/prices"},
        { element: <SingUp/> , path: '/register'},
        { element: <AdminPanel/>, path: '/admin/dashboard' },
        { element: <Users/>, path: '/admin/users' },
        { element: <Experts/>, path: '/admin/experts' },
        { element: <Category/>, path: '/admin/categories' },
        { element: <Comments/>, path: '/admin/comments' },
        { element: <ServicesPanel/>, path: '/admin/services' },
        { element: <SubCategory/>, path: '/admin/sub-categories' },
        { element: <ExpertDashboard/> , path: '/expert/dashboard'},
        { element: <VIP/> , path: '/expert/vip'},
        { element: <ProfileOverview/> , path: '/expert/profile'},
        { element: <UserDashboard/> , path: '/dashboard'},
        { element: <UserProfileOverview/> , path: '/profile'}
    ]
  return (
      <ContextProvider>
          <BrowserRouter>
                <Routes>
                    {
                        navigation.map((item)=>(
                            <Route path={item.path}  key={item.id} exact element={item.element} />
                        ))
                    }
                </Routes>
            </BrowserRouter>
          </ContextProvider>
  )
}

export default App
