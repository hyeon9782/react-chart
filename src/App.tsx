import { Outlet } from "react-router-dom";
import Header from "./components/layouts/header";
import SideBar from "./components/layouts/side-bar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
