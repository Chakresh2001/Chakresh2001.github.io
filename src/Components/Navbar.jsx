import { Box, Image, Text, Button } from '@chakra-ui/react'
import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../Components/Navbar.css"

export const Navbar = () => {
 let scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div class="nav-link">
        <Box padding="10px 30px " display={"flex"} justifyContent={"space-between"} backgroundColor={"#E6E7E2"} boxShadow={"base"}>

            <Box display={"flex"} gap="30px" justifyContent={"center"} alignItems={"center"}>
            
            <Text  fontWeight={"bold"} fontSize={"30px"} fontFamily={"Roboto Mono"} color={"hsl(0, 0%, 30%)"} onClick={scrollToTop} _hover={{cursor:"pointer"}}>Chakresh</Text>
            </Box>

            <Box display={"flex"} w="40%" alignItems={"center"} textColor={"hsl(0, 0%, 30%)"} justifyContent={"space-evenly"}>

                <Box > 
                <a
                className='navbar'
                href="#home"
                
              > HOME
              </a>
                </Box>

                
                <Box>
                <a
                href='#about'
                className='navbar'
              >   ABOUT
              </a>
                </Box>
            

                <Box>
                <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >    <button class="navbar">PROJECTS</button>
              </Link>
                </Box>

                <Box>
                <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}black
              >    <button class="navbar">SKILLS</button>
              </Link>
                </Box>

                <Box>
                <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >    <button class="navbar">CONTACT</button>
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
