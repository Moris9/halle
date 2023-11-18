import Card from "../../../../components/card";
import {Link} from "react-router-dom";

const Upload = () => {
  return (
    <Card className="grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none">
      <div className="col-span-1 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-navy-800">
        <h5 className="text-center text-xl font-bold leading-9 text-navy-700 dark:text-white">
          پروفایلتان را کامل کنید
        </h5>
        <p className="leading-1 mt-10 text-base font-normal text-gray-600">
         پروفایلتان را کامل کنید تا مورد تایید قرار گیرید.
        </p>
        <Link
          to="/specialist/profile-edit"
          className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          تغییر پروفایل
        </Link>
      </div>
    </Card>
  );
};

export default Upload;
