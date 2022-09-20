import React from 'react'
import { Global,styled,css,connect } from 'frontity'
import Link from './link';
import { device } from './device';
const TravelList= ({actions,state}) => {
    React.useEffect(()=>{
        actions.source.fetch('/category/news/travel/')
    },[])
    const data=state.source.get('/category/news/travel/');
    console.log(data)
  return (<>
  <Global styles={css`
    .content{
     
    }
    .category{
        font-size:11px;
    }
    .link{
        color:black,
            font-weight:normal,
            marginTop:10px,
            fontSize:12px,
            width:200px,
        @media ${device.mobile}{
            // font-weight:bold;   
        }
    }
    .link:hover{
        cursor:pointer;
    }
    .author{
        font-size:11px;
    }
    .header{
      margin-left:75px;
    }
    .fleximage-2{
        width:160px;
    }
    .inner{
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;
    }

    `}/>
    <Container>
    <InnerContainer>
        <Heading>Travel</Heading>
        <div className='inner' css={css`@media ${device.mobile}{ margin-top:30px;margin-left:5px;}`}>
            {typeof data.items==='object' && data.items.map((item,i)=>{
                        const post=state.source[item.type][item.id];
                        const attachment=state.source.attachment[post.featured_media];
                        const author=state.source.author[post.author]
                        const category=state.source.category[post.categories[0]];
                        const link=decodeURI(item.link).split('/');
                        const content=post.content.rendered.split('<p>')[1].split('</p>')[0]


                        if(i===0){
                            return ( <Children key={i} className='' css={css`@media ${device.mobile}{width:100%;}`}>                                
                                    {/* <Image src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css`@media ${device.mobile}{width:245px;height:160px;float:left;}`}/> */}
                                   <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css `width:270px; height:160px; @media ${device.mobile}{width:40%;height:15vh;float:left;}`}/>
                                    <div css={css`  
                                                    width:500px;
                                                    position:absolute;
                                                    top:260px;
                                                    color:white;
                                                    font-family:Arial;
                                                    margin-left:20px;
                                                    @media ${device.mobile}{
                                                        position:relative;
                                                        width:50%;
                                                        top:0px;
                                                        margin-left:10px;
                                                        // left:180px;
                                                        color:black;
                                                        float:left;
                                                    }
                                            `}>

                                        <p className='category' style={{color:'#00D4FF'}}>{category.name}</p>
                                        <Link href={post.link+post.id}>
                                          <h1 css={css`font-size:15px;text-transform: capitalize;color:black;font-weight:normal;margin-top:3px;font-size:12px;width:200px;&:hover{pointer:cursor;text-decoration:underline;} @media ${device.mobile}{width:100%;font-size:14px;color:black;}`}>{link}</h1>
                                        </Link>
                                        <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div> 
                                </Children>)
                        }
                        else if(i>=1 && i<=3 ){
                                return(<>
                                <Children key={i}  css={css`margin-left:20px; @media ${device.mobile}{margin-left:0px;margin-top:5px;width:100%;}`}>
                                <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css `width:270px; height:160px; @media ${device.mobile}{width:40%;height:15vh;float:left;}`}/>
                                <div css={css` @media ${device.mobile}{margin-left:10px; width:55%;}`}>
                                    <p className='category' style={{color:'#00D4FF'}}>{category.name}</p>
                                    <Link href={post.link+post.id}>
                                      <h1   css={css`font-size:15px;text-transform: capitalize;color:black;font-weight:normal;margin-top:3px;font-size:12px;width:280px;&:hover{pointer:cursor;text-decoration:underline;} @media ${device.mobile}{width:100%;font-size:14px;color:black;}`} >{link}</h1>
                                    </Link>
                                    <p className='author'>{author ?author.name: ''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                </div>
                            </Children></>)
                        }
                        else{
                                return;
                            }
                            
                        })

                    }
            </div>
        </InnerContainer>
    </Container>
   </>)
}
export default connect(TravelList)

const Container=styled.div`
background-color:white;
position:relative;
top:10px;
width:auto;
height:auto;
padding:10px;
display:flex;
flex-direction:row;
@media ${device.mobile}{
    // position:absolute;
    // top:110rem;
    width:100%;
    top:0px;
    flex-direction:column;
    left:0px;
}
`
const InnerContainer=styled.div`
margin-left:220px;
margin-top:40px;

@media ${device.mobile}{
    margin-left:10px;
    display:flex;
   flex-direction:column;
}
`
const Heading=styled.div`
font-weight:bold;
border-left:3px solid #00D4FF;
padding-left:5px;
`
const Children=styled.div`
overflow-wrap: break-word;
overflow: hidden;
@media ${device.mobile}{
    display:flex;
    flex-direction:row;
    // width:100%;
}
`
const Image=styled.img`
width:320px;
filter: brightness(80%);
height:240px;
overflow:hidden;
&:hover{
    transform:scale(1.1);
    cursor:pointer;
}

`