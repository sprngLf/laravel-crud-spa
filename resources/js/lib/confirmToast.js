import toast from "react-hot-toast"
import DOMPurify from 'dompurify'

const confirmToast = (confirmMessage, confirmButtonText, confirmButtonFunc) => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-4 ring-rose-500 ring-opacity-50 py-6 px-4 shadow-3xl`}
      >
        <p className="w-full" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(confirmMessage) }} />

        <div className="flex items-center justify-end gap-4 mt-5">
          <button className="btn btn-danger" onClick={() => {
            toast.remove(t.id)
            confirmButtonFunc()
          }}>{confirmButtonText}</button>
          <button
            className="btn btn-neutral"
            onClick={() => toast.remove(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ),
    {
      duration: Infinity
    }
  )
}

export default confirmToast
