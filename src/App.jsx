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
function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                {/**/}
                <Route path="/" exact element={<Home/>} />
                <Route path="/admin/dashboard" exact element={<AdminPanel/>}/>
                <Route path="/admin/users" exact element={<Users/>}/>
                <Route path="/admin/experts" exact element={<Experts/>}/>
                <Route path="/admin/comments" exact element={<Comments/>}/>
                <Route path="/admin/categories" exact element={<Category/>}/>
                <Route path="/admin/sub-categories" exact element={<SubCategory/>}/>
                <Route path="/admin/services" exact element={<Services/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
