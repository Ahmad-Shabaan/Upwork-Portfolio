import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { Skills } from "./components/Skills";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "./context/Theme";
import { AlertProvider } from "./context/AlertContext";
import Alert from "./components/Alert";
import { Portfolio } from "./components/Portfolio";
// import Cursor from "./components/Cursor";
import { AnimatePresence } from "framer-motion";
import ParticleBG from "./components/ParticalBG";
import NotFound from "./components/NotFound";
function App() {
  const customTheme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "var(--body_bg)",
        },
      },
    },
  });
  const location = useLocation();
  return (
    <React.Fragment>
      <ThemeProvider>
        <ChakraProvider theme={customTheme}>
          <AlertProvider>
            <main>
              <ParticleBG id='particles'/>
              <Header />
              <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/*" element={<NotFound />} />

                </Routes>
              </AnimatePresence>
              <Alert />
              {/* <Cursor
                innerSize={15}
                outerSize={15}
                color="green"
                // when hover on specific nodes
                outerAlpha={0.4}
                innerScale={0.7}
                outerScale={5}
              /> */}
            </main>
          </AlertProvider>
        </ChakraProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
