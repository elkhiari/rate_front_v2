import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import Callback from '../pages/callback'
import { AuthContext } from '../contexts/authContext'
import Home from '../pages/dashboard/Home'
import NotV from '../pages/dashboard/NotV'
import Rate from '../pages/Rate'
import Nav from '../components/Nav'
import Error404 from '../pages/Error'
import Users from '../pages/dashboard/Users'

function RouteApp() {
  const {token,role,user} = useContext(AuthContext);
  return (
    <div>
    {/* hide nav from / path */}
    {token && role && user &&
        <>
        {
          window.location.pathname !== "/" && <Nav/>
        }
        </>
      }
          <Routes>
            <Route path="/" element={<Rate />} />
        {token && role &&
        <>
            <Route path="/dashboard" element={!token?<Navigate to="/login"/>:role === "admin"?<Home />:<NotV />}/>
            <Route path="/dashboard/users" element={!token?<Navigate to="/login"/>:role === "admin"?<Users />:<Navigate to={"/dashboard"} />}/>
        </>
          }

          <Route path="/callback" element={<Callback/>}/>
          <Route path="/login" element={token?<Navigate to="/dashboard"/>:<Login/>}/>
          <Route path="*" element={<Error404 />} />
          </Routes>
    </div>
  )
}

export default RouteApp