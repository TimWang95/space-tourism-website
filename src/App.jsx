import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Home, Destination, Crew, Technology } from 'src/components/index';
import 'src/styles/index.scss';

import data from 'src/data/data.json'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="destination" element={<Destination data={data.destinations} />}/>
          <Route path="crew" element={<Crew data={data.crew} />}/>
          <Route path="technology" element={<Technology data={data.technology} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
