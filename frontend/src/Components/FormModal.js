import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Modal.css'; 

const FromModal = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [rating, setRating] = useState("");
    const [publicationDate, setPublicationDate] = useState(null);
    const [genre, setGenre] = useState(""); 
    const [error, setError] = useState("");

    const formatPublicationDate = (date) => {
        if (!date) return "";
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2); 
        const day = ("0" + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDate = formatPublicationDate(publicationDate);
        if (!formattedDate) {
            setError("Publication Date is required.");
            return;
        }
        axios.post("http://localhost:8000/api/recommendations/", {
            title,
            author,
            description,
            cover_image: coverImage || "", // Ensure cover_image is an empty string if not provided
            rating,
            publication_date: formattedDate,
            genre // Include genre in the payload
        })
        .then(response => {
            console.log("Book added:", response.data);
            onClose(); // Close the modal after successful submission
        })
        .catch(error => {
            console.error("There was an error adding the book:", error);
        });
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                <h2>Add New Book</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Author:
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Cover Image URL:
                        <input
                            type="text"
                            value={coverImage}
                            onChange={(e) => setCoverImage(e.target.value)}
                        />
                    </label>
                    <label>
                        Rating:
                        <input
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            min="0"
                            max="10"
                            step="0.1"
                        />
                    </label>
                    <label>
                        Publication Date:
                        <DatePicker
                            selected={publicationDate}
                            onChange={(date) => setPublicationDate(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="YYYY-MM-DD"
                        />
                    </label>
                    <label>
                        Genre:
                        <input
                            type="text"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FromModal;
