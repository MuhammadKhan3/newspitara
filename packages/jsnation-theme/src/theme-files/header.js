import React,{useState,useEffect} from 'react'
import { connect,styled,Global,css } from 'frontity'
import Link from './link'
import SubMenu from './subMenu'
import MenuCard from './menuCard'
import { device } from './device'
import SearchBox from './searchBox'

const Header = ({actions,state,hamburger,sethamburger}) => {
    const [mobilemenu,setmobilemenu]=React.useState(false);
    const [menustate,setmenu]=React.useState('');
    const [search,setsearch]=React.useState(false);
    const menu=[
        ["HOME", "/"],
        ["NEWS", "/category/news/"],
        ["FASHION", "/category/fashion/"],
        ["WORLD", "/category/world/"],
        ["SPORT", "/category/sport/"],
        ["TECH", "/category/tech/"],
        ["PHOTOGRAPHY", "/category/photography/"],
        

        // ["Recepies", "category/news/recipes"],
        // ["Travel","/category/news/travel"],
        // ["Arts","category/arts"],
        // ["Health","category/health"],
        // ["Video","category/news/video"],
      ];
      const menus=[
        [{
        link:"HOME",
        route:"/"}],
        [{
          link:"NEWS",
          route:"/category/news/"
        },{
          link:"Recipes",
          route:"/category/recipes/"
        },{
          link:"Travel",
          route:"/category/travel/"
        },{
          link:"Video",
          route:"/category/vide/"
        },],
        [{
          link:"FASHION", 
          route:"/category/fashion/"
        }],
        [{
          link:"WORLD",
          route:"/category/world/"
        }],
        [{
          link:"SPORT", 
          route:"/category/sport/"
        }],
        [{
          link:"TECH", 
          route:"/category/tech/"
        }],
        [{
          link:"PHOTOGRAPHY", 
          route:"/category/photography/"
        }],
      ]
      const [scrollPosition, setScrollPosition] = useState(0);
      const handleScroll = () => {
          const position = window.pageYOffset;
          setScrollPosition(position);
      };

      useEffect(() => {
          window.addEventListener('scroll', handleScroll, { passive: true });

          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
      }, []);
      const scrollup=()=>{
          window.scrollTo({top:0,  behavior: "smooth"})
      }

      React.useEffect(async()=>{
        // await actions.source.fetch(`${/category/news/recipes}?per_page${4}`);
        // await actions.source.fetch(`${/category/news/video}?per_page${4}`);
        // await actions.source.fetch(`${/category/news/travel}?per_page${4}`);
        
      },[])

      const searchhandler=()=>{
        setsearch(!search);
      }
      console.log(scrollPosition)
  return (
    <>
    <Global styles={css`
     .logo{
        width:15.625rem;
        heigth:5.625rem;
        display:inline-block;
        float:left;
        margin-left:13.75rem;
        z-index:-9999;
        @media ${device.mobile}{
          margin-left:0rem;
          width:object-fit;
          min-width:80%;
        }
     }
     .active{
        background-color:#4169E1;
        color:white;
     }
     
     .searchLogo{
        width:1.2rem;
        &:hover{
            color:blue;
            cursor:pointer;
        }
     }
     .header-2{
       position:fixed;
       top:0;
       background-color:white;
       z-index:9999;
       width:98.8rem;
       padding:5px;
       box-shadow: 0px 2px 8px #f5f5f5;
       border-bottom:1px solid white;
       @media ${device.mobile}{
        display:none;
       }
     }
     .search{
       width:100px;
      float:right;
      display:none;
      @media ${device.mobile}{
        display:inline;
      }


     }
     .menu-2{
      position:relative;
      top:1.2rem;
     }
     .mobile{
     }
     `}/>
     <div className='mobile'>
      {hamburger && <HamburgerMenu  style={{float:'left'}}>
                   {/* <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className='icon-face' viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg> */}
               <div style={{marginTop:'20px'}}>                  
                  <svg  width="16" height="16"  className='icon-resp icons icon-general' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" fill="white"></path></svg>
                  {/* instagram */}
                  <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop:'6px'}} width="20" height="20" fill="currentColor" class="icons  icon-general bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg>

                  {/* <svg xmlns="http://www.w3.org/2000/svg" className='icon-general bi bi-instagram'  viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg> */}
                  
                  {/* Twitter Icon*/}
                  <svg xmlns="http://www.w3.org/2000/svg" className='icons icon-general bi bi-twitter' width="20" height="20"  fill="currentColor" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg>
                  {/* Youtube Icon*/}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='icons icon-general bi bi-youtube' fill="currentColor"  viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/></svg>             
                  {/* <div className='sign'>
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className='icon-person bi bi-person-fill'   viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg>                  
                      <p style={{fontSize:'11px',display:'inline',position:'relative',top:'3px'}}>Signin/ Join</p>                  
                  </div> */}
                  <div onClick={()=>{sethamburger(!hamburger)}} style={{float:'right',marginRight:'20px'}}>
                      <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width='24' height='24'  fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                  </div>
               </div>
               <div>
                  <MenuList>
                  {menus.map((m)=>{
                    return <> {m.map((sub,i)=>{
                       return<> {i>=1 ?<>  {mobilemenu &&<Link href={sub.route}  color='white'> <List style={{marginLeft:'30px;',fontWeight:'normal',color:'white'}}> {sub.link}</List></Link>}</> :   <Lists style={{display:'inline'}} > {m.length>=2 ? <> <Link href={sub.route}   color='white'>{sub.link} </Link> {mobilemenu ? <svg onClick={()=>{setmobilemenu(!mobilemenu)}} style={{float:'right',display:'inline',color: "white"}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>    :   <svg onClick={()=>{setmobilemenu(!mobilemenu)}} style={{float:'right',display:'inline',color: "white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>     }  </> :
                        <Link href={sub.route} color='white'>{sub.link}</Link>}</Lists>}  </>
                    })}
                    </>
                  })}
                  </MenuList>
               </div>
     </HamburgerMenu>}
      <div className='search'>            
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="searchLogo bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
      </div>

     </div>      
    
    
    <Container > 
      <img src='https://www.newspitara.com/wp-content/uploads/2021/11/72579877_116985066377732_1378794148236099584_n-1-e1637308004260.jpg' className='logo'/>
        <Menu>        
            {menu.map((m,i)=>{
                return <Link  key={i} href={m[1]}><List onMouseEnter={()=>{setmenu(m[0])}} className={state.router.link===m[1] ? 'active':''}> {m[0]}</List></Link>
            })}
            <More  onMouseEnter={()=>{setmenu('MORE');console.log('enter')}}>MORE</More>
            <Search onClick={searchhandler}>            
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="searchLogo bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
            </Search>
        </Menu>
    </Container>
    {scrollPosition>234 &&
    <div className='header-2'> 
        <img src='   https://www.newspitara.com/wp-content/uploads/2021/11/72579877_116985066377732_1378794148236099584_n-1-e1637308004260.jpg' className='logo'/>
        <div className='menu-2'> 
            <Menu>        
                {menu.map((m,i)=>{
                    return <Link  key={i} href={m[1]}><List onMouseEnter={()=>{setmenu(m[0])}} className={state.router.link===m[1] ? 'active':''}> {m[0]}</List></Link>
                })}
                <More  onMouseEnter={()=>{setmenu('MORE')}}>MORE</More>
                <Search onClick={searchhandler}>            
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="searchLogo bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
                </Search>
            </Menu>
        </div>
    </div>
    }

    <MenuCard menus={menustate}  setmenu={setmenu}/>
    {menustate==='MORE' && <SubMenu setmenu={setmenu}/>}
    {search &&<SearchBox/>}

    </>)
}
export default connect(Header);




const HamburgerMenu=styled.div`
background-image:   linear-gradient(
  rgba(0,0,255, 0.75), 
  rgba(0,0, 255, 0.75)
),  url("https://www.newspitara.com/wp-content/uploads/2021/11/vbbbb.jpg");
color:white;
width:80%;
min-width:100%;
max-width:object-fit;
height:100%;
float:left;
background-repeat: no-repeat;
display:inline;
z-index:99999;
position:fixed;
top:0;
left:0;
@media ${device.desktop}{
  display:none;
}
`
const MenuList=styled.ul`
list-style-type:none;
display:flex;
flex-direction:column;
position:absolute;
top:60px;
left:20px;
gap:12px;
width:100%;

`
const Lists=styled.li`
font-weight:bold;
color:white;
display:inline;
width:90%;
`


const Container=styled.div`
position:relative;
left:30px;
top:20px;
width:100%;
max-width:990px;
`

const Menu=styled.ul`
display:flex;
flex-direction:row;
list-style-type:none;
width:50%;
@media ${device.mobile} {
  display:none;
}
`
const List=styled.li`
margin-left:0.625rem;
font-weight: 800;
font-size:0.8125rem;
padding:0.3125rem;
&:hover {
background-color:#4169E1;
color:white;
cursor:pointer;}

@media ${device.laptop} {
  font-size:0.6rem;
}
`
const More=styled.li`
margin-left:1.rem;
font-weight: 800;
font-size:0.8125rem;
padding:0.3125rem;
background-color:#4169E1;
color:white;
&:hover {
    cursor:pointer;
}
@media ${device.laptop} {
  font-size:0.6rem;
}
`
const Search=styled.div`
// position:relative;
// top:10px;
// display:block
margin-left:15.625rem;
@media ${device.laptop} {
  margin-left:(100% - 100px);
}
`

