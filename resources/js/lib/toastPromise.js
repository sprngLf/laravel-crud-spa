import toast from "react-hot-toast"

const toastPromise = (
  promise,
  loadingMessage,
  successMessage,
  errorMessage
) => {
  toast.promise(
    promise,
    {
      loading: loadingMessage,
      success: successMessage,
      error: errorMessage
    },
    {
      success: {
        duration: 2000
      },
      error: {
        duration: 2000
      }
    }
  )
}

export default toastPromise
