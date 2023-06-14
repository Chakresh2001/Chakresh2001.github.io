import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import styles from "./About.css"

export const About = ({id}) => {
  return (
    <div>
      <div className="about section" style={{styles,  marginTop:"100px", padding:"20px", width:"100vw" }} id={id}>
        <Text fontSize={"35px"} fontWeight={"bold"} color={"#01D0E2"} textAlign={"center"}>About Me </Text>
       
        <Box>
        <lottie-player style={{marginTop:"20px", height:"450px", width:"450px", margin:"auto"}} background="transparent" src="https://assets3.lottiefiles.com/packages/lf20_iv4dsx3q.json" mode="bounce"   speed="1"  loop  autoplay></lottie-player>
        </Box>
        <Box id="user-detail-intro" mt="30px" fontSize={"1.4rem"} letterSpacing={1} textColor={"hsl(0, 0%, 30%)"}  textAlign={"center"} >
            <Text  id="user-detail-name">Hello! I am Chakresh</Text>
            <Text>I love coding and solving problems.As an aspiring Full Stack Web</Text>
            <Text>developer, I like the impact it creates on the world. I am expert in HTML, REACT.JS AND REDUX</Text>
            <Text>One of my strongest skill is creativity and it helps me a lot in web design I have</Text>
            <Text>created various end to end website clone using <span style={{color:"#01D0E2"}}> MERN stack</span> </Text>
        </Box>
    </div>
    </div>
  )
}
