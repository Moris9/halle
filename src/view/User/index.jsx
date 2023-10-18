import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "../../components/widget/Widget.jsx";
import Admin from "../../layouts/AdminLayout.jsx";
import {Helmet} from "react-helmet";

const UserDashboard = () => {
  return (
    <Admin currentRoute="داشبورد">
        <Helmet>
            <title>حله-داشبورد</title>
        </Helmet>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"کیف پول"}
          subtitle={"5000 تومان"}
        />

          <Widget
              icon={<MdDashboard className="h-6 w-6" />}
              title={"در حال پیگیر"}
              subtitle={"+3"}
          />

      </div>


    </Admin>
  );
};

export default UserDashboard;
