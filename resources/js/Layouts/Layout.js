import { createContext } from "react"
import Nav from "./Nav"
import SideNav from "./SideNav"
import { usePage } from "@inertiajs/inertia-react"
import { Toaster } from "react-hot-toast"
export const LayoutContext = createContext()

const Layout = ({ children }) => {
  const { auth } = usePage().props

  const contextValue = {
    auth: auth
  }

  return (
    <LayoutContext.Provider value={contextValue}>
      <Toaster position="top-center" />
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
