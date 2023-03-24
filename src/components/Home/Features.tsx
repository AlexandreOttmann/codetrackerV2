import React from 'react';
import dashboard from '../../assets/dashboard.svg';
import happy from '../../assets/happy.svg';
import solution from '../../assets/solution.svg';

const featuresData = [
 {
  id: 1,
  title: 'Un dashboard personnalisé',
  description:
   "Un dashboard personnalisé vous permettra de suivre tous vos projets Github en un coup d'oeil.",
  image: dashboard,
  imageAlt: 'Person wearing green shirt and black pants.',
 },
 {
  id: 2,
  title: 'Booter votre motivation',
  description:
   "Parce qu'apprendre et resté motivé est la clef de la réussite, vous aurez votre ressenti à chaque session.",
  image: happy,
  imageAlt: 'Person wearing black shirt and white pants.',
 },
 {
  id: 3,
  title: 'Suivez vos progrès',
  description:
   'Vous pourrez suivre vos progès et rester motivé grâce à des statistiques claires et précises.',
  image: solution,
  imageAlt: 'Person wearing white shirt and black pants.',
 },
];

export const Features = () => {
 return (
  <div className="bg-white text-custom-dark">
   <h2 className="text-3xl text-center font-bold tracking-tight  sm:text-5xl">
    Avec codetracker tous vos projets web
   </h2>
   <p className="mt-2 text-2xl leading-8 text-center  text-custom-gray">
    glisseront comme sur des roulettes.
   </p>
   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
     {featuresData.map((post) => (
      <article
       key={post.id}
       className="flex max-w-xl flex-col items-start justify-between"
      >
       <div className="flex items-center gap-x-4 text-xs"></div>
       <div className="group relative">
        <img
         src={post.image}
         alt={post.imageAlt}
         className="w-full h-64 object-contain"
        />
        <h3 className="mt-3 text-lg font-semibold leading-6 text-custom-dark">
         <span className="absolute inset-0" />
         {post.title}
        </h3>
        <p className="mt-5 pr-8 text-sm leading-6 text-custom-gray line-clamp-3">
         {post.description}
        </p>
       </div>
       <div className="relative mt-8 flex items-center gap-x-4"></div>
      </article>
     ))}
    </div>
   </div>
  </div>
 );
};
