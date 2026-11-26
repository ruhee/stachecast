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
import { averages } from '../data/averages-full';
import { stuffs } from '../data/fangraphs';
import { starts } from '../data/velocities';

import { BarChart } from './charts/BarChart';

import stache from 'url:../assets/v2-graph/stache-only.jpg';
import patch from 'url:../assets/v2-graph/patch.jpg';
import stubbleStache from 'url:../assets/v2-graph/stubble-stache.jpg';
import full from 'url:../assets/v2-graph/full-new.jpg';
import long from 'url:../assets/v2-graph/long-new.jpg';
import shortStache from 'url:../assets/v2-graph/short-stache.jpg';
import mountain from 'url:../assets/v2-graph/mountain.jpg';
import muttonchops from 'url:../assets/muttonchops.jpg';
import wolverine from 'url:../assets/wolverine.jpg';
import lemmy from 'url:../assets/lemmy.jpg';

import { ScreenReaderTable } from './ScreenReaderTable';

export const AltHome = () => {
  const { appearances, breaking, gameScore, kPercentage, stuffPlus, velo } =
    newChartConfig;
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
        <img src={stache} alt="Dylan Cease with a mustache" />
        <img src={long} alt="Dylan Cease with a beard" />
        <img
          src={stubbleStache}
          alt="Dylan Cease with a mustache and some stubble"
        />
        <img src={mountain} alt="Dylan Cease with a long beard" />

        <img
          src={shortStache}
          alt="Dylan Cease with a long stache and a shorter beard"
        />
        <img src={patch} alt="Dylan Cease with a mustache and a soul patch" />
        <img
          src={full}
          className="mobile-hidden"
          alt="Dylan Cease with a beard"
        />
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
          ariaLabel={kPercentage.title}
          data={kPercentageData}
          labelImagesSources={labelImagesSources}
          title={kPercentage.title}
          showLegend={false}
        />
        <ScreenReaderTable
          caption={kPercentage.title}
          data={[{ name: 'K%', values: averages['K%'] }]}
        />
        <p>
          If we look at Cease&rsquo;s strikeout rate , it&rsquo;s obvious that
          having little to no facial hair is a poor choice. Strikeouts tick way
          up once the &rsquo;stache appears on the scene, and stay up.
          (Interestingly, the{' '}
          <a
            href="https://stachecast.lol/mountain2.jpg"
            target="_blank"
            rel="noreferrer"
          >
            extremely long beard
          </a>{' '}
          does best here... I can&rsquo;t explain this.)
        </p>
        <p>
          By Bill James&rsquo;{' '}
          <a href="https://www.baseball-reference.com/glossary/game-score/">
            Game Score
          </a>
          , the longer-but-not-longest beard does best both by average and{' '}
          <a href="https://www.baseball-reference.com/boxes/BOS/BOS202607250.shtml">
            highest score
          </a>
          :
        </p>
        <BarChart
          ariaLabel={gameScore.title}
          data={gameScoreData}
          legendXMin={gameScore.legendXMin}
          labelImagesSources={labelImagesSources}
          title={gameScore.title}
        />
        <ScreenReaderTable
          caption={gameScore.title}
          data={[
            { name: 'Average', values: averages['Game score'] },
            { name: 'Highest', values: averages['Game score max'] },
          ]}
        />
        <p>
          This makes sense: in 2026, some of Cease&rsquo;s best games were
          long-beard outings, including a{' '}
          <a
            href="https://www.mlb.com/news/dylan-cease-pitches-complete-game-shutout-al-cy-young-award-case"
            target="_blank"
            rel="noreferrer"
          >
            complete game shutout
          </a>{' '}
          and two no-hit bids that lasted into the 7th or later.
        </p>
        <p>
          By FanGraphs&rsquo; <s>Scruff+</s>, sorry,{' '}
          <a href="https://library.fangraphs.com/pitching/stuff-location-and-pitching-primer/">
            Stuff+
          </a>
          , all of the &rsquo;stache styles and that longer beard all do pretty
          well, although they are once again slightly beaten by the really
          unruly beard. (Seriously, what&rsquo;s going on with that?)
        </p>
        <BarChart
          ariaLabel={stuffPlus.title}
          data={stuffPlusData}
          labelImagesSources={labelImagesSources}
          title={stuffPlus.title}
          showLegend={false}
        />
        <ScreenReaderTable
          caption={stuffPlus.title}
          data={[{ name: 'Stuff+', values: stuffs }]}
        />
        <p>Not looking great for &ldquo;clean shaven&rdquo; so far, either.</p>
        <p>Pitch velo, however, makes things a little less obvious... </p>
        <BarChart
          ariaLabel={velo.title}
          data={veloData}
          legendXMin={velo.legendXMin}
          labelImagesSources={labelImagesSources}
          title={velo.title}
        />
        <ScreenReaderTable
          caption={velo.title}
          data={[
            { name: 'Four-seam', values: averages['4 seam'] },
            { name: 'Sinker', values: averages['Sinker'] },
          ]}
        />
        <BarChart
          ariaLabel={breaking.title}
          data={breakingVeloData}
          labelImagesSources={labelImagesSources}
          title={breaking.title}
        />
        <ScreenReaderTable
          caption={breaking.title}
          data={[
            { name: 'Slider', values: averages['Slider'] },
            { name: 'Sweeper', values: averages['Sweeper'] },
            { name: 'Knuckle curve', values: averages['Knuckle curve'] },
          ]}
        />
        <p>
          Turns out that being clean shaven is not bad for Cease in the velo
          department—the four-seamer is about as fast as it gets in those
          appearances. But the &rsquo;stache-n-patch look is coming out pretty
          well across all our metrics so far: the hardest slider, the hardest
          four-seamer, nearly the best Stuff+...
        </p>
        <p>
          Of course, when doing rigorous shavermetric analysis, it&rsquo;s also
          very important to know the sample sizes you&rsquo;re working
          with.{' '}
        </p>
        <BarChart
          ariaLabel={appearances.title}
          data={occurrenceData}
          labelImagesSources={labelImagesSources}
          title={appearances.title}
          showLegend={false}
        />
        <ScreenReaderTable
          caption={appearances.title}
          data={[{ name: 'Appearances', values: starts }]}
        />
      </div>
      <p>
        We&rsquo;re looking at {totalStarts} appearances over 8 seasons, and the
        &rsquo;stache styles make up the majority of those. Cease is
        clean-shaven by far the least often of any style, which explains why it
        freaked the Padres out so much.
      </p>
      <p>So after all this, what can we conclude?</p>
      <p>
        As we&rsquo;ve seen, the &rsquo;stache & patch performs very respectably
        on many metrics including velocity and <em>stuff</em>; it makes sense
        that Cease returns to that well so often. It&rsquo;s working.
      </p>
      <p>
        On the other hand, the respectably-long beard appears to be great for
        things like high strikeout rate and generally going deep into a game.
      </p>
      <p>
        {' '}
        So, if a certain variably-hirsute pitcher is reading this: if you want
        the best of both worlds, there might be one as-yet-untested option that
        lets you have your cake and eat it too...
      </p>
      <div className="intro-images">
        <img
          className="mobile-hidden"
          src={wolverine}
          alt="Hugh Jackman as Wolverine with mutton chops"
        />
        <img
          src={muttonchops}
          alt="A colourized photo of a Victorian man with mutton chops and a mustache"
        />
        <img src={lemmy} alt="Lemmy with mutton chops" />
      </div>
      <p>
        I&rsquo;m just saying, the 2027 Cy Young is within your reach. Think
        about it. ⚾️
      </p>
      <hr />
      <footer>
        <p>
          <span>
            <sup>1</sup> In 2026,{' '}
            <a href="https://baseballsavant.mlb.com/statcast_search?hfAB=home%5C.%5C.run%7C&hfGT=R%7C&hfSea=2026%7C&player_type=batter&batters_lookup%5B%5D=670541&group_by=name&sort_col=launch_angle&sort_order=desc&chk_stats_launch_angle=on#results">
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
            Data includes all MLB regular season, postseason, and All-Star Game
            appearances, 2019-2026.
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
        </p>
        <Link to="credits">Data and photo credits are here</Link>, and{' '}
        <Link to="release-notes">release notes here</Link>. You can also{' '}
        <a href="mailto:ruhee.dewji@gmail.com">email me</a>.
        <p>Sincerest and most sheepish apologies to Dylan Cease. 👑</p>
      </footer>
    </div>
  );
};
