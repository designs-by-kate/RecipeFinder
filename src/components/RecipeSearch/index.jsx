import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Form } from 'react-bootstrap';
import './style.css';

const RecipeSearch = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [from, setFrom] = useState(0);

    const ID = "1cb3d403";
    const key = "b17f717bcc5e98f7110593c28e858e60";

    const searchRecipes = async () => {
        try {
            const response = await axios.get(
                `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${key}&from=${from}&to=${from + 4}`
            );
            setRecipes([...recipes, ...response.data.hits]); // Place new recipes at the beginning
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    useEffect(() => {
        if (query) {
            searchRecipes();
        }
    }, [from]); // Call searchRecipes whenever query or from state changes

    const handleSearch = (e) => {
        e.preventDefault();
        setRecipes([]); // Clear existing recipes when performing a new search
        setFrom(0); // Reset from state when performing a new search
        searchRecipes();
    };

    const loadMore = () => {
        setFrom(recipes.length);
    };

    return (
        <div className="customSearch">
            <Form onSubmit={handleSearch}>
                <Form.Group className="customSearchForm" controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for recipes..."
                    />
                </Form.Group>
                <Button className="customBtn" type="submit">
                    Search
                </Button>
            </Form>
            <div className="row mt-4">
                {recipes.map((recipe) => (
                    <div key={recipe.recipe.uri} className="col-md-3 mb-4">
                        <Card className="customCard">
                            <Card.Img variant="top" src={recipe.recipe.image} alt={recipe.recipe.label} />
                            <Card.Body className="customCB">
                                <Card.Title>{recipe.recipe.label}</Card.Title>
                                <Button className="customBtn" href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</Button>
                                <FavoriteButton recipe={recipe} />
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            {recipes.length > 0 && (
                <div className="mt-4">
                    <Button className="customBtn" onClick={loadMore}>Load More</Button>
                </div>
            )}
        </div>
    );
};

const FavoriteButton = ({ recipe }) => {
    const handleFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(recipe);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    return (
        <Button className="customBtnFav" onClick={handleFavorite}>Add to Favorites</Button>
    );
};

export default RecipeSearch;
