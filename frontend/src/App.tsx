import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Home/Homepage"
import AuthCallbackPage from "./pages/Auth-Callback/AuthCallbackPage"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "./layout/MainLayout"
import Chatpage from "./pages/Chatpage/Chatpage"
import Albumpage from "./pages/Albumpage/Albumpage"
import AdminPage from "./pages/admin/AdminPage"

import { Toaster } from "react-hot-toast"
import NotFoundPage from "./pages/404/NotFoundPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback
          signUpForceRedirectUrl={"/auth-callback"}
        />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} /> 
        <Route path="/admin" element={<AdminPage />} /> 
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat" element={<Chatpage />} />
          <Route path="/albums/:albumId" element={<Albumpage />} />
          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
