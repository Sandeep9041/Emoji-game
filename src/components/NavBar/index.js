// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, totalScore, isGameInProgess} = props
  return (
    <div className="navbar">
      <div className="logo-part">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="image-logo"
          />
          <h1 className="emoji-heading">Emoji Game</h1>
        </div>
        {isGameInProgess && (
          <div className="scores">
            <p className="nav-para">Score: {score}</p>
            <p className="nav-para">Top Score: {totalScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
