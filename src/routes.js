import TableList from "views/TableList.js";
import inputPage from "views/inputPage.js";

const dashboardRoutes = [
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/inputPage",
    name: "Input Page",
    icon: "nc-icon nc-notes",
    component: inputPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
