export const UsersTable = [
  {
    Header: "نام",
    accessor: "name",
  },
  {
    Header: "ایمیل",
    accessor: "email",
  },
  {
    Header: "شماره تلفن",
    accessor: "tel",
  },
  {
    Header: "تاریخ",
    accessor: "created_at",
  },
  {
    Header: "تنظیمات",
    accessor: "id",
  },
];

export const ExpertTable = [
  {
    Header: "نام",
    accessor: "name",
  },
  {
    Header: "ایمیل",
    accessor: "email",
  },
  {
    Header: "شماره تلفن",
    accessor: "tel",
  },
  {
    Header: "تاریخ",
    accessor: "created_at",
  },
  {
    Header: "تنظیمات",
    accessor: "id",
  },
];


export const CategoriesTable = [
  {
    Header: "نام",
    accessor: "title",
  },
  {
    Header: "عکس",
    accessor: "icon",
  },
  {
    Header: "تاریخ",
    accessor: "created_at",
  },
  {
    Header: "تنظیمات",
    accessor: "id",
  },
];

export const SubCategoriesTable = [
  {
    Header: "نام",
    accessor: "title",
  },
  {
    Header: "کتگوری",
    accessor: "category.title",
  },
  {
    Header: "تاریخ",
    accessor: "created_at",
  },
  {
    Header: "تنظیمات",
    accessor: "id",
  },
];

export const ServicesTable = [
  {
    Header: "نام",
    accessor: "title",
  },
  {
    Header: "ساب کتگوری",
    accessor: "subcategory.title",
  },
  {
    Header: "تاریخ",
    accessor: "created_at",
  },
  {
    Header: "تنظیمات",
    accessor: "id",
  },
];
