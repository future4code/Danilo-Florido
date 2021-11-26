import react from "react";
import Etapa2 from "./Etapa2";

export default class Etapa1 extends react.Component {

 render(){

  return (
    <div className="App">

	    <h3>ETAPA 1 - DADOS GERAIS</h3>
	<div>
     <p>1. Qual o seu nome?</p>
     <input type='text'></input>
     </div>
     <div>
     <p>2. Qual sua idade, em anos?</p>
     <input type='text'></input>
    </div>
    <div>
     <p>3. Qual o seu melhor email?</p>
     <input type='text'></input>
    </div>
    <div>
     <p>4. Qual a sua escolaridade?</p>
     <select>
	<option value="Ensino médio incompleto">Ensino Médio -  Incompleto</option>
     <option value="Ensino médio completo">Ensino Médio  - Completo</option>
     <option value="Ensino superior incompleto">Ensino Superior - Incompleto</option>
     <option value="Ensino superior completo">Ensino Superior - Completo</option>
     </select>
    </div>
    <br/>
    </div>

  );
 }

} 