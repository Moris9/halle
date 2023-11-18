import Banner from "./components/Banner";
import General from "./components/General";
import Upload from "./components/Upload";
import Admin from "../../../layouts/AdminLayout.jsx";
import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";

const ExpertProfileOverview = () => {
    const [user, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                // Send req to current user
                await axiosClient.get('/expert/dashboard', ).then((response)=>{
                    setCurrentUser(response.data.expertDetails);
                    setLoading(true);
                })

            } catch (error) {
                console.error('Error fetching current user:', error);
            }
        };
        fetchCurrentUser();
    }, []);

    console.log(user)
    return (
   <Admin>
       <div className="flex w-full flex-col gap-5">
           <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
               <div className="col-span-4 lg:!mb-0">
                   <Banner user={user} loading={loading}/>
               </div>


               <div className="z-0 col-span-5 lg:!mb-0">
                   <Upload />
               </div>
           </div>

           <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
               <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
                   <General user={user} loading={loading} />
               </div>

           </div>
       </div>
   </Admin>
  );
};

export default ExpertProfileOverview;
