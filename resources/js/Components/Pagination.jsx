import { Link } from '@inertiajs/react';
import React from 'react'

export const Pagination = ({links}) => {
  return (
    <nav aria-label="Page navigation example">
        <ul className="flex -space-x-px h-10 text-base">
            {links.map((link, i) => {
                return (
                    <li key={i}>
                        {link.url ? (
                            <Link
                                href={link.url}
                                className={`
                                    flex items-center justify-center
                                    min-w-[36px] h-9 px-3
                                    border text-sm font-medium
                                    ${link.active
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-neutral-secondary-medium text-body hover:bg-indigo-300 hover:text-heading'}
                                `}
                            >
                                <span dangerouslySetInnerHTML={{ __html: link.label }} />
                            </Link>
                        ) : (
                            <span
                                className="
                                    flex items-center justify-center
                                    min-w-[36px] h-9 px-3
                                    border text-gray-400
                                    cursor-not-allowed bg-neutral-secondary-medium
                                "
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        )}
                    </li>    
                );
            })}
            {/* <li>
            <a
                href="#"
                className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-10 h-10 focus:outline-none"
            >
                <span className="sr-only">Next</span>
                <svg
                className="w-4 h-4 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m9 5 7 7-7 7"
                />
                </svg>
            </a>
            </li> */}
        </ul>
    </nav>

    )
}


export default Pagination