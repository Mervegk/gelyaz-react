//import { useState } from 'react';
import './App.css';
import Users from './components/Users';
/* import Counter from './components/Counter';
import User from './components/User';
import Colors from './components/Colors';
import Form from './components/Form'; */


function App() {
  /* const [isVisible, setIsVisible] = useState(false); */
  return (
    <div>
      {/*  
      <User />
      <Colors />  
      <Form />
      */}

      {/* {
        isVisible && <Counter />
      }
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button> */}

      <Users />
    </div>
  );
}

export default App;