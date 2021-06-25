import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext } from 'react';
import Blog from './Screens/BlogExtended/Blog';
import FirstPage from './Screens/FirstPage/FirstPage';
import BlogUpload from './Screens/BlogUpload/BlogUpload';
import ManageBlog from './Components/Admin/ManageBlog/ManageBlog';

export const UserContext1 = createContext();


const App = () => {
  const   [blog, setBlog] = useState();

  return (
    <UserContext1.Provider value={[blog, setBlog]}>
 
    <Router>
      <Switch>
      <Route exact path="/"> 
          <FirstPage></FirstPage>
        </Route>
        <Route path="/home">
          <FirstPage></FirstPage>
        </Route>
        <Route path="/blog/:id">
          <Blog></Blog>
        </Route>
        <Route path="/uploadblog">
          <BlogUpload></BlogUpload>
        </Route>
        <Route path="/deleteblog">
          <ManageBlog></ManageBlog>
        </Route>
      </Switch>
    </Router>

    </UserContext1.Provider>
  );
};

export default App;