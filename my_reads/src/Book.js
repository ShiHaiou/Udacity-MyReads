import React from 'react'

class Book extends React.Component {
    render(){
        let shelf;
        if(this.props.book.shelf){
            shelf = this.props.book.shelf;
        }else{
            shelf = "none";
        }

        let thumbnail;
        if(this.props.book.imageLinks){
            thumbnail = this.props.book.imageLinks.thumbnail;
        }else{
            thumbnail = "";
        }

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url("${thumbnail}")` }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select 
                                value={shelf}
                                onChange={(event) => this.props.change(this.props.book, event.target.value)}
                            >
                                <option value="none1" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    {this.props.book.authors.map((author) => (
                        <div className="book-authors" key={author}>{author}</div>
                    ))}
                </div>
            </li>
        )
    }
}

export default Book