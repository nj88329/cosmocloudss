import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./component/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
);
