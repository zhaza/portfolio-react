import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <div>
          <span className="tags">&lt;html&gt;</span>
          <br />
          <span className="tags body-tags">&lt;body&gt;</span>
        </div>

        <Outlet />

        <div>
          <span className="tags body-tags">&lt;/body&gt;</span>
          <br />
          <span className="tags">&lt;/html&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
