import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

function App () {
     return <>
          
          <Router>
               <Link to='/' style = {{ marginRight : '20px', }}>Home</Link>
               <Link to='/about' style = {{ marginRight : '20px', }}>About</Link>
               <Switch>
                    <Route path = '/' component = {Home} exact></Route>
                    <Route path = '/about' component = {About} exact></Route>
               </Switch>
          </Router>

     </>
}

export default App;