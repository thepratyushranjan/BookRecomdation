import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const fetchBooks = () => {
        axios.get(`http://localhost:8000/api/search/?q=${search}`)
            .then(res => setData(res.data.items)) // Adjust this based on your API response structure
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
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
                <Card book={bookData} />
            </div>
        </>
    );
};

export default Main;
