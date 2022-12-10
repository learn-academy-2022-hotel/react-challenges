import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Favorites from './Components/Favorites'
import Profiles from './Components/Profiles';
import Footer from './Components/Footer';
function App() {
    return (
    <>
      <Header />
      <Profiles />
      <Favorites />
      <Footer />
    </>
    )
}

export default App;
