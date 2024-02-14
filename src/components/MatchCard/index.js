// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = details
  return (
    <li>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
