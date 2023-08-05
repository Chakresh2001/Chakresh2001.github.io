import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { ProjectCard } from './ProjectCard'

export const Project = ({id}) => {
  return (
    <div id={id}>
      <div style={{marginTop:"100px"}} >
        
        
        <Box  m="auto" w="80%" >
        <Text paddingTop="100px" fontSize={"35px"} fontWeight={"bold"} color={"#01D0E2"} textAlign={"center"} >Projects</Text>
            <ProjectCard 
            
            image = "./Zara.png"
            title = "Zara Clone"
            desc = "A Zara Clone web application created for buying clothes, handbags , shoes, jewellery and beauty products"
            techStack = "Html, Css, Javascript"
            git = "https://github.com/Chakresh2001/few-quilt-3078"
            view="https://preeminent-manatee-128f81.netlify.app/"

            />
            <ProjectCard 
            
            image = "./Souled-Store.png"
            title = "Souled-Store Clone"
            desc = "A Souled-Store Clone web application created for buying clothes, backpacks , shoes and latest trendy products"
            techStack = "Html, Css, Javascript"
            git="https://github.com/Umesh8878/red-sail-4113"
            view="https://sparkly-chaja-365db2.netlify.app/"

            />
            <ProjectCard 
            
            image = "./Coffee-House.png"
            title = "Bialeti Clone"
            desc = "Your go-to coffee destination: a Bialeti-Coffee Clone web app for purchasing coffee and related products."
            techStack = "React.js, Chakra-UI, Css, HTML"
            git="https://github.com/Chakresh2001/previous-chalk-3282"
            view="https://previous-chalk-3282.vercel.app/"

            />
            <ProjectCard 
            
            image = "https://user-images.githubusercontent.com/120241122/246763519-6bc289e9-62cb-4583-ae1b-721184cc616c.png"
            title = "Credit Karma Clone"
            desc = "A renowned Italian coffee brand known for its premium coffeeproducts and cutting-edge coffee machines."
            techStack = "React.js, Chakra-UI, Css, HTML, Redux"
            git="https://github.com/Chakresh2001/wonderful-sound"
            view="https://wonderful-sound.vercel.app/"

            />
        </Box>


        

    </div>
    </div>
  )
}
