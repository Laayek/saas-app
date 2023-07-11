// root
import {
  Input,
  Modal,
  Button,
  ModalBody,
  FormLabel,
  ModalHeader,
  ModalFooter,
  FormControl,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react";

// components
import { Theme as theme } from "../../theme";

export default function CustomModal({
  state,
  isOpen,
  onClose,
  finalRef,
  onSubmit,
  dispatch,
  initialRef,
}) {
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent margin="1rem">
          <ModalHeader>Add client</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={onSubmit}>
              <FormControl marginTop=".5rem">
                <FormLabel>Client's name</FormLabel>
                <Input
                  required
                  type="text"
                  ref={initialRef}
                  placeholder="Client's name"
                  value={state.name}
                  onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
                />
              </FormControl>
              <FormControl marginTop="1.5rem">
                <FormLabel>Email address</FormLabel>
                <Input
                  required
                  type="email"
                  placeholder="Email address"
                  value={state.email}
                  onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                />
              </FormControl>
              <FormControl marginTop="1.5rem">
                <FormLabel>Phone number</FormLabel>
                <Input
                  required
                  type="tel"
                  placeholder="Phone number"
                  value={state.phone}
                  onChange={(e) => dispatch({ type: "SET_PHONE", payload: e.target.value })}
                />
              </FormControl>
              <FormControl marginTop="1.5rem">
                <FormLabel>Industry</FormLabel>
                <Input
                  required
                  type="text"
                  placeholder="Industry"
                  value={state.industry}
                  onChange={(e) => dispatch({ type: "SET_INDUSTRY", payload: e.target.value })}
                />
              </FormControl>
              <ModalFooter>
                <Button type="submit" background={theme.color.hero} colorScheme="green" mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
