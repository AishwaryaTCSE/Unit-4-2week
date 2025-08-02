import { useNavigate } from 'react-router-dom';
const RecipeCard = ({ recipe, isFavorite, onToggleFavorite }) => {
  const navigate = useNavigate();
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} onClick={() => navigate(`/recipe/${recipe.id}`)} 
      style={{width:'100%', maxHeight:'200px',objectFit:'cover', borderRadius:'8px'}} />
      <h3>{recipe.name}</h3>
      <p>{recipe.cuisine}</p>
      <button onClick={() => onToggleFavorite(recipe.id)}>
        {isFavorite ? '❤️' : 'no'}
      </button>
    </div>
  );
};

export default RecipeCard;
