// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    matchList: [],
    loading: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const options = {
      method: 'GET',
    }
    const response = await fetch('https://apis.ccbp.in/ipl', options)
    if (response.ok) {
      const data = await response.json()
      const filteredData = data.teams.map(team => ({
        name: team.name,
        id: team.id,
        teamImageUrl: team.team_image_url,
      }))
      this.setState({loading: false, matchList: filteredData})
    } else {
      console.log('Error')
    }
  }

  render() {
    const {matchList, loading} = this.state
    return (
      <div>
        <h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          IPL DASHBOARD
        </h1>
        {loading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {matchList.map(match => (
              <TeamCard details={match} key={match.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
