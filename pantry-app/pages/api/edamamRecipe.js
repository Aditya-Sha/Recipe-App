export default async (req, res) => {
  const query = req.query.q || 'chicken,rice';
    const response = await fetch(`https://api.edamam.com/api/recipes/v2/?type=public&q=${query}&app_id=${process.env.EDAMAM_RECIPE_APP_ID}&app_key=${process.env.EDAMAM_RECIPE_APP_KEY}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Data fetch failed' });
    }
  
    const data = await response.json();
    res.status(200).json(data);
}

