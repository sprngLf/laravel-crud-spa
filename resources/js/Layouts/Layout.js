import { createContext, useEffect } from "react"
import Nav from "./Nav"
import SideNav from "./SideNav"
import { usePage } from "@inertiajs/inertia-react"

import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import toastPromise from "@/lib/toastPromise"

export const LayoutContext = createContext()

const Layout = ({ children }) => {
  const { auth } = usePage().props

  const contextValue = {
    auth: auth,
    toastPromise
  }

  return (
    <LayoutContext.Provider value={contextValue}>
      <ToastContainer newestOnTop={true} transition={Flip} pauseOnHover={true} />
      <div className="md:flex">
        <SideNav />
        <div className="md:flex-1">
          <Nav />
          <main className="bg-gray-200 min-h-[calc(100vh-4.1rem)] md:h-[calc(100vh-4.1rem)] md:fixed md:top-[4.1rem] md:left-56 md:right-0 md:bottom-0 md:overflow-y-scroll">
            {children && children}
          </main>
        </div>
      </div>
    </LayoutContext.Provider>
  )
}

export default Layout
