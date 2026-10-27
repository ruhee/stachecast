import { Link } from 'react-router-dom';

export const ReleaseNotes = () => (
  <div>
    <h2>Release notes</h2>
    <p>Obviously we are doing some very serious software engineering.</p>
    <ul>
      <li>
        <i>October 27, 2026</i>:
        <ul>
          <li>
            Fixed game score chart data (the max values for &ldquo;full&rdquo;
            and &ldquo;long&rdquo; were reversed).
          </li>
          <li>
            Added <Link to="/credits">photo credits</Link> and release notes.
          </li>
        </ul>
      </li>
    </ul>
  </div>
);
