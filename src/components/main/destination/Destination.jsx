import { useState } from "react";

import Moon from 'src/assets/destination/image-moon.png';
import Mars from 'src/assets/destination/image-mars.png';
import Europa from 'src/assets/destination/image-europa.png';
import Titan from 'src/assets/destination/image-titan.png';

function Destination({ data }) {
  const [destination, setDestination] = useState(data[0]);
  const [image, setImage] = useState(Moon);
  const [isActive, setIsActive] = useState(0)

  function handleDestination(data, index) {
    setDestination(data[index]);
    setIsActive(index);
    switch (index) {
      case 0:
        setImage(Moon);
        break;
      case 1:
        setImage(Mars);
        break;
      case 2:
        setImage(Europa);
        break;
      case 3:
        setImage(Titan);
        break;
      default:
        return null;
    }
  }

  return (
    <>
      <div className="destination">
        <h4 className="destination-title"><span>01</span>PICK YOUR EDSTINATION</h4>
        <div className="destination-content">
          <img src={image} alt={destination.name} />
          <div className="destination-details">
            <div className="nav">
              <ul>
                {data.map((item, index) => (
                  <li
                    className={index === isActive ? "btn-active" : null}
                    key={item.name}
                  >
                    <button onClick={() => handleDestination(data, index)}>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <h2 className="destination-name">{destination.name}</h2>
            <p className="destination-description">{destination.description}</p>
            <div className="line"></div>
            <div className="destination-extra-details">
              <div className="distance">
                <p>AVG. DISTANCE</p>
                <h5>{destination.distance}</h5>
              </div>
              <div className="travel">
                <p>Est. travel time</p>
                <h5>{destination.travel}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Destination