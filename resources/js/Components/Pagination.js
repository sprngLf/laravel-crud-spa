import { Link } from "@inertiajs/inertia-react"
import DOMPurify from "dompurify"

const Pagination = ({ last_page, links, searchQuery }) => {
  if (last_page < 2) return null

  return (
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      className="flex items-center justify-between"
    >
      <div className="clear-both">
        <div>
          <span className="relative z-0 shadow-sm rounded-md">
            {links.map((link, i) => {
              if (link.url === null) {
                return (
                  <span aria-disabled="true" key={i}>
                    <span className="rounded-md block float-left items-center px-5 py-3 ml-1 mt-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 cursor-default leading-5" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(link.label)}} />
                  </span>
                )
              }

              if (link.active === true) {
                return (
                  <span aria-current="page" key={i}>
                    <span className="rounded-md block float-left items-center px-5 py-3 ml-1 mt-1 text-sm font-medium text-gray-50 bg-gray-400 border border-gray-300 cursor-default leading-5" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(link.label)}} />
                  </span>
                )
              }

              return (
                <Link
                  key={i}
                  href={`${link.url}${searchQuery !== '' ? `&search=${searchQuery}` : ''}`}
                  className="rounded-md block float-left items-center px-5 py-3 ml-1 mt-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  aria-label={`Go to page ${link.label}`}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(link.label)
                  }}
                />
              )
            })}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Pagination
