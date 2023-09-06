import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./Skills.css"

export const Skills = ({id}) => {
  return (
   
      <div style={{marginTop:"100px"}} id="skills" >


<Text fontSize={"35px"}  fontWeight={"bold"} color={"#01D0E2"} paddingTop={"80px"} textAlign={"center"}>SKILLS</Text>
  <Box mt="50px" mb="50px" gap="20px" className='skill-container' display={"flex"}>

  <Box className='skill-container-child skills-card' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>
  <Image src="./html.png" alt="icons" className='skills-card-img'  />
  <p className='skills-card-name'>HTML</p>
  </Box>
  <Box className='skill-container-child skills-card' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

  <Image src="css.png" alt="icons"   className="skills-card-img"/>
  <p className='skills-card-name'>CSS</p>
  </Box>
  <Box className='skill-container-child skills-card' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

  <Image src="javascript.png" alt="icons"  className="skills-card-img"/>
  <p className='skills-card-name'>JavaScript</p>
  </Box>
  <Box className='skill-container-child skills-card' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

  <Image src="Mern.png" w={"500px"} alt="icons"  className="skills-card-img"/>
  <p className='skills-card-name'>MERN</p>
  </Box>
  <Box className='skill-container-child skills-card' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

  <Image src="nodeJs.png" alt="icons" className="skills-card-img"/>
  <p className='skills-card-name'>NodeJS</p>
  </Box>
  <Box className='skill-container-child skills-card' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

  <Image src="react.png" alt="icons"  className="skills-card-img"/>
  <p className='skills-card-name'>ReactJS</p>
  </Box>
  <Box className='skill-container-child skills-card' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

  <Image src="redux.png" alt="icons"  className="skills-card-img"/>
  <p className='skills-card-name'>Redux</p>
  </Box>
  <Box className='skill-container-child skills-card' transition={"0.5s"} _hover={{transform:"translate(0, -10px)"}}>

  <Image src="github.png" alt="icons"  className="skills-card-img"/>
  <p className='skills-card-name'>Git/Github</p>
  </Box>

  </Box>


  <Box>
  <Text fontSize={"40px"} fontWeight={"bold"} fontFamily={"Roboto Mono"} textAlign={"center"}>Days I <span style={{color:"#01D0E2"}}> Worked</span></Text>

  <Box className="react-activity-calendar" mt={"60px"} display={"flex"} justifyContent={"center"}>
    <img src="https://ghchart.rshah.org/Chakresh2001" alt="" />
  </Box>
  
  <Box mt="60px" display={"flex"} justifyContent={"center"} gap={"40px"}>

  <Box   mt="30px">
    <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=chakresh2001" alt="github-streak-stats.css-46b038" />
  </Box>
  
  <Box   mt="30px">
    <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api?username=chakresh2001&show_icons=true" alt="github-top-langs.css-46b038" />
  </Box>

  <Box   mt="30px">
    <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api/top-langs/?username=chakresh2001" alt="github-stats-card.css-46b038" />
  </Box>
  </Box>
  </Box>

</div>

  )
}
