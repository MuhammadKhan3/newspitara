import React from 'react'
import { Global,styled,css,connect } from 'frontity'
import Link from './link';
const TechnologyList = ({actions,state}) => {
    React.useEffect(()=>{
        actions.source.fetch('/')
    },[])
    const data=state.source.get('/');
    console.log(data)
  return (<>
  <Global styles={css`
    .content{
        width:500px;
        position:absolute;
        top:300px;
        color:white;
        font-family:Arial;
        margin-left:20px;
    }
    .category{
        font-size:11px;
    }
    .link{
        font-size:18px;
        text-transform: capitalize;
        width:360px;
        color:white;
    }
    .link:hover{
        cursor:pointer;
    }
    .author{
        font-size:11px;
    }
    .image-2{
        width:320px;
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
    .flex-2{
        margin-top:30px;
        margin-left:45px;
    }
    `}/>
    <Container>
    <InnerContainer>
        <Heading>TECHNOLOGY</Heading>
        <div className='inner' style={{marginTop:'30px'}}>
            {data.items.map((item,i)=>{
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
                                
                                    <Image src={attachment['source_url']}/>
                                    <div className='content'>
                                        <p className='category'>{category.name}</p>
                                        <Link href={link}>
                                        <h1 className='link'>{link}</h1>
                                        </Link>
                                        <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div> 
                                
                                </Children>)
                        }
                        else if(i>=1 && i<=2){
                                return(<>
                                <Children key={i}  className='header'>
                                <img  src='https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png' className='image-2'/>
                                <p className='category' style={{color:'#4169E1'}}>{category.name}</p>
                                <Link href={link}>
                                <h1 className='link' style={{color:'black',fontWeight:'normal',marginTop:'10px',fontSize:'16px',width:'270px'}}>{content}</h1>
                                </Link>
                                <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </Children></>)
                        }
                        else if(i>=4 && i<=9){
                            return(<Children key={i} className={i===4 ? "" : 'flex-2'} style={{marginTop:'30px'}} >
                                <img  src='https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png' className='fleximage-2'/>
                                <p className='category' style={{color:'#4169E1'}}>{category.name}</p>
                                <Link href={link}>
                                <h1 className='link' style={{color:'black',fontWeight:'normal',marginTop:'10px',fontSize:'14px',width:'160px'}}>{content}</h1>
                                </Link>
                                <p className='author'>{author ? author.name :''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </Children>)
                        }else{
                                return;
                            }
                            
                        })

                    }
            </div>
        </InnerContainer>
    </Container>
   </>)
}
export default connect(TechnologyList)

const Container=styled.div`
background-color:#F2F2F2;
position:relative;
top:120px;
width:auto;
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
border-left:3px solid #00D4FF;
padding-left:5px;
`
const Children=styled.div`
overflow-wrap: break-word;
overflow: hidden;
`
const Image=styled.img`
width:400px;
filter: brightness(80%);
height:300px;
overflow:hidden;
&:hover{
    transform:scale(1.1);
    cursor:pointer;
}
`