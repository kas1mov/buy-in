import { Route, Routes } from "react-router-dom";
import { AppDrawer } from "./Drawer/drawer";
import { Header } from "./Header/Header";
import { dataMenu } from "../utils/data";
import { Footer } from "./Footer/Footer";

export const Root = () => {
  return (
    <div className="Root">
      <div className="Root__header">
        <Header />
      </div>
      <AppDrawer />
      <div className="Root__main">
        <Routes>
          {dataMenu.map((item) => (
            <Route path={item.path} element={item.page} key={item.id} />
          ))}
        </Routes>
      </div>
      <div className="Root__footer">
        <Routes>
          {dataMenu.map((item) => (
            <Route path={item.path} element={<Footer />} key={item.id} />
          ))}
          <Route path={"/product"} element={<Footer />} />
        </Routes>
      </div>
    </div>
  );
};
