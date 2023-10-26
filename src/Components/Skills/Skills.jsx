import { Box, Image, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import styles from './Skills.css';

export const Skills = ({ id }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <div style={{ marginTop: '100px' }} id="skills">
      <Text fontSize="35px" fontWeight="bold" color="#01D0E2" paddingTop="80px" textAlign="center">
        SKILLS
      </Text>
      <Box mt="50px" mb="50px" gap="20px" className="skill-container" display={{ base: 'flex', md: 'grid' }} flexWrap="wrap">

        {/* HTML */}
        <Box className="skill-container-child skills-card" transition="0.5s" _hover={{ transform: 'translate(0, -10px)' }}>
          <Image width={!isLargerThan768 ? "250px" : "450px"} src="./html.png" alt="HTML icon" className="skills-card-img" />
          <Text fontSize={isLargerThan768 ? "16px" : "21px"} fontWeight={isLargerThan768 ? "medium" : "bold"}  className="skills-card-name">HTML</Text>
        </Box>

        {/* CSS */}
        <Box className="skill-container-child skills-card" transition="0.5s" _hover={{ transform: 'translate(0, -10px)' }}>
          <Image width={!isLargerThan768 ? "250px" : "450px"} src="css.png" alt="CSS icon" className="skills-card-img" />
          <Text fontSize={isLargerThan768 ? "16px" : "21px"} fontWeight={isLargerThan768 ? "medium" : "bold"}  className="skills-card-name">CSS</Text>
        </Box>

        {/* JavaScript */}
        <Box className="skill-container-child skills-card" transition="0.5s" _hover={{ transform: 'translate(0, -10px)' }}>
          <Image width={!isLargerThan768 ? "250px" : "450px"} src="javascript.png" alt="JavaScript icon" className="skills-card-img" />
          <Text   fontSize={isLargerThan768 ? "16px" : "21px"} fontWeight={isLargerThan768 ? "medium" : "bold"}  className="skills-card-name">JavaScript</Text>
        </Box>

        {/* MERN */}
        <Box className="skill-container-child skills-card" transition="0.5s" _hover={{ transform: 'translate(0, -10px)' }}>
          <Image width={!isLargerThan768 ? "250px" : "450px"} src="Mern.png"  alt="MERN icon" className="skills-card-img" />
          <Text fontSize={isLargerThan768 ? "16px" : "21px"} fontWeight={isLargerThan768 ? "medium" : "bold"}  className="skills-card-name">MERN</Text>
        </Box>

        {/* NodeJS */}
        <Box className="skill-container-child skills-card" transition="0.5s" _hover={{ transform: 'translate(0, -10px)' }}>
          <Image width={!isLargerThan768 ? "250px" : "450px"} src="nodeJs.png" alt="NodeJS icon" className="skills-card-img" />
          <Text   fontSize={isLargerThan768 ? "16px" : "21px"} fontWeight={isLargerThan768 ? "medium" : "bold"}  className="skills-card-name">NodeJS</Text>
        </Box>

        {/* ReactJS */}
        <Box className="skill-container-child skills-card" transition="0.5s" _hover={{ transform: 'translate(0, -10px)' }}>
          <Image width={!isLargerThan768 ? "250px" : "450px"} src="react.png" alt="ReactJS icon" className="skills-card-img" />
          <Text fontSize={isLargerThan768 ? "16px" : "21px"} fontWeight={isLargerThan768 ? "medium" : "bold"}  className="skills-card-name">ReactJS</Text>
        </Box>

        {/* Redux */}
        <Box className="skill-container-child skills-card" transition="0.5s" _hover={{ transform: 'translate(0, -10px)' }}>
          <Image width={!isLargerThan768 ? "250px" : "450px"} src="redux.png" alt="Redux icon" className="skills-card-img" />
          <Text   fontSize={isLargerThan768 ? "16px" : "21px"} fontWeight={isLargerThan768 ? "medium" : "bold"}  className="skills-card-name">Redux </Text>
        </Box>

        {/* Git/Github */}
        <Box className="skill-container-child skills-card" transition="0.5s" _hover={{ transform: 'translate(0, -10px)' }}>
          <Image width={!isLargerThan768 ? "250px" : "450px"} src="github.png" alt="Git/Github icon" className="skills-card-img" />
          <Text   fontSize={isLargerThan768 ? "16px" : "21px"} fontWeight={isLargerThan768 ? "medium" : "bold"}  className="skills-card-name">Git/Github</Text>
        </Box>
      </Box>

      <Box>
        <Text fontSize="40px" fontWeight="bold" fontFamily="Roboto Mono" textAlign="center">
          Days I <span style={{ color: '#01D0E2' }}> Worked</span>
        </Text>

        <Box className="react-activity-calendar" mt="60px" display={"flex"} justifyContent="center" >
          <img src="https://ghchart.rshah.org/Chakresh2001" alt="" />
        </Box>

        <Box mt="60px"  justifyContent="center" gap="40px" display={"flex"} flexWrap="wrap">

          <Box mt="30px">
            <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=chakresh2001" alt="GitHub Streak Stats" />
          </Box>

          <Box mt="30px">
            <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api?username=chakresh2001&show_icons=true" alt="GitHub Top Languages" />
          </Box>

          <Box mt="30px">
            <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api/top-langs/?username=chakresh2001" alt="GitHub Stats Card" />
          </Box>
        </Box>
      </Box>
    </div>
  );
};
