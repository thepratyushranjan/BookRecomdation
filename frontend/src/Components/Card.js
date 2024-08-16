import React, { useState } from 'react'; // Corrected import for React and useState
import Modal from './Modal';

const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setBookItem] = useState(null); // Initialize with null

    return (
        <>
            {book && book.length > 0 ? (
                book.map((item) => {
                    const thumbnail = item.volumeInfo?.imageLinks?.smallThumbnail;
                    const amount = item.saleInfo?.listPrice?.amount;

                    if (thumbnail && amount) {
                        return (
                            <div key={item.id} className="card" onClick={() => { setShow(true); setBookItem(item); }}>
                                <img src={thumbnail} alt={item.volumeInfo.title} />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                        );
                    }
                    return null; // Return null if condition is not met
                })
            ) : (
                <p>No books available</p>
            )}
            {show && <Modal show={show} item={bookItem} onClose={() => setShow(false)} />}
        </>
    );
};

export default Card;
