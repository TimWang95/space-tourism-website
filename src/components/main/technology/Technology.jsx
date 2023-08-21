import { useState } from "react";

import vehicle from "src/assets/technology/image-launch-vehicle-landscape.jpg";
import capsule from "src/assets/technology/image-space-capsule-landscape.jpg";
import spaceport from "src/assets/technology/image-spaceport-landscape.jpg";
import vehiclePortrait from "src/assets/technology/image-launch-vehicle-portrait.jpg";
import capsulePortrait from "src/assets/technology/image-space-capsule-portrait.jpg";
import spaceportPortrait from "src/assets/technology/image-spaceport-portrait.jpg";

function Technology({ data }) {
  const [technology, setTechnology] = useState(data[0])
  const [isActive, setIsActive] = useState(0);
  const [image, setImage] = useState([vehicle, vehiclePortrait]);

  function handleTechnology(data, index) {
    setTechnology(data[index]);
    setIsActive(index);
    switch (index) {
      case 0:
        setImage([vehicle, vehiclePortrait]);
        break;
      case 1:
        setImage([capsule, capsulePortrait]);
        break;
      case 2: 
        setImage([spaceport, spaceportPortrait]);
        break;
      default:
        return null;
    }
  }

  return (
    <>
      <section className="technology">
        <div>
          <h5 className="technology-title"><span>03</span>SPACE LAUNCH 101</h5>  
          <div className="technology-body">
            <picture className="img-container">
              <source media="(min-width: 1440px)" srcSet={image[1]}/>
              <img src={image[0]} alt={technology.name} />
            </picture>
            <div className="technology-content">
              <div className="nav">
                <ul>
                  {data.map((item, index) => (
                    <li className={index === isActive ? "btn-active" : null} key={item.name}>
                      <button onClick={() => handleTechnology(data, index)}></button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="technology-detail">
                <h4>THE TERMINOLOGY…</h4>
                <h3>{technology.name}</h3>
                <p>{technology.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Technology