// root
import { useState, useReducer, useRef, useEffect } from "react";
import { Box, useDisclosure, useToast } from "@chakra-ui/react";

// components
import Header from "../../layouts/_header";
import CustomTable from "../../components/table";
import CustomModal from "../../components/modal";

const initialState = {
  name: "",
  email: "",
  phone: "",
  industry: "",
  error: "",
  clients: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_INDUSTRY":
      return { ...state, industry: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "ADD_CLIENT":
      return {
        ...state,
        clients: [...state.clients, action.payload],
        name: "",
        email: "",
        phone: "",
        industry: "",
        error: "",
      };
    default:
      return state;
  }
};

export default function AddClients() {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(reducer, initialState);

  const toast = useToast();
  const finalRef = useRef(null);
  const initialRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!state.name || !state.email || !state.phone || !state.industry) {
      dispatch({ type: "SET_ERROR", payload: "Please fill in all fields" });
    } else {
      const newClient = {
        name: state.name,
        email: state.email,
        phone: state.phone,
        industry: state.industry,
      };
      toast({
        title: "Client added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch({ type: "ADD_CLIENT", payload: newClient });
    }

    // post client
    (async function POST() {
      try {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state),
        };
        const res = await fetch("http://localhost:8000/post-client", options);
        if (!res.ok) {
          throw new Error(res.status);
        } else {
          GET();
        }
      } catch (err) {
        console.log(err);
      }
    })();
  };

  // get clients
  async function GET() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await fetch("http://localhost:8000/get-clients");
      if (!res.ok) {
        throw new Error(res.status);
      } else {
        const data = await res.json();
        setClients(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    GET();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = clients.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Box display="flex" flexDirection="column" gap="1rem" margin="1rem">
        <Box>
          <Header searchQuery={searchQuery} handleSearch={handleSearch} />
        </Box>
        <Box>
          <CustomModal
            initialRef={initialRef}
            finalRef={finalRef}
            isOpen={isOpen}
            onSubmit={onSubmit}
            state={state}
            dispatch={dispatch}
            onClose={onClose}
          />
          <CustomTable onOpen={onOpen} isLoading={isLoading} filteredUsers={filteredUsers} />
        </Box>
      </Box>
    </>
  );
}
