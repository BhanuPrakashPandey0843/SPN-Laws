import React from 'react';

function BlogSection() {
  return (
    <section className="bg-white text-gray-800 pt-6 pb-8"> {/* Reduced top padding */}
    <div className="container max-w-7xl px-6 mx-auto space-y-16">
        <a
          rel="noopener noreferrer"
          href="/"
          className="block max-w-2xl gap-8 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105"
        >
          <img
            src="https://source.unsplash.com/random/720x540"
            alt="Main blog post"
            className="object-cover w-full h-80 rounded-t-lg sm:h-96 lg:col-span-7 lg:rounded-l-lg lg:rounded-t-none"
          />
          <div className="p-8 space-y-6 lg:col-span-5 lg:pl-10">
            <h3 className="text-4xl font-bold sm:text-5xl group-hover:underline group-focus:underline">
              Noster tincidunt reprimique ad pro
            </h3>
            <span className="text-sm text-gray-600">February 19, 2021</span>
            <p className="text-lg leading-relaxed">
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => {
            const className = `max-w-md mx-auto group hover:no-underline focus:no-underline bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105 ${index >= 3 ? 'hidden lg:block' : ''}`;
            return (
              <a
                key={index}
                rel="noopener noreferrer"
                href="#"
                className={className}
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded-t-lg h-60"
                  src={`https://source.unsplash.com/random/480x360?${index + 1}`}
                  alt={`Blog post ${index + 1}`}
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-sm text-gray-600">January {21 + index}, 2021</span>
                  <p className="text-base leading-relaxed">
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-8 py-4 text-base font-semibold rounded-md bg-[#cea252] text-white transform transition duration-500 hover:bg-[#b58948] hover:scale-105"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
