import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "../../components/widget/Widget.jsx";
import Admin from "../../layouts/AdminLayout.jsx";
import {Helmet} from "react-helmet";
import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";

const AdminDashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //send GET request to API catch all category
        axiosClient.get(`/admin/dashboard`)
            .then((response) => {
                setData(response.data);
                setLoading(true);
            })
            .catch((error) => {
                console.error('خطا در درخواست به API Laravel:', error);
            });
    }, []);


    return (
    <Admin currentRoute="داشبورد">
        <Helmet>
            <title>خدمت از ما-داشبورد</title>
        </Helmet>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"فروش هفتگی"}
          subtitle={"5000 تومان"}
        />

        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"تعداد متخصصین"}
          subtitle={data.expertCount}
        />

          <Widget
              icon={<MdDashboard className="h-6 w-6" />}
              title={"متخصصین نیاز به تایید"}
              subtitle={data.expertUnverifiedCount}
          />
          <Widget
              icon={<MdDashboard className="h-6 w-6" />}
              title={"تعداد کاربران"}
              subtitle={data.usersCount}
          />
      </div>

    </Admin>
  );
};

export default AdminDashboard;
