import dashboard from "./images/bar-chart-icon.svg";
import task from "./images/checker-icon.svg";
import home from "./images/home-icon.svg";
import project from "./images/project-icon.svg";
import report from "./images/flag-icon.svg";
import users from "./images/users-icon.svg";
import support from "./images/support-icon.svg";
import settings from "./images/setting-icon.svg";
import MasterCard from "./images/mastercard-icon.svg";
import visa from "./images/visa-card-icon.svg";
import user1 from "./images/user-avatar.svg";
import user2 from "./images/user2.svg";
import user3 from "./images/user3.svg";
import user4 from "./images/user4.svg";
import user5 from "./images/user5.svg";

const sidebarMenuItem = [
  { id: 1, icon: home, title: "Home" },
  { id: 2, icon: dashboard, title: "Dashboard", notification: 10 },
  { id: 3, icon: project, title: "Projects" },
  { id: 4, icon: task, title: "Tasks" },
  { id: 5, icon: report, title: "Reporting" },
  { id: 6, icon: users, title: "Users" },
  { id: 7, icon: support, title: "Support" },
  { id: 8, icon: settings, title: "Settings", active: true },
];
const settingsMenu = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Billing",
  "Notifications",
  "Integrations",
  "API",
];

const billingHistory = [
  {
    invoice: "Basic Plan – Nov 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "Paid",
    Usersonplan: [user1, user2, user3, user4, user5, user2, user4],
  },
  {
    invoice: "Basic Plan – Oct 2022",
    amount: "USD $10.00",
    date: "Oct 1, 2022",
    status: "Paid",
    Usersonplan: [user1, user2, user3, user4, user5, user3],
  },
  {
    invoice: "Basic Plan – Sep 2022",
    amount: "USD $10.00",
    date: "Sep 1, 2022",
    status: "Paid",
    Usersonplan: [user1, user2, user5],
  },
  {
    invoice: "Basic Plan – Aug 2022",
    amount: "USD $10.00",
    date: "Aug 1, 2022",
    status: "Paid",
    Usersonplan: [user1, user2, user3],
  },
  {
    invoice: "Basic Plan – Jul 2022",
    amount: "USD $10.00",
    date: "Jul 1, 2022",
    status: "Paid",
    Usersonplan: [user1, user2, user3, user4],
  },
  {
    invoice: "Basic Plan – Jun 2022",
    amount: "USD $10.00",
    date: "Jun 1, 2022",
    status: "Paid",
    Usersonplan: [user1, user2],
  },
];

const availableCards = [
  {
    id: 1,
    cardIcon: visa,
    expiryDate: "06/2024",
    lastFourDigit: "1234",
    cardType: "Visa",
  },
  {
    id: 2,
    cardIcon: MasterCard,
    expiryDate: "06/2024",
    lastFourDigit: "1234",
    cardType: "Mastercard",
  },
];

export { sidebarMenuItem, billingHistory, availableCards, settingsMenu };
