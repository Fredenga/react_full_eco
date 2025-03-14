import Offer from "./Offer";
import Sidebar from "./Sidebar";

const Hero = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <Offer />
    </div>
  );
};

export default Hero;
