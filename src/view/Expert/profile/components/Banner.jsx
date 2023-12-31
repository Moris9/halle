import Card from "../../../../components/card";

import moment from "moment-jalaali";

const Banner = ({user , loading}) => {

    return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: '' }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src='https://avatars.githubusercontent.com/u/53135000?v=4' alt="" />
        </div>
      </div>
        {loading ?
        <>
            {/* Name and position */}
            <div className="mt-16 flex flex-col items-center">
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                    {user.user.name}
                </h4>
                <p className="text-base font-normal text-gray-600">{user.service.title}</p>
            </div>

            {/* Post followers */}
            <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
                    <p className="text-sm font-normal text-gray-600">محبوبیت</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-navy-700 dark:text-white">
                        {user.active == 0 ? "خیر" : 'بله'}
                    </p>
                    <p className="text-sm font-normal text-gray-600">عضویت ویژه</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-navy-700 dark:text-white">
                        {moment(user.created_at).format('l')}
                    </p>
                    <p className="text-sm font-normal text-gray-600">تاریخ عضویت</p>
                </div>
            </div>
        </>
    : ''
}
    </Card>
  );
};

export default Banner;
