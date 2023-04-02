import React from "react";
import { Text, Box } from "@chakra-ui/react";
import Form from "./Form";
import "../styles.css";

export default function App() {
  return (
    <Box className="App" my={10}>
      {/* <Heading as="h1">React Hook Form</Heading> */}
      <Text> App built using Chakra - UI ❤🔥</Text>
      <Form />
    </Box>
  );
}
