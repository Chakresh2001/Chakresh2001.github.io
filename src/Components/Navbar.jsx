import { Box, Image, Text, Button } from '@chakra-ui/react'
import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../Components/Navbar.css"

export const Navbar = () => {
 let scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div >
        <Box padding="10px 30px " display={"flex"} justifyContent={"space-between"} backgroundColor={"#E6E7E2"} boxShadow={"base"}>

            <Box display={"flex"} gap="30px" justifyContent={"center"} alignItems={"center"}>
            
            <Text  fontWeight={"bold"} fontSize={"30px"} fontFamily={"Roboto Mono"} color={"hsl(0, 0%, 30%)"} onClick={scrollToTop} _hover={{cursor:"pointer"}}>Chakresh</Text>
            </Box>

            <Box className="nav-link" display={"flex"} w="40%" alignItems={"center"} textColor={"hsl(0, 0%, 30%)"} justifyContent={"space-evenly"}>

               
                <a
                href="#home"
                className='navbar nav-link home'
                
              > HOME
              </a>
               

                
                
                <a
                href='#about'
                className='navbar nav-link about'
              >   ABOUT
              </a>
                
                <a
                href='#projects'
                className='navbar nav-link projects'
              >PROJECTS
              </a>
                
                <a
                href='#skills'
                className='navbar nav-link skills'
              >SKILLS
              </a>
                
                <a
                href='#contact'
                className='navbar nav-link contact'
              >CONTACT
              </a>
                
               <Box className="nav-link resume"  id="resume-button-1">
                <a id="resume-link-1" href="./Chakresh-Resume.pdf" download> <button className='navbar'>RESUME</button></a>
               </Box>

            </Box>

        </Box>

        
    </div>
  )
}
