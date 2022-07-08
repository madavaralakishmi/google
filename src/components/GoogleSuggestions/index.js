import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  inputText = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  onarrow = value => {
    this.state({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const result = suggestionsList.filter(each =>
      each.suggestion.toLower().includes(searchInput.toLower()),
    )

    return (
      <div className="bg-white">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="img"
        />
        <div className="shadow">
          <div className="mergerow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="img2"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.inputText}
              onarrow={this.onarrow}
            />
          </div>
          <ul>
            {result.map(eachItem => (
              <SuggestionItem suggestionsList={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
