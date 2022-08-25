import React from 'react'
import { Global,styled,css,connect } from 'frontity'
import Link from './link';
import Fashion from './fashion';
import Footer from './footer';
const Sports= ({actions,state}) => {
    React.useEffect(()=>{
        actions.source.fetch('/')
    },[])
    const data=state.source.get('/');
    console.log(data)
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
        <div css={css`display:grid;grid-template-columns:auto auto auto auto; grid-template-rows:auto auto; height:content-fit;gap:10px;`} style={{marginTop:'30px',}}>
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
                            return ( <Children key={i} className='' css={css`color:black;width:400px;grid-column-start:1;grid-column-end:3;`}>
                                    {/* <p>{i}</p>                                 */}
                                    <Image src={attachment['source_url']}/>
                                    <div css={css`   width:500px;color:black;font-family:Arial;`}>
                                        <p className='category' css={css`width:160px;`}>{category.name}</p>
                                        <Link href={link}>
                                          <h1 className='link' css={css`font-size:15px;text-transform: capitalize;width:280px;color:black;`} >{link}</h1>
                                        </Link>
                                        <p css={css`font-size:11px;width:160px;`}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div> 
                                </Children>)
                        }
                        else if(i>=1 && i<=2){
                                return(<>
                                <Children key={i}  css={css`width:160px; `}>
                                {/* <p>{i}</p>                                 */}

                                <img  src='https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png' css={css `width:160px;`}/>
                                <p className='category' style={{color:'green'}}>{category.name}</p>
                                <Link href={link}>
                                <h1 className='link' style={{color:'black',fontWeight:'normal',marginTop:'10px',fontSize:'12px',width:'160px'}}>{content}</h1>
                                </Link>
                                <p css={css`font-size:11px;`}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </Children></>)
                        }
                        else if(i===3){
                            return(<>
                                <Children key={i}  css={css`width:430px;grid-column-start:3;grid-column-end:5 ;grid-row-start:1;grid-row-end:3; `}>
                                {/* <p>{i}</p>                                 */}
                                <img  src='https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png' css={css `width:360px;height:540px; box-shadow: inset 20px 20px 50px 10px pink; filter:brightness(80%)`}/>
                                <div css={css`position:absolute; top:533px;color:white;margin-left:15px;`}>
                                    <p className='category' style={{color:'white'}}>{category.name}</p>
                                    <Link href={link}>
                                    <h1 className='link' style={{color:'white',fontWeight:'normal',marginTop:'10px',fontSize:'16px',width:'340px',}}>{content}</h1>
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
                <h1 className='' css={css`font-weight:bold;border-left:3px solid yellow;padding-left:5px;font-size:17px;`}>RECIPES</h1>
            <div css={css`display:grid;grid-template-columns:auto auto; grid-template-rows:auto auto; height:content-fit;gap:10px;`} style={{marginTop:'30px',}}>
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
                                return ( <Children key={i} className='' css={css`color:black;width:400px;grid-column-start:1;grid-column-end:3;`}>
                                        {/* <p>{i}</p>                                 */}
                                        <Image src={attachment['source_url']}/>
                                        <div css={css`   width:500px;color:black;font-family:Arial;`}>
                                            <p className='category' css={css`width:160px;`}>{category.name}</p>
                                            <Link href={link}>
                                            <h1 className='link' css={css`font-size:15px;text-transform: capitalize;width:280px;color:black;`}>{link}</h1>
                                            </Link>
                                            <p css={css`font-size:11px;width:160px;`}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                        </div> 
                                    </Children>)
                            }
                            else if(i>=1 && i<=2){
                                    return(<>
                                    <Children key={i}  css={css`width:160px; `}>
                                    {/* <p>{i}</p>                                 */}

                                    <img  src='https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png' css={css `width:160px;`}/>
                                    <p className='category' style={{color:'green'}}>{category.name}</p>
                                    <Link href={link}>
                                    <h1 className='link' style={{color:'black',fontWeight:'normal',marginTop:'10px',fontSize:'12px',width:'160px'}}>{content}</h1>
                                    </Link>
                                    <p css={css`font-size:11px;`}>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
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
padding:10px;
`
const InnerContainer=styled.div`
margin-left:220px;
margin-top:40px;
background-color:white;
`
const Sport=styled.div`
width:400px;
float:left;
`
const Recipes=styled.div`
float:left;
margin-left:440px;
`
const Heading=styled.div`
font-weight:bold;
border-left:3px solid green;
padding-left:5px;
`
const Children=styled.div`
overflow-wrap: break-word;
overflow: hidden;
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
`