import CodeTrackerHeroImg from '../../assets/codetrackerHero.svg';

const Hero = () => {
  return (
    <section className='bg-white text-custom-dark h-[calc(100vh_-_70px)] justify-center flex'>
      <div className='container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
        <div className='flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
          <h1 className='text-5xl font-bold sm:text-6xl'>
            <div className='mb-9 text-custom-dark'>CodeTracker</div>
            <div className='leading-[0]'>
              <span className=' text-4xl'>une manière simple de </span>
              <span className='text-custom-blue text-4xl'> suivre vos projets</span>
            </div>
          </h1>
          <p className='mt-6 mb-8 text-lg sm:mb-12'>Un service gratuit au service des projets !</p>
          <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
            <a rel='noopener noreferrer' href='#' className='px-8 py-3 text-lg font-semibold rounded bg-indigo-500 text-white'>
              Se connecter
            </a>
            <a rel='noopener noreferrer' href='#' className='px-8 py-3 text-lg font-semibold border rounded border-gray-100'>
              Découvrir
            </a>
          </div>
        </div>
        <div className='flex items-center justify-center p-6 mt-8 lg:mt-0  2xl:h-128'>
          <img src={CodeTrackerHeroImg} alt='' className='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
