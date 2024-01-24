import './App.css';
import GreenBlock from "./components/green-block/GreenBlock";
import Parking from "./components/parking/Parking";
import RedRoad from "./components/redroat/RedRoat";
import BlueBlock from "./components/blue-block/BlueBlock";
import OrangeBlock from "./components/orange_block/OrangeBlock";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <div className="road">
            <GreenBlock/>
            <Parking />
            <RedRoad />
            <BlueBlock />
            <OrangeBlock />
            <Footer />
        </div>
    </div>
  );
}

export default App;
