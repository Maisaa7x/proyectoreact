import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBarUI from "./components/NavBarUI";

function App() {
  
  const onAdd = (count) => {
    alert (`Sumaste ${count} productos al carro`); 
  }

  return (
    <div>
      <NavBarUI />
      <ItemListContainer greetings = {"Bienvenidos a la Tienda Online de DAOS Collection!"}/>
      <ItemCount inicial={1} max={10} onAdd={onAdd}/>    
    </div>
  );
}

export default App;
