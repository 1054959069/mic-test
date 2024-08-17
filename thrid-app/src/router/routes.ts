import smartSchool from "./modules/smart-school";

const routes = [
  {
    path: "/",
    component: () => import("@/layout/home.vue")
  },
  {
    path: "/smart-school",
    name: "smart-school",
    children: smartSchool
  }
];

export default routes;
