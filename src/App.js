import 'normalize.css';
import './style/App.css';

import List from './List'
import { BrowserRouter, Route, Link } from "react-router-dom"
import AddMarque from './Addmarque';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/utils';
import editMarque from './Editmarques';

// call this function at the root of the application
ClassNameGenerator.configure((componentName) => `innofab-${componentName}`);


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={List} exact />
        <Route path="/add" component={AddMarque} exact />
        <Route path="/edit" component={editMarque} exact />

      </BrowserRouter>
    </div>
  );
}

export default App;
