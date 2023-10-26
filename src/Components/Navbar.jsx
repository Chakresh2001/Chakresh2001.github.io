import React, { useState } from "react";
import { Box, Text, IconButton, useMediaQuery, VStack, Collapse } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { animateScroll as scroll } from "react-scroll";
import "./Navbar.css"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [isLargerThan768] = useMediaQuery("(min-width: 863px)");

    const handleClick = () => {
      window.open(
        "https://drive.google.com/file/d/1S9zAZ7huAztgCec4fCGTOFk_nF9YqSWc/view?usp=sharing",
        "_blank",
        "noopener",
        "noreferer"
      );
    };

  return (
    <Box
      padding="10px 30px"
      display="flex"
      justifyContent="space-between"
      backgroundColor="#E6E7E2"
      boxShadow="base"
      flexDirection={isLargerThan768 ? "row" : "column"}
      alignItems="center"
    >
      <Text
        fontWeight="bold"
        fontSize={isLargerThan768 ? "30px" : "24px"}
        fontFamily="Roboto Mono"
        color="hsl(0, 0%, 30%)"
        onClick={scrollToTop}
        _hover={{ cursor: "pointer" }}
        display="grid"
        placeItems="center"
      >
        Chakresh
      </Text>

      {isLargerThan768 ? (
        <Box
          display="flex"
          w="40%"
          alignItems="center"
          textColor="hsl(0, 0%, 30%)"
          justifyContent="space-evenly"
          marginTop="0"
        >
          <a id="hover" href="#home" className="nav-link home">
            HOME
          </a>
          <a id="hover" href="#about" className="nav-link about">
            ABOUT
          </a>
          <a id="hover" href="#skills" className="nav-link skills">
            SKILLS
          </a>
          <a id="hover" href="#projects" className="nav-link projects">
            PROJECTS
          </a>
          <a id="hover" href="#contact" className="nav-link contact">
            CONTACT
          </a>
          <Box className="nav-link resume" id="resume-button-1">
            <a id="resume-link-1" href="./Chakresh-Resume.pdf" download="./Chakresh-Resume.pdf">
              <button id="hover" className="navbar" onClick={handleClick}>
                RESUME
              </button>
            </a>
          </Box>
        </Box>
      ) : (
        <IconButton
        mt="20px"
          aria-label="Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <Collapse in={isOpen}>
        <VStack spacing={2} alignItems="flex-start">
          <a id="hover" href="#home" className="nav-link home">
            HOME
          </a>
          <a id="hover" href="#about" className="nav-link about">
            ABOUT
          </a>
          <a id="hover" href="#skills" className="nav-link skills">
            SKILLS
          </a>
          <a id="hover" href="#projects" className="nav-link projects">
            PROJECTS
          </a>
          <a id="hover" href="#contact" className="nav-link contact">
            CONTACT
          </a>
          <Box className="nav-link resume" id="resume-button-2">
            <a id="resume-link-2" href="./Chakresh-Resume.pdf" download="./Chakresh-Resume.pdf">
              <button id="hover"  onClick={handleClick}>
                RESUME
              </button>
            </a>
          </Box>
        </VStack>
      </Collapse>
    </Box>
  );
};
