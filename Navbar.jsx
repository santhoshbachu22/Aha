import Ahalogo from "../assets/aha-logo.2a3e1475cd784cdc.svg";

import Home from "./left_components/Home";
import Movies from "./left_components/Movies";
import Myaha from "./left_components/Myaha";
import Shows from "./left_components/Shows";
import Watchforfree from "./left_components/Watchforfree";

import Search from "./right_components/Search";
import Subcribe from "./right_components/Subcribe";
import Signin from "./right_components/Signin";
import Profile from "./right_components/Profile";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-neutral-950 border-b border-neutral-900">
      <div className="flex items-center gap-8">
        <img src={Ahalogo} alt="logo" className="h-7"/>
        <div className="flex items-center gap-16 h-7">
          <Home />
          <Movies />
          <Shows />
          <Watchforfree />
          <Myaha />
        </div>
      </div>

       <div className="flex items-center gap-5">
        <Search />
        <Subcribe />
        <Profile />
        <Signin />
      </div>
    </div>
  );
};

export default Navbar;
