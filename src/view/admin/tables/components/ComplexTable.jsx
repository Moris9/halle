import Card from "../../../../components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { useMemo } from "react";
import {BiEdit} from "react-icons/bi";
import {AiOutlineDelete} from "react-icons/ai";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
const ComplexTable = (props) => {
  const { columnsData, tableData , title} = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;



    const handleDelete = async (id) => {
      const isConfirm = await Swal.fire({
        title: 'آیا از این کار مطمن هستید؟',
        text: "!میخواهی حذف کنی",
        icon: 'هشدار',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'بله,حذف کن!'
      }).then((result) => {
        return result.isConfirmed
      });

      if(!isConfirm){
        return;
      }

    };



  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          {title}
        </div>
      </div>

      <div className="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      {column.render("Header")}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "نام") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    }

                    else if (cell.column.Header === "عکس") {
                      data = (
                          <div className="flex items-center gap-2">
                            <div className={`rounded-full text-xl text-black`}>
                              {cell.value}
                            </div>
                          </div>
                      );
                    }
                    else if (cell.column.Header === "شماره تلفن") {
                      data = (
                          <div className="flex items-center gap-2">
                            <div className={`rounded-full text-xl text-black`}>
                              {cell.value}
                            </div>
                          </div>
                      );
                    }
                    else if (cell.column.Header === "کتگوری") {
                      data = (
                          <div className="flex items-center gap-2">
                            <div className={`rounded-full text-xl text-black`}>
                              {cell.value}
                            </div>
                          </div>
                      );
                    }
                    else if (cell.column.Header === "لینک") {
                      data = (
                          <div className="flex items-center gap-2">
                            <div className={`rounded-full text-xl text-black`}>
                              {cell.value}
                            </div>
                          </div>
                      );
                    }
                    else if (cell.column.Header === "توضیحات") {
                      data = (
                        <div className="flex items-center gap-2">
                          <div className={`rounded-full text-xl text-black`}>
                            {cell.value}
                          </div>
                        </div>
                      );
                    } else if (cell.column.Header === "تاریخ") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {new Date(cell.value).toISOString().split('T')[0]}
                        </p>
                      );
                    } else if (cell.column.Header === "تنظیمات") {
                      data = (
                          <div className="flex justify-center">

                            <Link
                                to={"edit/"+`${cell.value}`
                                 }
                            >

                              <BiEdit className="h-4 w-4 text-black" />
                            </Link>

                            <button onClick={() => handleDelete(cell.value)}> <AiOutlineDelete className="h-4 w-4 text-black"/></button>
                          </div>
                          )
                    }
                    return (
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ComplexTable;
