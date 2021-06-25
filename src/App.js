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
import Login from './Components/Admin/Login/Login';
import PrivateRoute from './Components/Admin/PrivateRoute/PrivateRoute';


export const UserContext1 = createContext();
export const SignInContext = createContext();


const App = () => {
  const [loggedInUser, setLoggedInUser] =useState({
    isSignedIn: true,
    email: '',
    password: '',
    error :''
  })
   const   [blog, setBlog] = useState();

  return (
    <UserContext1.Provider value={[blog, setBlog]}>
      <SignInContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
        <PrivateRoute path="/uploadblog">
          <BlogUpload></BlogUpload>
        </PrivateRoute>
        <PrivateRoute path="/deleteblog">
          <ManageBlog></ManageBlog>
        </PrivateRoute>
        <Route path="/login"> 
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </SignInContext.Provider>
    </UserContext1.Provider>
  );
};

export default App;