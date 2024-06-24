import { useState } from 'react';

function Bookshelf() {
  const [books, setBooks] = useState([
		{ title: 'Fourth Wing', author: 'Rebecca Yarros' },
		{ title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  const [newBook, setNewBook] = useState({
		title: '',
		author: '',
  });

  function handleInputChange(e) {
		setNewBook({ ...newBook, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
		e.preventDefault();
		setBooks([...books, { title: newBook.title, author: newBook.author }]);
		setNewBook({ title: '', author: '' });
  }

  return (
		<div className='bookshelfDiv'>
			<div className='formDiv'>
				<h3>Add a Book</h3>
				<form
					onSubmit={handleSubmit}
					className='formDiv'
				>
					<label htmlFor='title'>Title: </label>
					<input
						type='text'
						name='title'
						id='title'
						value={newBook.title}
						onChange={handleInputChange}
					></input>
					<label htmlFor='author'>Author: </label>
					<input
						type='text'
						name='author'
						id='author'
						value={newBook.author}
						onChange={handleInputChange}
					></input>
					<button type='submit'>Add Book</button>
				</form>
			</div>
			<div className='bookCardsDiv'>
				{books.map((book, idx) => (
					<div
						key={idx}
						className='bookCard'
					>
						<p>{book.title}</p>
						<p>{book.author}</p>
					</div>
				))}
			</div>
		</div>
  );
}

export default Bookshelf;
