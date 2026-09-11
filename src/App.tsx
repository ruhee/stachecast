import { GameScoreBarChart } from "./GameScoreBarChart";
import ImageLabelChart from "./TestChart";
import { VeloBarChart } from "./VeloBarChart";

export function App() {
  return (
    <div className="container">
    <h1>👨🏻 STACHECAST 🧔🏻‍♂️</h1>
    <p>On September 7, Dylan Cease's velo was down and so was his facial hair. What this website asks is: are those things related?</p>
      <div className="chart-container">
        <GameScoreBarChart />
        <VeloBarChart />
      </div>
      <footer>
        <p>Brought to you by <a href="https://bsky.app/profile/ruhee.ca">the stupid brain</a> behind the David Price Nickname Generator (RIP) and the Stanton Strikeout Tracker (also RIP). Please <a href="mailto:ruhee.dewji@gmail.com">send me feedback or bug reports</a>.</p>
        <p>Credits:</p>
        <ul>
          <li>Pitch data via <a href="https://baseballsavant.mlb.com/savant-player/dylan-cease-656302?stats=gamelogs-r-pitching-mlb&season=2026">Baseball Savant and Statcast</a></li>
          <li>Beard data via MLB highlight packages and my eyes</li>
          <li>Exceptional product management from <a href="https://bsky.app/profile/gareths.bsky.social">Gareth</a> and data science advice from <a href="https://bsky.app/profile/pointsman.bsky.social">Chris</a></li>
          <li>Perfect name thanks to <a href="https://bsky.app/profile/phrichards.ca">Phil</a></li>
        </ul>
        <p>With sincerest and most sheepish apologies to Dylan Cease, a king among starters</p>
      </footer>
    </div>
  )
}
