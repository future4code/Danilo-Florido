import React from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Router from './assets/router/Router'


const myTheme = createMuiTheme ({
	palette: {
		primary: {
			main: "#4169E1" // azul mais escuro
		},
		secondary: {
			main: "#551A8B" // roxo Origamid
		}
	}
})


function App() {
  return (
      <MuiThemeProvider theme={myTheme}>
        <Router />
      </MuiThemeProvider>
  );
}

export default App;
