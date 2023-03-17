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

  let entries = Object.entries(listLanguages);

  return (
    <>
      <div className='w-1/2 text-center'>
        <div className='text-6xl font-bold text-indigo-500 '>
          {data.length}
          <div className='text-2xl text-indigo-400 font-normal'>projets</div>
        </div>
      </div>
      <div className='w-1/2 text-center'>
        <div className='text-sm font-bold text-teal-500'>
          {entries.map(
            ([key, val]) =>
              key != 'null' && (
                <div>
                  <span className='font-bold text-teal-500 '>{val} </span>
                  <span className='text-xs text-teal-400 font-normal'>{key}</span>
                </div>
              ),
          )}
          {/* {Object.keys(listLanguages)} */}
          {/* <div className='text-2xl text-teal-400 font-normal'> {Object.values(listLanguages)}</div>z<div className='text-2xl text-teal-400 font-normal'>commits</div> */}
        </div>
      </div>
    </>
  );
};

export default GlobalStatsGithub;
