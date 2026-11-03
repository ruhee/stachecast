import { Link } from 'react-router-dom';
import { GameScoreBarChart } from './charts/GameScoreBarChart';
import { VeloBarChart } from './charts/VeloBarChart';
import { BreakingVeloBarChart } from './charts/BreakingVeloBarChart';
import { K9BarChart } from './charts/K9BarChart';

import { chartOptions, labelImagesSources, chartConfig } from '../data/common';
import {
  breakingVeloData,
  gameScoreData,
  k9data,
  veloData,
} from '../data/chartData';
import { BarChart } from './charts/BarChart';

export const Home = () => {
  const { velo, breaking, gameScore, k9 } = chartConfig;

  return (
    <div>
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
      <div className="chart-container">
        <p>
          In 2026, Cease&rsquo;s velo is loosely inversely related to the amount
          of hair on his face, though the stache does better than the short
          beard on average.
        </p>
        <BarChart
          data={veloData}
          legendXMin={velo.legendXMin}
          title={velo.title}
        />
        <VeloBarChart
          chartOptions={chartOptions}
          data={veloData}
          labelImagesSources={labelImagesSources}
          title="2026 Average Fastball Velocity"
        />
        <p>
          (Tap or click the legend to turn datasets on/off, and tap or hover on
          individual bars for numbers.)
        </p>
        <BarChart
          data={breakingVeloData}
          legendXMin={breaking.legendXMin}
          title={breaking.title}
          customClassName="breaking"
        />
        <BreakingVeloBarChart
          chartOptions={chartOptions}
          data={breakingVeloData}
          labelImagesSources={labelImagesSources}
          title="2026 Average Breaking Ball/Offspeed Velocity"
        />
        <p>
          Cease achieves higher game scores with a full beard, though, and all
          of his best games by game score (
          <a href="https://www.mlb.com/bluejays/video/dylan-cease-take-no-hitter-into-7th-in-blue-jays-win">
            a no-hit bid into the 7th
          </a>
          ,{' '}
          <a href="https://www.mlb.com/video/dylan-cease-flirts-with-no-hitter-in-blue-jays-win">
            a no-hit bid into the 9th
          </a>
          , and{' '}
          <a
            href="https://www.mlb.com/news/dylan-cease-pitches-complete-game-shutout-al-cy-young-award-case
        "
          >
            a CG shutout
          </a>
          ) were on full-beard or long-beard outings.
        </p>
        <BarChart
          data={gameScoreData}
          title={gameScore.title}
          legendXMin={gameScore.legendXMin}
        />
        <GameScoreBarChart
          chartOptions={chartOptions}
          data={gameScoreData}
          labelImagesSources={labelImagesSources}
          title="2026 Game Scores"
          xMin={50}
        />
        <p>
          His strikeouts follow the velo trend a little more, but they&rsquo;re
          highest with the short beard. (<em>Really</em> small sample size,
          though: only 4 starts in 2026 with this beard type)
        </p>
        <BarChart data={k9data} title={k9.title} legendXMin={k9.legendXMin} />
        <K9BarChart
          chartOptions={chartOptions}
          data={k9data}
          labelImagesSources={labelImagesSources}
          title="2026 Strikeouts/9"
        />
      </div>
      <p>
        Can we conclude anything from this? Perhaps we still need more data...{' '}
        <a href="https://en.wikipedia.org/wiki/List_of_facial_hairstyles">
          let&rsquo;s get cracking, Dylan.
        </a>
      </p>
      <hr />
      <footer>
        <p>
          <em>Data includes all 2026 appearances. 2019-2025 coming soon...</em>
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
