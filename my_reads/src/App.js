import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import Book from './Book'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    searchBooks: []
  }

  /*只能在componentDidMount中发出Ajax请求*/
  componentDidMount(){
  	BooksAPI.getAll().then((books) => {
  		this.setState({books})
  	})
  }

  change(book, shelf){
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => this.setState({books: books}))
    })
  }

  search(query){
    BooksAPI.search(query).then((search_books) => Array.isArray(search_books)? 
      (
        search_books.map((searchBook) => (
          (this.state.books.find(book => book.id === searchBook.id))?
          (searchBook.shelf = this.state.books.find(book => book.id === searchBook.id).shelf)
          :(searchBook.shelf = "none")
        )),
        this.setState({searchBooks: search_books})
      ) 
      : (this.setState({searchBooks: []})
      ));
  }

  render() {
    return (
      <div className="app">
        {/*{JSON.stringify(this.state.books)}*/}
        <Route exact path="/search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  onChange={(event) => this.search(event.target.value)}
                />
              </div>
            </div>

            {/*当搜索到书后就会显示在该序列中*/} 
            <div className="search-books-results">
              <ol className="books-grid">
                {/*{JSON.stringify(this.state.searchBooks)}*/}
                {this.state.searchBooks.map((book) => (                 
                  <Book 
                    key={book.id}
                    book={book} 
                    change={this.change.bind(this)}
                  />
                ))}
              </ol>
            </div>
          </div>
        )}/>

        <Route exact path="/" render={() => (
          <div className="list-books">  
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <BookShelf 
                  title="currentlyReading"
                  books={this.state.books.filter((book) => book.shelf === 'currentlyReading')}
                  change={this.change.bind(this)}
                />
                <BookShelf
                  title="wantToRead"
                  books={this.state.books.filter((book) => book.shelf === 'wantToRead')}
                  change={this.change.bind(this)}
                />
                <BookShelf 
                  title="read"
                  books={this.state.books.filter((book) => book.shelf === 'read')}
                  change={this.change.bind(this)}
                />
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          </div>
        )}/>

      </div>
    )
  }
}

export default BooksApp

