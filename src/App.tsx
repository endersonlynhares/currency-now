import { ThemeProvider } from "styled-components"
import { light } from "./styles/themes/light"
import { GlobalStyle } from "./styles/global"
import { DefaultLayout } from "./layouts/DefaultLayout"

function App() {
  return (
    <ThemeProvider theme={light}>
      <DefaultLayout />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
