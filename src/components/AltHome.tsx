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

import clean from 'url:../assets/clean.jpg';
import stubble from 'url:../assets/stubble.jpg';
import stache from 'url:../assets/stache-only.jpg';
import patch from 'url:../assets/patch.jpg';
import stubbleStache from 'url:../assets/stubble-stache.jpg';
import shortStache from 'url:../assets/short-stache.jpg';
import short from 'url:../assets/short-new.jpg';
import full from 'url:../assets/full-new.jpg';
import long from 'url:../assets/long-new.jpg';
import mountain from 'url:../assets/mountain.jpg';

export const AltHome = () => {
  const { velo, breaking, gameScore, k9 } = newChartConfig;
  return (
    <div className="alt-home">
      <h2 style={{ color: 'red' }}>‼️ Alternate/unreleased route - WIP ‼️</h2>
      <p>
        Baseball has a rich history of analysis. These days, we can examine just
        about every detail of a player or a game: what&rsquo;s the average
        launch angle on Yordan Alvarez&rsquo;s home runs?
        <sup>
          <a href="#ref1" id="note1">
            1
          </a>
        </sup>{' '}
        Do left-handed pitchers throw their fastballs better in the daytime or
        at night?
        <sup>
          <a href="#ref2" id="note2">
            2
          </a>
        </sup>
      </p>
      <p>
        By all of the metrics available to us, it&rsquo;s obvious that the Blue
        Jays&rsquo; Dylan Cease is <em>really</em> good. He strikes guys out
        consistently, he throws hard, he&rsquo;s finished second in Cy Young
        voting twice. But there&rsquo;s still one thing those numbers
        can&rsquo;t quantify...
      </p>
      <p className="intro-images">
        <img src={long} alt="" />
        <img src={stubbleStache} alt="" />
        <img src={patch} alt="" />
        <img src={mountain} alt="" />
        <img src={stubble} alt="" />
        <img src={full} alt="" />
        <img src={clean} alt="" />
        <img src={stache} alt="" />
        <img src={shortStache} alt="" />
        <img src={short} alt="" />
      </p>
      <p>
        Over his 8 seasons in Major League Baseball, Dylan Cease has sported an
        impressive range of facial hair styles, including the classic old-timey
        &rsquo;stache and a beard reminiscent of many people&rsquo;s COVID
        quarantine looks. He&rsquo;s even been clean shaven (
        <a href="https://www.tiktok.com/@padres/video/7493972444055899438">
          to great surprise
        </a>
        ). But which one of these yields the best <em>results</em>? Does he
        pitch better with the &rsquo;stache or without it? Could those Cy Young
        campaigns have ended differently if he had left the razor alone?
        It&rsquo;s time to find out.
      </p>
      <hr />
      <div className="chart-container-v2">
        <BarChart
          data={k9data}
          legendXMin={k9.legendXMin}
          labelImagesSources={labelImagesSources}
          title={k9.title}
          showLegend={false}
        />
        <p>
          If we look at Cease&rsquo;s strikeouts per 9, it&rsquo;s obvious that
          having little to no facial hair is a poor choice. Strikeouts tick way
          up once the &rsquo;stache appears on the scene, and stay up.
          (Interestingly, the extremely long beard does best here.)
        </p>
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
        <p>The velocity is less clear... </p>

        <BarChart
          data={gameScoreData}
          legendXMin={gameScore.legendXMin}
          labelImagesSources={labelImagesSources}
          title={gameScore.title}
        />

        <BarChart
          data={stuffPlusData}
          labelImagesSources={labelImagesSources}
          title="Stuff+ by style"
          showLegend={false}
        />
        <p>
          By FanGraphs&rsquo; Stuff+ the &rsquo;stache styles do pretty well in
          general, although they are all slightly beaten by the really unruly
          beard. (This is a usage-weighted average of all pitches in a start,
          averaged over starts. Stuff+ sets the baseline/average at 100.)
        </p>

        <BarChart
          data={occurrenceData}
          labelImagesSources={labelImagesSources}
          title="Appearances per style"
          showLegend={false}
        />
        <p>
          Of course, it&rsquo;s important to know the sample sizes you&rsquo;re
          working with when doing rigorous analysis...{' '}
        </p>
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
            Data includes all MLB appearances 2019-2026 (regular season,
            postseason, and All-Star Game).
          </em>
        </p>
        <p>
          <span>
            <sup>1</sup> In 2026,{' '}
            <a href="https://baseballsavant.mlb.com/statcast_search?hfAB=home%5C.%5C.run%7C&hfGT=R%7C&hfSea=2026%7C&player_type=batter&batters_lookup%5B%5D=670541&hfFlag=is%5C.%5C.bunt%5C.%5C.not%7C&group_by=name&sort_col=launch_angle&sort_order=desc&chk_stats_launch_angle=on#results">
              Savant says
            </a>{' '}
            it was 29°.&nbsp;
            <a href="#note1" id="ref1">
              &#x21A9;
            </a>
          </span>
          <br />
          <span>
            <sup>2</sup> Are you kidding me, I&rsquo;m not doing that.&nbsp;
            <a href="#note2" id="ref2">
              &#x21A9;
            </a>
          </span>
        </p>
        <hr />
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
