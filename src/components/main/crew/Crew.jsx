import { useState } from "react";
import useWidthSize from 'src/hooks/useWidthSize';

import Douglas from 'src/assets/crew/image-douglas-hurley.png';
import Mark from 'src/assets/crew/image-mark-shuttleworth.png';
import Victor from 'src/assets/crew/image-victor-glover.png';
import Anoushe from 'src/assets/crew/image-anousheh-ansari.png';

function Crew({ data }) {
  const { width } = useWidthSize ();
  const [crew, setCrew] = useState(data[0]);
  const [image, setImage] = useState(Douglas);
  const [isActive, setIsActive] = useState(0);

  function handleCrew(data, index) {
    setCrew(data[index]);
    setIsActive(index);
    switch (index) {
      case 0:
        setImage(Douglas);
        break;
      case 1:
        setImage(Mark);
        break;
      case 2:
        setImage(Victor);
        break;
      case 3:
        setImage(Anoushe);
        break;
      default:
        return null;
    }

  }

  return (
    <>
      <section className="crew">
        {width < 768 ? (
          <div>
            <h5 className="crew-title"><span>02</span>MEET YOUR CREW</h5>  
            <div className="crew-mobile">
              <div className="img-container">
                <img src={image} alt={crew.name} />
              </div>
              <div className="crew-content">
                <div className="nav">
                  <ul>
                    {data.map((item, index) => (
                      <li className={index === isActive ? "btn-active" : null} key={item.name}>
                        <button onClick={() => handleCrew(data, index)}></button>
                      </li>
                    ))}
                  </ul>
                </div>
                <h4>{crew.role}</h4>
                <h3>{crew.name}</h3>
                <p>{crew.bio}</p>
              </div>
            </div>
          </div>
        ):(
          <div className="crew-tablet crew-desktop">
            <div className="crew-content">
              <h5 className="crew-title"><span>02</span>MEET YOUR CREW</h5>  
              <h4>{crew.role}</h4>
              <h3>{crew.name}</h3>
              <p>{crew.bio}</p>
              <div className="nav">
                <ul>
                  {data.map((item, index) => (
                    <li className={index === isActive ? "btn-active" : null} key={item.name}>
                      <button onClick={() => handleCrew(data, index)}></button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="img-container">
              <img src={image} alt={crew.name} />
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Crew