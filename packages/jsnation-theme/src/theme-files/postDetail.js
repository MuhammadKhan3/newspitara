import { connect,styled,Global,css } from 'frontity';
import React from 'react'
import ReactDOM from 'react-dom';
import { device } from './device';
import Footer from './footer';
import Link from './link';
import RelatedNews from './RelatedNew';

const PostDetail = ({state,libraries}) => {

    const Html2React = libraries.html2react.Component;
    const posts=state.source.get('/category/world'); 
    const link=state.router.link.split('/');
   console.log(typeof posts.items==='object') 
if(typeof link[2]==='string'){   
    console.log(link[2])
    const post=state.source["post"][link[2]];
    const attachment=state.source.attachment[0];
    const author=state.source.author[post.author]
    const category=state.source.category[post.categories[0]];
    const content=post.content.rendered.split('<p>')[1].split('</p>')[0]
  return (<>

  <MainContainer>
   <Container>
    <Title>{typeof post.title==='object' ? post.title.rendered:''}</Title>
    <DateContent>
        <p css={css`font-size:11px;background-color:black;padding:5px;color:white;display:inline; @media ${device.mobile}{width:fit-content;display:block;}`}>{category.name}</p>
        <p css={css`display:inline;font-size:12px;margin-left:5px;color:lightgray; `}>{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
        <p style={{borderLeft:'1px solid gray' ,fontSize:'12px', marginLeft:'4px' ,paddingLeft:'5px',display:'inline',color:'lightgray'}}><span style={{fontWeight:'bold'}}><span css={css`@media ${device.mobile}{font-weight:bold;color:black;}`}>Updated:</span> </span>{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
    </DateContent>
    <Content>
      <svg xmlns="http://www.w3.org/2000/svg" style={{float:'left',display:'inline'}} width="40" height="40" viewBox="0 0 512 512"><title>ionicons-v5-j</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm2,96a72,72,0,1,1-72,72A72,72,0,0,1,258,144Zm-2,288a175.55,175.55,0,0,1-129.18-56.6C135.66,329.62,215.06,320,256,320s120.34,9.62,129.18,55.39A175.52,175.52,0,0,1,256,432Z"/></svg>
       <p style={{position:'relative',top:'7px',display:'inline',fontSize:'11px'}}>By <span style={{fontWeight:'bold'}}>{author ? author.name:''}</span></p>    
    </Content>
    <Share css={css` @media ${device.mobile}{left:0px;top:70px;width:100%;}`}>
        <div  css={css`border:1px  solid  #E0E0E0;display:inline;padding:10px;padding-left:20px;padding-right:20px;padding-top:18px;padding-bottom:5px; @media ${device.mobile}{display:none;}`}>
          <svg style={{display:'inline',borderRight:'1px  solid  #E0E0E0',paddingRight:'8px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16"> <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/> </svg>
          <p style={{display:'inline',marginLeft:'8px',position:'relative',top:'-5px'}}>Share</p>
        </div>
        <div  css={css` margin-left:10px;background-color:#516eab;display:inline;padding:10px;padding-left:20px;padding-right:20px;padding-top:18px;padding-bottom:5px; &:hover{opacity:0.6;cursor:pointer} @media ${device.mobile}{margin-left:-30px;width:20% !important;}`}>
           <svg style={{display:'inline',borderRight:'1px  solid  #E0E0E0',paddingRight:'8px'}} width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" fill="white"></path></svg>
           <p style={{fontSize:'12px',display:'inline',marginLeft:'8px',position:'relative',top:'-5px',color:'white'}}>Facebook</p>
        </div>

        <div  css={css`margin-left:10px;background-color:#29c5f6;display:inline;padding:10px;padding-top:18px;padding-left:20px;padding-right:20px;padding-bottom:5px; &:hover{opacity:0.6;cursor:pointer} @media ${device.mobile}{ width:20% !important;}`}>
           <svg style={{display:'inline',borderRight:'1px  solid  #E0E0E0',paddingRight:'8px'}} width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" fill="white"></path> </svg>
           <p style={{fontSize:'12px',display:'inline',marginLeft:'8px',position:'relative',top:'-5px',color:'white'}}>Twitter</p>
        </div>
        <div css={css`margin-left:10px;background-color:#ca212a;display:inline;padding:10px;padding-top:18px;padding-left:20px;padding-right:20px;padding-bottom:5px; &:hover{opacity:0.6;cursor:pointer} @media ${device.mobile}{ width:20% !important;} @media ${device.mobileA10}{display:none;}`}>
           <svg style={{display:'inline',borderRight:'1px  solid  #E0E0E0',paddingRight:'8px'}} width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" fill="white"></path></svg>
           <p style={{fontSize:'12px',display:'inline',marginLeft:'8px',position:'relative',top:'-5px',color:'white'}}>Pinterest</p>
        </div>

        <div  css={css`margin-left:10px;background-color:#7bbf6a;display:inline;padding:10px;padding-top:18px;padding-left:20px;padding-right:20px;padding-bottom:5px; &:hover{opacity:0.6;cursor:pointer} @media ${device.mobile}{display:none;}`}>
           <svg style={{display:'inline',borderRight:'1px  solid  lightgray',paddingRight:'8px'}} width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" fill="white"></path> </svg>
           <p style={{fontSize:'12px',display:'inline',marginLeft:'8px',position:'relative',top:'-5px',color:'white'}}>Twitter</p>
        </div>
    </Share>
        <AdsContainer>
            <Text>-Advertisement-</Text>
            <AdImage src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz-970-2.jpg' css={css`width:990px;height:80px;margin-left:40px;`}></AdImage>
           <AdImage1 src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz4.png'/>
        </AdsContainer> 
       <ContentContainer>
         <ContentContainerOne>
          <Attachment src={typeof attachment==='object' ? attachment['source_url']: 'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css`display:block; width:750px; @media ${device.mobile}{width:95%;margin-top:50px;}`}/>
          <AdsContainer css={css`@media ${device.mobile}{top:20px;display:block;}`}>
            <Text>-Advertisement-</Text>
            <AdImage src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz-970-2.jpg'></AdImage>
           <AdImage1 src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz4.png'/>
         </AdsContainer> 
          
            <div css={css`width:780px;margin-top:10px; @media ${device.mobile}{width:90%;margin-top:120px;display:block;height:auto;overflow:hidden;}`}>
             <Html2React html={post.excerpt.rendered} />
            </div>
            <AdsContainer css={css`@media ${device.mobile}{margin-top:0px;}`}>
                <Text>-Advertisement-</Text>
                <AdImage src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz-970-2.jpg'></AdImage>
                <AdImage1 src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz4.png'/>
           </AdsContainer>             
           <div css={css`margin-top:10px;margin-left:300px; @media ${device.mobile}{margin-left:0px;margin-top:220px;display:block;}`}>
               <p style={{fontWeight:'bold',fontSize:'14px'}}>Tags

                {typeof post.tags==='object' && post.tags.map((id)=>{
                
                return  <span style={{fontsize:'',fontWeight:'normal',backgroundColor:'#F0F0F0',padding:'10px',marginLeft:'10px'}}> {state.source['tag'][id].name}</span>
                })}
              </p>
            </div>
            <div css={css`position:relative;top:60px;border:1px solid #E8E8E8;padding:20px;width:700px;height:150px; @media ${device.mobile}{width:100%;}`} >
               <svg style={{color: 'rgb(205, 205, 193)',float:'left',display:'inline'}} xmlns="http://www.w3.org/2000/svg" width="116" height="116" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16"> <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" fill="#cdcdc1"></path> </svg>
               <div style={{display:'inline',position:'relative',top:'10px'}}>
                  <p style={{fontWeight:'bold',fontSize:'20px'}}>{author ? author.name :''}</p>
                  <p style={{fontSize:'12px',marginTop:'8px'}}>https://www.newspitara.com</p>
               </div>
            </div>
             <Share css={css`position:relative;top:100px;left:100px;@media ${device.mobile}{width:200px;}`}>
                <div css={css`border:1px  solid  #E0E0E0;display:inline;padding:10px;padding-left:20px;padding-right:20px;padding-top:18px;padding-bottom:5px; @media ${device.mobile}{display:none;}`}>
                  <svg style={{display:'inline',borderRight:'1px  solid  #E0E0E0',paddingRight:'8px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16"> <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/> </svg>
                  <p style={{display:'inline',marginLeft:'8px',position:'relative',top:'-5px'}}>Share</p>
                </div>
                <div  css={css`margin-left:10px;background-color:#516eab;display:inline;padding:10px;padding-left:20px;padding-right:20px;padding-top:18px;padding-bottom:5px; &:hover{opacity:0.6;cursor:pointer} @media ${device.mobile}{margin-left:-80px;}`}>
                  <svg style={{display:'inline',borderRight:'1px  solid  #E0E0E0',paddingRight:'8px'}} width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" fill="white"></path></svg>
                  <p style={{fontSize:'12px',display:'inline',marginLeft:'8px',position:'relative',top:'-5px',color:'white'}}>Facebook</p>
                </div>

                <div style={{marginLeft:'10px',backgroundColor:'#29c5f6',display:'inline',padding:'10px',paddingTop:'18px',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'5px'}} css={css`&:hover{opacity:0.6;cursor:pointer}`}>
                  <svg style={{display:'inline',borderRight:'1px  solid  #E0E0E0',paddingRight:'8px'}} width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" fill="white"></path> </svg>
                  <p style={{fontSize:'12px',display:'inline',marginLeft:'8px',position:'relative',top:'-5px',color:'white'}}>Twitter</p>
                </div>
                <div  css={css`margin-left:10px;background-color:#ca212a;display:inline;padding:10px;padding-top:18px;padding-left:20px;padding-right:20px;padding-bottom:5px; &:hover{opacity:0.6;cursor:pointer} @media ${device.mobileA10}{display:none;}`}>
                  <svg style={{display:'inline',borderRight:'1px  solid  #E0E0E0',paddingRight:'8px'}} width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" fill="white"></path></svg>
                  <p style={{fontSize:'12px',display:'inline',marginLeft:'8px',position:'relative',top:'-5px',color:'white'}}>Pinterest</p>
                </div>

                <div  css={css`marginLeft:10px;backgroundColor:#7bbf6a;display:inline;padding:10px;padding-top:18px;padding-left:20px;padding-right:20px;padding-bottom:5px; &:hover{opacity:0.6;cursor:pointer} @media ${device.mobile}{display:none;}`}>
                  <svg style={{display:'inline',borderRight:'1px  solid  lightgray',paddingRight:'8px'}} width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" fill="white"></path> </svg>
                  <p style={{fontSize:'12px',display:'inline',marginLeft:'8px',position:'relative',top:'-5px',color:'white'}}>Twitter</p>
                </div>
            </Share>  
           </ContentContainerOne>
           <ContentContainerTwo css={css`@media ${device.mobile}{margin-top:110px;}`}>
              <h1 style={{fontSize:'16px',borderLeft:'3px solid #4169E1',paddingLeft:'5px'}}>Latest News</h1>
             <RightPost  >
                {typeof posts.items==='object' && posts.items.map((item,i)=>{
                    const post=state.source[item.type][item.id];
                    const attachment=state.source.attachment[post.featured_media];
                    const author=state.source.author[post.author];
                    const category=state.source.category[post.categories[0]];
                    const link=decodeURI(item.link).split('/');
                    const content=post.content.rendered.split('<p>')[1].split('</p>')[0];            
                    console.log(post)
                    return(<div >
                        {i===1 ?
                                ( <Children key={i} css={css`width:270px;height:310px;overflow:hidden;margin-top:10px; @media ${device.mobile}{width:100%;}`} >                                                
                                <Image src={typeof attachment==='object' ? attachment['source_url'] : 'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} css={css`width:290px;height: 150px;object-fit: fill;transform: scale(1.4); @media ${device.mobile}{width:40%; float:left;}`}/>
                                    <div css={css`position:relative;top:30px;color:white; @media ${device.mobile}{left:30px;top:0px;width:50%;float:left;}`}>
                                        <p style={{fontSize:'0.7rem',color:'#4169E1'}}>{category.name}</p>
                                        <Link href={post.link+post.id}>
                                            <h1  css={css`color:black;margin-top:5px;font-size:15px;width:20rem;text-transform: capitalize; font-size:10px,&:hover{text-decoration:underline;} @media ${device.mobile}{width:80%;}`}>{link}</h1>
                                        </Link>
                                        <p style={{fontSize:'12px',marginTop:'5px',color:'black'}}>{author ? author.name:''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div>                         
                                </Children>)
                                :i===2 
                                 ? <>
                                          <ImageContainer css={css`@media ${device.mobile}{left:100px;}`}>
                                           <Advert>- Advertisement -</Advert>
                                           <ImageOne src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz2.png'/>
                                          </ImageContainer>
                                          <Children key={i} style={{width:'350px',height:'120px',overflow:'hidden'}} >                                                
                                          <Image src={typeof attachment==='object' ? attachment['source_url'] : 'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} style={{width:'75px',height: '65px',objectFit: 'fill',transform: 'scale(1.4)',float:'left'}}/>
                                          <div style={{position:'relative',float:'left',left:'20px'}}>
                                          <p style={{fontSize:'0.6rem',color:'#4169E1'}}>{category.name}</p>
                                          <Link href={post.link+post.id}>
                                            <h1 css={css`font-size:10px,&:hover{text-decoration:underline;}`} style={{color:'black',marginTop:'5px',fontSize:'11px',width:'10rem',textTransform: 'capitalize'}}>{link}</h1>
                                          </Link>
                                          <p style={{fontSize:'12px',marginTop:'5px',color:'black'}}>{author ? author.name:''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                    </div>                         
                            </Children>
                                </>:i>2 && i<=4 && (<Children key={i} style={{width:'350px',height:'120px',overflow:'hidden'}} >                                                
                               <Image src={typeof attachment==='object' ? attachment['source_url'] : 'https://www.newspitara.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/images/no-thumb/td_696x0.png'} style={{width:'75px',height: '65px',objectFit: 'fill',transform: 'scale(1.4)',float:'left'}}/>
                                <div style={{position:'relative',float:'left',left:'20px'}}>
                                    <p style={{fontSize:'0.6rem',color:'#4169E1'}}>{category.name}</p>
                                    <Link href={post.link+post.id}>
                                        <h1 css={css`font-size:10px,&:hover{text-decoration:underline;}`} style={{color:'black',marginTop:'5px',fontSize:'11px',width:'10rem',textTransform: 'capitalize'}}>{link}</h1>
                                    </Link>
                                    <p style={{fontSize:'12px',marginTop:'5px',color:'black'}}>{author ? author.name:''}-{new Date(post.date).toLocaleDateString('en-Us',{month:'long',day:'2-digit',year:'numeric'})}</p>
                                </div>                         
                            </Children>)
                        }
                        </div>)

                })}
                </RightPost>     
           </ContentContainerTwo>
    </ContentContainer>
  </Container>
    <RelatedNews/>
    <AdsContainer css={css`position:relative;top:140px;margin-left:390px; @media ${device.mobile}{margin-left:0px;}`}>
            <Text>-Advertisement-</Text>
            <AdImage src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz-970-2.jpg'></AdImage>
           <AdImage1 src='https://www.newspitara.com/wp-content/uploads/2021/11/corhaz4.png'/>
    </AdsContainer>  
    <div css={css`position:relative;top:200px;left:480px;width:800px; @media ${device.mobile}{left:10px;width:100%;}`}>
      <h1 style={{fontSize:'14px',fontWeight:'700'}}>LEAVE A REPLY</h1>
      <p style={{fontSize:'12px',fontWeight:'700',marginTop:'10px'}}>Logged in as {author ? author.name :''}. Log out?</p>
      <textarea css={css`border:1px solid #E0E0E0;margin-top:10px; width:600px;height:150px; @media ${device.mobile}{width:100%;}`} ></textarea>
      <Button >POST COMMENT</Button>
    </div>
  </MainContainer>
  <Footer top={'220px'}/> 
  </>)
}
else{
  return 1;
}
}
export default connect(PostDetail)

const MainContainer=styled.div`
width:96%;
`


const Attachment=styled.img`


`;
const ContentContainer=styled.div`
position:relative;
height:100%;
width:100%;
max-width:1000px;
display:grid;
grid-template-columns:auto auto;
grid-template-rows:auto auto auto auto auto;
grid-row-gap:10px;
@media ${device.mobile}{
  grid-template-columns:auto;
  margin-top:240px;
}
`
const ContentContainerOne=styled.div`

@media ${device.mobile}{
  width:100%;
}
`
const ContentContainerTwo=styled.div``


const AdsContainer=styled.div`
width:auto;
display:block;
position:relative;
top:100px;
// left:300px;
width:fit-content;
height:200px;
@media ${device.mobile}{
    width:100%;
    left:0px;
    display:block;
}
`


const Text=styled.div`
margin-left:320px;
font-size:10px;
margin-left:420px;
width:fit-content;
@media ${device.mobile}{
    margin-left:40%;
}
`;

const AdImage1=styled.img`
display:none;
@media ${device.mobile}{
    display:block;
    width:70%;
    margin-left:15%;
}
`
const AdImage=styled.img`
height:auto;
width:800px;
display:block;
@media ${device.mobile}{
    width:200px;
    height:150px;
    display:none;

}
`
const Container=styled.div`
position:relative;
top:80px;
width:fit-content;
left:260px;

@media ${device.mobile}{
  left:30px;
  width:96%;
}
`
const Content=styled.div`
position:relative;
top:30px;
display:inline;
`

const Title=styled.h1`
width:1000px;
@media ${device.mobile}{
  width:96%;
  font-size:15px;
}
`
const DateContent=styled.div`
width:500px;
@media ${device.mobile}{
  margin-top:10px;
  width:96%;
}
`

const Share=styled.div`
display:inline;
position:relative;
top:30px;
left:300px;
width:300px;
@media ${device.mobile}{
  display:block;
}
`
const ImageContainer=styled.div`
position:relative;
width:fit-content;
`

const ImageOne=styled.img`
width:240px;
margin-top:4px;
`

const Advert=styled.p`
font-size:10px;
margin-left:80px;
color:gray;
`
const RightPost=styled.div`
display:grid;
grid-template-columns:auto;
grid-template-rows:auto;
width:400px;
height:auto;
@media ${device.mobile}{
  width:100%;
}
`
const Children=styled.div`

`
const Image=styled.img`
width:400px;
height:180px;
// overflow:hidden;
// &:hover{
//     transform:scale(1.1);
//     cursor:pointer;
// }
`
const Button=styled.p`
display:block;
margin-top:5px;
background-color:black;
color:white;
paddingLeft:15px;
paddingRight:15px;
padding:10px;
paddingBottom:5px;
display:block;
width:fit-content;
paddingTop:5px; 
&:hover
{
background-color:#4169E1;
cursor:pointer;
border:none;
}
@media ${device.mobile}{
  margin-top:10px;
}
`