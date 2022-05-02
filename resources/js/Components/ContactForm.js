import Input from "@/components/Input"
import Button from "@/components/Button"
import InputErrorHelper from "@/components/InputErrorHelper"
import ErrorHelper from "@/components/ErrorHelper"
import { useContext, useState } from "react"
import { useForm } from "@inertiajs/inertia-react"
import toastPromise from "@/lib/toastPromise"

import { LayoutContext } from "@/Layouts/Layout"

const InputGroupWithErrorHelper = ({
  error,
  name,
  value,
  handleChange,
  first = false
}) => {
  let label = name.replace(/\_/g, " ")
  label = label[0].toUpperCase() + label.substring(1)

  return (
    <div className={`flex flex-col ${!first ? "mt-6 lg:mt-0" : ""}`}>
      <label className="mb-2" htmlFor={name}>
        {label}:
      </label>
      <Input
        className={`${error && "border-rose-500"}`}
        type="text"
        name={name}
        id={name}
        value={value !== null ? value : ""}
        onChange={handleChange}
      />
      {error && <InputErrorHelper error={error} />}
    </div>
  )
}

const ContactForm = ({
  name = "",
  email = "",
  phone = "",
  address = "",
  city = "",
  province_or_state = "",
  country = "",
  postal_code = "",
  buttonType = "btn-primary",
  submitButtonText = "Create contact",
  deleteButton = null,
  loadingMessage = "Adding contact...",
  successMessage = "Contact successfully added!",
  errorMessage = "Some errors occurred",
  postRoute = route("contacts")
}) => {
  const { data, setData, post, processing, errors } = useForm({
    name: name,
    email: email,
    phone: phone,
    address: address,
    city: city,
    province_or_state: province_or_state,
    country: country,
    postal_code: postal_code
  })

  const [errorState, setErrorState] = useState(false)

  const { toastPromise } = useContext(LayoutContext)

  const handleChange = (event) => {
    setData(event.target.name, event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrorState(false)

    const myPromise = new Promise((resolve, reject) => {
      post(postRoute, {
        onError: (errors) => {
          setErrorState(errors ? true : false)

          reject(0)
        },
        onSuccess: () => resolve(1)
      })
    })

    toastPromise(myPromise, loadingMessage, successMessage, errorMessage)
  }

  return (
    <div className="p-4 md:py-12 md:px-10">
      {errorState && (
        <div className="lg:w-[48rem] mb-5">
          <ErrorHelper
            text={`There are ${Object.keys(errors).length} form error${
              Object.keys(errors).length > 1 ? "s" : ""
            }.`}
            close={() => setErrorState(false)}
          />
        </div>
      )}

      <form
        method="post"
        action={route("contacts")}
        className="lg:w-[48rem] p-10 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8">
          <InputGroupWithErrorHelper
            error={errors.name}
            name="name"
            value={data.name}
            handleChange={handleChange}
            first={true}
          />

          <InputGroupWithErrorHelper
            error={errors.email}
            name="email"
            value={data.email}
            handleChange={handleChange}
          />

          <InputGroupWithErrorHelper
            error={errors.phone}
            name="phone"
            value={data.phone}
            handleChange={handleChange}
          />

          <InputGroupWithErrorHelper
            error={errors.address}
            name="address"
            value={data.address}
            handleChange={handleChange}
          />

          <InputGroupWithErrorHelper
            error={errors.city}
            name="city"
            value={data.city}
            handleChange={handleChange}
          />

          <InputGroupWithErrorHelper
            error={errors.province_or_state}
            name="province_or_state"
            value={data.province_or_state}
            handleChange={handleChange}
          />

          <InputGroupWithErrorHelper
            error={errors.country}
            name="country"
            value={data.country}
            handleChange={handleChange}
          />

          <InputGroupWithErrorHelper
            error={errors.postal_code}
            name="postal_code"
            value={data.postal_code}
            handleChange={handleChange}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-10">
          <div>{deleteButton && deleteButton}</div>
          <div className="text-bold sm:flex sm:justify-end sm:flex-1">
            <Button
              buttonType={buttonType}
              type="submit"
              text={submitButtonText}
              className={`w-full sm:w-fit mt-4 sm:mt-0 ${processing && "opacity-30"}`}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
