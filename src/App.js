import "bulma/css/bulma.css";
import Brand from "./img/logo.png";
import Shop from "./img/shop-cart.png";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar imageBrand={Brand} imagehop={Shop} />
      <ItemListContainer greeting={'Bienvenidos a mi e-commerce'}/>
    </div>
  );
}

export default App;
