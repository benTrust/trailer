import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {searchText, loadMovie} from '../actions/actionTrailer'
import Autosuggest from 'react-autosuggest'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            valueSearch: ''
        }
    }


    onChange = (event, { newValue, method }) => {
        
        if(newValue === this.state.valueSearch || method != 'type'){
            return
        }

        this.setState({
            valueSearch: newValue
        },() => {
            this.searchText()
        })
    }

    render(){
        const { valueSearch } = this.state;

        const inputProps = {
            placeholder: 'Tapez votre film...',
            value : valueSearch,
            onChange: this.onChange
        }
        
        return( 
        <div>
            <div className = "row">
                <div className = "col-md-12 input-group">
                        <Autosuggest
                            suggestions={this.props.searchMovies}
                            onSuggestionsFetchRequested={(v) =>{}}
                            onSuggestionsClearRequested={() => {}}
                            getSuggestionValue={(searchMovie) => searchMovie.title}
                            renderSuggestion={this.renderSuggestion}
                            inputProps={inputProps}
                            onSuggestionSelected={(event, { suggestion }) => {this.setState({valueSearch: suggestion.title},() => {this.props.loadMovie(suggestion.id)})}}
                        />
                </div>
            </div>
        </div>
        )
    }

    searchText(){
        if(this.state.valueSearch){
            this.props.searchText(this.state.valueSearch)
        }
    }

    renderSuggestion(searchMovie){
        return (<div>
                    <div className = "media trailerItem">
                        <div  className = "media-left">
                            <img className = "media-object img-rounded" height="100px" width="100px" src={`${IMAGE_BASE_URL}${searchMovie.poster_path}`} />
                        </div>
                        <div  className = "media-body">
                            <h5 className = "title_list_item">{searchMovie.title}</h5>
                        </div>
                    </div>
                </div>
                )
    }
    
}

const mapStateToProps = (state) => {
    return {
        searchMovies : state.searchMovies
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({searchText, loadMovie}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)