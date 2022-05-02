import { useState, useEffect } from "react"
import { Inertia } from "@inertiajs/inertia"
import { Head, Link, usePage } from "@inertiajs/inertia-react"
import Layout from "@/Layouts/Layout"
import Button from "@/components/Button"
import { FaAngleRight } from "react-icons/fa"
import Pagination from "@/Components/Pagination"
import Input from "@/Components/Input"

const index = () => {
  const { props: { contacts }, url } = usePage()

  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    //if url has search= set searchQuery to string after search=
    if (url.match(/^.*search\=/i, "") !== null) {
      setSearchQuery(url.replace(/^.*search\=/i, ""))
    }
  }, [])

  return (
    <>
      <Head title="Contact" />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 font-semibold text-xl text-gray-800">
          <div className="leading-tight">
            <span>Contacts</span>
          </div>
        </div>
      </header>
      <div className="py-6 px-4 md:py-12 md:px-10">
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:w-fit">
            <Input
              name="search"
              placeholder="Search name"
              className="w-full sm:w-64 lg:w-80 px-3"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                Inertia.get(
                  route("contacts"),
                  { search: e.target.value },
                  { preserveState: true }
                )
              }}
            />
          </div>
          <Link href={route("contacts.create")}>
            <Button text={"Create contact"} className="w-full mt-4 sm:mt-0 sm:w-fit" />
          </Link>
        </div>

        <div className="bg-white shadow-md mt-8 rounded-md text-left overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="table-cell py-5 px-6">Name</th>
                <th className="table-cell py-5 px-6">City</th>
                <th className="hidden md:table-cell py-5 px-6">Email</th>
                <th className="hidden lg:table-cell py-5 px-6">Phone</th>
                <th className="hidden lg:table-cell"></th>
              </tr>
            </thead>
            <tbody>
              {contacts?.data &&
                contacts.data.map((contact, i) => (
                  <tr
                    onClick={() => Inertia.get(route("contacts.edit", contact))}
                    key={i}
                    className="cursor-pointer hover:bg-gray-200 border-t border-t-gray-400"
                  >
                    <td className="table-cell py-4 px-6">{contact.name}</td>
                    <td className="table-cell py-4 px-6">{contact.city}</td>
                    <td className="hidden md:table-cell py-4 px-6">
                      {contact.email}
                    </td>
                    <td className="hidden lg:table-cell py-4 px-6">
                      {contact.phone}
                    </td>
                    <td className="hidden lg:table-cell py-4 px-6">
                      <FaAngleRight className="text-gray-400" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5">
          <Pagination
            current_page={contacts.current_page}
            last_page={contacts.last_page}
            path={contacts.path}
            links={contacts.links}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </>
  )
}

index.layout = (page) => <Layout children={page} />

export default index
