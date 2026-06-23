import React from 'react'
import Container from './Container'

const SpecialPackages = () => {
  return (
    <section className="bg-[#f8f1e9] py-10">
      <Container>
        <div className="">
          <h3 className="text-[#0a0a09] text-center font-poppins text-[24px]">Special Packages</h3>
          <div className="">
            <div className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
              <a href="#">
                <img className="rounded-base mb-6" src="/docs/images/products/apple-watch.png" alt="product image" />
              </a>
              <div>
                <div className="flex items-center space-x-3 mb-6">
                   
                </div>
                <a href="#">
                  <h4>Pelax Package</h4>
                  <h5 className="text-xl text-heading font-semibold tracking-tight">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight
                  </h5>
                </a>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-3xl font-extrabold text-heading">$599</span>
                  <button
                    type="button"
                    className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
                  >
                    <svg
                      className="w-4 h-4 me-1.5"
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
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default SpecialPackages