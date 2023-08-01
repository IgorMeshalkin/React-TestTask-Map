import './App.css';
import 'leaflet/dist/leaflet.css'
import Table from "./components/Table/Table";
import MyMap from "./components/Map/MyMap";
import 'leaflet/dist/leaflet.css';

function App() {
    return (
        <div className="App">
            <div className="halfScreen">
                <Table/>
            </div>
            <div className="halfScreen">
                <MyMap/>
            </div>
        </div>
    );
}

export default App;
