import { Link } from 'react-router-dom';

export const ReleaseNotes = () => (
  <div>
    <h2>Release notes</h2>
    <p>Obviously we are doing some very serious software engineering.</p>
    <ul>
      <li>
        <i>November 2, 2026</i>: Moved credits into credits page and increased
        footer text size.
      </li>
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
      <li>
        <i>September 19, 2026</i>:
        <ul>
          <li>
            Added{' '}
            <a href="https://www.baseball-reference.com/boxes/TEX/TEX202609180.shtml">
              Sept 18 start
            </a>
            .
          </li>
          <li>Fixed an error with June 16 data (recalculated averages).</li>
        </ul>
      </li>
      <li>
        <i>September 14, 2026</i>: Added{' '}
        <a href="https://www.baseball-reference.com/boxes/TOR/TOR202609130.shtml">
          Sept 13 start
        </a>
        .
      </li>
      <li>
        <i>September 13, 2026</i>: Initial release 🎉
      </li>
    </ul>
  </div>
);
