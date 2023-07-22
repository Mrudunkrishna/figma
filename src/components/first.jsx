import React from 'react'
import styled from  "styled-components"
import picc from '../assets/picc.png';
import picd from '../assets/picd.png';
import pice from '../assets/pice.png';
import picf from '../assets/picf.png';

const Container=styled.div`
width: 100%;
background: #191A1D;
height: 400px;
overflow: hidden;
.main{
    display: flex;
    justify-content: space-between;
}
  .s{
    margin-left: 0px;
    transform:
    perspective(2000px)
    translate3d(0px, -66px, 198px)
    rotateX(-55deg)
    scale3d(0.86, 0.75, 1)
    translateY(50px);
  border-radius: 5px;
  will-change: transform;
  transition: 0.4s ease-in-out transform;

  &:hover {
    transform: scale3d(1, 1, 1);
  }
  }
  .topic{
    margin-top: 50px;
    color: rgb(143, 143, 143);
    font-family: Montserrat;
    font-size: 62px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.27) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
.def{
  margin-top: 50px;
  color: rgb(143, 143, 143);
    font-family: Montserrat;
    font-size: 54px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

@media screen and (max-width: 600px) {
  margin-top: -150px;
  width: 100%;
  .svg{
    width: 300px;
    height: 100px;
    flex-shrink: 0; 
    
  }
  .main{
    width: 350px;
    
  }
  .s{
    margin-left: 10px;
    margin-right: 10px;
  }
}
`;

const Second = () => {
  return (
    <Container>
  <div className="main">
  <svg className='s' xmlns="http://www.w3.org/2000/svg" width="500" height="350" viewBox="0 0 594 832" fill="none"><path d="M2.5 5.00002C2.5 3.6193 3.6193 2.5 5 2.5H494C547.848 2.5 591.5 46.1522 591.5 100V829.5H100C46.1522 829.5 2.5 785.848 2.5 732V5.00002Z" fill="#3C3C3C" stroke="#63E7DA" stroke-width="10"></path><foreignObject x="40" y="130" width="531" height="700"><img src={picc} width="100" height="100"/><div class="topic">UI &amp; UX</div><div class="def"> Designing interfaces that are intuitive, efficient, and enjoyable to use.</div></foreignObject></svg>
  <svg className='s' xmlns="http://www.w3.org/2000/svg" width="500" height="350" viewBox="0 0 594 832" fill="none"><path d="M2.5 2.5H494C547.848 2.5 591.5 46.1522 591.5 100V829.5H100C46.1522 829.5 2.5 785.848 2.5 732V2.5Z" fill="#3C3C3C" stroke="#63E7DA" stroke-width="10"></path><foreignObject x="40" y="130" width="531" height="700"><img src={picd} width="100" height="100"/><div class="topic">Web &amp; Mobile App</div><div class="def">Transforming ideas into exceptional web and mobile app experiences.</div></foreignObject></svg>
  <svg className='s' xmlns="http://www.w3.org/2000/svg" width="500" height="350" viewBox="0 0 594 832" fill="none"><path d="M2.5 2.5H494C547.848 2.5 591.5 46.1522 591.5 100V829.5H100C46.1522 829.5 2.5 785.848 2.5 732V2.5Z" fill="#3C3C3C" stroke="#63E7DA" stroke-width="10"></path><foreignObject x="40" y="130" width="531" height="700"><img src={pice} width="100" height="100"/><div class="topic">Design &amp; Creative</div><div class="def">Crafting visually stunning designs that connect with your audience.</div></foreignObject></svg>
  <svg className='s' xmlns="http://www.w3.org/2000/svg" width="500" height="350" viewBox="0 0 594 832" fill="none"><path d="M2.5 2.5H494C547.848 2.5 591.5 46.1522 591.5 100V829.5H100C46.1522 829.5 2.5 785.848 2.5 732V2.5Z" fill="#3C3C3C" stroke="#63E7DA" stroke-width="10"></path><foreignObject x="40" y="130" width="531" height="700"><img src={picf} width="100" height="100"/><div class="topic">Development</div><div class="def">Bringing your vision to life with the latest technology and design trends.</div></foreignObject></svg>
  </div>
    </Container>
  )
}

export default Second