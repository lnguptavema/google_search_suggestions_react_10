import {Component} from 'react'

import './index.css'

import SuggestionItems from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: '', searchInputNewValue: ''}

  onType = event => {
    const {suggestionsList} = this.props
    this.setState({searchInput: event.target.value})
  }

  onMoveItem = suggestion => {
    this.setState(() => {
      return {
        searchInput: suggestion,
      }
    })
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    const newList = suggestionsList.filter(eachItemOfList =>
      eachItemOfList.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="mainContainer">
        <img
          className="googleIcon"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />

        <div className="searchContainer">
          <div className="contan">
            <img
              className="searchIcon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              className="linput"
              type="search"
              value={searchInput}
              placeholder="Search Google"
              onChange={this.onType}
            />{' '}
          </div>{' '}
          <ul>
            {newList.map(eachItem => (
              <SuggestionItems
                funct={this.onMoveItem}
                key={eachItem.id}
                eachListItem={eachItem}
              />
            ))}
          </ul>{' '}
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
