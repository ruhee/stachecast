import { Link } from 'react-router-dom';

import { newLabelImagesSources as labelImagesSources } from '../data/newChartData';
import {
  breakingVeloData,
  gameScoreData,
  k9data,
  veloData,
  occurrenceData,
  newChartConfig,
} from '../data/newChartData';
import { BarChart } from './charts/BarChart';

export const AltHome = () => {
  const { velo, breaking, gameScore, k9 } = newChartConfig;
  return (
    <div>
      <h2 style={{ color: 'red' }}>‼️ Alternate/unreleased route - WIP ‼️</h2>
      <p>
        On September 7, Dylan Cease&rsquo;s{' '}
        <a href="https://baseballsavant.mlb.com/player-scroll/game?gamePk=824958&player_id=656302">
          velocity was down
        </a>{' '}
        and, for the first time in awhile,{' '}
        <a href="./cease-sept7.jpg">so was his facial hair</a> (compare that to
        his <a href="./cease-sept2.jpg">previous start</a>). What this website
        asks is: are those things related?
      </p>
      <div className="chart-container-v2">
        <p>(Text here)</p>
        <BarChart
          data={veloData}
          legendXMin={velo.legendXMin}
          labelImagesSources={labelImagesSources}
          title={velo.title}
        />
        <p>
          (Tap or click the legend to turn datasets on/off, and tap or hover on
          individual bars for numbers.)
        </p>
        <BarChart
          data={breakingVeloData}
          legendXMin={breaking.legendXMin}
          labelImagesSources={labelImagesSources}
          title={breaking.title}
        />
        <p>(Text here)</p>
        <BarChart
          data={gameScoreData}
          legendXMin={gameScore.legendXMin}
          labelImagesSources={labelImagesSources}
          title={gameScore.title}
        />
        <p>(Text here)</p>
        <BarChart
          data={k9data}
          legendXMin={k9.legendXMin}
          labelImagesSources={labelImagesSources}
          title={k9.title}
          showLegend={false}
        />
        <p>
          Of course, it&rsquo;s important to know the sample sizes you&rsquo;re
          working with when doing rigorous analysis...{' '}
        </p>
        <BarChart
          data={occurrenceData}
          labelImagesSources={labelImagesSources}
          title="Appearances per style"
          showLegend={false}
        />
      </div>
      <p>
        Can we conclude anything from this? Perhaps we still need more data...{' '}
        <a href="https://en.wikipedia.org/wiki/List_of_facial_hairstyles">
          let&rsquo;s get cracking, Dylan.
        </a>
      </p>
      <footer>
        <p>
          <em>
            Data includes all MLB regular season and postseason appearances
            2019-2026.
          </em>
        </p>
        <p>
          Brought to you by{' '}
          <a href="https://bsky.app/profile/ruhee.ca">Ruhee</a>, the stupid
          brain behind the{' '}
          <a href="https://nationalpost.com/sports/baseball/mlb/toronto-blue-jays-fan-created-a-david-price-nickname-generator-and-the-ace-thought-it-was-pretty-funny">
            David Price Nickname Generator
          </a>{' '}
          and the Stanton Strikeout Tracker.{' '}
          <Link to="release-notes">Check out the release notes</Link> or{' '}
          <a href="mailto:ruhee.dewji@gmail.com">send feedback</a>.
        </p>
        <Link to="credits">The credits are here</Link>, including data and
        photos.
        <p>Sincerest and most sheepish apologies to Dylan Cease. 👑</p>
      </footer>
    </div>
  );
};
