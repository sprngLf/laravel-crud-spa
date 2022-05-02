import { toast } from "react-toastify";

const toastPromise = (
  promise,
  loadingMessage,
  successMessage,
  errorMessage
) => {

  toast.dismiss()

  toast.promise(promise, {
      pending: loadingMessage,
      success: successMessage,
      error: errorMessage
  },
  {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    // progress: undefined,
  }
  );

}

export default toastPromise