import Navbar from "../components/common/Navbar";
import FlashSales from "../components/home/FlashSales";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <div className="md:px-24">
      <Navbar />
      <Hero />
      <FlashSales />
    </div>
  );
};

export default Home;
