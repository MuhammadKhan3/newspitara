import React from 'react'
import { Global,styled,css,connect } from 'frontity'
import Link from './link';
const FashionList= ({actions,state}) => {
    React.useEffect(()=>{
        actions.source.fetch('/')
    },[])
    const data=state.source.get('/');
    console.log(data)
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
        <Heading>Fashion</Heading>
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
                            return ( <Children key={i} className=''>
                                
                                    <Image src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'}/>

                                    <div css={css`   width:500px;
                                                    position:absolute;
                                                    top:270px;
                                                    color:black;
                                                    font-family:Arial;
                                                    `}>

                                        <p className='category '>{category.name}</p>
                                        <Link href={post.link+post.id}>
                                          <h1 className='link' css={css`font-size:15px;text-transform: capitalize;width:280px;color:black;`}>{link}</h1>
                                        </Link>
                                        <p className='author'>{author? author.name:''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div> 
                                </Children>)
                        }
                        else if(i>=1 && i<=3){
                                return(<>
                                <Children key={i}  css={css`margin-left:20px;`}>
                                <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css `width:270px;height:167px`}/>
                                <p className='category' style={{color:'#DB7093'}}>{category.name}</p>
                                <Link href={post.link+post.id}>
                                <h1 className='link' style={{color:'black',fontWeight:'normal',marginTop:'10px',fontSize:'12px',width:'200px'}}>{link}</h1>
                                </Link>
                                <p className='author'>{author? author.name:''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
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
export default connect(FashionList)

const Container=styled.div`
background-color:#F2F2F2;
position:absolute;
top:680px;
max-width:auto;
width:1573px;
height:auto;
padding:10px;
display:flex;
flex-direction:row;
`
const InnerContainer=styled.div`
margin-left:220px;
margin-top:40px;
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
`