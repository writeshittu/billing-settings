import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import envelopeIcon from "../images/mail-icon.svg";
import checkedIcon from "../images/checkboxbase-icon.svg";
import addIcon from "../images/add-icon.svg";
import cloudicon from "../images/download-cloud-icon.svg";
import emptyIcon from "../images/checkbox-empty-icon.svg";
import { availableCards, billingHistory, settingsMenu } from "../mockData";
import Table from "../components/Table";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState(6);
  const [selectedCard, setSelectedCard] = useState([1]);
  const [contact, setContact] = useState({
    email: true,
    alternateEmail: false,
  });

  const onSelectCard = (id) => {
    setSelectedCard((PrevState) => {
      let existingId = PrevState.indexOf(id);
      if (existingId >= 0) {
        const newArr = [...PrevState];
        newArr.splice(existingId, 1);
        return newArr;
      }
      return [...PrevState, id];
    });
  };

  return (
    <div>
      <div className="md:grid grid-cols-[280px,1fr]">
        <section className=" relative ">
          <div className="block fixed overflow-y-scroll top-0 left-0 md:absolute w-full bg-white md:w-[280px] z-10 border-r border-[#ddd]">
            <Sidebar />
          </div>
        </section>
        <main className="bg-[#f5f5f5] min-h-screen mt-16 py-5 px-3 md:py-[1.875rem] md:px-[2.2rem]">
          <div className="">
            <p className=" text-2xl md:text-[1.875rem] text-gray-900 font-medium leading-[2.375rem]">
              Settings
            </p>
            <p className=" text-base ">
              Manage your team and preferences here.
            </p>
            <div className="flex my-4 mb-6 overflow-x-scroll md:overflow-auto">
              {settingsMenu.map((item, index) => (
                <p
                  key={item}
                  onClick={() => setCurrentTab(item)}
                  className={`text-gray-900 whitespace-nowrap py-[0.625rem] cursor-pointer hover:bg-gray-50 px-4 font-medium border ${
                    currentTab === index + 1 && "bg-gray-50"
                  } border-gray-300 first:rounded-l-lg last:rounded-r-lg`}
                >
                  {item}
                </p>
              ))}
            </div>
            <section>
              <p className="text-gray-900 font-medium text-lg">
                Payment method
              </p>
              <p>Update your billing details and address.</p>
            </section>
            <div className=" divider" />
            <section className="md:flex my-7 items-start gap-20">
              <div className="my-4 md:my-0">
                <p className="text-gray-700 font-medium">Contact email</p>
                <p>Where should invoices be sent?</p>
              </div>
              <div>
                <label className="flex items-start my-2 md:my-0 cursor-pointer gap-4">
                  <input
                    type="radio"
                    id="email"
                    name="email"
                    checked={contact.email}
                    onChange={() =>
                      setContact({ ...contact, email: !contact.email })
                    }
                    className="h-4 w-4 border border-gray-50 checked:accent-primary-600 checked:border-primary-600 focus:outline-none transition duration-200 align-top cursor-pointer"
                  />
                  <div>
                    <p className="text-gray-700  font-medium">
                      Send to my account email
                    </p>
                    <p className="">olivia@untitledui.com</p>
                  </div>
                </label>
                <div className="flex mt-3 items-start gap-4">
                  <input
                    type="radio"
                    name="alternateEmail"
                    id="alternateEmail"
                    onChange={() =>
                      setContact({
                        ...contact,
                        alternateEmail: !contact.alternateEmail,
                      })
                    }
                    checked={contact.alternateEmail}
                    className="h-4 w-4 border border-gray-50 checked:accent-primary-600 checked:border-primary-600 focus:outline-none transition duration-200 align-top cursor-pointer"
                  />
                  <div>
                    <label
                      htmlFor="alternateEmail"
                      className="text-gray-700 font-medium cursor-pointer"
                    >
                      Send to an alternative email
                    </label>
                    <div className="mt-3 h-10 relative ">
                      <img
                        src={envelopeIcon}
                        className="absolute top-[.78rem] left-[.75rem]"
                        alt=""
                      />
                      <input
                        type="email"
                        placeholder="billing@untitledui.com"
                        className="border border-gray-300 rounded-lg py-[10px] px-[.875rem] h-11 pl-10 outline-none w-full md:w-[30.5rem] shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="divider" />
            <section className="md:flex mt-2 items-start gap-20">
              <div className="my-4 md:my-0">
                <p className="text-gray-700 font-medium">Card details</p>
                <p>Select default payment method.</p>
              </div>
              <div>
                {availableCards?.map((card) => (
                  <div
                    key={card.cardType}
                    onClick={() => onSelectCard(card.id)}
                    className={`flex justify-between gap-2 items-start mb-2  rounded-lg ${
                      selectedCard.includes(card.id)
                        ? "bg-primary-50 border-primary-300"
                        : "bg-gray-100 border-gray-300"
                    } w-full md:max-w-[49rem] md:w-[38rem] md:h-[6.25rem] p-4 cursor-pointer hover:bg-primary-50 border `}
                  >
                    <div className="flex gap-2 md:gap-5 items-start">
                      <img src={card.cardIcon} alt={card.cardType} />
                      <div>
                        <p className=" font-medium text-primary-800">
                          {card.cardType} ending in {card.lastFourDigit}
                        </p>
                        <p className="mb-2 font-normal text-primary-600">
                          Expiry {card.expiryDate}
                        </p>
                        <span className=" hover:text-gray-500 text-primary-500 cursor-pointer">
                          Set as default
                        </span>
                        <span className=" text-primary-700 font-medium px-4 cursor-pointer">
                          Edit
                        </span>
                      </div>
                    </div>
                    <img
                      src={
                        selectedCard.includes(card.id) ? checkedIcon : emptyIcon
                      }
                      alt=""
                    />
                  </div>
                ))}

                <div className="flex cursor-pointer my-3">
                  <img src={addIcon} className="mr-1" alt="" />
                  <span className=" font-medium text-gray-500 hover:text-gray-600">
                    Add new payment method
                  </span>
                </div>
              </div>
            </section>
            <section className="my-6 md:my-0">
              <header className="md:flex justify-between items-center my-4">
                <span className="text-gray-900 text-lg font-medium">
                  Billing history
                </span>
                <button className=" my-2 md:my-0 flex items-center justify-center gap-2  border border-gray-300 rounded-lg py-[.625rem] width-[9.125rem] h-[2.5rem] text-gray-700 font-medium px-4 shadow-sm outline-none">
                  <img src={cloudicon} alt="" />
                  Download all
                </button>
              </header>
              <Table data={billingHistory} />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
