import './App.css';
import React from 'react';
//import './components/japfood.css';
//import Booking from "./components/Booking";
//import JapFood from "./components/JapFood";
import DisplayMessage from './DisplayMessage';
import SumOfTwo from './SumOfTwo';
import ImageFrame from './ImageFrame';
import japanFood from './Images/food/japanese-food-3.jpg';
import NumberBox from './components/AlertBox';
import TickleBox from './components/TickleBox';
import Dice from './components/Dice';
function App() {
  return (
    <>
    <ImageFrame imageLink={japanFood}/>
    <DisplayMessage whatever_message="Hello, World!" />
    <SumOfTwo a={5} b={10} />
    <NumberBox initialValue ={0}/>
    <TickleBox />
    <Dice />
    </>
  );
}

export default App;
