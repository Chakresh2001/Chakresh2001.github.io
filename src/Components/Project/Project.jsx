import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { ProjectCard } from './ProjectCard'

export const Project = ({id}) => {
  return (
    <div className="nav-link projects" style={{marginTop:"100px"}} id={id}>
        <Text mb="30px" fontSize={"35px"} fontWeight={"bold"} color={"#01D0E2"} textAlign={"center"} >Projects</Text>
        
        
        <Box  m="auto" w="80%" >
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
            
            image = "./Coffee-House.png"
            title = "Bialeti Clone"
            desc = "Your go-to coffee destination: a Bialeti-Coffee Clone web app for purchasing coffee and related products."
            techStack = "React.js, Chakra-UI, Css, HTML"
            git="https://github.com/Chakresh2001/previous-chalk-3282"
            view="https://previous-chalk-3282.vercel.app/"

            />
        </Box>


        

    </div>
  )
}
