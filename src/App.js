import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Page from './Components/Page'
import Search from './Components/Search'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state={
    books:[],
    
  }
  updateShelf= async (e,book)=>{ //Uses the update function from the BooksAPI to update the shelf property of a book then puts it on the proper shelf
    try{
      e.preventDefault();
      const newShelf = e.target.value;
      BooksAPI.update(book,newShelf).then(()=>{
        BooksAPI.getAll().then((data) => {
          this.setState(()=>({books:data}));
          })
      });
    }catch(error){
      console.log('Error:',error)
    }
    
    }  
  
  

  async componentDidMount(){ // Updates the state with all the available books and categorizes according to their future shelves
    const allBooks =  await BooksAPI.getAll();
    this.setState(()=>({
      books:allBooks      
    }))  
  }
  
  
  render() {  
    return (
      <div className="app">
        <Route exact path='/' render={()=>
          (<Page
            books={this.state.books}
            updateShelf={this.updateShelf}                      
          />)}/>

        <Route path='/search' render={()=>
          (<Search
            books={this.state.books}
            updateShelf={this.updateShelf}
          />)}/>
    
      </div>
    )
  }
}

export default BooksApp
