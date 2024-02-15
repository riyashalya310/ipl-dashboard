// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    details: {},
    loading: true,
  }

  componentDidMount() {
    this.getMatchDetail()
  }

  getMatchDetail = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    if (response.ok) {
      const data = await response.json()
      const filteredTeamBannerUrl = {
        teamBannerUrl: data.team_banner_url,
      }
      const filteredLatestMatchDetails = {
        latestMatchDetails: {
          umpires: data.latest_match_details.umpires,
          result: data.latest_match_details.result,
          manOfTheMatch: data.latest_match_details.man_of_the_match,
          id: data.latest_match_details.id,
          date: data.latest_match_details.date,
          venue: data.latest_match_details.venue,
          competingTeam: data.latest_match_details.competing_team,
          competingTeamLogo: data.latest_match_details.competing_team_logo,
          firstInnings: data.latest_match_details.first_innings,
          secondInnings: data.latest_match_details.second_innings,
          matchStatus: data.latest_match_details.match_status,
        },
      }
      const filteredRecentMatches = {
        recentMatches: data.recent_matches.map(matchItem => ({
          umpires: matchItem.umpires,
          result: matchItem.result,
          manOfTheMatch: matchItem.man_of_the_match,
          id: matchItem.id,
          date: matchItem.date,
          venue: matchItem.venue,
          competingTeam: matchItem.competing_team,
          competingTeamLogo: matchItem.competing_team_logo,
          firstInnings: matchItem.first_innings,
          secondInnings: matchItem.second_innings,
          matchStatus: matchItem.match_status,
        })),
      }
      const filteredData = {
        teamBannerUrl: filteredTeamBannerUrl.teamBannerUrl,
        latestMatchDetails: filteredLatestMatchDetails.latestMatchDetails,
        recentMatches: filteredRecentMatches.recentMatches,
      }
      console.log(filteredData)
      this.setState({details: filteredData, loading: false})
    }
  }

  render() {
    const {loading} = this.state
    const {details} = this.state
    const {latestMatchDetails, teamBannerUrl, recentMatches} = details
    return (
      <div>
        {loading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img src={teamBannerUrl} alt="team banner" />
            <h1>Latest Matches</h1>
            <LatestMatch details={latestMatchDetails} />
            <ul>
              {recentMatches.map(recentMatch => (
                <MatchCard details={recentMatch} key={recentMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
