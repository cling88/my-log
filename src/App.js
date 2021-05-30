
import { useEffect } from 'react'


// router
import {
  Route,
  Switch
} from 'react-router-dom'
// pages
import Main from './pages/Main'
import About from './pages/About'
import History from './pages/History'
import NotFound from './pages/NotFound'

// style
import './assets/style/style.css'

function App() {

  return (
    <div className="warp">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/history" component={History} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}


/*
what my site using 

= react-router-dom 
= @emotion/react
= react-scroll-horizontal
= tweenmax (gsap)
= fontAwsome 
= redux / redux-actions
*/

export default App;
