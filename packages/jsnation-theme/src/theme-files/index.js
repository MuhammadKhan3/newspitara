import React from 'react'
import { connect,styled,css,Global,Head } from 'frontity';
import Switch from "@frontity/components/switch";
import Link from './link';
import Header from './header';
import HeaderText from './headerText';
import Home from './home';
import News from './news';
const Root = ({state}) => {
  const data = state.source.get(state.router.link);
  console.log(data)
    return (
      <>
      <Head>
        <title>New</title>
        {/* <meta name="description" content={state.frontity.description} /> */}
        <html lang="en" />
      </Head>
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
      
      <Global
      styles={css`html{
        height:100%;
        width:100%;
        margin:0;
        padding:0;
       }`}
      />
      <body style={{width:'100%',minHeight:'100vh',boxSizing:'border-box'}}>
      <Container>
       <HeaderText/>
        <Switch>
          <Home when={data.isHome}/>
          <News when={data.isCategory}/>
        </Switch>    
      </Container> 
      </body> 
      </>
    );
  };
export default connect(Root);

const Container=styled.div`
// max-width:100%;
`