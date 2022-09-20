import React from 'react'
import { Global,styled,css,connect } from 'frontity'
import Link from './link';
import { device } from './device';
const RelatedNews= ({actions,state}) => {
    const [data,setdata]=React.useState([]);
    React.useEffect(async()=>{
        actions.source.fetch('/category/news')
        const data=state.source.get('/category/news');
        setdata(data)
    },[])

  return (<>
  <Global styles={css`
    .content{
     
    }
    .category{
        font-size:11px;
        color:#DB7093;
  
    }
    .link:hover{
        cursor:pointer;
    }
    .author{
        font-size:11px;
        margin-top:5px;
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
        <Heading>Related News</Heading>
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
                            return ( <Children key={i}  css={css`@media ${device.mobile}{width:100%;}`}>
                                
                                    <Image src={typeof attachment==='object' ? attachment['source_url']:'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css`width:270px;height:200px;@media ${device.mobile}{float:left;width:40%;height:15vh;}`}/>

                                    <div css={css`   width:500px;
                                                    position:absolute;
                                                    top:270px;
                                                    color:black;
                                                    font-family:Arial;
                                                    @media ${device.mobile}{
                                                        width:57%;
                                                        position:relative;
                                                        top:0px;
                                                        left:3px;
                                                        position:relative;
                                                        top:0px;
                                                    }
                                                    `}>

                                        <p className='category '>{category.name}</p>
                                        <Link href={post.link+post.id}>
                                          <h1  css={css`font-size:15px;text-transform: capitalize;width:280px;color:black; &:hover{text-decoration:underline;} @media ${device.mobile}{width:1000%;font-weight:500;font-size:15px;}`}>{link}</h1>
                                        </Link>
                                        <p className='author'>{author ? author.name:''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div> 
                                </Children>)
                        }
                        else if(i>=1 && i<=3){
                                return(<>
                                <Children key={i}  css={css`margin-left:20px; @media ${device.mobile}{margin-left:0px;width:100%;margin-top:10px;}`}>
                                <img  src={typeof attachment==='object' ? attachment['source_url']:'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css `width:270px; height:200px;@media ${device.mobile}{width:40%;height:15vh;float:left;}`}/>
                                <div css={css`@media ${device.mobile}{float:left;margin-left:5px;width:57%}`}>
                                    <p className='category' style={{color:'#DB7093'}}>{category.name}</p>
                                    <Link href={post.link+post.id}>
                                    <h1 className='link' css={css`color:black;font-weight:normal;margin-top:10px;font-size:12px;width:200px; &:hover{text-decoration:underline;} @media ${device.mobile}{font-weight:bold;width:90%;font-size:15px;font-weight:500;}`}>{link}</h1>
                                    </Link>
                                    <p className='author'>{author ?author.name:''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
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
export default connect(RelatedNews)

const Container=styled.div`
background-color:#F2F2F2;
position:relative;
max-width:auto;
width:1582px;
height:auto;
// padding:10px;
display:flex;
top:150px;
flex-direction:row;
@media ${device.mobile}{
    flex-direction:column;
    padding:0px;
    width:100%;
    max-width:100%;
    top:50px;
}
`
const InnerContainer=styled.div`
margin-left:220px;
margin-top:40px;
@media ${device.mobile}{
    margin-left:20px;
}
`
const Heading=styled.div`
font-weight:bold;
border-left:3px solid #DB7093;
padding-left:5px;
`
const Children=styled.div`
overflow-wrap: break-word;
overflow: hidden;
`
const Image=styled.img`
width:320px;
filter: brightness(80%);
height:170px;
overflow:hidden;
&:hover{
    transform:scale(1.1);
    cursor:pointer;
}
@media ${device.mobile}{
    width:50%;
}
`