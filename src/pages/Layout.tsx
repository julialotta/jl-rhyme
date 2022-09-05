import { Outlet } from "react-router-dom";
import { Header } from "../components/partials/Header";
import { AppWrapper } from "../components/Style/Wrappers";

export const Layout = () => {
  return (
    <AppWrapper>
      <Header />
      <Outlet></Outlet>
    </AppWrapper>
  );
};
