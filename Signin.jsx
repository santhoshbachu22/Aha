import { FaRegUserCircle } from "react-icons/fa";

const Signin = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 text-neutral-300 cursor-pointer">
      <FaRegUserCircle className="w-6 h-6" />
      <span className="text-sm">Sign In</span>
    </div>
  );
};

export default Signin;