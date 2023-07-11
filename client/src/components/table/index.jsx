// root
import {
  Tr,
  Th,
  Td,
  Box,
  Card,
  Table,
  Thead,
  Tbody,
  Button,
  Heading,
  Skeleton,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

// components
import { Theme as theme } from "../../theme";

export default function CustomTable({ onOpen, isLoading, filteredUsers }) {
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" margin="1rem 0 2rem 0">
        <Heading as="h3" size="lg" color={theme.color.secondary} fontWeight="600" fontSize="1.6rem">
          Clients
        </Heading>
        <Button onClick={onOpen} background={theme.color.hero} colorScheme="green" size="lg">
          Add client
        </Button>
      </Box>
      <Card>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th fontWeight="600">Client's name</Th>
                <Th fontWeight="600">Email</Th>
                <Th fontWeight="600">Phone</Th>
                <Th fontWeight="600">Industry</Th>
                <Th fontWeight="600" isNumeric>
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {isLoading ? (
                <>
                  {Array(9)
                    .fill()
                    .map((_, index) => (
                      <Tr key={index}>
                        <Td fontWeight="600">
                          <Skeleton height="1.25rem" />
                        </Td>
                        <Td>
                          <Skeleton height="1.25rem" />
                        </Td>
                        <Td>
                          <Skeleton height="1.25rem" />
                        </Td>
                        <Td>
                          <Skeleton height="1.25rem" />
                        </Td>
                        <Td isNumeric>
                          <Box display="flex" justifyContent="right" gap="1rem">
                            <Button
                              style={{ borderColor: theme.color.hero, color: theme.color.hero }}
                              variant="outline"
                            >
                              Edit
                            </Button>
                            <Button
                              background={theme.color.hero}
                              colorScheme="green"
                              variant="solid"
                            >
                              View
                            </Button>
                          </Box>
                        </Td>
                      </Tr>
                    ))}
                </>
              ) : (
                <>
                  {filteredUsers.map((client, index) => (
                    <Tr key={index}>
                      <Td fontWeight="600">{client.name}</Td>
                      <Td>{client.email}</Td>
                      <Td>{client.phone}</Td>
                      <Td>{client.industry}</Td>
                      <Td isNumeric>
                        <Box display="flex" justifyContent="right" gap="1rem">
                          <Button
                            style={{ borderColor: theme.color.hero, color: theme.color.hero }}
                            variant="outline"
                          >
                            Edit
                          </Button>
                          <Button background={theme.color.hero} colorScheme="green" variant="solid">
                            View
                          </Button>
                        </Box>
                      </Td>
                    </Tr>
                  ))}
                </>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}
