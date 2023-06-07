import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./Skills.css"

export const Skills = ({id}) => {
  return (
    <div style={{marginTop:"100px"}} id={id} >

      <Text fontSize={"35px"} fontWeight={"bold"} color={"#01D0E2"} textAlign={"center"}>SKILLS</Text>

        <Box mt="50px" mb="50px" gap="20px" className='skill-container' display={"flex"}>

        <Box className='skill-container-child' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>
        <Image src="./html.png" alt="icons"   />
        <p>HTML</p>
        </Box>
        <Box className='skill-container-child' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

        <Image src="css.png" alt="icons"   />
        <p>CSS</p>
        </Box>
        <Box className='skill-container-child' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

        <Image src="javascript.png" alt="icons"  />
        <p>JavaScript</p>
        </Box>
        <Box className='skill-container-child' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

        <Image src="Mern.png" w={"500px"} alt="icons"  />
        <p>MERN</p>
        </Box>
        <Box className='skill-container-child' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

        <Image src="nodeJS.png" alt="icons" />
        <p>NodeJS</p>
        </Box>
        <Box className='skill-container-child' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

        <Image src="react.png" alt="icons"  />
        <p>ReactJS</p>
        </Box>
        <Box className='skill-container-child' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

        <Image src="redux.png" alt="icons"  />
        <p>Redux</p>
        </Box>
        <Box className='skill-container-child' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

        <Image src="github.png" alt="icons"  />
        <p>Git/Github</p>
        </Box>

        </Box>


        <Box>
        <Text fontSize={"40px"} fontWeight={"bold"} fontFamily={"Roboto Mono"} textAlign={"center"}>Days I <span style={{color:"#01D0E2"}}> Worked</span></Text>

        <Box mt={"60px"} display={"flex"} justifyContent={"center"}>
          <img src="https://ghchart.rshah.org/Chakresh2001" alt="" />
        </Box>
        
        <Box mt="60px" display={"flex"} justifyContent={"center"} gap={"40px"}>
        <Box mt="30px">
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=Chakresh2001" alt="" />
        </Box>
        
        <Box mt="30px">
          <img src="https://github-readme-stats.vercel.app/api?username=Chakresh2001&show_icons=true" alt="" />
        </Box>
        </Box>
        </Box>

    </div>
  )
}
