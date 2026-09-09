import { LineChart } from "./LineChart"
import { RadialChart } from './RadialChart';

export function App() {
  return (
    <>
    <h1></h1>
    <p>On September 7, Dylan Cease's velo was way down and so was his facial hair. What this website asks is: are those things related?</p>
      <div><RadialChart />
      <LineChart /></div>
      <footer>
        <p>Brought to you by <a href="https://bsky.app/profile/ruhee.ca">the stupid brain</a> behind the David Price Nickname Generator (RIP) and the Stanton Strikeout Tracker (also RIP).</p>
        <p>Credits:</p>
        <ul>
          <li>Pitch data via <a href="https://baseballsavant.mlb.com/savant-player/dylan-cease-656302?stats=gamelogs-r-pitching-mlb&season=2026">Baseball Savant and Statcast</a></li>
          <li>Beard data mainly via MLB highlight packages</li>
          <li>Perfect name via <a href="https://bsky.app/profile/phrichards.ca">Phil</a></li>
          <li>Heavy assistance from Gareth and Chris</li>
        </ul>
        <p>With sincerest and most sheepish apologies to Dylan Cease</p>
      </footer>
    </>
  )
}
