import { Header, Home, Destination, Crew, Technology } from 'src/components/index'
import 'src/styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Destination/>
      <Crew/>
      <Technology/>
    </div>
  );
}

export default App;
