import './App.css';
import Categories from './Components/Categories';
import Food from './Components/Food';
import HeadlineCards from './Components/HeadlineCards';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Categories />
    </div>
  );
}

export default App;
