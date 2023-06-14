import { Box, Image, Text, Button } from "@chakra-ui/react";
import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../Components/Navbar.css";

export const Navbar = () => {
  let scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="nav-link" >
      <Box
        padding="10px 30px "
        display={"flex"}
        justifyContent={"space-between"}
        backgroundColor={"#E6E7E2"}
        boxShadow={"base"}
        
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
          w="40%"
          alignItems={"center"}
          textColor={"hsl(0, 0%, 30%)"}
          justifyContent={"space-evenly"}
        >
          <a href="#home" className="nav-link home navbar ">
           
            HOME
          </a>

          <a href="#about" className="nav-link about navbar ">
           
            ABOUT
          </a>

          <a href="#skills" className="nav-link skills navbar ">
            SKILLS
          </a>

          <a href="#projects" className="nav-link projects navbar ">
            PROJECTS
          </a>

          <a href="#contact" className="nav-link contact navbar ">
            CONTACT
          </a>

          <Box className="nav-link resume" id="resume-button-1">
            <a id="resume-link-1" href="./Chakresh-Resume.pdf" download>
             
              <button className="navbar">RESUME</button>
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
