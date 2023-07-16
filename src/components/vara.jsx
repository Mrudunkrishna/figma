import React from 'react'
import  styled  from 'styled-components'


const Container=styled.div`
width: 100%;
height: 600px;
background: #191A1D;


.maindiv{
background-color:  #191A1D;
display: flex;
justify-content: space-between;
margin-left: 150px;
margin-right: 150px;
margin-top: 120px;
}
.one, .two,.three{
    height: 200px;
    width: 200px;
}
.text1{
    margin-top: -210px;
}
.text2{
    margin-top: -210px;
}
.text3{
    margin-top: -210px;
}
.h2{
    color: #FFF;
text-align: center;
font-family: Roboto;
font-size: 90px;
font-style: normal;
font-weight: 700;
line-height: normal;

}


.maindiv1{
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 30px;
}
.h22{
    text-align: center;
font-family: Montserrat;
font-size: 44px;
font-style: normal;
font-weight: 500;
line-height: normal;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
#h{
    margin-left: 400px;
}
.h3{
    color: #6D6D6D;
text-align: center;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}




@media (max-width: 600px) {
    /* Add your media query styles here */
    .maindiv {
      margin-left: 50px;
      margin-right: 100px;
      margin-top: 80px;
    }
    

    .h2 {
      font-size: 60px;
    }
    .one,
    .two,
    .three,
    .text1,
    .text2,
    .text3 
     {
        font-size: 30px;
      /* Add your styles here */
      /* Example styles */
      height: 150px;
      width: 150px;
      text-align: center;
    }
    .maindiv1 {
      margin-top: 30px;
    }

    .h22 {
      font-size: 18px;
    }

    #h {
      margin-left: 0;
    }

    .h3 {
      font-size: 14px;
    }
  }
 


`;

export const vara = () => {
  return (
    <Container>
        <div className='maindiv'>
            <div className='div1'><svg className='one' width="290" height="366" viewBox="0 0 290 366" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"/>
</svg><div className='text1'><h2 className='h2'>1</h2></div></div>


<div className='div2'><svg className='two' width="290" height="366" viewBox="0 0 290 366" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"/>
</svg><div className='text2'><h2 className='h2'>2</h2></div></div>

<div className='div3'><svg className='three'  width="290" height="366" viewBox="0 0 290 366" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"/>
</svg><div className='text3'><h2 className='h2'>3</h2></div></div>
</div>

<div className='maindiv1'>
    <div className='div2'>
        <h2 className='h22'>24/7 cust service</h2>
        <h3 className='h3'>if you have any queries <br/>dont wait, we are here for you<br/> 24/7</h3>
    </div>
    <div className='div22'>
        <h2 className='h22' id='h' >Perfection</h2>
        <h3 className='h3' id='h'>perfect design with <br/>responsive pages</h3>
    </div>
    <div className='div23'>
    <h2 className='h22' id='h'>Dedication</h2>
        <h3 className='h3' id='h'>our highly dedicated team<br/> ensure the on time completion<br/> and delivery of the project</h3>
    </div>
</div>
    </Container>
  )
}
export default vara