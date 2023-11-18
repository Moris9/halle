import Card from "../../../../components/card";

const General = ({user , loading}) => {

  return (

      loading ? (
          <Card extra={"w-full h-full p-3"}>
            <form>
              <div className="mt-2 mb-8 w-full">
                <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                  اطلاعات شما
                </h4>
                <p className="mt-2 px-2 text-base text-gray-600">
                  {user.bio || 'درباره خودتان بنویسید'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 px-2">
                <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">تخصص</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    {user.service.title}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">شماره تلفن</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    {user.tel}
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">محل کار</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    {user.address || 'محل کارتان را وارد کنید'}
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">تاریخ تولد</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    {user.birthday || 'تاریخ تولدتان را وارد کنید'}
                  </p>
                </div>
              </div>
            </form>
          </Card>

      ) : ('')

  );
};

export default General;
