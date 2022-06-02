import ItemListContainer from "./components/ItemListContainer";
import NavBarUI from "./components/NavBarUI";

function App() {
  return (
    <div>
      <NavBarUI />
      <ItemListContainer greetings = {"Bienvenidos a la Tienda Online de DAOS Collection!"}/>
    </div>
  );
}

export default App;
