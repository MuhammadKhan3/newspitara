import React from 'react'
import { Global,styled,css,connect } from 'frontity'
import Link from './link';
import { device } from './device';
const TechnologyList = ({actions,state}) => {
    React.useEffect(()=>{
        actions.source.fetch('/category/tech')
    },[])
    const data=state.source.get('/category/tech');
    console.log(data)
  return (<>
  <Global styles={css`
    .content1{
        width:500px;
        position:absolute;
        top:210px;
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
        color:black;
        fontWeight:normal;marginTop:10px;
        fontSize:16px;
        width:270px;
        @media ${device.mobile}{
            width:100%;
            font-size:14px;
            color:black;
        }
    }
    .link:hover{
        cursor:pointer;
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
    .inner-tech{
        display:grid;
        grid-template-columns:auto auto auto auto auto auto;
        grid-template-rows:auto auto;
        width:100%;
        @media ${device.mobile}{
            width:100%;
            display:flex;
            flex-direction:row;
            flex-wrap: wrap;
        }
    }
    .grid-merge{

    }
    .flex-2{
        margin-top:30px;
        margin-left:45px;
    }
    `}/> 
    <Container >
    <InnerContainer>
        <Heading>TECHNOLOGY</Heading> 
        <div className='inner-tech' style={{marginTop:'30px',}}>
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
                            return ( <Children key={i}  css={css` grid-column:1 /span 2; @media ${device.mobile}{width:100%;position:relative;}`}>                                
                                    <Image src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'}  css={css` @media ${device.mobile}{width:95%;}`}/>
                                    <div className='content' css={css`@media ${device.mobile}{color:white;position:absolute;top:180px;left:20px;}`}>
                                        <p className='category' style={{color:'white'}}>{category.name}</p>
                                        <Link href={post.link+post.id}>
                                           <h1 className='link' css={css`font-size:18px;text-transform: capitalize;width:360px;color:white;color:black;font-weight:normal;marginTop:10px;font-size:16px;width:270px; &:hover{text-decoration:underline;} @media ${device.mobile}{width:90%;font-size:20px;color:white;}`}>{link}</h1>
                                        </Link>
                                        <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div> 
                                </Children>)
                        }
                        else if(i>=1 && i<=2){
                                return(<>
                                <Children key={i}  className='' css={css`grid-column-end:span 2;margin-left:75px; @media ${device.mobile}{width:45%;margin-left:3%;} @media ${device.laptop}{margin-left:10px;}`}>
                                <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} className='image-2' css={css`width:320px; @media ${device.mobile}{width:100%;} @media ${device.laptop}{width:80%;}`}/>
                                <p className='category' style={{color:'#00D4FF'}}>{category.name}</p>
                                <Link href={post.link+post.id}>
                                  <h1  css={css`font-size:18px;text-transform: capitalize;width:360px;color:black;font-weight:normal;marginTop:10px;fontSize:16px;width:270px;&:hover{text-decoration:underline;} @media ${device.mobile}{width:100%;font-size:14px;color:black;} @media ${device.laptop}{font-size:14px;width:80%;} @media ${device.tablet}{font-size:14px;width:100%;}`} >{link}</h1>
                                </Link>
                                <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </Children></>)
                        }
                        else if(i>=4 && i<=9){
                            return(
                            <>
                            <Children key={i}  css={css`${i===4 ? '' : 'margin-top:30px;margin-left:45px;' } margin-top:30px; @media ${device.mobile}{margin-top:10px;margin-left:10px; width:100%;}`} >
                                <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} className='fleximage-2' css={css`width:160px; @media ${device.mobile}{float:left;width:40%;height:12vh;}`}/>
                                <div css={css` @media ${device.mobile}{margin-left:2%; float:left;width:56%;}`}>
                                    <p className='category' style={{color:'#00D4FF'}}>{category.name}</p>
                                    <Link href={post.link+post.id}>
                                      <h1 className='link' css={css` font-size:16px;text-transform: capitalize;width:360px;color:black;font-weight:normal;margin-top:10px;font-size:16px;width:160px; &:hover{text-decoration:underline;} @media ${device.mobile}{margin-top:3px;width:90%;font-size:14px;color:black;} @media ${device.tablet}{width:100%;font-size:12px;} @media ${device.laptop}{width:100%;font-size:12px;}`}>{link}</h1>
                                    </Link>
                                    <p className='author'>{author ? author.name :''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
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
export default connect(TechnologyList)

const Container=styled.div`
background-color:#F2F2F2;
// position:relative;
// top:120px;
width:auto;
height:auto;
// padding:10px;
display:flex;
flex-direction:row;
margin-top:10px;

@media ${device.laptop}{
    width:100%;
}
@media ${device.tablet}{

}
@media ${device.mobile}{
    flex-direction:column;
    width:97%;
    padding:0px;
    // position:static;
    margin-top:0px;

}

`
const InnerContainer=styled.div`
margin-left:220px;
margin-top:40px;
@media ${device.laptop}{
    margin-left:10px;
}
@media ${device.tablet}{
    margin-left:10px;
}
@media ${device.mobile}{
    margin-left:0px;
    width:98%;
}
`
const Heading=styled.div`
font-weight:bold;
border-left:3px solid #00D4FF;
padding-left:5px;
width:auto;
@media ${device.mobile}{
    margin-left:10px;
    width:fit-content;
}
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
@media ${device.laptop}{
    width:80%;
    height:250px;
}
@media ${device.tablet}{

}
@media ${device.mobile}{
    width:100%;
}
`