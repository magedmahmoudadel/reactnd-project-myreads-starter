import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';




class Page extends Component{
   

  
    
    render(){
      const currentlyReading=  this.props.books.filter(b=>b.shelf==='currentlyReading');
      const wantToRead=  this.props.books.filter(b=>b.shelf==='wantToRead');
      const read=  this.props.books.filter(b=>b.shelf==='read');
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>          
                <BookShelf title='Currently Reading' books={currentlyReading} updateShelf={this.props.updateShelf}/>
                <BookShelf title='Want to Read' books={wantToRead} updateShelf={this.props.updateShelf}/>
                <BookShelf title='Read' books={read} updateShelf={this.props.updateShelf}/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )
    }
}

export default Page;