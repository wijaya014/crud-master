import "./App.css";
import Navbar from "./component/NavbarComponent";
import TableComponent from "./component/TableComponent";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">Menu Makanan</div>
      <TableComponent />
    </div>
  );
}

export default App;
