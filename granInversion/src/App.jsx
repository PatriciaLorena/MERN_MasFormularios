// App.jsx
import { useState } from 'react';
import './App.css';
import Formulario from './assets/componets/Formulario';
import Result from './assets/componets/Result';

function App() {
  const [state, setState] = useState({
    nombre: "",
    lastName: "",
    email: "",
    clave: "",
    confirmPassword: ""
  });

  return (
    <div className="app">
      <Formulario inputs={state} setInputs={setState}/>
      <Result data={state} />
    </div>
  );
}

export default App;
