import {Switch, Route} from "react-router-dom";
import AppBar from './components/AppBar/AppBar';
import SkipEffectOnFirstRender from "./components/SkipEffectOnFirstRender";
import Counter from './components/Counter/Counter';
import PokemonView from './views/PokemonView';
import Friends from './components/Friends'

const containerStyles = {

}

function App() {
  return (
    <div style={containerStyles}>
       <AppBar/>

       <Switch>
        <Route path="/skip-first-render">
          <SkipEffectOnFirstRender />
        </Route>
        <Route path="/pokemon">
          <PokemonView/>
        </Route>
        <Route path='/counter'>
          <Counter />
        </Route>
        <Route path="/notes">
          <Friends/>
        </Route>
       </Switch>
    </div>
  );
}

export default App;
