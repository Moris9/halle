import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "../../components/widget/Widget.jsx";
import Admin from "../../layouts/AdminLayout.jsx";
import {Helmet} from "react-helmet";

const ExpertDashboard = () => {
  return (
    <Admin currentRoute="داشبورد">
        <Helmet>
            <title>خدمت از ما-داشبورد</title>
        </Helmet>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"درآمد هفتگی"}
          subtitle={"5000 تومان"}
        />

        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"روز های باقی مانده عضویت ویژه"}
          subtitle={"+20"}
        />

          <Widget
              icon={<MdDashboard className="h-6 w-6" />}
              title={"تخصص شما"}
              subtitle={"تعمیرکار یخچال"}
          />

      </div>

        <div className="mt-6 p-5">
            <h1 className="text-4xl font-bold">نظرات</h1>
        </div>

    </Admin>
  );
};

export default ExpertDashboard;
