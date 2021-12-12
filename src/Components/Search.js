import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

class Search extends Component{
  state = {
    query:'',
    searchResults:[]
  }

  bookQuery= (query)=>{
    this.setState(()=>({
      query:query
    }))
    this.searchBooks(query)
  }

  searchBooks= (query)=>{
    
      BooksAPI.search(query).then((data)=>{
        if(query===''){
          this.setState(()=>({
            searchResults:[]
          }))
        }else{
          data.error?
          this.setState(()=>({searchResults:[]}))
          : this.setState(()=>({searchResults:data}))
        }
      })         
     
    }
  


    render(){
        return(
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">                
                <input 
                  type="text" 
                  placeholder="Search by title" 
                  value={this.state.query} 
                  onChange={(e)=>{this.bookQuery(e.target.value)}}
                />
                </div>
              </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchResults.map((book)=>{
                  book.shelf='none';
                  this.props.books.map(b=>(
                    b.id===book.id?
                    book.shelf=b.shelf
                    :''
                  ))

                  return(<li key={book.id}>
                    <Book
                      {...book}
                      updateShelf={this.props.updateShelf}
                      key={book.id}
                    />
                  </li>
                )})}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search;
