import { Link } from 'react-router-dom';

import {
  kPercentageData,
  newLabelImagesSources as labelImagesSources,
} from '../data/newChartData';
import {
  breakingVeloData,
  gameScoreData,
  veloData,
  occurrenceData,
  stuffPlusData,
  newChartConfig,
  totalStarts,
} from '../data/newChartData';
import { BarChart } from './charts/BarChart';

import clean from 'url:../assets/clean.jpg';
import stubble from 'url:../assets/stubble.jpg';
import patch from 'url:../assets/patch.jpg';
import stubbleStache from 'url:../assets/stubble-stache.jpg';
import full from 'url:../assets/full-new.jpg';
import long from 'url:../assets/long-new.jpg';
import mountain from 'url:../assets/mountain.jpg';

export const AltHome = () => {
  const { velo, breaking, gameScore, kPercentage } = newChartConfig;
  return (
    <div className="alt-home">
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
      <div className="intro-images">
        <img src={long} alt="" />
        <img src={stubbleStache} alt="" />
        <img src={patch} alt="" />
        <img src={mountain} alt="" />
        <img src={stubble} alt="" />
        <img src={full} alt="" />
        <img src={clean} className="mobile-hidden" alt="" />
      </div>

      <p>
        Over his 8 seasons in Major League Baseball, Dylan Cease has sported an
        impressive range of facial hair styles, including the classic old-timey
        &rsquo;stache and a beard reminiscent of many people&rsquo;s COVID
        quarantine looks. He&rsquo;s even been clean shaven (
        <a href="https://www.tiktok.com/@padres/video/7493972444055899438">
          to much fanfare
        </a>
        ). But which one of these yields the best <em>results</em>? Does he
        pitch better with the &rsquo;stache or without it? Could those Cy Young
        campaigns have ended differently if he had left the razor alone?
        It&rsquo;s time to find out.
      </p>
      <hr />
      <div className="chart-container-v2">
        <BarChart
          data={kPercentageData}
          labelImagesSources={labelImagesSources}
          title={kPercentage.title}
          showLegend={false}
        />
        <p>
          If we look at Cease&rsquo;s strikeout rate, it&rsquo;s obvious that
          having little to no facial hair is a poor choice. Strikeouts tick way
          up once the &rsquo;stache appears on the scene, and stay up.
          (Interestingly, the extremely long beard does best here... I
          can&rsquo;t explain this.)
        </p>
        <p>
          By Bill James&rsquo;{' '}
          <a href="https://www.baseball-reference.com/glossary/game-score/">
            Game Score
          </a>
          , the long beard does best both by average and{' '}
          <a href="https://www.baseball-reference.com/boxes/BOS/BOS202607250.shtml">
            highest score
          </a>
          :
        </p>
        <BarChart
          data={gameScoreData}
          legendXMin={gameScore.legendXMin}
          labelImagesSources={labelImagesSources}
          title={gameScore.title}
        />
        <p>
          (Tip: Tap or click the legend to turn datasets on/off, and tap or
          hover on individual bars for numbers.)
        </p>
        <p>
          By FanGraphs&rsquo; <s>Scruff+</s>, sorry,{' '}
          <a href="https://library.fangraphs.com/pitching/stuff-location-and-pitching-primer/">
            Stuff+
          </a>
          , the &rsquo;stache styles do pretty well in general, although they
          are all once again slightly beaten by the really unruly beard.
          (What&rsquo;s going on with that?)
        </p>
        <BarChart
          data={stuffPlusData}
          labelImagesSources={labelImagesSources}
          title="Stuff+ by style"
          showLegend={false}
        />

        <p>
          Not looking good for &ldquo;clean shaven&rdquo; so far, either. (Note:
          Stuff+ sets the baseline/average at 100.)
        </p>
        <p>The velocity numbers, though, seem quite a bit less obvious... </p>
        <BarChart
          data={veloData}
          legendXMin={velo.legendXMin}
          labelImagesSources={labelImagesSources}
          title={velo.title}
        />
        <BarChart
          data={breakingVeloData}
          labelImagesSources={labelImagesSources}
          title={breaking.title}
        />
        <p>
          Clean shaven does a lot better in the velo charts—the four-seamer is
          about as fast as it gets in those appearances. But the
          &rsquo;stache-n-patch look is coming out pretty well across all our
          metrics—the hardest slider, the hardest four-seamer, nearly the best
          Stuff+, a decently high K%...
        </p>
        <p>
          Of course, when doing rigorous shavermetric analysis, it&rsquo;s also
          very important to know the sample sizes you&rsquo;re working
          with.{' '}
        </p>
        <BarChart
          data={occurrenceData}
          labelImagesSources={labelImagesSources}
          title="Appearances per style"
          showLegend={false}
        />
      </div>
      <p>
        In total, we&rsquo;re looking at {totalStarts} appearances over 8
        seasons. The &rsquo;stache alone accounts for almost a quarter of them.
      </p>
      <p>
        So, can we conclude anything from this? Perhaps we still need more
        data...{' '}
        <a href="https://en.wikipedia.org/wiki/List_of_facial_hairstyles">
          let&rsquo;s get cracking, Dylan.
        </a>
      </p>
      <footer>
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
        <p>
          <em>
            Data includes all MLB appearances 2019-2026 (regular season,
            postseason, and All-Star Game).
          </em>
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
