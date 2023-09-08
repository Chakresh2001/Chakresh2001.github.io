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
        <Text id="user-detail-name">Hello! I am Chakresh</Text>
        <Text>
          I love coding and solving problems. As an aspiring Full Stack Web
        </Text>
        <Text>
          developer, I like the impact it creates on the world. I am an expert in
          HTML, REACT.JS AND REDUX
        </Text>
        <Text>
          One of my strongest skills is creativity, and it helps me a lot in web
          design. I have
        </Text>
        <Text>
          created various end-to-end website clones using{" "}
          <span style={{ color: "#01D0E2" }}>MERN stack</span>
        </Text>
      </Box>
    </div>
  );
};
