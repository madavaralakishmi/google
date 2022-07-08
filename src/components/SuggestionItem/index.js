import './index.css'

const SuggestionItem = props => {
  const {suggestionsList} = props
  const {suggestion, id} = suggestionsList

  const arrow = () => {
    onarrow(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="img1"
        onClick={arrow}
      />
    </li>
  )
}

export default SuggestionItem
