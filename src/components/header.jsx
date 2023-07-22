import React from 'react'
import styled from  "styled-components"
import pica from '../assets/pica.png';

const Container=styled.div`
width: 100%;
    /* background: #262625; */
    background-color: rgb(25, 26, 29);
    /* background: #262729; */
    
.span1{
    color: #63E7DA;
    font-family: Staatliches;
    font-size: 75px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.h1{
    color: #FFF;
    font-family: Staatliches;
    font-size: 75px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top:100px;
    transform: translate(-50%,-50%);
    margin-left: 100px;
}
.pic{
    width: 100%;
    height:600px ;
    /* position:relative; */
    margin-left:0px;
    margin-top: -420px;

}
.main{
    /* position: relative; */
    text-align: center;
/* display: flex */


}
.txt{
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin-left: 200px;
    margin-top:290px;
    
}
.h2{
    color: #FFF;
    font-family: Merienda;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    transform: translate(-50%,-50%);
    margin-left: 100px;

}
.span2{
    color: #63E7DA;
    font-family: Merienda;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
}
.span3{
    font-family: Merienda;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
}
.txt1{  
    margin-top: -70px;
}
@media screen and (max-width: 600px) {
    background-color: rgb(25, 26, 29);
    width: 100%;
/* margin-top: -100px; */
.txt .h1{
    font-size: 35px;
    margin-top: -150px;
    margin-left:0px;
}  
    .txt .span1{
        font-size: 35px;
    }
    .pic {
        width: 100%;
      height: 410px;
      margin-left: 0px;
      margin-top: -230px;
      
    }
    .txt1{
        margin-top:-40px;
        margin-left: 100px;
    }
    .txt .h2{
        font-size: 15px;
        margin-top: 35px;
    }
    .txt1 .span2{
        font-size: 17px;
    }
    .main{
        font-size: 10px;
    font-weight: 200;
    /* margin: 0vh 0px 0px 4vh; */
    }
}
  @media screen and (max-width: 768px) {
    
        .h1 {
      font-size: 55px;
    }
    .pic {
      height: 400px;
    }
    .txt1{
        margin-top:-50px;
    }
    .h2{
        font-size: 24px;
        margin-left: -100px;
    }
    .span1{
        font-size: 55px;
    }
   .txt{
    margin-left: 110px;
   }
  }
`;
const First = () => {
  return (
    <Container>
        <div className='main'>
        <div className='txt'>
        <h1 className='h1'>VECTOR<span className='span1'>UX</span></h1>
        <div className='txt1'>
        <h1 className='h2'>we ideate, create <span className='span2'>&</span> innovate</h1>
        </div>
        </div>
        <div className="div2"><img className="pic" src={pica} alt=""/></div>
        </div>    
    </Container> 
  )
}

export default First