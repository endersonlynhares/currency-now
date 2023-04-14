import { ThemeProvider } from "styled-components"
import { light } from "./styles/themes/light"
import { GlobalStyle } from "./styles/global"
import { Router } from "./routers"

function App() {
  return (
    <ThemeProvider theme={light}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
