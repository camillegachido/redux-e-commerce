import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './components/header';
import Initial from './pages';
import User from './pages/user';

function src() {
  return (
      <Router>
         <Header />
         <div className="container">
            <Switch>
               <Route exact path="/">
                  <Initial />
               </Route>
               <Route path="/user">
                  <User />
               </Route>
            </Switch>
         </div>
      </Router>
   )
}

export default src;