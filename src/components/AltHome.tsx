import { Link } from 'react-router-dom';

import { newLabelImagesSources as labelImagesSources } from '../data/newChartData';
import {
  breakingVeloData,
  gameScoreData,
  k9data,
  veloData,
  occurrenceData,
  stuffPlusData,
  newChartConfig,
} from '../data/newChartData';
import { BarChart } from './charts/BarChart';

export const AltHome = () => {
  const { velo, breaking, gameScore, k9 } = newChartConfig;
  return (
    <div>
      <h2 style={{ color: 'red' }}>‼️ Alternate/unreleased route - WIP ‼️</h2>
      <p>
        Baseball has a rich history of analysis. We can examine just about every
        detail of a player or a game: do left-handed pitchers throw fastballs
        better in the daytime? What&rsquo;s the average launch angle on Yordan
        Alvarez&rsquo;s home runs? Do the Jays&rsquo; white-panel caps result in
        more wins than the regular blue ones? What about when the roof is open?
      </p>
      <p>
        By most of the metrics available to us, it&rsquo;s obvious that
        the Blue Jays&rsquo; Dylan Cease is <em>really</em> good. He strikes guys out
        consistently. He throws hard. He&rsquo;s thrown a no-hitter, finished
        second in Cy Young voting twice, and signed a huge contract to play in
        Toronto for seven seasons. But there&rsquo;s still one thing those
        numbers can&rsquo;t quantify.
      </p>
      <p>(Some photos here)</p>
      <p>Over the 8 seasons in his MLB career, Cease has appeared on the mound sporting an impressive range of facial hair styles.
        He&rsquo;s had the classic old-timey &rsquo;stache; he&rsquo;s had a beard reminiscent of many people&rsquo;s COVID quarantine looks;
        he&rsquo;s even, much to the surprise of Padres fans, gone clean shaven (briefly). But which one of these yields the best <em>results</em>? Does he pitch better with the &rsquo;stache or without it?
        Could the 2026 Cy Young campaign have ended differently if he had left the razor alone? Perhaps it&rsquo;s time to find out.
      </p>
      <hr />
      <div className="chart-container-v2">
        <p>Blah blah blah, some words about how the fastballs look</p>
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
          By Fangraphs&rsquo; Stuff+ the &rsquo;stache styles do pretty well in
          general, although they are all slightly beaten by the really unruly
          beard. (This is a usage-weighted average of all pitches in a start,
          averaged over starts. Stuff+ sets the baseline/average at 100—110 is
          quite good. The clean shaven number... not so good.)
        </p>
        <BarChart
          data={stuffPlusData}
          labelImagesSources={labelImagesSources}
          title="Stuff+ by style"
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
