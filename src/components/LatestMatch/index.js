// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = details
  return (
    <div>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{date}</p>
      <p>{venue}</p>
      <p>{result}</p>
      <p>First Innings</p>
      <p>{firstInnings}</p>
      <p>Second Innings</p>
      <p>{secondInnings}</p>
      <p>Man Of The Match</p>
      <p>{manOfTheMatch}</p>
      <p>Umpires</p>
      <p>{umpires}</p>
    </div>
  )
}
export default LatestMatch
