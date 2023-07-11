// root
import { Box, Spinner } from "@chakra-ui/react";

// components
import { Theme as theme } from "../../theme";

export default function Loading() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Spinner color={theme.color.hero} height="5rem" width="5rem" />
      </Box>
    </>
  );
}
