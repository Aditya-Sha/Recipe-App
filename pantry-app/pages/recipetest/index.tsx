"use client";
import CustomCard from '@/components/CustomCard';
import SearchForm from '@/components/InputGroup';

import { FC, useState } from 'react';

const EdamamTest: FC = () => {
  const[searchInput, setSearchInput] = useState('');
  const [data, setData] = useState<any>(null);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`api/edamamRecipe?q=${searchInput}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const recipes = await response.json();
      setData(recipes.hits)
    } catch (error) {
      console.error("There was a problem getting the recipes", error)
    }
  }


  return (
    <div>
      <h1>Welcome To The Recipe Search</h1>
      <SearchForm value={searchInput} onChange={setSearchInput}/>
      <button onClick={fetchRecipes}>Fetch Data from Edamam</button>
       
      {data && Array.isArray(data) && data.map((recipe,index) => (
        <CustomCard
          index={index + 1}
          imgSrc={recipe.recipe.image}
          title={recipe.recipe.label}
          content={recipe.recipe.ingredientLines.join(", ")}
          buttonText="View Recipe"
          onButtonClick={() => window.open(recipe.recipe.url, "_blank")}
        />
      ))} 

    </div>
  );
}

export default EdamamTest;
