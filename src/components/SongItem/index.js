import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {songDetails, onClickDelete} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onClickDeleteItem = () => {
    onClickDelete(id)
  }

  return (
    <li className="song-item">
      <div className="image-details-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="song-details-container">
          <p className="song-title">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button
          testid="delete"
          type="button"
          className="del-button"
          onClick={onClickDeleteItem}
        >
          <AiOutlineDelete size={16} />
        </button>
      </div>
    </li>
  )
}

export default SongItem
