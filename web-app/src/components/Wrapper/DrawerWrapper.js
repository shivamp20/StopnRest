import "./DrawerWrapper.css";
import OwnerNav from "../OwnerNav/OwnerNav";

function DrawerWrapper({ children }) {
  return (
    <div className="drawer-main">
      <OwnerNav />
      {children}
    </div>
  );
}

export default DrawerWrapper;
