import React from 'react'
import { Global,styled,css,connect } from 'frontity'
import Link from './link';
import { device } from './device';
const VideoList= ({actions,state,top,mobileTop}) => {
    React.useEffect(()=>{
        actions.source.fetch('/category/news/video/')
    },[])
    const data=state.source.get('/category/news/video/');

  return (<>
  <Global styles={css`
    .content{
     
    }
    .category{
        font-size:11px;
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

    <Container css={css`position:absolute; top:${top ? top:''}; @media ${device.mobile}{top:${mobileTop}}`}>
    <InnerContainer>
        <Heading>Video</Heading>
        <div className='inner' style={{marginTop:'30px'}}>
            {typeof data.items==='object' && data.items.map((item,i)=>{
                        const post=state.source[item.type][item.id];
                        const attachment=state.source.attachment[post.featured_media];
                        const author=state.source.author[post.author]
                        const category=state.source.category[post.categories[0]];
                        const link=decodeURI(item.link).split('/');
                        const content=post.content.rendered.split('<p>')[1].split('</p>')[0]
                        console.log('con',content)
                        console.log('url',decodeURI(post.link))

                        if(i===0){
                            return ( <Children key={i} >
                                
                                    <Image src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'}/>

                                    <div css={css`   width:500px;
                                                    position:absolute;
                                                    top:250px;
                                                    color:white;
                                                    font-family:Arial;
                                                    margin-left:20px;
                                                    @media ${device.mobile}{
                                                        // top:410px;
                                                        // color:black;
                                                        position:relative;
                                                        top:0px;
                                                    }
                                                    `}>

                                        <p className='category' style={{color:'#C45AEC'}}>{category.name}</p>
                                        <Link href={post.link+post.id}>
                                          <h1 className='link' css={css`font-size:15px;text-transform: capitalize;width:280px;color:white; @media ${device.mobile}{font-size:18px;width:60%;color:black;}`}>{link}</h1>
                                        </Link>
                                        <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div> 
                                </Children>)
                        }
                        else if(i>=1 && i<=3){
                                return(<>
                                <Children key={i}  css={css`margin-left:20px; @media ${device.mobile}{margin-left:0px; display:flex;flex-direction:row;margin-top:8px;}`}>
                                <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css `width:270px; height:180px; @media ${device.mobile}{width:40%;height:90%;}`}/>
                                <div>
                                    <p className='category' style={{color:'#C45AEC'}}>{category.name}</p>
                                    <Link href={post.link+post.id}>
                                    <h1 className='link' style={{color:'black',fontWeight:'normal',marginTop:'5px',fontSize:'12px',width:'200px'}}>{link}</h1>
                                    </Link>
                                    <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
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
export default connect(VideoList)

const Container=styled.div`
background-color:white;
width:auto;
height:auto;
padding:10px;
display:flex;
flex-direction:row;
@media ${device.mobile}{
    width:100%;
}
`
const InnerContainer=styled.div`
margin-left:220px;
margin-top:40px;
@media ${device.mobile}{
    margin-left:0px;
    width:100%;
}
`
const Heading=styled.div`
font-weight:bold;
border-left:3px solid #C45AEC;
padding-left:5px;
`
const Children=styled.div`
overflow-wrap: break-word;
overflow: hidden;
@media ${device.mobile}{
    width:100%;
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
@media ${device.mobile}{
    width:100%;
    height:300px;
}
`