import React, { useState, useEffect } from "react";
import axios from "axios";
import './Recommendations.css'; 

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [sortField, setSortField] = useState('title'); 
    const [sortDirection, setSortDirection] = useState('asc'); 
    const [filters, setFilters] = useState({
        genre: '',
        rating: '',
        publication_date: ''
    });

    useEffect(() => {
        fetchRecommendations();
    }, [filters]);

    const fetchRecommendations = () => {
        const queryString = new URLSearchParams(filters).toString();
        axios.get(`http://localhost:8000/api/recommendations/?${queryString}`)
            .then(res => setRecommendations(res.data))
            .catch(err => console.log(err));
    };

    const handleSort = (field) => {
        const newDirection = (sortField === field && sortDirection === 'asc') ? 'desc' : 'asc';
        setSortField(field);
        setSortDirection(newDirection);
    };

    const handleFilter = (field, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [field]: value
        }));
    };

    const sortedRecommendations = [...recommendations].sort((a, b) => {
        const aValue = sortField === 'publication_date' ? new Date(a[sortField]) : a[sortField];
        const bValue = sortField === 'publication_date' ? new Date(b[sortField]) : b[sortField];

        if (sortDirection === 'asc') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });

    const renderSortIcon = (field) => {
        if (sortField === field) {
            return sortDirection ==='▼';
        }
        return '▲'; 
    };

    return (
        <div className="recommendations">
            <h2>Recommended Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th
                            onClick={() => handleSort('rating')}
                            className={`sortable ${sortField === 'rating' ? sortDirection : ''}`}
                        >
                            Rating {renderSortIcon('rating')}
                            <input
                                type="number"
                                placeholder="Filter by rating"
                                value={filters.rating}
                                onChange={(e) => handleFilter('rating', e.target.value)}
                            />
                        </th>
                        <th
                            onClick={() => handleSort('publication_date')}
                            className={`sortable ${sortField === 'publication_date' ? sortDirection : ''}`}
                        >
                            Publication Date {renderSortIcon('publication_date')}
                            <input
                                type="date"
                                value={filters.publication_date}
                                onChange={(e) => handleFilter('publication_date', e.target.value)}
                            />
                        </th>
                        <th
                            onClick={() => handleSort('genre')}
                            className={`sortable ${sortField === 'genre' ? sortDirection : ''}`}
                        >
                            Genre {renderSortIcon('genre')}
                            <input
                                type="text"
                                placeholder="Filter by genre"
                                value={filters.genre}
                                onChange={(e) => handleFilter('genre', e.target.value)}
                            />
                        </th>
                        <th>Likes Count</th>
                        <th>Comments</th>
                        <th>Cover Image</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedRecommendations.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.description}</td>
                            <td>{book.rating}</td>
                            <td>{new Date(book.publication_date).toLocaleDateString()}</td>
                            <td>{book.genre}</td>
                            <td>{book.likes_count}</td>
                            <td>
                                {book.comments.length > 0 ? (
                                    book.comments.map(comment => (
                                        <div key={comment.id}>{comment.text}</div>
                                    ))
                                ) : 'No comments'}
                            </td>
                            <td>
                                {book.cover_image && (
                                    <img src={book.cover_image} alt={book.title} />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Recommendations;
