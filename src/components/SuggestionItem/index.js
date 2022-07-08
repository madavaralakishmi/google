import './index.css'

const SuggestionItem = props => {
  const {suggestionsList} = props
  const {suggestion} = suggestionsList
  return <p>{suggestion}</p>
}

export default SuggestionItem
