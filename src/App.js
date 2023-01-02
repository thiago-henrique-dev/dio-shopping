import { BrowserRouter as Router } from 'react-router-dom'
import MainRoutes from './routes';
const App = () => {

  return(
   <Router>
    <MainRoutes/>
   </Router>
  )
}

export default App;
