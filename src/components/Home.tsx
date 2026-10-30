import { Link } from 'react-router-dom';
import { GameScoreBarChart } from './charts/GameScoreBarChart';
import { VeloBarChart } from './charts/VeloBarChart';
import { BreakingVeloBarChart } from './charts/BreakingVeloBarChart';
import { K9BarChart } from './charts/K9BarChart';

import { chartOptions, labelImagesSources } from '../data/common';
import { breakingVeloData } from '../data/chartData';

export const Home = () => (
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
        of hair on his face, though the stache does better than the short beard
        on average.
      </p>
      <VeloBarChart />
      <p>
        (Tap or click the legend to turn datasets on/off, and tap or hover on
        individual bars for numbers.)
      </p>
      <BreakingVeloBarChart
        chartOptions={chartOptions}
        data={breakingVeloData}
        labelImagesSources={labelImagesSources}
        title="2026 Average Breaking Ball/Offspeed Velocity"
      />
      <p>
        Cease achieves higher game scores with a full beard, though, and all of
        his best games by game score (
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
      <GameScoreBarChart />
      <p>
        His strikeouts follow the velo trend a little more, but they&rsquo;re
        highest with the short beard. (<em>Really</em> small sample size,
        though: only 4 starts in 2026 with this beard type)
      </p>
      <K9BarChart />
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
          Data includes all 2026 appearances. 2019-2025 coming soon/eventually
        </em>
      </p>
      <p>
        Brought to you by <a href="https://bsky.app/profile/ruhee.ca">Ruhee</a>,
        the stupid brain behind the{' '}
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
        <a href="https://bsky.app/profile/pointsman.bsky.social">Chris</a>, and
        perfect name by{' '}
        <a href="https://bsky.app/profile/phrichards.ca">Phil</a>.{' '}
        <Link to="credits">Photo credits are here</Link>.
      </p>
      <p>
        With sincerest and most sheepish apologies to Dylan Cease, a king among
        starters. Keep the beard, IMO.
      </p>
    </footer>
  </div>
);
