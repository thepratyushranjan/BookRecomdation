// src/Main.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import FromModal from "./FormModal";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const fetchBooks = () => {
        axios.get(`http://localhost:8000/api/search/?q=${search}`)
            .then(res => setData(res.data.items)) // Adjust based on your API response structure
            .catch(err => console.log(err));
    };

    const handleKeyDown = (evt) => {
        if (evt.key === "Enter") {
            fetchBooks();
        }
    };

    const handleClick = () => {
        fetchBooks();
    };

    const handleAddNewBook = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleNavigateToRecommendations = () => {
        navigate("/recommendations"); // Use navigate instead of history.push
    };

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Enter Your Book Name"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button onClick={handleClick}>
                            <i className="fas fa-search"></i>
                        </button>
                        <button onClick={handleAddNewBook} className="add-book-button">
                            Add New Book
                        </button>
                        <button onClick={handleNavigateToRecommendations} className="recommendations-button">
    Recommendations Book
</button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
                <Card book={bookData} />
            </div>

            <FromModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default Main;
