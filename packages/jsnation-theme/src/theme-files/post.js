import { connect } from 'frontity'
import React from 'react'
import PostDetail from './postDetail'
import TextSlider from './textSlider'

const Post = () => {
  return (<>
    <TextSlider/>
    <PostDetail/>
    </>)
}

export default connect(Post)