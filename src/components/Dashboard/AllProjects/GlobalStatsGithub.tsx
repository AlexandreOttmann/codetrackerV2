import React, { useState, useEffect } from 'react';

const GlobalStatsGithub = ({ data }: any) => {
 const [listLanguages, setListLanguages] = useState<any>([]);
 let languageTab: any[] = [];
 data.map((item: any) => {
  languageTab.push(item.language);
 });
 let languages: [] = [];

 function getValuePerLanguage(language: any) {
  languages = language.reduce(function (acc: any, curr: any) {
   return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, []);
 }

 useEffect(() => {
  getValuePerLanguage(languageTab);
  setListLanguages(languages);
 }, [data]);

 let sortedEntries = Object.entries(listLanguages)
  .filter(([key, val]) => key !== 'null')
  .sort((a: any, b: any) => b[1] - a[1]);

 return (
  <>
   <div className="w-1/2 text-center">
    <div className="text-6xl font-bold text-zinc-700 ">
     {data.length}
     <div className="text-2xl text-zinc-600 font-normal">projets</div>
    </div>
   </div>
   <div className="w-1/2 m-auto flex flex-col justify-center h-48 overflow-y-auto section ">
    <div>
     {sortedEntries.map(
      ([key, val]) =>
       key != 'null' && (
        <div className="text-start ">
         <span className="font-semibold text-2xl text-stone-600 ">{val} </span>
         <span className="text-normal text-lg text-stone-500 font-normal">
          {key}
         </span>
        </div>
       )
     )}
    </div>
   </div>
  </>
 );
};

export default GlobalStatsGithub;
