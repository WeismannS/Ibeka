import styled from 'styled-components';

const Head = styled.div`width: 95%;
  margin: auto;
  margin-top: 1em;
  height: 3.5em;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`
const Menu = styled.div`width: 50px;
  color: white;vertical-align: middle;line-height:3rem`
const Menu2 = styled.div`width: 250px;
  color: white;
  display: flex;
  flex-direction: row;`
const DiscordWrapper = styled.div`width: 147px;
  font-size: 15px;
  color: white;
  height: 44px;
  background: rgba(79, 79, 79, 0.2);
  border-radius: 6px;
  border: 0px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
`
const DiscordButton = styled(DiscordWrapper).attrs({as:"button"})`padding-left:15px;text-align: left;z-index: 2;position: relative;backdrop-filter: blur(10px)`
const Strip = styled.div`background: #6666FF;
backdrop-filter: blur(125px);
  width: 69px;
  height: 12px;
  border-radius: 6px;
position: relative;
top:-8px;
  left:25%;
z-index: 1`
const Lang = styled.select`width:20%;height: 44px;background: transparent;color:white;margin-right:25px;border:0px`
function Header() {
    return (<Head>
            <Menu>Menu</Menu>
        <Menu2>
            <Lang><option>ENG</option></Lang>
            <DiscordWrapper>
           <a href={"https://discord.gg/akebi"} target={"_blank"}><DiscordButton>DISCORD</DiscordButton><Strip></Strip></a>
            </DiscordWrapper>

        </Menu2>
        </Head>);
}

export {DiscordWrapper,Strip,DiscordButton}
export default Header;