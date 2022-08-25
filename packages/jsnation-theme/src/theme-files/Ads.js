import { connect, styled,css } from 'frontity'
import React from 'react'

const Ads = ({top,height}) => {

  return (
    <Container css={css`top:${top ? top:'160px'}`}>
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
`
const Text=styled.p`
margin-left:440px;
font-size:10px;
`