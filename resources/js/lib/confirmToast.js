import { toast } from 'react-toastify'
import DOMPurify from 'dompurify'

const confirmToast = (confirmMessage, confirmButtonText, confirmButtonFunc) => {
  toast(
    (t) => (
      <div>
        <p className="w-full" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(confirmMessage) }} />

        <div className="flex items-center justify-end gap-4 mt-5">
          <button className="btn btn-danger" onClick={() => {
            toast.dismiss(t.id)
            confirmButtonFunc()
          }}>{confirmButtonText}</button>
          <button
            className="btn btn-neutral"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ),
    {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      draggable: false,
    }
  )

}

export default confirmToast
