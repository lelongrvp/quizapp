import SideMenu from "./SideMenu";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideMenu collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaBars
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          style={{ cursor: "pointer" }}
        />
        Content goes here
      </div>
    </div>
  );
};

export default Admin;
