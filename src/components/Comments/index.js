import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    input: '',
    textArea: '',
    commentText: [],
  }

  getInput = event => {
    this.setState({
      input: event.target.value,
    })
  }

  getTextarea = event => {
    this.setState({
      textArea: event.target.value,
    })
  }

  clickAddComment = event => {
    event.preventDefault()
    const {input, textArea} = this.state
    const newComment = {
      id: uuidv4(),
      input,
      textArea,
      likeButton: false,
    }
    this.setState(prevState => ({
      commentText: [...prevState.commentText, newComment],
      input: '',
      textArea: '',
    }))
  }

  deleteList = id => {
    const {commentText} = this.state
    const afterDeleteList = commentText.filter(eachItem => {
      if (eachItem.id !== id) {
        return eachItem
      }
    })
    this.setState({
      commentText: afterDeleteList,
    })
  }

  byClickLike = id => {
    this.setState(prevState => ({
      commentText: prevState.commentText.map(eachItem => {
        if (id === eachItem.id) {
          return {
            ...eachItem,
            likeButton: !eachItem.likeButton,
          }
        }
      }),
    }))
  }

  render() {
    const {commentText, input, textArea} = this.state

    return (
      <div className="main">
        <div className="backGround">
          <form className="first_backGround" onSubmit={this.clickAddComment}>
            <h1>Comments</h1>
            <p>Say something about 4.0 technologies</p>
            <input
              placeholder="Your Name"
              className="inputElement"
              onChange={this.getInput}
              value={input}
            />
            <textarea
              placeholder="Your Comment"
              className="textareaElement"
              cols="35"
              rows="10"
              onChange={this.getTextarea}
              value={textArea}
            ></textarea>
            <button className="button">Add Comment</button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment_image"
            />
          </div>
        </div>
        <hr className="hrLine" />
        <div className="secondPart">
          <div>
            <p>{commentText.length} Comments</p>
          </div>
          <ul>
            {commentText.map(eachItem => (
              <CommentItem
                eachItem={eachItem}
                deleteList={this.deleteList}
                byClickLike={this.byClickLike}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
