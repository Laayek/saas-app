// root
import {
  Menu,
  Text,
  Avatar,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuButton,
  MenuDivider,
  AvatarBadge,
} from "@chakra-ui/react";

import { FaUser } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

// components
import { Theme as theme } from "../../theme";

export default function Profile({ props, logoutFunction, redirectToAccountPage }) {
  const email = props.user.email;
  const name = props.user.firstName + " " + props.user.lastName;
  const noname = typeof props.user.firstName && props.user.lastName === undefined;

  return (
    <>
      <Menu>
        <MenuButton>
          <Avatar cursor="pointer" name={noname ? email : name} src={props.user.pictureUrl}>
            <AvatarBadge boxSize="1rem" bg={theme.color.hero} />
          </Avatar>
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem
              display="flex"
              gap=".65rem"
              _hover={{ background: "none" }}
              _focus={{ background: "none" }}
            >
              <Avatar size="2xs" name={noname ? email : name} src={props.user.pictureUrl} />
              <Text
                fontSize="md"
                background="gray.100"
                borderRadius=".5rem"
                padding="0 .25rem 0 .25rem"
                maxWidth="10rem"
                overflowX="scroll"
                display="flex"
                sx={{ "&::-webkit-scrollbar": { display: "none" } }}
              >
                <span>{noname ? email : name}</span>
              </Text>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Settings">
            <MenuItem icon={<FaUser />} onClick={redirectToAccountPage}>
              Account
            </MenuItem>
            <MenuDivider />
            <MenuItem icon={<RiLogoutBoxLine />} onClick={logoutFunction}>
              Logout
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
}
