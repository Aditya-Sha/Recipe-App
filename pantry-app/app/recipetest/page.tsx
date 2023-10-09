"use client";
import { FC, useState } from 'react';

const EdamamTest: FC = () => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("There was a problem fetching data:", error);
    }
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data from Edamam</button>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default EdamamTest;
