import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FlashSalesBody = () => {
  return <div className="mt-10">
    <ul>
        <li>
            <div className="relative">
                <div className=""></div>
                <h1>HAVIT HV-G92 Gamepad</h1>
                <span>$120</span>
                <span>$160</span>
                <div className="space-x-1">
                    <FontAwesomeIcon className='text-yellow-500' icon={faStar}/>
                    <FontAwesomeIcon className='text-yellow-500' icon={faStar}/>
                    <FontAwesomeIcon className='text-yellow-500' icon={faStar}/>
                    <FontAwesomeIcon className='text-yellow-500' icon={faStar}/>
                    <FontAwesomeIcon className='text-yellow-500' icon={faStar}/>
                    <span>(88)</span>
                </div>
            </div>
        </li>
    </ul>
  </div>;
};

export default FlashSalesBody;
