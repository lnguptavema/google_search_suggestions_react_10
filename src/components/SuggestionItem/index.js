import './index.css'

const SuggestionItems = props => {
  const {eachListItem, key, funct} = props
  const {id, suggestion} = eachListItem

  const onArrowClick = () => {
    funct(suggestion)
  }
  return (
    <li key={id}>
      <p>{suggestion}</p>
      <img
        onClick={onArrowClick}
        className="arrowIcon"
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}
export default SuggestionItems
