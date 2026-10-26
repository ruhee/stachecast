import { Link } from "react-router-dom";

export const ReleaseNotes = () => (
  <div>
    <h2>Release notes</h2>
    <p>
      It&rsquo;s sorta funny to treat this thing like a serious piece of software.
    </p>
    <ul>
      <li>
        <i>October 27, 2026:</i> Added <Link to="credits">photo credits</Link>.
      </li>
    </ul>
  </div>
);
