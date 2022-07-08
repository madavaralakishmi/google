import './index.css'
import {Component} from 'react'
import suggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  render() {
    const {suggestionsList} = this.props

    return (
      <div className="bg-white">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="img1"
        />
        <div className="shadow">
          <div className="mergerow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="img2"
            />
            <input type="search" placeholder="Search Google" />
          </div>
          <suggestionItem suggestionsList={suggestionsList[0]} />
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
