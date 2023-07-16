import React from 'react'
import Navigation from '../components/navigation';
import Header from '../components/header';
import styled from 'styled-components';
import First from '../components/first';
import Cmptr from '../components/cmptr';
import Vara from '../components/vara';
import Final from '../components/final';
const Container=styled.div`

`;

export const nav = () => {
  return (
    <Container>
        <Navigation>

</Navigation>
        <Header>

        </Header>
        
        <First>
          
        </First>
        <Cmptr>

        </Cmptr>
        <Vara>

        </Vara>
        <Final>
          
        </Final>
       
    </Container>
  )
}
export default nav