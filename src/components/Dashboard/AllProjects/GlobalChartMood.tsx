import React, { Component, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const RadialBar = ({ data }: any) => {
  const [listLanguages, setListLanguages] = useState<any>([]);
  let languageTab: any[] = [];
  let percentage: any[] = [];
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
  entries.map(([key, val]: any) => {
    let value = (val * 10) / (languageTab.length / 10);
    value = +value.toFixed(0);
    let name = key;
    percentage.push({ name, value });
  });

  // {entries.map(
  // 	([key, val]) =>
  // 		key != 'null' && (
  // 			<div>
  // 				<span className='font-bold text-teal-500 '>{val} </span>
  // 				<span className='text-xs text-teal-400 font-normal'>{key}</span>
  // 			</div>
  // 		),
  // )}

  let table = Object.entries(percentage);
  let series = table.map(([key, val]) => val.value);

  let options: any = {
    labels: table.map(([key, val]) => (val.name != 'null' ? val.name : 'Autres')),
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      offsetX: 0,
      offsetY: 0,
      //legend
      labels: {
        show: false,
        colors: 'black',
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      dataLabels: {
        enabled: false,
        value: {
          formatter: function (val: any) {
            return val;
          },
        },
        total: {
          show: false,
          label: 'Total',
          color: '#373d3f',
          formatter: function (w: any) {
            return languageTab.length;
          },
        },
      },
    },

    series: Object.values(series),
  };

  return (
    <div className='donut'>
      <Chart options={options} series={options.series} type='pie' width='350px' />
    </div>
  );
};

export default RadialBar;
