import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then(res => setRecipe(res.data))
      .catch(console.error);
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-detail">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h2>{recipe.name}</h2>
      <p>Cuisine: {recipe.cuisine}</p>
      <h4>Instructions:</h4>
      <ul>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
