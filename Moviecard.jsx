import SR from '../assets/aha/zero.jpg';
import Raja from '../assets/aha/six.jpg';
import AA from '../assets/aha/one.jpg';
import BK from '../assets/aha/two.jpg';
import St from '../assets/aha/three.jpg';
import Dose from '../assets/aha/four.jpg';
import MRP from '../assets/aha/five.jpg';

const Moviecard = () => {
  return (

     <div className="bg-black px-10 py-6">
      <h2 className="text-white text-2xl font-bold mb-4">Latest Releases</h2>
       <div className="flex gap-4 overflow-x-auto bg-black px-10 py-6">
      <img
        src={SR}
        alt="sr"
        className="w-[220px] h-[280px] object-cover rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200"
      />
      <img
        src={Raja}
        alt="raja"
        className="w-[220px] h-[280px] object-cover rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200"
      />
      <img
        src={AA}
        alt="aakali rajyam"
        className="w-[220px] h-[280px] object-cover rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200"
      />
      <img
        src={BK}
        alt="bhama kalapam"
        className="w-[220px] h-[280px] object-cover rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200"
      />
      <img
        src={St}
        alt="stalin"
        className="w-[220px] h-[280px] object-cover rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200"
      />
      <img
        src={Dose}
        alt="dose"
        className="w-[220px] h-[280px] object-cover rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200"
      />
      <img
        src={MRP}
        alt="mrp"
        className="w-[220px] h-[280px] object-cover rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200"
      />
    </div>
     </div>
  );
};

export default Moviecard;