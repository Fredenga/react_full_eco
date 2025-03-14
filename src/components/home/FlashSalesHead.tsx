import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const FlashSalesHead = () => {
  const time = [
    { text: ["Days", "03"] },
    { text: ["Hours", "23"] },
    { text: ["Minutes", "19"] },
    { text: ["Seconds", "56"] },
  ];
  return (
    <div className="w-full">
      <div className=" flex items-center">
        <div className="bg-red-700 w-6 h-12 mr-4"></div>
        <h2 className="text-red-700 text-lg font-semibold">Today's</h2>
      </div>
      <div className="flex">
        <div className="flex-1/4">
          <h1 className="text-4xl font-semibold">Flash Sales</h1>
        </div>
        <div className="flex flex-2/4 items-center space-x-5 text-2xl font-bold">
          <div className="">
            <p>Days</p>
            <p>03</p>
          </div>
          <span className="text-red-500">:</span>
          <div className="">
            <p>Hours</p>
            <p>23</p>
          </div>
          <span className="text-red-500">:</span>
          <div className="">
            <p>Minutes</p>
            <p>19</p>
          </div>
          <span className="text-red-500">:</span>
          <div className="">
            <p>Seconds</p>
            <p>56</p>
          </div>
        </div>
        <div className="flex flex-1/4 justify-end space-x-3">
        <FontAwesomeIcon icon={faArrowLeft} className="bg-gray-200 p-3 rounded-full text-2xl" />
        <FontAwesomeIcon icon={faArrowRight} className="bg-gray-200 p-3 rounded-full text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default FlashSalesHead;
