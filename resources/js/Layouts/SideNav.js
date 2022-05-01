import { useContext } from "react"
import { LayoutContext } from "./Layout"
import { Link } from "@inertiajs/inertia-react"
import { GoDashboard } from "react-icons/go"
import { IoMdContacts } from "react-icons/io"

const SideNavLink = ({ icon, href, text, active }) => (
  <Link href={href}>
    <div className="w-full py-4 flex items-center justify-start text-white hover:text-gray-200">
      <div className={`mr-3 ${active ? 'text-sky-400' : ''}`}>{icon && icon}</div>
      <p className={active ? 'text-sky-400' : ''}>{text}</p>
    </div>
  </Link>
)

const SideNav = () => {
  const { auth } = useContext(LayoutContext)

  if (!auth.user) return null

  return (
    <aside className="md:min-h-screen md:fixed md:z-50 md:w-56 bg-gray-900 text-white hidden md:flex md:flex-col">
      <div className="bg-slate-900 h-16 flex items-center md:justify-center">
        <p className="text-xl font-semibold">CRUD</p>
      </div>
      <nav className="py-14 px-6 bg-gray-700 w-full flex-1">
        <SideNavLink
          active={route().current("dashboard")}
          href={route("dashboard")}
          text="Dashboard"
          icon={<GoDashboard />}
        />
        <SideNavLink
          active={route().current("contacts")}
          href={route("contacts")}
          text="Contacts"
          icon={<IoMdContacts />}
        />
      </nav>
    </aside>
  )
}

export default SideNav
