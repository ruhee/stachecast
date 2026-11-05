import { Link } from 'react-router-dom';

import { newLabelImagesSources as labelImagesSources } from '../data/newChartData';
import {
  breakingVeloData,
  gameScoreData,
  k9data,
  veloData,
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
            Data includes all Padres (2024-2025) and Blue Jays (2026)
            appearances. 2019-2023 coming soon
          </em>
        </p>
        <p>
          Brought to you by{' '}
          <a href="https://bsky.app/profile/ruhee.ca">Ruhee</a>, the stupid
          brain behind the{' '}
          <a href="https://nationalpost.com/sports/baseball/mlb/toronto-blue-jays-fan-created-a-david-price-nickname-generator-and-the-ace-thought-it-was-pretty-funny">
            David Price Nickname Generator
          </a>{' '}
          and the Stanton Strikeout Tracker. You can{' '}
          <Link to="release-notes">see the release notes</Link> or{' '}
          <a href="mailto:ruhee.dewji@gmail.com">send feedback</a>.
        </p>

        <p>
          Pitch data:{' '}
          <a href="https://baseballsavant.mlb.com/savant-player/dylan-cease-656302?stats=gamelogs-r-pitching-mlb&season=2026">
            Baseball Savant and Statcast
          </a>
          . Beard data: MLB highlight packages and my eyes. All other data:{' '}
          <a href="https://www.baseball-reference.com/">Baseball Reference</a>.
          Exceptional advice by{' '}
          <a href="https://bsky.app/profile/gareths.bsky.social">Gareth</a> and{' '}
          <a href="https://bsky.app/profile/pointsman.bsky.social">Chris</a>,
          and perfect name by{' '}
          <a href="https://bsky.app/profile/phrichards.ca">Phil</a>.{' '}
          <Link to="credits">Photo credits are here</Link>.
        </p>
        <p>
          With sincerest and most sheepish apologies to Dylan Cease, a king
          among starters. Keep the beard, IMO.
        </p>
      </footer>
    </div>
  );
};
