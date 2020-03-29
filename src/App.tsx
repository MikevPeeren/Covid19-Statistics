// React
import React, { useState, useEffect } from 'react';

// CSS
import './App.scss';

// Components
import StatisticCard from './components/StatisticCard';

// Api
import { getCovid19Statistics } from './api/Covid19Api';

// Constants
import {
  COVID_19_HEADER,
  TOTAL_CONFIRMED,
  TOTAL_DEATHS,
  TOTAL_RECOVERED,
} from './constants/general';

interface ICovid19Statistics {
  Countries: [
    {
      TotalConfirmed: number;
      NewConfirmed: number;
      TotalDeaths: number;
      NewDeaths: number;
      TotalRecovered: number;
    },
  ];
  Date: string;
}

const App = () => {
  const [
    covid19Statistics,
    setCovid19Statistics,
  ] = useState<ICovid19Statistics | null>(null);
  const [loading, setLoading] = useState(true);

  let totalConfirmed = 0;
  let totalDeaths = 0;
  let totalRecovered = 0;

  useEffect(() => {
    async function getCovid19Statisticss() {
      setCovid19Statistics(await getCovid19Statistics());
      setLoading(false);
    }

    if (loading && !covid19Statistics) {
      getCovid19Statisticss();
    }
  }, [covid19Statistics, loading]);

  if (covid19Statistics) {
    covid19Statistics.Countries.forEach((country) => {
      totalConfirmed = totalConfirmed + country.TotalConfirmed;
      totalDeaths = totalDeaths + country.TotalDeaths;
      totalRecovered = totalRecovered + country.TotalRecovered;
    });
  }

  return (
    <div className="Covid19">
      <header className="Covid19__Header">{COVID_19_HEADER}</header>
      {covid19Statistics && (
        <div className="Covid19__GlobalStatistics">
          <StatisticCard
            title={TOTAL_CONFIRMED}
            dateString={covid19Statistics.Date}
            statistic={totalConfirmed}
          ></StatisticCard>
          <StatisticCard
            title={TOTAL_DEATHS}
            dateString={covid19Statistics.Date}
            statistic={totalDeaths}
          ></StatisticCard>
          <StatisticCard
            title={TOTAL_RECOVERED}
            dateString={covid19Statistics.Date}
            statistic={totalRecovered}
          ></StatisticCard>
        </div>
      )}
      <footer className="Covid19__Footer">
        <h3 className="Covid19__Footer--h3">About this data</h3>
        <h4 className="Covid19__Footer--h4">It changes rapidly</h4>
        <p className="Covid19__Footer--p">
          This data changes rapidly, so what’s shown may be out of date.
          Information about reported cases is also available on the World Health
          Organization site.
        </p>
        <h4 className="Covid19__Footer--h4">It doesn’t include all cases</h4>
        <p className="Covid19__Footer--p">
          Confirmed cases aren’t all cases. They only include people who tested
          positive. Testing rules and availability vary by country.
        </p>
      </footer>
    </div>
  );
};

export default App;
