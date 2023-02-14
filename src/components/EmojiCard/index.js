// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiList, emojiClick} = props
  const {id, emojiName, emojiUrl} = emojiList

  const emojiClicked = () => {
    emojiClick(id)
  }

  return (
    <li>
      <button className="button" type="button" onClick={emojiClicked}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
