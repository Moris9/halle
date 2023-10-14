import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "../../components/widget/Widget.jsx";
import Admin from "../../layouts/AdminLayout.jsx";
import {Helmet} from "react-helmet";

const AdminDashboard = () => {
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
          subtitle={"+20"}
        />

          <Widget
              icon={<MdDashboard className="h-6 w-6" />}
              title={"متخصصین نیاز به تایید"}
              subtitle={"+2"}
          />
          <Widget
              icon={<MdDashboard className="h-6 w-6" />}
              title={"تعداد کاربران"}
              subtitle={"+20"}
          />
      </div>

    </Admin>
  );
};

export default AdminDashboard;
