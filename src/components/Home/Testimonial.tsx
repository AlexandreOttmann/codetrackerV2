import React from 'react';

const Testimonial = () => {
  return (
    <section className='relative isolate overflow-hidden bg-white text-custom-dark py-24 px-6 sm:py-32 lg:px-8'>
      <div className='absolute inset-0 -z-10 ' />
      <div className='mx-auto max-w-2xl lg:max-w-4xl'>
        <img className='mx-auto h-12' src='https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg' alt='' />
        <figure className='mt-10'>
          <blockquote className='text-center text-xl font-semibold leading-8  sm:text-2xl sm:leading-9'>
            <p>“Depuis que j'utilise CodeTracker, j'ai découvert une autre manière de me concentrer sur mes side projects.”</p>
          </blockquote>
          <figcaption className='mt-10'>
            <img
              className='mx-auto h-10 w-10 rounded-full'
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
            <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
              <div className='font-semibold '>Judith Black</div>
              <svg viewBox='0 0 2 2' width={3} height={3} aria-hidden='true' className='fill-gray-900'>
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className='text-custom-gray'>CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
