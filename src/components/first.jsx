import React from 'react'
import styled from  "styled-components"
import picc from '../assets/picc.png';
import picd from '../assets/picd.png';
import pice from '../assets/pice.png';
import picf from '../assets/picf.png';

const Container=styled.div`
width: 100%;
background: #191A1D;
height: 600px;

.container{
    width: 80px;
    height: 400px;
    background: #191A1D;
    margin-top: -150px;
    display: flex;
    height: 400px;
    justify-content:space-between;
    align-items: center;
}
.div1,.div2,.div3,.div4{
  margin-top:100px;
  width:300px ;
  height: 300px;
  flex-shrink: 0;
  margin-left: 25px;
  margin-right:25px;
  border-top-right-radius: 15% 15%;
  border-bottom-left-radius: 15% 15%; 
}
.div1{
     background-color: #3C3C3C;
    border: 5px solid #63E7DA;  
}
.div11{
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
}
.icon1{
  width: 60px;
  height: 60px;
}
.div1 h1{
  background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.27) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.div1 h3{
  color: #8F8F8F;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.div2{
  background-color: #3C3C3C;
    border: 5px solid #63E7DA;
}
.div22{
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
}
.icon2{
  width: 60px;
  height: 60px;
}
.div2 h1{
  background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.27) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.div2 h3{
  color: #8F8F8F;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.div3{
  background-color: #3C3C3C;
    border: 5px solid #63E7DA;
}
.div33{
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
}
.icon3{
  width: 60px;
  height: 60px;
}
.div3 h1{
  background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.27) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.div3 h3{
  color: #8F8F8F;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.div4{
  background-color: #3C3C3C;
    border: 5px solid #63E7DA;}
    
.div44{
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
}
.icon4{
  width: 60px;
  height: 60px;
}
.div4 h1{
  background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.27) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.div4 h3{
  color: #8F8F8F;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

@media screen and (max-width: 600px) {
    
    .container {
      flex-direction: row;
      height: auto;
      width: 50px;
      height: 100%; 
    }
    .div1,.div2,.div3,.div4{
      margin: 10;
    }
    .div1,.div2,.div3,.div{
      width:50px;
    }
  }
  @media screen and (max-width: 768px) {
    .container {
      width: 480px;
      margin-top:-200px;
      height: 100%;
    }
    .div1{
      margin-left:10px;
    }
    .div2,.div3,.div4{
      margin-left: -40px;
    }
    .div4{
      margin-right: 10px;
    }
    .div1,.div2,.div3,.div4{
      width:110px;
      height: 200px;
    }
    .div11{
      margin-top: 60px;
    }
    .icon1{
      width: 30px;
      height: 30px;
      margin-top:-80px;
      
    }
    .txt1 h1{
      font-size: 16px;
      margin-top: -3px;
    }
    .txt1 h3{
      font-size: 10px;
    }
    .div22{
      margin-top: 60px;
    }
    .icon2{
      width: 30px;
      height: 30px;
      margin-top:-80px;
      
    }
    .txt2 h1{
      font-size: 16px;
      margin-top: -3px;
    }
    .txt2 h3{
      font-size: 10px;
    }
    .div33{
      margin-top: 60px;
    }
    .icon3{
      width: 30px;
      height: 30px;
      margin-top:-80px;
      
    }
    .txt3 h1{
      font-size: 16px;
      margin-top: -3px;
    }
    .txt3 h3{
      font-size: 10px;
    }
    .div44{
      margin-top: 60px;
    }
    .icon4{
      width: 30px;
      height: 30px;
      margin-top:-80px;
      
    }
    .txt4 h1{
      font-size: 16px;
      margin-top: -3px;
    }
    .txt4 h3{
      font-size: 10px;
    }
  }

`;

const Second = () => {
  return (
    <Container>
   <div class="container">
      <div class="div1">
        <div className="div11">
        <img  className="icon1" src={picc} alt="" />
        <div className="txt1"><h1>UI & UX</h1>
        <h3>Designing interfaces that are intuitive, efficient, and enjoyable to use.</h3></div>
        </div>
        </div> 
      <div class="div2">  
      <div className="div22">
      <img  className="icon2" src={picd} alt="" />
      <div className="txt2"><h1>Web & Mobile App</h1>
      <h3>Transforming ideas into exceptional web and mobile app experiences.</h3></div>
      </div> 
      </div>
      <div class="div3"> 
      <div className="div33">
      <img  className="icon3" src={pice} alt="" />
      <div className="txt3"><h1>Design & Creative</h1>
      <h3>Crafting visually stunning designs that connect with your audience.</h3></div>
        </div> 
      </div>
      <div class="div4">
        <div className="div44">
        <img  className="icon4" src={picf} alt="" />
          <div className="txt4"><h1>Development</h1>
            <h3>Bringing your vision to life with the latest technology and design trends.</h3></div>
          </div> 
      </div>  
  </div>  
    </Container>
  )
}

export default Second