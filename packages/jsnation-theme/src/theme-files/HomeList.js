import React from 'react'
import { Global,styled,css,connect } from 'frontity'
import Link from './link';
import { device } from './device';
const HomeList = ({actions,state}) => {
    actions.source.fetch('/')
    const data=state.source.get('/');

  return (<>
    <Global styles={`
    .content1{
        width:500px;
        position:absolute;
        top:210px;
        color:white;
        font-family:Arial;
        margin-left:20px;
        
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
        height:20;
        @media ${device.mobile}{
            height:40%;
            width:100%;
        }
    }
    .image3{
        height:200px;
        width:300px;
        @media ${device.mobile}{
            width:40%;
            height:80%;
            float:left;
        }
    }
    .header1{
        grid-column-start:1;
        grid-column-end:3;
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
            height:320px;
            margin:20px;
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
        @media ${device.mobile}{
            margin-left:10px;
            margin-top:40px;
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
                            <div className='content1'>
                                <p className='category'>{category.name}</p>
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
                        <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} className='image-2'/>

                        <p className='category' style={{color:'#4169E1'}}>{category.name}</p>
                        <Link href={post.link+post.id} color='black'>
                           <h1 className='link' style={{color:'black',fontWeight:'normal',marginTop:'10px',fontSize:'16px',width:'270px'}}>{link}</h1>
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
                                <h1 className='link' style={{color:'black',fontWeight:'normal',marginTop:'10px',fontSize:'16px',width:'270px'}}>{link}</h1>
                                </Link>
                                <p className='author'>{author.name}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                            </div>
                        </Children>
                    </>)
                 }
                  else if(i>4 && i<=7){
                    {console.log('attac',typeof attachment)}

                     return(<Children key={i} className='child4' >
                         <img  src={typeof attachment==='object' ? attachment['source_url'] :'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} className='image3'/>
                         <div className='child3-content'>
                            <p className='category' style={{color:'#4169E1'}}>{category.name}</p>
                            <Link href={post.link+post.id} >
                                <h1 className='link'>{link}</h1>
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
position:relative;
left:230px;
top:80px;
overflow:hidden;
width:1180px;
height:auto;
display:grid;
grid-template-columns:auto auto auto auto;
grid-template-rows:auto auto auto;
grid-gap:15px;
@media ${device.mobile}{
position:absolute;
grid-template-columns:auto auto;
grid-template-rows:auto auto auto auto;
left:0px;
top:22rem;
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
@media ${device.mobile}{
    width:100%;
}
`