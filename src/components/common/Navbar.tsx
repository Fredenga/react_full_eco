import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const items = ["Home", "Contact", "About", "SignUp"];
  return (
    <nav className="flex bg-white text-black items-center lg:h-16">
      <div className="flex-1">
        <h1 className="text-3xl font-bold flex justify-center">Exclusive</h1>
      </div>
      <div className="flex-1 space-x-10">
        {items.map((item) => (
          <span className="cursor-pointer">{item}</span>
        ))}
      </div>
      <div className="flex-1 flex items-center space-x-10">
        <div className="bg-gray-100 flex items-center justify-between px-5 py-2">
          <input
            type="text"
            className="border-none focus:outline-none w-[90%] mr-5"
            placeholder="What are you looking for?"
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </nav>
  );
};

export default Navbar;
