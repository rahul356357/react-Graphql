import React from 'react'
import gql from 'graphql-tag'
import {graphql } from 'react-apollo'

class LyricCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { content: '' }
    }
   
     onSubmit(e){
         e.preventDefault()
          this.props.mutate({
              variables:{
               content:this.state.content,
               songId:this.props.songId
              }
          })
               this.setState({content:''});
          
     }

    render() {
        return (
        <form onSubmit={this.onSubmit.bind(this)}>
            <label> Add a Lyric</label>
            <input onChange={ev => this.setState({ content: ev.target.value })} ></input>
        </form>
        )
    }
}

const mutation = gql`
mutation AddLyricToSong($songId:ID,$content:String){
    addLyricToSong(songId:$songId, content:$content){
      id
      lyrics{
        id
        content
        likes
      }
    }
  }
`

export default graphql(mutation)(LyricCreate)