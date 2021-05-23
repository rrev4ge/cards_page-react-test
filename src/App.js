import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/index';

function App() {
  return (
    <BrowserRouter basename="/">
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
  );
}


export default App;

