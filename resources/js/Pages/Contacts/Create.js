import Layout from "@/Layouts/Layout"
import { Head, Link } from "@inertiajs/inertia-react"
import ContactForm from "@/Components/ContactForm"

const Create = () => {
  return (
    <>
      <Head title="Create Contact" />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 font-semibold text-xl text-gray-800">
          <div className="leading-tight flex items-center gap-3">
            <Link href={route("contacts")} className="text-sky-400">
              Contacts
            </Link>
            <span className="text-sky-400">/</span>
            <span>Create</span>
          </div>
        </div>
      </header>

      <ContactForm />
    </>
  )
}

Create.layout = (page) => <Layout children={page} />

export default Create
