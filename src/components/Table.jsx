import React from "react";
import checkMark from "../images/check-mark-icon.svg";
import caretDown from "../images/arrow-down.svg";
import cloudIcon from "../images/download-cloud-icon.svg";

const Table = ({ data }) => {
  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-[#667085] ">
          <thead className="text-xs text-[#667085] font-medium bg-[#F9FAFB] py-3 px-6">
            <tr>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center gap-4">
                  <input
                    id="invoice"
                    type="checkbox"
                    value=""
                    className="checkbox"
                  />
                  <label htmlFor="invoice"></label>
                  <span>
                    {" "}
                    Invoice
                    <img src={caretDown} className="inline ml-1" alt="" />
                  </span>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                Amount
              </th>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Users on plan
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">download</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((info) => (
              <tr key={info.date} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-[#101828] whitespace-nowrap"
                >
                  <div className="flex items-center gap-4">
                    <input
                      id={info.invoice}
                      type="checkbox"
                      value=""
                      className="checkbox"
                    />
                    <label htmlFor={info.invoice}></label>
                    {info.invoice}
                  </div>
                </th>
                <td className="py-4 px-6">{info.amount}</td>
                <td className="py-4 px-6">{info.date}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center font-medium text-[#027A48] bg-[#ECFDF3] rounded-2xl py-1 pr-[6px] pl-[8px] gap-2">
                    <img src={checkMark} alt="" />
                    {info.status}
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex">
                    {info?.Usersonplan?.map((user, index) => (
                      <>
                        {index < 5 && (
                          <img
                            key={index}
                            className={`user-on-plan user-${index + 1}`}
                            src={user}
                            alt="user"
                          />
                        )}
                      </>
                    ))}
                    {info?.Usersonplan?.length > 5 && (
                      <span
                        className={` h-6 w-6 rounded-[50%] border-[1.5px] relative -left-9 text-xs text-center border-[#ffffff] bg-gray-50`}
                      >
                        +{info?.Usersonplan.length - 5}
                      </span>
                    )}
                  </div>
                </td>
                <td>
                  <img src={cloudIcon} alt="download" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
