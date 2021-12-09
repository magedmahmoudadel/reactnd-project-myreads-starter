import React,{Component} from 'react';


class Book extends Component{

    render(){
        const image=this.props.imageLinks?this.props.imageLinks.thumbnail:'No Image';
        return(
            <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={this.props.shelf} onChange={e=>{this.props.updateShelf(e,this.props,this.props.shelf)}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.title}</div>
                          <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }
}
export default Book;