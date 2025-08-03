import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";

function MainPage() {
  return (
    <div>
      {/* <PageNav /> */}
      <Outlet />
    </div>
  );
}

export default MainPage;
