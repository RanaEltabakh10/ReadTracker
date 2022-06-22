import React from 'react'
import Book from './Book'


const Shelf = ({section, books, category, changeShelf}) => {
    const booksCategory = books.filter((book)=> book.shelf === category)

    
console.log(books)

    return (
        <div className="book-shelf">
              <h2 className="shelf-title">{section}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                 {/* Book */}
                 {booksCategory.map((book)=>(

                 <Book key={book.id}  book={book} changeShelf={changeShelf}/>

                 ))}
                </ol>
              </div>
            </div>  
    )
}

export default Shelf;