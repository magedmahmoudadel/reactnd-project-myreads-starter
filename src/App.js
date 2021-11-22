import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Page from './Components/Page'
import Search from './Components/Search'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state={
    books:[]
  }

  getBooks = async ()=>{
    const allBooks =  await BooksAPI.getAll();
    return this.setState(()=>({books:allBooks}))
    
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(<Page books={this.state.books} AllBooks={this.state.books}/>)}/>

        <Route path='/search' render={()=>(<Search/>)}/>
    
      </div>
    )
  }
}

export default BooksApp
