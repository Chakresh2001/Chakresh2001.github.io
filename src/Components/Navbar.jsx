import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../Components/Navbar.css";

export const Navbar = () => {
  let scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Use the useMediaQuery hook to check the screen size
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1S9zAZ7huAztgCec4fCGTOFk_nF9YqSWc/view?usp=sharing",
      "_blank",
      "noopener",
      "noreferer"
    );
  };

  return (
    <div className="nav-link">
      <Box
        padding="10px 30px"
        display={"flex"}
        justifyContent={"space-between"}
        backgroundColor={"#E6E7E2"}
        boxShadow={"base"}
        flexDirection={isLargerThan768 ? "row" : "column"} // Adjust the direction based on screen size
        alignItems="center"
      >
        <Text
          fontWeight={"bold"}
          fontSize={"30px"}
          fontFamily={"Roboto Mono"}
          color={"hsl(0, 0%, 30%)"}
          onClick={scrollToTop}
          _hover={{ cursor: "pointer" }}
          display={"grid"}
          placeItems={"center"}
        >
          Chakresh
        </Text>

        <Box
          display={"flex"}
          w={isLargerThan768 ? "40%" : "100%"} // Adjust the width based on screen size
          alignItems={"center"}
          textColor={"hsl(0, 0%, 30%)"}
          justifyContent={isLargerThan768 ? "space-evenly" : "flex-start"} // Adjust alignment based on screen size
          marginTop={isLargerThan768 ? "0" : "10px"} // Add some space when in mobile view
        >
          <a href="#home" className="nav-link home navbar">
            HOME
          </a>

          <a href="#about" className="nav-link about navbar">
            ABOUT
          </a>

          <a href="#skills" className="nav-link skills navbar">
            SKILLS
          </a>

          <a href="#projects" className="nav-link projects navbar">
            PROJECTS
          </a>

          <a href="#contact" className="nav-link contact navbar">
            CONTACT
          </a>

          <Box className="nav-link resume" id="resume-button-1">
            <a id="resume-link-1" href="./Chakresh-Resume.pdf" download="./Chakresh-Resume.pdf" >
              <button className="navbar" onClick={handleClick}>RESUME</button>
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
