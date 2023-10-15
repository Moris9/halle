import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./view/Home.jsx";
import AdminPanel from "./view/admin/index.jsx"
import Users from "./view/admin/Users.jsx";
import Experts from "./view/admin/Experts.jsx";
import Comments from "./view/admin/Comments.jsx";
import Category from "./view/admin/categories/Category.jsx";
import Services from "./view/admin/services/Services.jsx";
import SubCategory from "./view/admin/subCategories/SubCategory.jsx";
import ExpertDashboard from "./view/Expert/index.jsx";
import VIP from "./view/Expert/VIP.jsx";
import ProfileOverview from "./view/Expert/profile/index.jsx";
function App() {
    const navigation = [
        { element: <Home/>, path: '/' },
        { element: <AdminPanel/>, path: '/admin/dashboard' },
        { element: <Users/>, path: '/admin/users' },
        { element: <Experts/>, path: '/admin/experts' },
        { element: <Category/>, path: '/admin/categories' },
        { element: <Comments/>, path: '/admin/comments' },
        { element: <Services/>, path: '/admin/services' },
        { element: <SubCategory/>, path: '/admin/sub-categories' },
        { element: <ExpertDashboard/> , path: '/expert/dashboard'},
        { element: <VIP/> , path: '/expert/vip'},
        { element: <ProfileOverview/> , path: '/expert/profile'}
    ]
  return (
    <>
        <BrowserRouter>
            <Routes>
                {
                    navigation.map((item)=>(
                        <Route path={item.path}  key={item.id} exact element={item.element} />
                    ))
                }
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
