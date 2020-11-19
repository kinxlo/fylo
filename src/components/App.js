
import Header from './Header';
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Footer from './Footer';
import UpButton from './UpButton';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    /*
    App is returning three main components --
    the Header- which in turn contains two child component...
    the Main which contains two child component...
    and the footer.
    */
    <div>
     <Router>

        <Header />{/** component */}

        <Switch> {/**component */}
          {/* Navigates Between the homepage which is the main-page and the Navigation links to creact a SPA */}
          <Route exact path="/" component={Main} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>

      </Router>
      <Footer /> {/**component */}
      <UpButton />
    </div>

  )
}

export default App;
