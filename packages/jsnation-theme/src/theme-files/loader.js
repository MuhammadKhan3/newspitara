import React from 'react'
import loader from './assets/loader.gif'
import { Global,styled,css,connect } from 'frontity'


const Loader = ({when}) => {
  return (
    <>
    {when && <img css={css`position:fixed;top:50%;left:50%;`}  src={loader}/>}
    </>
  )
}

export default Loader