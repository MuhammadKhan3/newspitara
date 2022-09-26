import React from 'react'
import { Global,styled,css,connect } from 'frontity'
import Link from './link';
import { device } from './device';
const HomeList = ({actions,state}) => {
    const [data,setdata]=React.useState([]);

    React.useEffect(async ()=>{
        await actions.source.fetch('/')
        const data=await state.source.get('/');
        await setdata(data)
    })


  return (<>
    <Global styles={`
    .content1{
        width:500px;
        position:absolute;
        top:210px;
        color:white;
        font-family:Arial;
        margin-left:20px;
        @media ${device.mobile}{
            width:90%;
        }
    }
    .child1{

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
            color:white;
        }
    }
    .link:hover{
        cursor:pointer;
    }
    .author{
        font-size:11px;
    }
    .image-2{
        width:320px;
        height:200px;
        @media ${device.tablet}{
            width:100%;
        }
        @media ${device.mobile}{
            height:25vh;
            width:100%;
        }
    }
    .image3{
        height:200px;
        width:300px;
        @media ${device.tablet}{
            height:150px;
        }
        @media ${device.mobile}{
            width:40%;
            height:80%;
            float:left;
        }
    }
    .header1{
        grid-column-start:1;
        grid-column-end:3;
        @media ${device.tablet}{
            width:100%;
            grid-column-start:1;
            grid-column-end:3;
        }
        @media ${device.mobile}{
            width:100%;
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 3;    
        }
    }
    .child2{
        @media ${device.mobile}{
            width:100%;
            // height:100h;
            margin:20px 20px 0px;
        }
    }
    .advertisement{
        grid-column-start:1;
        grid-column-end:5;
        margin-left:50px;
        margin-top:30px;
        @media ${device.mobile}{
            grid-column-start:1;
            grid-column-end:3;
            margin-left:calc(50px - 30px);
        }
    }
    .child4{
        @media ${device.mobile}{
            margin-left:20px;
            grid-column-start:1;
            grid-column-end:3;
        }
    }
    .child3-content{
        @media ${device.tablet}{
            width:100%;
            font-size:13px;
        }
        @media ${device.mobile}{
            margin-left:10px;
            // margin-top:40px;
            width:30%;
            float:left;
        }
    }
    `}/>
    <Container>
        {typeof data.items==='object' && data.items.map((item,i)=>{
                 const post=state.source[item.type][item.id];
                 const attachment=state.source.attachment[post.featured_media];
                 const author=state.source.author[post.author]
                 const category=state.source.category[post.categories[0]];
                 const link=decodeURI(item.link).split('/');
                 const content=post.content.rendered.split('<p>')[1].split('</p>')[0];

                 if(i===0){
                    return ( <Children key={i} className='header1 child1'>
                            <Image src={typeof attachment==='object' ? attachment['source_url'] : 'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'}></Image>
                            <div className='content1' css={css`margin-top:330px; @media ${device.mobile}{margin-top:220px;width:fit-content;}`}>
                                <p className='category' style={{color:'white'}}>{category.name}</p>
                                <Link href={post.link+post.id} color={'white'}>
                                  <h1 className='link' style={{color:'white'}}>{link}</h1>
                                </Link>
                                <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </div> 
                        </Children>)
                 }
                 else if(i>=1 && i<=2){
                    return(<>
                    <Children key={i} className='child2' >
                        <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} className='image-2' css={css`        @media ${device.mobile}{height:25vh;width:90%;}`}/>
                        <p className='category' style={{color:'#4169E1'}}>{category.name}</p>
                        <Link href={post.link+post.id} color='black'>
                           <h1  css={css`color:black;font-weight:normal;margin-top:10px;font-size:16px;width:270px; &:hover{text-decoration:underline;} @media ${device.mobile}{width:100%;} @media ${device.tablet}{width:100%;font-size:15px;}`}>{link}</h1>
                        </Link>
                        <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                    </Children></>)
                 }
                 else if(i===4){
                    return(<>
                        <Children key={item.id} className='advertisement'>
                         <center>
                            <p style={{fontSize:'12px'}}>-Advertisement-</p>
                          </center>
                         <img src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz-970-2.jpg' style={{width:'90%'}}/>
                        </Children>
                        <Children key={i} className='child4'>
                            <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} className='image3'/>
                            <div className='child3-content'>
                                <p className='category' style={{color:'#4169E1'}}>{category.name}</p>
                                <Link href={post.link+post.id} color='black'>
                                <h1 className='link' css={css`color:black;font-weight:normal;margin-top:10px;font-size:16px;width:270px;&:hover{text-decoration:underline;} @media ${device.tablet}{width:100%;font-size:13px;}`}  >{link}</h1>
                                </Link>
                                <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </div>
                        </Children>
                    </>)
                 }
                  else if(i>4 && i<=7){

                    return(<Children key={i} css={css`@media ${device.mobile}{margin-left:20px;grid-column-start:1;grid-column-end:3;}`} >
                    <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css`height:200px;width:300px;@media ${device.mobile}{width:40%;height:15vh;float:left;} @media ${device.tablet}{height:150px;}`}/>
                     <div css={css`@media ${device.mobile}{margin-left:10px;width:55%;float:left;} @media ${device.tablet}{width:100%}`}>
                       <p className='category' style={{color:'#4169E1'}}>{category.name}</p>
                       <Link href={post.link+post.id} >
                           <h1  css={css`font-size:18px;text-transform: capitalize;width:360px;font-weight:normal;color:black;margin-top:10px;fontSize:16px;width:270px;&:hover{text-decoration:underline;} @media ${device.mobile}{margin-top:0px;width:100%;font-size:14px;color:black;} @media ${device.tablet}{font-size:13px;width:100%;}`}>{link}</h1>
                       </Link>
                       <p className='author'>{author ? author.name :''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                   </div>
                </Children>)
                }
                else{
                    return;
                 }

        })

        } 
    </Container>
   </>)
}
export default connect(HomeList)

const Container=styled.div`
// position:relative;
// left:230px;
// top
margin-left:230px;
margin-top:20px;
overflow:hidden;
width:1194px;
height:auto;
display:grid;
grid-template-columns:auto auto auto auto;
grid-template-rows:auto auto auto;
grid-gap:15px;

@media ${device.laptop}{
    width:90%;
    margin-left:10px;
}
@media ${device.tablet}{
    width:98%;
    margin-left:10px;
    grid-template-columns:20% 20% 25% 25%;
}
@media ${device.mobile}{
// position:absolute;
grid-template-columns:auto auto;
grid-template-rows:auto auto auto auto;
margin-left:0px;
margin-top:100px;
// top:15.3rem;
width:100%;
}
`
const Children=styled.div`
overflow-wrap: break-word;
overflow: hidden;
`
const Image=styled.img`
width:500px;
filter: brightness(80%);
height:300px;
overflow:hidden;
&:hover{
    transform:scale(1.1);
    cursor:pointer;
}
@media ${device.tablet}{
    width:100%;
    // height:200px;
}
@media ${device.mobile}{
    width:100%;
}
`