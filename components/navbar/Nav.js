import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Logo from "./Logo";
import Link from "next/link";
import { Slide, SlideFade } from "@chakra-ui/transition";
import { useDisclosure } from "@chakra-ui/hooks";
const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8, md: isLast ? 0 : 0 }}
      ml={{ base: 0, sm: isLast ? 0 : 6, md: isLast ? 0 : 12 }}
      display="block"
      {...rest}
      color="white"
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      px={{ base: 8, md: 32 }}
      py={8}
      bg={"#008080"}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu} padding={5}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          display={{ base: "none", md: "flex" }}
          align="center"
          bg="#008080"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">About me</MenuItem>
          <MenuItem to="/articles">Article </MenuItem>
          <MenuItem to="/contact">Contact me </MenuItem>
        </Flex>
        <Slide
          display={{ base: "block", md: "none" }}
          in={show}
          unmountOnExit={true}
          direction="left"
          style={{ marginTop: "14vh" }}
        >
          <Flex
            position="relative"
            zIndex={5553}
            align="center"
            bg="#008080"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About me</MenuItem>
            <MenuItem to="/articles">Article </MenuItem>
            <MenuItem to="/contact">Contact me </MenuItem>
          </Flex>
        </Slide>
      </Box>
    </Flex>
  );
};

export default Header;
