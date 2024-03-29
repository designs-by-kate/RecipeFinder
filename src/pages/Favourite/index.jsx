import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.css';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    const removeFromFavorites = (index) => {
        const updatedFavorites = [...favorites];
        updatedFavorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
    };

    return (
        <div className="favourite">
            <h2>Favorites</h2>
            <div className="row mt-4">
                {favorites.map((favorite, index) => (
                    <div key={favorite.recipe.uri} className="col-md-3 mb-4">
                        <Card className="customCard">
                            <Card.Img variant="top" src={favorite.recipe.image} alt={favorite.recipe.label} />
                            <Card.Body className="customCB">
                                <Card.Title>{favorite.recipe.label}</Card.Title>
                                <Button className="customBtn" href={favorite.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</Button>
                                <Button className="customBtnDel" onClick={() => removeFromFavorites(index)}>Remove from Favorites</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
