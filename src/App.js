import './App.css';
import NavBAr from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/ItemCount"

function App() {
  return (
    <div className="App">
      <NavBAr/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
    </div>
  );
}

export default App;
