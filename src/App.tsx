import { GameScoreBarChart } from "./GameScoreBarChart";
import { VeloBarChart } from "./VeloBarChart";
import { BreakingVeloBarChart } from "./BreakingVeloBarChart";
import { K9BarChart } from "./K9BarChart";

export function App() {
  return (
    <div className="container">
      <h1>👨🏻 STACHECAST 🧔🏻‍♂️</h1>
      <p>
        On September 7, Dylan Cease's{" "}
        <a href="https://baseballsavant.mlb.com/player-scroll/game?gamePk=824958&player_id=656302">
          velo was down
        </a>{" "}
        and, for the first time in awhile, <a href="https://bloximages.chicago2.vip.townnews.com/daytondailynews.com/content/tncms/assets/v3/editorial/1/a9/1a9e0a1f-68dd-56e0-a2f6-ac8e3af5bb16/6a9f7871e7e50.image.jpg?resize=1763%2C1176">so was his facial hair</a>. What this
        website asks is: are those things related?
      </p>
      <div className="chart-container">
        <p>In 2026, Cease's velo is inversely related to the amount of hair on his face.</p>
        <VeloBarChart />
        <BreakingVeloBarChart />
        <p>Cease generally has higher game scores with a full beard, though, and all of his best games by game score (<a href="https://www.mlb.com/bluejays/video/dylan-cease-take-no-hitter-into-7th-in-blue-jays-win">a no-hit bid into the 7th</a>, <a href="https://www.mlb.com/video/dylan-cease-flirts-with-no-hitter-in-blue-jays-win">a no-hit bid into the 9th</a>, and <a href="https://www.mlb.com/news/dylan-cease-pitches-complete-game-shutout-al-cy-young-award-case
        ">a CG shutout</a>) were on full-beard or long-beard days.</p>
        <GameScoreBarChart />
        <p>His strikeouts are also highest with a beard.</p>
        <K9BarChart />
      </div>
      <footer>
        <p>
          Brought to you by{" "}
          <a href="https://bsky.app/profile/ruhee.ca">the stupid brain</a>{" "}
          behind the David Price Nickname Generator (RIP) and the Stanton
          Strikeout Tracker (also RIP). Please{" "}
          <a href="mailto:ruhee.dewji@gmail.com">
            send me feedback or bug reports
          </a>
          .
        </p>

        <p>
          Pitch data via{" "}
          <a href="https://baseballsavant.mlb.com/savant-player/dylan-cease-656302?stats=gamelogs-r-pitching-mlb&season=2026">
            Baseball Savant and Statcast
          </a>
          . Beard data via MLB highlight packages and my eyes. Exceptional
          product management from{" "}
          <a href="https://bsky.app/profile/gareths.bsky.social">Gareth</a> and
          data science advice from{" "}
          <a href="https://bsky.app/profile/pointsman.bsky.social">Chris</a>.
          Perfect name thanks to{" "}
          <a href="https://bsky.app/profile/phrichards.ca">Phil</a>.{" "}
        </p>
        <p>
          With sincerest and most sheepish apologies to Dylan Cease, a king
          among starters. Keep the beard, IMO.
        </p>
      </footer>
    </div>
  );
}
