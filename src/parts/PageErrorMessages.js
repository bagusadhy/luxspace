import React from 'react'
import { Link } from 'react-router-dom'

function PageErrorMessages({tittle="404 NOT FOUND", body="Looks like this page not found"}) {
  return (
    <section class="mt-52 mb-52">
      <div class="container mx-auto min-h-fit">
        <div class="flex flex-col items-center justify-center">
          <div class="w-full md:w-4/12 text-center">
            <h2 class="text-3xl font-semibold mb-6">{tittle}</h2>
            <p class="text-lg mb-12">
            {body}
            </p>
            <Link
              to="/"
              class="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default PageErrorMessages