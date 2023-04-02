import { VStack, Input, useToast, Box, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";

export default function Builder() {
  const [val, setVal] = useState("person");
  const [orderVal, setorderVal] = useState("order");
  const [classVal, setclassVal] = useState("class");

  useEffect(() => {
    const changedValue = setTimeout(() => {
      console.log(val);
    }, 2000);

    return () => clearTimeout(changedValue);
  }, [val]);

  useEffect(() => {
    const changedValue = setTimeout(() => {
      console.log(orderVal);
    }, 2000);

    return () => clearTimeout(changedValue);
  }, [orderVal]);

  useEffect(() => {
    const changedValue = setTimeout(() => {}, 2000);

    return () => clearTimeout(changedValue);
  }, [classVal]);

  let [selected1, set1] = useState(true);
  let [selected2, set2] = useState(false);
  let [selected3, set3] = useState(false);
  // let [ selected4 , set4 ] = useState(false);

  const Toggle = (val) => {
    if (val == 1) set1(!selected1);
    if (val == 2) set2(!selected2);
    if (val == 3) set3(!selected3);
  };

  return (
    <Box>
      <form>
        <div style={{ backgroundColor: "lightgrey" }}>
          <div style={{ display: "flex" }}>
            <h2>1.</h2>
            <input
              style={{ backgroundColor: "lightgreen" }}
              placeholder="person..."
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <div>
              <Button
                style={{ backgroundColor: "yellow" }}
                value={1}
                onClick={(e) => Toggle(e.target.value)}
              >
                required
              </Button>
            </div>

            {selected1 ? (
              <Select placeholder="">
                <option value="option2">Object</option>
                <option value="option1">String</option>
                <option value="option1">Boolean</option>
                <option value="option3">Integer</option>
              </Select>
            ) : (
              ""
            )}
          </div>

          <div style={{ display: "flex" }}>
            <h2>2.</h2>
            <input
              style={{ backgroundColor: "lightcyan" }}
              placeholder="order...."
              value={orderVal}
              onChange={(e) => setorderVal(e.target.value)}
            />

            <div>
              <Button
                style={{ backgroundColor: "red" }}
                value={2}
                onClick={(e) => Toggle(e.target.value)}
              >
                required
              </Button>
            </div>
            {selected2 ? (
              <Select placeholder="">
                <option value="option2">Object</option>
                <option value="option1">String</option>
                <option value="option1">Boolean</option>
                <option value="option3">Integer</option>
              </Select>
            ) : (
              ""
            )}
          </div>
          <div style={{ display: "flex" }}>
            <h2>3.</h2>
            <input
              style={{ backgroundColor: "lightblue" }}
              placeholder="class.."
              value={classVal}
              onChange={(e) => setclassVal(e.target.value)}
            />
            <div style={{ border: "100%" }}>
              <Button
                style={{ backgroundColor: "lightgreen" }}
                value={3}
                onClick={(e) => Toggle(e.target.value)}
              >
                required
              </Button>
            </div>
            {selected3 ? (
              <Select placeholder="">
                <option value="option2">Object</option>
                <option value="option1">String</option>
                <option value="option1">Boolean</option>
                <option value="option3">Integer</option>
              </Select>
            ) : (
              ""
            )}
          </div>
        </div>
      </form>
    </Box>
  );
}
