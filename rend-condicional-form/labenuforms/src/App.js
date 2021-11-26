import react from "react";
import styled from "styled-components";
import Etapa1 from "./Etapa1";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";
import Final from "./Final";

const Root=styled.div`
text-align: center;
font-family: sans-serif`

export default class App extends react.Component {
  state = {
  etapa: 1,
}
renderizaEtapa=()=>{
  let etapa=this.state.etapa;
  switch (etapa) {
    case 1:
     return <Etapa1></Etapa1>

      case 2:
      return <Etapa2></Etapa2>

        case 3:
      return <Etapa3></Etapa3>

      case 4:
      return <Final></Final>

    default:
      break;
  }
}
irParaProximaEtapa=()=>{
  this.setState({etapa:this.state.etapa+1})
}
 render(){
  return (
    <Root>
     {this.renderizaEtapa()}m
     {this.state.etapa!==4&&(
       <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
     )}

    </Root>
  );
 }

}