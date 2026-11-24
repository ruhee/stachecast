import { Link } from 'react-router-dom';

export const ReleaseNotes = () => (
  <div>
    <h2>Release notes</h2>
    <p>Obviously we are doing some very serious software engineering.</p>
    <ul>
      <li>
        <i>December 2, 2026</i>: ✨ Version 2 ✨
        <ul>
          <li>Added 2019-2025 data (and reclassified 2026).</li>
          <li>Swapped all the graph photos.</li>
          <li>Added a bunch of new data like Stuff+ and appearances.</li>
          <li>Switched from K/9 to K%. #sabermetrics</li>
          <li>Velo is now calculated directly from raw Savant pitch lists.</li>
        </ul>
      </li>
      <li>
        <i>November 19, 2026</i>:
        <ul>
          <li>
            Tinkered with chart display (swapped fonts, updated legend styles,
            etc).
          </li>
        </ul>
      </li>
      <li>
        <i>November 12, 2026</i>:
        <ul>
          <li>
            New header, including{' '}
            <a href="https://www.sportsnet.ca/mlb/article/pretty-unbelievable-blue-jays-dylan-cease-unveils-painting-at-art-gallery-of-ontario/">
              this painting
            </a>
            .
          </li>
        </ul>
      </li>
      <li>
        <i>November 5, 2026</i>:
        <ul>
          <li>
            Hopefully 0% noticeable to everyone but me, but: refactored all the
            charts to avoid repeating things so much.
          </li>
        </ul>
      </li>
      <li>
        <i>November 2, 2026</i>:
        <ul>
          <li>
            Moved credits into credits page and increased footer text size.
          </li>
        </ul>
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
          <li>
            Switched to using a dynamically-generated data file rather than
            hardcoded data in the graphs.
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
        <i>September 14, 2026</i>:
        <ul>
          <li>
            Added{' '}
            <a href="https://www.baseball-reference.com/boxes/TOR/TOR202609130.shtml">
              Sept 13 start
            </a>
            .
          </li>
        </ul>
      </li>
      <li>
        <i>September 13, 2026</i>: Initial release 🎉
      </li>
    </ul>
  </div>
);
