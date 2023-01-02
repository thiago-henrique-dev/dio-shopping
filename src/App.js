import { BrowserRouter as Router } from 'react-router-dom'
import MainRoutes from './routes';
import Header from './components/Header'

const App = () => {

  return(
   <Router>
    <Header/>
      <MainRoutes/> 
   </Router>
  )
}

export default App;
