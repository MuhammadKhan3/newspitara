import React from 'react'
import { Global,styled,css,connect } from 'frontity'
import Link from './link';
import Fashion from './fashion';
import Footer from './footer';
import { device } from './device';
const Sports= ({actions,state}) => {
    React.useEffect(()=>{
        actions.source.fetch('/category/sport/');
        actions.source.fetch('/category/recipes/')

    },[])
    const sport=state.source.get('/');
    const recipes=state.source.get('/');

  return (<>
  <Global styles={css`
    .category{
        font-size:11px;
    }
    .link:hover{
        cursor:pointer;
        text-decoration: underline;
    }


    `}/>
    <Container>
    <InnerContainer>
        <Sport>
            <Heading>SPORT NEWS</Heading>
        <div css={css`
        display:grid;
        grid-template-columns:auto auto auto auto; 
        grid-template-rows:auto auto; height:content-fit;gap:10px;
        marginTop:30px; 
        margin-top:10px;
        @media ${device.laptop}{
            gap:2px;
            width:100%;
        }
        @media ${device.tablet}{
            gap:2px;
            width:100%;
        }
        @media ${device.mobile}{
            grid-template-columns:auto auto;
            grid-template-rows:auto auto auto;
        }}`} >
            {typeof sport.items==='object' && sport.items.map((item,i)=>{
                        const post=state.source[item.type][item.id];
                        const attachment=state.source.attachment[post.featured_media];
                        const author=state.source.author[post.author];
                        const category=state.source.category[post.categories[0]];
                        const link=decodeURI(item.link).split('/');
                        const content=post.content.rendered.split('<p>')[1].split('</p>')[0];
                        console.log('con',content)
                        console.log('url',decodeURI(post.link))

                        if(i===0){
                            return ( <Children key={i} className='' css={css`color:black;width:400px;grid-column-start:1;grid-column-end:3;    @media ${device.laptop}{width:95%;} @media ${device.tablet}{width:95%;} @media ${device.mobile}{width:100%;padding:15px;}`}>
                                    <Image src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css` @media ${device.laptop}{width:85%;} @media ${device.tablet}{width:85%;}`}/>
                                    <div css={css`   width:500px;color:black;font-family:Arial;`}>
                                        <p className='category' css={css`color:green; width:160px;`}>{category.name}</p>
                                        <Link href={post.link+post.id}>
                                          <h1 className='link' css={css`font-size:15px;text-transform: capitalize;width:280px;color:black; &:hover{text-decoration:underline;} @media ${device.laptop}{width:fit-content;}  @media ${device.tablet}{width:fit-content;} @media ${device.mobile}{font-size:18px; font-weight:normal;}`} >{link}</h1>
                                        </Link>
                                        <p css={css`font-size:11px;width:160px;`}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div> 
                                </Children>)
                        }
                        else if(i>=1 && i<=2){
                                return(<>
                                <Children key={i}  css={css`width:160px; @media ${device.laptop}{width:60%;}   @media ${device.tablet}{width:60%;}  @media ${device.mobile}{width:100%;width:100%;padding:15px;}`}>
                                <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css `width:140px; height:100px; @media ${device.laptop}{width:100%;} @media ${device.tablet}{width:100%;} @media ${device.mobile}{width:100%;height:25vh;}`}/>
                                <div css={css`width:100%;`}>
                                    <p className='category' style={{color:'green'}}>{category.name}</p>
                                    <Link href={post.link+post.id}>
                                    <h1 className='link' css={css`color:black;font-weight:normal;margin-top:3px;font-size:12px;width:160px; &:hover{text-decoration:underline;} @media ${device.mobile}{width:100%;}`}>{link}</h1>
                                    </Link>
                                    <p css={css`font-size:11px;`}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                </div>
                            </Children></>)
                        }
                        else if(i===3){
                            return(<>
                                <Children key={i}  css={css`width:430px;grid-column-start:3;grid-column-end:5 ;grid-row-start:1;grid-row-end:3; @media ${device.mobile}{height:100%; grid-column-start:1;grid-column-end:3;grid-row-start:3; grid-row-end:5;} @media ${device.laptop}{width:100%;} @media ${device.tablet}{width:100%;}`}>
                                    <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css `width:360px;height:500px; box-shadow: inset 20px 20px 50px 10px pink; filter:brightness(80%);  @media ${device.laptop}{width:90%;height:90%;} @media ${device.tablet}{width:90%;height:90%;} @media ${device.mobile}{width:100%;height:100%;}`}/>
                                    <div css={css`position:absolute; top:453px;color:white;margin-left:15px; @media ${device.laptop}{top:360px;width:30%;} @media ${device.tablet}{top:350px;width:30%;} @media ${device.mobile}{color:white;position:relative;top:-110px;left 300px;}`}>
                                        <p className='category' style={{color:'white'}}>{category.name}</p>
                                        <Link href={post.link+post.id}>
                                           <h1 className='link' css={css`color:white;font-weight:normal;margin-top:10px;font-size:16px;width:340px;&:hover{text-decoration:underline;} @media ${device.laptop}{width:100%;font-size:15px;} @media ${device.tablet}{width:100%;font-size:15px;} @media ${device.mobile}{font-size:1.2em; width:90%;}`}>{link}</h1>
                                        </Link>
                                        <p css={css`font-size:11px;`}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div>
                                </Children></>)
                        }
                        else{
                                return;
                            }
                            
                        })
                    }
            </div>
            </Sport>  

            <Recipes>
                <h1 className='' css={css`font-weight:bold;border-left:3px solid yellow;padding-left:5px;font-size:17px; @media ${device.mobile}{margin-left:15px;}`}>RECIPES</h1>
            <div css={css`display:grid;grid-template-columns:auto auto; grid-template-rows:auto auto; height:content-fit;gap:10px;margin-top:10px; @media ${device.mobile}{padding:15px; margin-top:10px;}
            @media ${device.laptop}{
                width: 95%;
                margin-top:10px;
            }
            @media ${device.tablet}{
                width: 95%;
                margin-top:10px;

            }
            `} >
                {typeof recipes.items==='object' && recipes.items.map((item,i)=>{
                            const post=state.source[item.type][item.id];
                            const attachment=state.source.attachment[post.featured_media];
                            const author=state.source.author[post.author]
                            const category=state.source.category[post.categories[0]];
                            const link=decodeURI(item.link).split('/');
                            const content=post.content.rendered.split('<p>')[1].split('</p>')[0]
                            console.log('con',content)
                            console.log('url',decodeURI(post.link))

                            if(i===0){
                                return ( <Children key={i} className='' css={css`color:black;width:400px;grid-column-start:1;grid-column-end:3;    @media ${device.laptop}{width:90%;} @media ${device.tablet}{width:90%;}`}>
                                        <Image src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css` @media ${device.laptop}{width:100%;} @media ${device.tablet}{width:100%;}`}/>
                                        <div css={css`   width:500px;color:black;font-family:Arial;`}>
                                            <p className='category' css={css`width:160px;color:#e5c224;`}>{category.name}</p>
                                            <Link href={post.link+post.id}>
                                              <h1 className='link' css={css`font-size:15px;text-transform: capitalize;width:280px;color:black; &:hover{text-decoration:underline;} @media ${device.tablet}{width:fit-content;} @media ${device.laptop}{width:fit-content;}`}>{link}</h1>
                                            </Link>
                                            <p css={css`font-size:11px;width:160px;`}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                        </div> 
                                    </Children>)
                            }
                            else if(i>=1 && i<=2){
                                    return(<>
                                    <Children key={i}  css={css`width:160px; @media ${device.laptop}{width:75%;}   @media ${device.tablet}{width:75%;} @media ${device.mobile}{height:100%;}`}>
                                    <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css `width:140px; height:100px; @media ${device.laptop}{width:100%;} @media ${device.tablet}{width:100%;} @media ${device.mobile}{width:100%;height:25vh;}`}/>
                                    <div css={css`@media ${device.mobile}{width:100%;}`}>
                                        <p className='category' style={{color:'#e5c224'}}>{category.name}</p>
                                        <Link href={post.link+post.id}>      
                                          <h1 className='link'  css={css`color:black;font-weight:normal;margin-top:3px;font-size:12px;width:160px; @media ${device.mobile}{width:100%;}`}>{link}</h1>
                                        </Link>
                                        <p css={css`font-size:11px;`}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div>
                                </Children></>)
                            }
                            else{
                                    return;
                                }  
                            })

                        }
                </div>
            </Recipes>
        </InnerContainer>
         <Fashion/>
    </Container>
   </>)
}
export default connect(Sports)

