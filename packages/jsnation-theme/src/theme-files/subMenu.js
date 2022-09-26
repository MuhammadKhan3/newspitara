import React from 'react'
import { styled,Global,css, } from 'frontity'
import Link from './link'
import { device } from './device'
const SubMenu = ({setmenu}) => {
    const menu=[
        ['Recipes','/category/news/recipes'],
        ['Travel','/category/news/travel'],
        ['Arts','/category/arts/'],
        ['Health','/category/health/'],
        ['Video','/category/news/video'],

    ]
  return (
    <Container onMouseLeave={()=>{setmenu('')}}>
        <Menu>
            {menu.map(((m,i)=>{
              return <Link href={m[1]} key={i}><List>{m[0]}</List></Link>
            }))}
        </Menu>
    </Container>
  )
}

export default SubMenu

const Container=styled.div`
background-color:white;
border:1px solid #D3D3D3;
font-size:12px;
font-weight:bold;
height:140px;
width:140px;
margin-top:8px;
margin-left:540px;
display:inline-block;
position:fixed;
z-index:9990;

@media ${device.laptop}{
  // position:relative;
  // // margin-left:560px;
  // margin-top:8px;
}
@media ${device.tablet}{
  position:relative;
  margin-left:385px;
  margin-top:12px;
}

`
const Menu=styled.ul`
list-style-type:none;
margin-top:16px;
`

const List=styled.li`
margin:0px;
padding-left:35px;
padding-top:10px;
&:hover{
  background-color:#FAFAFA;
  cursor:pointer;
  color:#4169E1;
}
`
