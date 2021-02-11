import React, { useState } from "react"
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import Login from "./Login"
import { useStateValue } from "./StateProvider"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  // const [user, setuser] = useState(null)
  const [{user}, dispatch] = useStateValue()

  return (
    <div className="app">
      {/* BEM naming convention */}
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
            <Header />
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />

              {/* React-Router -> Chat screen */}
              <Switch>
                <Route path="/room/:roomId">
                  {/* <h1>CHAT SCREEN</h1> */}
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch> 
            </div>
          </>
        )}
      </Router>      
    </div>
  );
}

export default App;
