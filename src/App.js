//import logo from './logo.svg';
//import './App.css';
import Home from './components/Home';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home/>   {/* we have to forward he children i.e as props to dataprovider.jsx*/}
    </DataProvider>
  );
}

export default App;
