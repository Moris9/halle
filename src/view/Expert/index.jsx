import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "../../components/widget/Widget.jsx";
import Admin from "../../layouts/AdminLayout.jsx";
import {Helmet} from "react-helmet";
import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import moment from "moment-jalaali";

const ExpertDashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //send GET request to API catch all category
        axiosClient.get(`/expert/dashboard`)
            .then((response) => {
                setData(response.data.expertDetails);
                setLoading(true);
            })
            .catch((error) => {
                console.error('خطا در درخواست به API Laravel:', error);
            });
    }, []);

    return (
    <Admin currentRoute="داشبورد">
        <Helmet>
            <title>حله-داشبورد</title>
        </Helmet>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          {loading ? (
              <>
                  <Widget
                      icon={<MdBarChart className="h-7 w-7" />}
                      title={"درآمد هفتگی"}
                      subtitle={"5000 تومان"}
                  />

                  <Widget
                      icon={<MdDashboard className="h-6 w-6" />}
                      title={"روز های باقی مانده عضویت ویژه"}
                      subtitle=    {moment(data.vip).locale('fa').format() > moment().locale('fa').format() ? (
                          (moment(data.vip).locale('fa').fromNow())
                      ) : "عضو ویژه نمی باشید"}
                  />

                  <Widget
                      icon={<MdDashboard className="h-6 w-6" />}
                      title={"تخصص شما"}
                      subtitle={data.service.title}
                  />
              </>
          ):(
              ''
          )}


      </div>

        <div className="mt-6 p-5">
            <h1 className="text-4xl font-bold">نظرات</h1>
        </div>

    </Admin>
  );
};

export default ExpertDashboard;
