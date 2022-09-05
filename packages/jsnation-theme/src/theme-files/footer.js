import React from 'react'
import { css,styled,Global,connect } from 'frontity'
import Link from './link';
import { device } from './device';

const Footer = ({state,actions,top,mobileTop}) => {
  React.useEffect(()=>{
    actions.source.fetch('/category/tech');
    actions.source.fetch('/category/world');
    actions.source.fetch('/category/health');
    actions.source.fetch('/category/arts');
    actions.source.fetch('/category/photography');
    actions.source.fetch('/category/fashion');
    actions.source.fetch('/category/sport');
  },[])
  const data=state.source.get('/');
  const tech=state.source.get('/category/tech');
  const world=state.source.get('/category/world');
  const health=state.source.get('/category/health');
  const arts=state.source.get('/category/arts');
  const photography=state.source.get('/category/photography');
  const fashion=state.source.get('/category/fashion');
  const sport=state.source.get('/category/sport');
//   console.log(tech,world)
return (<>
    <Global styles={css`
     .links{

     }
     .links:hover{
        text-decoration:underline;
        cursor:pointer;
     }
    `}/>
    <Container  css={css`
        top:${top};
        @media ${device.mobile}{
            top:${mobileTop};
        }
    `}>
        <InnerContainer>
            <Picks>
                <Heading css={css`font-size:16px;`}>EDITOR PICKS</Heading>
                <GridContainer>
                 {typeof data.items==='object' && data.items.map((item,i)=>{
                    const post=state.source[item.type][item.id];
                    const attachment=state.source.attachment[post.featured_media];
                    const author=state.source.author[post.author]
                    const category=state.source.category[post.categories[0]];
                    const link=decodeURI(item.link).split('/');
                    const content=post.content.rendered.split('<p>')[1].split('</p>')[0]
                    if(i>=1 && i<=3){
                        return (<Children key={i}>
                            <Image src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'}/>
                            <Content>
                                <Category>{category.name}</Category>
                                <Link href={post.link+post.id}>
                                  <Title className='links'>{link}</Title>
                                </Link>
                                <Span>{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</Span>
                            </Content>
                        </Children>)    
                    }              
                    else{
                        return;
                    }      
                 })}
                </GridContainer>
            </Picks>
             <Read>
                <Heading>MUST READ</Heading>
                <GridContainer>
                 {typeof data.items==='object' && data.items.map((item,i)=>{
                    const post=state.source[item.type][item.id];
                    const attachment=state.source.attachment[post.featured_media];
                    const author=state.source.author[post.author]
                    const category=state.source.category[post.categories[0]];
                    const link=decodeURI(item.link).split('/');
                    const content=post.content.rendered.split('<p>')[1].split('</p>')[0]
                    if(i>=1 && i<=3){
                        return (<Children  key={i}>
                            <Image src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'}/>
                            <Content>
                                <Category>{category.name}</Category>
                                <Link href={post.link+post.id}>
                                  <Title className='links'>{link}</Title>
                                </Link>
                                <Span>{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</Span>
                            </Content>
                        </Children>)    
                    }              
                    else{
                        return;
                    }      
                 })}
                </GridContainer>
            </Read>
            <Popular>
               <Heading>POPULAR CATEGORIES</Heading>
               <ListContainer>
                    <Link href={'/category/tech/'} >
                        <List>Tech <span css={css`margin-left:213px; @media ${device.mobile}{margin-left:0px;float:right;}`}>{tech.total}</span></List>
                    </Link>    
                    <Link href={'/category/world/'}>
                        <List>World<span css={css`margin-left:210px; @media ${device.mobile}{margin-left:0px;float:right;}`}>{world.total}</span> </List>
                    </Link>
                    <Link href={'/category/health/'}>
                        <List>Health<span css={css`margin-left:208px; @media ${device.mobile}{margin-left:0px;float:right;}`}>{health.total}</span></List>
                    </Link>
                    <Link href={'/category/arts/'}>
                        <List>Arts<span css={css`margin-left:222px; @media ${device.mobile}{margin-left:0px;float:right;}`}>{arts.total}</span></List>
                    </Link>
                    <Link href={'/category/photography/'}>
                        <List>Photography<span css={css`margin-left:172px; @media ${device.mobile}{margin-left:0px;float:right;}`}>{photography.total}</span></List>
                    </Link>    
                    <Link href={'/category/fashion/'}>
                        <List>Fashion<span css={css`margin-left:200px; @media ${device.mobile}{margin-left:0px;float:right;}`}>{fashion.total}</span></List>
                    </Link>
                    {console.log(typeof sport.total)}
                    <Link href={'/category/sport/'}>
                        <List>Sport<span  css={css`margin-left:215px; @media ${device.mobile}{margin-left:0px;float:right;}`}>{sport.total}</span></List>
                    </Link>
               </ListContainer>
            </Popular> 

            <ImageContainer>
                <Advert>- Advertisement -</Advert>
                <ImageOne src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz2.png'/>
            </ImageContainer>
        </InnerContainer>
        <FooterContainer>
            <Logo src='https://www.newspitara.com/wp-content/uploads/2021/11/72579877_116985066377732_1378794148236099584_n-1-e1637308004260.jpg'/>
            <Icons>
                <IconContainer >
                <svg style={{width:'8px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" ></path></svg>
                <p css={css`font-size:11px;margin-left:10px; @media ${device.mobile}{display:none;}`}>FACEBOOK</p>
                </IconContainer>
                <IconContainer >
                    <svg style={{width:'15px'}} xmlns="http://www.w3.org/2000/svg"   fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="white"></path> </svg>
                    <p  css={css`font-size:11px;margin-left:10px; @media ${device.mobile}{display:none;}`}>Instagram</p>
                </IconContainer>
                <IconContainer >
                   <svg width="16" height="16" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d=" M 653 0C 933 0 1000 67 1000 347C 1000 347 1000 653 1000 653C 1000 933 933 1000 653 1000C 653 1000 347 1000 347 1000C 67 1000 0 933 0 653C 0 653 0 347 0 347C 0 67 67 0 347 0C 347 0 653 0 653 0M 168 338C 168 358 192 453 283 580C 343 667 428 714 505 714C 552 714 557 703 557 685C 557 685 557 620 557 620C 557 599 562 595 576 595C 587 595 606 600 649 642C 698 691 707 714 734 714C 734 714 807 714 807 714C 828 714 839 703 833 683C 826 662 802 632 771 597C 754 577 729 555 721 545C 710 531 713 525 721 512C 721 512 810 387 819 345C 824 329 819 318 797 318C 797 318 724 318 724 318C 705 318 697 328 692 338C 692 338 655 429 603 487C 586 504 578 510 569 510C 564 510 557 504 557 489C 557 489 557 345 557 345C 557 326 552 318 536 318C 536 318 422 318 422 318C 410 318 403 326 403 334C 403 352 430 356 432 406C 432 406 432 513 432 513C 432 536 428 541 419 541C 394 541 334 450 298 346C 291 326 284 318 266 318C 266 318 193 318 193 318C 172 318 168 328 168 338C 168 338 168 338 168 338"/></svg>
                    <p  css={css`font-size:11px;margin-left:10px; @media ${device.mobile}{display:none;}`}>Vkontakte </p>
                </IconContainer>
                <IconContainer >
                    <svg  style={{width:'15px'}} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" ></path> </svg>
                    <p css={css`font-size:11px;margin-left:10px; @media ${device.mobile}{display:none;}`}>Youtube</p>
                </IconContainer>
            </Icons>
        </FooterContainer>
    </Container>
    </>)
}

export default connect(Footer)

const Container=styled.div`
background-color:#F8F8F8;
position:relative;
width:100%;
height:400px;
z-index:888;
@media ${device.mobile}{
    height:1290px;
}
`
const InnerContainer=styled.div`
display:flex;
flex-direction:column;
@media ${device.mobile}{
 flex-direction:column;
}
`
const Picks=styled.div`
position:absolute;
top:44px;
left:300px;
@media ${device.mobile}{
    left:15px;
}
`
const Read=styled.div`
position:absolute;
top:44px;
left:630px;
@media ${device.mobile}{
position:relative;
left:15px;
top:360px;
}
`

const Popular=styled.div`
position:absolute;
top:44px;
left:930px;
@media ${device.mobile}{
    position:relative;
    left:20px;
    top:390px;
}
`

const Image=styled.img`
width:100px;
height:70px;
@media ${device.mobile}{
    width:140px;
    height:80px;
}
`

const GridContainer=styled.div`
display:flex;
flex-direction:column;
`

const Heading=styled.h1`
font-size:15px;
border-left:3px solid black;
padding:5px;
font-weight:800;
`
const ImageContainer=styled.div`
position:absolute;
left:1200px;
top:70px;
@media ${device.mobile}{
    position:relative;
    left:10%;
    top:400px;
}
`

const ImageOne=styled.img`
width:240px;
margin-top:4px;
@media ${device.mobile}{
    width:300px;
}
`

const Content=styled.div`
`

const Children=styled.div`
display:flex;
flex-direction:row;
margin-top:10px;
gap:10px;
`
const Title=styled.h1`
font-size:11px;
width:160px;
margin-top:4px;
`
const Category=styled.p`
font-size:11px;
`
const Span=styled.span`
font-size:11px;
`
const ListContainer=styled.ul`
list-style-type:none;
font-size:12px;
`
const List=styled.li`
margin-top:5px;
font-weight:600;
&:hover{
    color:#4169E1;
    cursor:pointer;
}
@media ${device.mobile}{
    margin-top:10px;
    width:80%;
}
`
const Advert=styled.p`
font-size:10px;
margin-left:80px;
color:gray;
`
const FooterContainer=styled.div`
width:100%;
height:80px;
background-color:royalblue;
position:relative;
top:334px;
@media ${device.mobile}{
    position:relative;
    top:430px;
}
`
const Logo=styled.img`
width:250px;
height:70px;
top:7px;
position:absolute;
left:250px;
@media ${device.mobile}{
    position:absolute;
    left:30px;
}
`

const Icons=styled.div`
position:absolute;
left:990px;
top:40px;
@media ${device.mobile}{
    position:absolute;
    left:200px;
}
`
const IconContainer=styled.div`
display:flex;
position:relative;
flex-direction:row;
margin-left:30px;
color:white;
float:left;
width:auto;
fill:white;
&:hover{
    cursor:pointer;
    fill:yellow;
    color:yellow;
}
`