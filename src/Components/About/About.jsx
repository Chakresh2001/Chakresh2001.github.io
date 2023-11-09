import React from "react";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import styles from "./About.css";

export const About = ({ id }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <div
      id="about"
      className="about section"
      style={{ styles, marginTop: "100px", padding: "20px", width: "100vw" }}
    >
      <Text
        fontSize={["28px", "35px"]} // Adjust font size for mobile
        fontWeight="bold"
        color="#01D0E2"
        textAlign="center"
        paddingTop="40px" // Reduce top padding for mobile
      >
        About Me
      </Text>

      <Box>
        <lottie-player
          style={{
            marginTop: "20px",
            height: "450px", // Adjust height for mobile
            width: "450px", // Adjust width for mobile
            margin: "auto",
          }}
          background="transparent"
          src="https://assets3.lottiefiles.com/packages/lf20_iv4dsx3q.json"
          mode="bounce"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </Box>
      <Box
        id="user-detail-intro"
        mt="20px" // Reduce top margin for mobile
        fontSize={["1rem", "1.4rem"]} // Adjust font size for mobile
        letterSpacing={1}
        textColor="hsl(0, 0%, 30%)"
        textAlign="center"
      >
        <Text id="user-detail-name">Greetings! Meet Chakresh, a passionate individual immersed in the world of coding and problem-solving</Text>
        
         
         
        
        <Text>
        Proficient in front-end development, specializing in creating user-friendly interfaces for seamless user experiences with HTML CSS Javascript. 
        </Text>
        <Text>
        Skilled in back-end technologies such as React.js. Deep understanding of Redux for efficient handling of complex data structures.
        </Text>
        <Text>
        Continuously expanding knowledge and skills to stay ahead of emerging trends and technologies in the industry.
        </Text>
        <Text>
        Dedicated to making meaningful contributions to teams and organizations, delivering high-quality projects that exceed client expectations.
        </Text>
        <Text>
          created various end-to-end website clones using{" "}
          <span style={{ color: "#01D0E2" }}>MERN stack</span>
        </Text>
      </Box>
    </div>
  );
};
