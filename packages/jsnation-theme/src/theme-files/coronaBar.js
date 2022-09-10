import React from 'react'
import { styled,Global,css,connect } from 'frontity'
import { device } from './device';
const CoronaBar = () => {
  return (<>
    <Global styles={css`
     .state{
        font-size:13px;
        color:black;
        @media ${device.mobile}{
          margin-left:calc(100%-30px);
          max-width:40%;
          width:100px;
          font-size:0.6rem;        
        }
     }
     .state1{
        margin-left:3.5rem;
        color:black; 
        font-size:15px;
        @media ${device.mobile}{
          margin-left:0.5rem;

          max-width:100px;
          font-size:0.6rem;        

        }
     }
     .state2{
        font-size:15px;
        color:black;
        margin-left:2.125rem;
        @media ${device.mobile}{
          margin-left:1rem;
          width:object-fit;
          max-width:100px;
          font-size:0.6rem;        

        }        
     }
    `}
    />
    <Container>
        <Heading>India <span style={{fontWeight:'500',fontSize:'0.81rem'}}>COVID-19 Statistics</span></Heading>
        <InnerContainer>
            <Children>
              <p style={{width:'50%'}} css={css`@media ${device.mobile}{font-size:13px;}`}>44,339,429</p>
              <p className='state1'>CONFIRMED CASES</p>
            </Children>
            <Children>
              <p style={{width:'50%'}} css={css` @media ${device.mobile}{font-size:13px;}`}>527,332</p> 
              <p className='state2'>TOTAL DEATHS</p>
            </Children>
            <Children>
              <p style={{width:'50%'}} css={css`@media ${device.mobile}{font-size:13px;}`}>99,879</p> 
              <p className='state'>TOTAL ACTIVE CASES</p>
            </Children>
        </InnerContainer>
    </Container></>)
}

export default connect(CoronaBar);

const Container=styled.div`
background-color:#F2F2F2;
height:4.375rem;
position:relative;
top:4.06rem;
left:14.37rem;
font-size:0.8rem;
width:100%;
display:block;

max-width:74.37rem;
font-size:0.6rem;
@media ${device.mobile} {
  width:91%;
  top:10rem;
  left:1rem;
}
  
`
const Heading=styled.p`
position:absolute;
top:1.5rem;
left:15.625rem;
font-weight:bold;
@media ${device.mobile} {
  left:1rem;
  max-width:100px;
  display:inline;
}
`
const InnerContainer=styled.div`
position:relative;
left:40.81rem;
width:500px;
color:#4169E1;
display:grid;
grid-template-columns:11.875rem 11.875rem  11.875rem;
grid-template-rows:auto auto ;
box-sizing:border-box;
font-family:Calibri;
font-weight:200;
font-size:2.375rem;
@media ${device.mobile}{
  position:absolute;
  grid-template-columns:4rem 4rem 4rem;
  left: 8.4rem;
  width:150px;
  top:1rem;
}
`

const Children=styled.div`
margin-left:1rem;
width:11.87rem;
@media ${device.mobile}{
margin-left:0.1rem;
font-size:20px;
width:60%;
}
`