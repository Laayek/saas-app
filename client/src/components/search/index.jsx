// root
import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

// components
import { Theme as theme } from "../../theme";

export default function Search({ searchQuery, handleSearch }) {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color={theme.color.secondary} />
        </InputLeftElement>
        <Input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} />
      </InputGroup>
    </>
  );
}
