import { usePage, Head, Link } from "@inertiajs/inertia-react"
import Layout from "@/Layouts/Layout"
import ContactForm from "@/Components/ContactForm"
import Button from "@/Components/Button"
import { useForm } from "@inertiajs/inertia-react"

import confirmToast from "@/lib/confirmToast"
import toastPromise from "@/lib/toastPromise"

const Edit = () => {
  const { contact } = usePage().props

  console.log("contact", contact)

  const { delete: destroy } = useForm({ delete: "1" })

  const handleDelete = () => {

    confirmToast(
      `<p class="font-bold text-xl">Delete contact:</p>
      <p><span class="font-semibold">Name:</span> ${contact.name}</p>
      <p><span class="font-semibold">Email:</span> ${contact?.email ? contact.email : "none"}</p>
      <p><span class="font-semibold">Phone:</span> ${contact?.phone ? contact.phone : "none"}</p>
      <p><span class="font-semibold">Address:</span> ${contact?.address ? contact.address : "none"}</p>
      `,
      `Delete contact`,
      () => {
        const myPromise = new Promise((resolve, reject) => {
          destroy(route("contacts.delete", contact), {
            onError: _ => reject(0),
            onSuccess: _ => resolve(1),
            onFinish: _ => resolve(1)
          })
        })
        toastPromise(
          myPromise,
          `Deleting contact ${contact.name}...`,
          `Contact ${contact.name} deleted successfully!`,
          `Something went wrong. Please try again`
        )
      }
    )

  }

  return (
    <>
      <Head title={`Edit Contact ${contact.name}`} />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 font-semibold text-xl text-gray-800 flex justify-between">
          <div className="leading-tight flex items-center gap-3">
            <Link href={route("contacts")} className="text-sky-400">
              Contacts
            </Link>
            <span className="text-sky-400">/</span>
            <span>Edit</span>
          </div>
        </div>
      </header>

      <ContactForm
        name={contact.name}
        email={contact.email}
        phone={contact.phone}
        address={contact.address}
        city={contact.city}
        province_or_state={contact.province_or_state}
        country={contact.country}
        postal_code={contact.postal_code}
        buttonType="btn-success"
        submitButtonText="Update contact"
        postRoute={route("contacts.update", contact)}
        loadingMessage="Updating contact..."
        successMessage="Contact updated successfully!"
        deleteButton={
          <Button
            buttonType="btn-danger"
            onClick={handleDelete}
            text="Delete Contact"
          />
        }
      />
    </>
  )
}

Edit.layout = (page) => <Layout children={page} />

export default Edit
