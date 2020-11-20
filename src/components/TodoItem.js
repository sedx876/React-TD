import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoItem extends Component {

  getStyle = () => {
    if(this.props.todo.completed){
      return {
        textDecoration: 'line-through',
        backgroundColor: 'teal'
      }
    }else{
      return {
        textDecoration: 'none',
        backgroundColor: '#f4f4f4'
      }
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <h4>{this.props.todo.title}</h4>
        <p>{this.props.todo.body}</p>
        <br/>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}



export default TodoItem