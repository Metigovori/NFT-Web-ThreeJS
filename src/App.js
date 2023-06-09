import styled from 'styled-components';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import { useState } from 'react';
import videoFile from './assets/door-6714_Trim - Copy.mp4'

function App() {
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleVideoEnded() {
    setVideoPlaying(false);
  }
  return (   
    <>
    {videoPlaying && (
      <VideoWrapper>
        <video autoPlay muted onEnded={handleVideoEnded}>
          <source src={videoFile} type="video/mp4" />
        </video>
      </VideoWrapper>
    )}
    {!videoPlaying && (
    <div>

      <Container>
     <Hero/>
     <Who/> 
     <Works/>
     <Contact/>
     </Container>

    </div>
      )}
      </>
  );
}

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

const VideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;



export default App;