const Container=styled.div`
position:relative;
width:auto;
height:auto;
margin-top:0px;
@media ${device.laptop}{
    width:95%;
}
@media ${device.tablet}{
    width:95%;
}
@media ${device.mobile}{
    // top: 2425px;
    margin-top:0px;
    width:100%;
}
`
const InnerContainer=styled.div`
margin-left:220px;
margin-top:40px;
background-color:white;
@media ${device.laptop}{
    margin-left:10px;
    width:100%;
}
@media ${device.tablet}{
    margin-left:10px;
    width:100%;
}
@media ${device.mobile}{
    margin-left:0px;
}
`
const Sport=styled.div`
width:400px;
float:left;
@media ${device.laptop}{
    width:70%;
}
@media ${device.tablet}{
    width:70%;
}
@media ${device.mobile}{
    width:100%;
}
`
const Recipes=styled.div`
float:left;
margin-left:440px;

@media ${device.laptop}{
    width:30%;
    margin:0px;
}
@media ${device.tablet}{
    width:30%;
    margin:0px;

}
@media ${device.mobile}{
    margin-left:0px;
    width:100%;
    margin-top:20px;
}
`
const Heading=styled.div`
font-weight:bold;
border-left:3px solid green;
padding-left:5px;
@media ${device.mobile}{
    margin-left:15px;
}
`
const Children=styled.div`
overflow-wrap: break-word;
overflow: hidden;
@media ${device.mobile}{
    width:100%;
}
`
const Image=styled.img`
width:355px;
filter: brightness(80%);
height:240px;
overflow:hidden;
&:hover{
    transform:scale(1.1);
    cursor:pointer;
}
@media ${device.mobile}{
    width:100%;
    min-width:object-fit;
}
`