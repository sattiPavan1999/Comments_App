// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachItem, deleteList} = props
  const {id, input, textArea, likeButton} = eachItem

  const changeLikeButton = likeButton
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const clickDeleteButton = () => {
    deleteList(id)
  }

  const clickLikeButton = () => {
    byClickLike(id)
  }

  return (
    <li>
      <div className="commentRow">
        <div className="roundElementMain">
          <p className="roundElement">{input[0]}</p>
        </div>
        <div>
          <div className="nameAndDate">
            <p>{input}</p>
            <p className="inputElementsecond">{formatDistanceToNow(new Date())}</p>
          </div>
          <p>{textArea}</p>
        </div>
      </div>
      <div className="lastImages">
        <div className="like">
          <button onClick={clickLikeButton}>
            <img src={changeLikeButton} alt="Like" />
          </button>
          <p className="likeElement">Like</p>
        </div>
        <button
          className="delete"
          onClick={clickDeleteButton}
          data-testid="delete"
        >
          <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" 
               alt="delete"/>
        </button>
      </div>
      <hr />
      
    </li>
  )
}

export default CommentItem
