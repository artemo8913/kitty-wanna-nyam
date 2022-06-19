import React from 'react';
import './App.css';

import FoodCard from './Components/FoodCard';
import data from './data'

function App() {
  let [foodData, setFoodData] = React.useState(data);
  function changeFoodChoosedState(id: number){
    setFoodData(previosState => {
      return previosState.map(food => {
        if(food.id === id && food.available) return {...food, choosed: !food.choosed};
        else return {...food}
      });
    });
  }
  const foodCards = foodData.map(food => <FoodCard {...food} key={food.id} changeFoodChoosedState={()=>changeFoodChoosedState(food.id)} />)

  return (
    <div className="App">
      <h1>Ты сегодня покормил кота?</h1>
      <div className='food-cards__container'>
        {foodCards}
      </div>
    </div>
  );
}

export default App;
