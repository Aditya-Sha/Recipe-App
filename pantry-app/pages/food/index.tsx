"use client";
import CustomCard from '@/components/CustomCard';
import FoodCard from '@/components/FoodCard';
import SearchForm from '@/components/InputGroup';
import Layout from '@/components/Layout'
import { parse } from 'path';
import { supabase } from '@/supabase'

import { FC, useState } from 'react';

interface FoodData{
  text: string;
  hints: any[];
}

const Food: FC = () => {
  const[searchInput, setSearchInput] = useState('');
  const [ingredientData, setIngredientData] = useState<FoodData | null>(null);
  const [recipeData, setRecipeData] = useState<any[] | null>(null);
  const [testBasket,setTestBasket] = useState<string[]>([]);

  const addIngredient = (ingredient:string) => {
    if(!testBasket.includes(ingredient)){
      setTestBasket(prevIngredients => [...prevIngredients, ingredient]);
    } 
  };


  const fetchIngredient = async () => {
    try {
      let items;
      if(Array.isArray(searchInput)){
        items = searchInput.join(',');
      }
      else{
        items = searchInput;
      }
      const response = await fetch(`api/edamamFood?q=${items}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(data)
      setIngredientData(data);
    } catch (error) {
      console.error("There was a problem fetching data:", error);
    }
  }

  const fetchRecipeFromIngredient = async(ingredient:string) => {
    const ingredients = testBasket.join(',')
    try {
      const response = await fetch(`api/edamamRecipe?q=${ingredients}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const recipes = await response.json();
      setRecipeData(recipes.hits)
    } catch (error) {
      console.error("There was a problem getting the recipes", error)
    }
  }


  return (
    <Layout>
      <div>
      <h1>Welcome To The Ingredient Search</h1>
      <SearchForm value={searchInput} onChange={setSearchInput}/>
      <button onClick={fetchIngredient}>Fetch Data from Edamam</button>
      <button onClick={() =>fetchRecipeFromIngredient('chicken')}>Get Recipe</button>
      <div className="row">
      {ingredientData && ingredientData.hints.filter(parsed => parsed.food.categoryLabel === 'food').map((parsed,index) =>(
        <div className="col-md-3">
        <FoodCard
        index ={index+1}
        title={parsed.food.label}
        content={Object.entries(parsed.food.nutrients).map(([key, value]) => `${key}: ${value}`).join('\n')}
        buttonText="Add to Pantry"
        //onButtonClick={() => fetchRecipeFromIngredient(parsed.food.label)}
        onButtonClick={() => addIngredient(parsed.food.label)}
      />
      </div>
      ))}
</div>
      <div className="row">
      {/* If data contains recipes, loop and display CustomCards for recipes */}
      {recipeData && Array.isArray(recipeData) && recipeData.map((recipe,index) => (
        <div className="col-md-3">
        <CustomCard
          index={index + 1}
          imgSrc={recipe.recipe.image}
          title={recipe.recipe.label}
          content={recipe.recipe.ingredientLines.join(", ")}
          buttonText="View Recipe"
          onButtonClick={() => window.open(recipe.recipe.url, "_blank")}
        />
        </div>
      ))}
      </div>

    </div>

    </Layout>
    
  );
}

export default Food;
