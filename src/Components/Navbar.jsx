import { Box, Image, Text, Button } from '@chakra-ui/react'
import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../Components/Navbar.css"

export const Navbar = () => {
 let scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div id="nav-menu">
        <Box padding="10px 30px " display={"flex"} justifyContent={"space-between"} backgroundColor={"#E6E7E2"} boxShadow={"base"}>

            <Box display={"flex"} gap="30px" justifyContent={"center"} alignItems={"center"}>
            
            <Text  fontWeight={"bold"} fontSize={"30px"} fontFamily={"Roboto Mono"} color={"hsl(0, 0%, 30%)"} onClick={scrollToTop} _hover={{cursor:"pointer"}}>Chakresh</Text>
            </Box>

            <Box display={"flex"} w="40%" alignItems={"center"} textColor={"hsl(0, 0%, 30%)"} justifyContent={"space-evenly"}>

                <Box > 
                <Link
                
                to="nav-link home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >  <a >HOME</a>
              </Link>
                </Box>

                
                <Box>
                <Link
                activeClass="about"
                to="nav-link about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >    <a >ABOUT</a>
              </Link>
                </Box>
            

                <Box>
                <Link
                activeClass="active"
                to="nav-link projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >    <a >PROJECTS</a>
              </Link>
                </Box>

                <Box>
                <Link
                activeClass="active"
                to="nav-link skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}black
              >    <a>SKILLS</a>
              </Link>
                </Box>

                <Box>
                <Link
                activeClass="active"
                to="nav-link contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >    <a>CONTACT</a>
              </Link>
                </Box>
               <Box className="nav-link resume"  id="resume-button-1">
                <a id="resume-link-1" href="./Chakresh-Resume.pdf" download> <button className='navbar'>RESUME</button></a>
               </Box>

            </Box>

        </Box>

        
    </div>
  )
}
