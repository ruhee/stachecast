import { GameScoreBarChart } from "./components/charts/GameScoreBarChart";
import { VeloBarChart } from "./components/charts/VeloBarChart";
import { BreakingVeloBarChart } from "./components/charts/BreakingVeloBarChart";
import { K9BarChart } from "./components/charts/K9BarChart";

export function App() {
  return (
    <div className="container">
      <h1>👨🏻 STACHECAST 🧔🏻‍♂️</h1>
      <p>
        On September 7, Dylan Cease's{" "}
        <a href="https://baseballsavant.mlb.com/player-scroll/game?gamePk=824958&player_id=656302">
          velocity was down
        </a>{" "}
        and, for the first time in awhile,{" "}
        <a href="./cease-sept7.jpg">
          so was his facial hair
        </a> (compare to his <a href="./cease-sept2.jpg">previous start</a>). What this website asks is: are those things related?
      </p>
      <div className="chart-container">
        <p>
          In 2026, Cease's velo is inversely related to the amount of hair on
          his face.
        </p>
        <VeloBarChart />
        <p>
          (Tap or click the legend to turn datasets on/off, and tap or hover on
          individual bars for numbers.)
        </p>
        <BreakingVeloBarChart />
        <p>
          Cease achieves higher game scores with a full beard, though, and all
          of his best games by game score (
          <a href="https://www.mlb.com/bluejays/video/dylan-cease-take-no-hitter-into-7th-in-blue-jays-win">
            a no-hit bid into the 7th
          </a>
          ,{" "}
          <a href="https://www.mlb.com/video/dylan-cease-flirts-with-no-hitter-in-blue-jays-win">
            a no-hit bid into the 9th
          </a>
          , and{" "}
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
          His strikeouts follow the velo trend a little more, but they're
          highest with the short beard. (<em>Really</em> small sample size,
          though: only 3 starts in 2026 with this beard type)
        </p>
        <K9BarChart />
      </div>
      <p>
        Can we conclude anything from this? Perhaps we still need more data...{" "}
        <a href="https://en.wikipedia.org/wiki/List_of_facial_hairstyles">
          let's get cracking, Dylan.
        </a>
      </p>
      <footer>
        <p><em>Data includes 2026 appearances through September 13. 2019-2025 coming soon/eventually</em></p>
        <p>
          Brought to you by{" "}
          <a href="https://bsky.app/profile/ruhee.ca">Ruhee</a>, the stupid
          brain behind the{" "}
          <a href="https://nationalpost.com/sports/baseball/mlb/toronto-blue-jays-fan-created-a-david-price-nickname-generator-and-the-ace-thought-it-was-pretty-funny">
            David Price Nickname Generator
          </a>{" "}
          and the Stanton Strikeout Tracker. Please{" "}
          <a href="mailto:ruhee.dewji@gmail.com">send feedback</a>.
        </p>

        <p>
          Pitch data via{" "}
          <a href="https://baseballsavant.mlb.com/savant-player/dylan-cease-656302?stats=gamelogs-r-pitching-mlb&season=2026">
            Baseball Savant and Statcast
          </a>
          . Beard data via MLB highlight packages and my eyes. All other data
          from{" "}
          <a href="https://www.baseball-reference.com/">Baseball Reference</a>.
          Exceptional advice by{" "}
          <a href="https://bsky.app/profile/gareths.bsky.social">Gareth</a> and{" "}
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
