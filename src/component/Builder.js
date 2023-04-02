import { VStack, Input, useToast, Box, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

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

  return (
    <Box>
      <form>
        <div style={{ backgroundColor: "lightgrey" }}>
          <div>
            <input
              placeholder="person..."
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            Required
          </div>
          <div style={{ borderColor: "lightgrey" }}>
            <input
              placeholder="order.."
              value={orderVal}
              onChange={(e) => setorderVal(e.target.value)}
            />
            Required
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div style={{ borderColor: "lightgrey" }}>
            <input
              placeholder="class.."
              value={classVal}
              onChange={(e) => setclassVal(e.target.value)}
            />
            Required
          </div>
        </div>
      </form>
    </Box>
  );
}
