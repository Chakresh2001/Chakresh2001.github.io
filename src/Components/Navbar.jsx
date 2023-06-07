import { Box, Image, Text, Button } from '@chakra-ui/react'
import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../Components/Navbar.css"

export const Navbar = () => {
 let scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
        <Box padding="10px 30px " display={"flex"} justifyContent={"space-between"} backgroundColor={"#E6E7E2"} boxShadow={"base"}>

            <Box display={"flex"} gap="30px" justifyContent={"center"} alignItems={"center"}>
            
            <Text  fontWeight={"bold"} fontSize={"30px"} fontFamily={"Roboto Mono"} color={"hsl(0, 0%, 30%)"} onClick={scrollToTop} _hover={{cursor:"pointer"}}>Chakresh</Text>
            </Box>

            <Box display={"flex"} w="40%" alignItems={"center"} textColor={"hsl(0, 0%, 30%)"} justifyContent={"space-evenly"}>

                <Box > 
                <Link
                
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >  <button className='navbar'>HOME</button>
              </Link>
                </Box>

                
                <Box>
                <Link
                activeClass="about"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >    <button className='navbar'>ABOUT</button>
              </Link>
                </Box>
            

                <Box>
                <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >    <button className='navbar'>PROJECTS</button>
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
              >    <button className='navbar'>SKILLS</button>
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
              >    <button className='navbar'>CONTACT</button>
              </Link>
                </Box>
               <Box className="nav-link resume">
                <a id="resume-link-2" href="./Chakresh-Resume.pdf" download> <button className='navbar'>RESUME</button></a>
               </Box>

            </Box>

        </Box>

        
    </div>
  )
}
