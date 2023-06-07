import logo from './logo.svg';
// import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home/Home';
import Section from './Components/Practice/Section';
import dummyText from './Components/Practice/DummyText';
import "../src/Components/Practice/Practice.css"
import { Box } from '@chakra-ui/react';
import { About } from './Components/About/About';
import { Project } from './Components/Project/Project';
import { Skills } from './Components/Skills/Skills';
import { Contact } from './Components/Contact/Contact';


function App() {
  return (
    <div className='App' id='nav-menu'>
      <Box position={"sticky"} top="0px" w="100%" h="80px" zIndex={"1000"}>

        <Navbar/>
      </Box>
       
       <Box  mt="35px">
       <Home id="home"/>
       </Box>

        <Box>
        <About id="about"/>
        </Box>
        <Box>
        <Project id="projects"/>
        </Box>
        <Box>
        
          <Skills id="skills"/>
         
        </Box>
       <Box>
        <Contact id="contact"/>
        </Box>
        
    </div>
  );
}

export default App;
