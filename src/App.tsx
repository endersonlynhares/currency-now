import { ThemeProvider } from "styled-components"
import { light } from "./styles/themes/light"
import { GlobalStyle } from "./styles/global"
import { Router } from "./routers"
import { PriceAPIProvider } from "./contexts/PriceAPI"

function App() {
  return (
    <ThemeProvider theme={light}>
      <PriceAPIProvider>
        <Router />
      </PriceAPIProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
