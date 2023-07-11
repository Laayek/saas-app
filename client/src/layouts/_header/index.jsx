// root
import { Card, Wrap, Stack, CardBody, WrapItem } from "@chakra-ui/react";

// components
import Search from "../../components/search";
import Auth from "../../logic/auth";

export default function Header({ searchQuery, handleSearch }) {
  return (
    <>
      <Card>
        <CardBody display="flex" justifyContent="space-between" alignItems="center" gap="1rem">
          <Stack spacing={4}>
            <Search searchQuery={searchQuery} handleSearch={handleSearch} />
          </Stack>
          <Wrap>
            <WrapItem>
              <Auth />
            </WrapItem>
          </Wrap>
        </CardBody>
      </Card>
    </>
  );
}
