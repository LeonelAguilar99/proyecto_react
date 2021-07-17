import React from 'react'
import { Route, BrowserRouter as Router} from "react-router-dom";

import Navbar from './components/navbar/navbar';
import Listar from './components/paginas/Listar';
import Crear from './components/paginas/Crear';
import Editar from './components/paginas/Editar';
import Footer from './components/footer/Footer';
//import Libros from './components/paginas/Libros';

function App() {
  return (
    <Router>
      <Navbar/>
    <div className="container">
        <div>
            <br></br>
            <Route exact path="/" component={Listar}></Route>
            <Route exact path="/crear" component={Crear}></Route>
            <Route exact path="/editar" component={Editar}></Route>
        </div>
    </div>
    <br></br>
      <Footer/>
    </Router>
  );
}

export default App;

