import Card from "../../../../components/card";

const Banner = () => {
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

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          محمد عبدالرحمانی
        </h4>
        <p className="text-base font-normal text-gray-600">برنامه نویس full-stack</p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            2023/03/02
          </p>
          <p className="text-sm font-normal text-gray-600">تاریخ عضویت</p>
        </div>
      </div>
    </Card>
  );
};

export default Banner;
