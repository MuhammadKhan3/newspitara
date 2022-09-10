import { connect, styled,css } from 'frontity'
import React from 'react'
import { device } from './device';

const Ads = ({top,height,mobileTop}) => {

  return (
    <Container css={css`top:${top ? top:'160px'}; @media ${device.mobile}{
      top:${mobileTop};
      left:10px;
      width:90%;
      height:auto;
    }`}>
        <Text>-Advertisement-</Text>
        <Image src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz3.png'>
        </Image>
    </Container>
  )
}

export default connect(Ads);


const Container=styled.div`
width:600px;
height:400px;
position:relative;
left:300px;


`
const Image=styled.img`
width:960px;
height:80px;
@media ${device.mobile}{
  width:90%;
}
`
const Text=styled.p`
margin-left:440px;
font-size:10px;
@media ${device.mobile}{
  // text-align:center;
  margin-left:0px;
  position:absolute;
  top:-10px;
  left:40%;
}
`