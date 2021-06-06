// IMPORT SWITCH AND ROUTE FROM REACT ROUTER DOM
// SET UP ROUTES FOR OUR COMPONENTS
import{Switch,Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Cart from './components/Cart/Cart'
import Dash from './components/Dash/Dash'
import Products from './components/Products/Products'

export default (
    <Switch>
        <Route exact path ='/' component={Dash}/>
        <Route path = '/auth' component={Auth}/>
        <Route path= '/cart' component= {Cart}/>
        <Route path = '/products' component= {Products}/>
        <Route path= '/logout' component={Auth}/>
    </Switch>
)