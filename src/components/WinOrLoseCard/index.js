// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {isWon, score, mainScore, restButton} = props
  console.log(isWon)
  const restIt = () => {
    restButton()
  }

  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const heading = isWon ? 'You Won' : 'You Lose'
  const para = isWon ? 'Best Score' : 'Score'

  return (
    <div className="score-card">
      <div className="image-contain">
        {' '}
        <img src={imgUrl} alt="win or lose" className="score-image" />
      </div>
      <div className="score-contain">
        <h1 className="score-heading">{heading}</h1>
        <p className="score-para">{para}</p>
        <p className="scores-won">
          {score}/{mainScore}
        </p>
        <button className="play-again-button" type="button" onClick={restIt}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLossCard
