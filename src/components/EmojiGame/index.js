/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    totalScore: 0,
    clickEmojiList: [],
    isWonOrFail: false,
    isGameInProgess: true,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getScoreEndGame = newScore => {
    const {totalScore} = this.state
    let newTopScore
    if (newScore > totalScore) {
      newTopScore = newScore
    }
    this.setState({
      totalScore: newTopScore,
      isGameInProgess: false,
    })
  }

  restButton = () => {
    this.setState({isGameInProgess: true, clickEmojiList: []})
  }

  emojiClick = id => {
    const {emojisList} = this.props
    const {clickEmojiList} = this.state

    if (clickEmojiList.includes(id)) {
      this.getScoreEndGame(clickEmojiList.length)
    } else {
      if (emojisList.length - 1 === clickEmojiList.length) {
        this.getScoreEndGame(emojisList.length)
      }
      this.setState(prevState => ({
        clickEmojiList: [...prevState.clickEmojiList, id],
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const newList = this.shuffledEmojisList()
    const {totalScore, clickEmojiList, isGameInProgess} = this.state
    console.log(clickEmojiList.length)
    return (
      <div className="bg">
        <div className="nav">
          <NavBar
            score={clickEmojiList.length}
            totalScore={totalScore}
            isGameInProgess={isGameInProgess}
          />
        </div>
        <div className="emoji-part">
          {isGameInProgess ? (
            <ul>
              {newList.map(each => (
                <EmojiCard
                  emojiList={each}
                  emojiClick={this.emojiClick}
                  key={each.id}
                />
              ))}
            </ul>
          ) : (
            <WinOrLossCard
              score={clickEmojiList.length}
              mainScore={emojisList.length}
              isWon={clickEmojiList.length === emojisList.length}
              restButton={this.restButton}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
