import styled from 'styled-components';
import akebi from '../resources/akebi.gif'

import Shape from '../resources/Component 1.png'
import Shape2 from '../resources/Shape.png'
import {DiscordWrapper,Strip,DiscordButton} from "./Header";

const Homee = styled.div`display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center`
const AkebiImg = styled.img.attrs({src: akebi})`mix-blend-mode: difference;
  width: 222px;
  height: 222px;
  position: relative;
  top: -2.5em`
const Speech = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 60px;
  text-align: center;
  position: relative;
  color: #FFFFFF;
  z-index: 3;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`
const HighLighted = styled.span`color: #8B46A5;
  z-index: 2;
  position: relative`
const Sha = styled.img.attrs({src: Shape,draggable:"false"})`position: absolute;
  bottom: -100%;
  left: -100%`
const Sha2 = styled(Sha).attrs({src: Shape2})``
const Span = styled.span`z-index: 5;
  position: relative; color:white`
const DownloadWrapper = styled(DiscordWrapper)`position: relative;top:100px;margin-bottom: 300px`
const DownloadButton = styled(DiscordButton)`text-align: center;padding:0;border:2px solid #0c4a6e;box-shadow: 0 0 13px -4px #48abe0; 
  transition: border 0.3s linear;
  &&:hover{ border : 2px solid #3fb5f1; box-shadow: 0 0 13px 1px #48abe0;opacity: 0.8}`
const Shapes = styled.div`transform: matrix(0.72, -0.37, 1.23, 0.76, 0, 0);-webkit-filter: blur(67.5px);position:absolute;background: #00A3FF;width: 500px;height: 500px;top:100%`
const Shapes1 =styled(Shapes)`background: #DB00FF;
  transform: matrix(-0.74, 0.34, -1.19, -0.8, 0, 0); left:90%;top:100%;`
const Shapes2 = styled(Shapes)`background: #000AFF;
transform: matrix(-0.88, -0.17, 0.61, -0.97, 0, 0);top:110%;`
function Home() {
    return (
        <Homee>
            <AkebiImg></AkebiImg>
            <Speech><Span>Akebi Remains</Span> <HighLighted><Sha></Sha>Free
            </HighLighted><Span><br></br>For</Span><HighLighted><Sha2></Sha2> You</HighLighted></Speech>
            <DownloadWrapper><DownloadButton>Download</DownloadButton><Strip></Strip></DownloadWrapper>

            <Span style={{opacity:.6}}>Send any communications or inquiries to @Akebi.gmail.</Span>
            <Span style={{opacity:.4,fontSize: "0.75rem"}}>Copyright © 2021-2023 Taiga Softworks LLC. All rights reserved..</Span>
            <Shapes></Shapes>
            <Shapes1></Shapes1>
            <Shapes2></Shapes2>
        </Homee>

    );
}


export default Home;