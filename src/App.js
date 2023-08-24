import data from './subjects.json';
import Subjects from './Subjects';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './Nav.js';
import Home from './Home.js';
import Footer from './Footer.js';
import './css.css';

function App() {
    return(<>
      <Router>
        <Nav data={data}/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          {data.map(subjects=>(<Route key={subjects.Subject} path={`${subjects.Subject}`} element={<Subjects subjects={subjects}/>}></Route>))}
        </Routes>
      </Router>
      <Footer />
    </>)
}

export default App;
