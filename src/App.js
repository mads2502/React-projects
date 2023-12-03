import { Alert } from "./components/Alert";
import {Message} from "./Message"
import ListGroup from "./components/ListGroup"
import { useState } from "react";
function App(){
  const countries = ["NYC", "Ontario", "Delhi"];
  const [itemSelected,setItemSelected]=useState(countries[0])
  const handleSelectItem=(item)=>{console.log(item); setItemSelected(item)}
  return (<div>
    <Alert>
      Welcome to {itemSelected} !
    </Alert>
    <ListGroup item={countries} heading="Countries" onSelectItem={handleSelectItem}>

    </ListGroup>
  </div>)
}
export default App;