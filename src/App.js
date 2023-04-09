import Header from "./components/Header";
import Home from "./components/Home";
import styled from 'styled-components';
import ProgressiveImage from 'react-progressive-bg-image';
import IMAGE from "./resources/thumb-1920-1209823-1.webp"
import IMAGEX60 from './resources/thumb-1920-1209823-1-progressive-1.webp'
const StyledProgressiveImage = styled(ProgressiveImage)`
  object-fit: cover;
  position: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, #101010 0%, rgba(16, 16, 16, 0) 120.36%)
`;

function App() {
  return (
 <StyledProgressiveImage
     src={IMAGE}
     placeholder={IMAGEX60}
     transition="all 1s linear"
 >;
     <Header></Header>
      <Home></Home> </StyledProgressiveImage>)
}

export default App;
