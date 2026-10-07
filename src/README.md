### Development

Install dependencies:

```bash
$ npm install
```

Run the parcel server:

```bash
$ npx parcel src/index.html
```

Parcel caches really aggressively. If the hot reload doesn't pick up your changes, blow away the cache first:

```bash
$ rm -rf dist .parcel-cache
```

Then restart the server.

To lint and format:

```bash
$ npm run format # Prettier
$ npm run lint # ESLint
$ npm run lint:fix # ESLint autofix
```

### Deployment

To deploy, run this to push the built files to the `gh-pages` branch, where the Github Action will pick it up and push to the website.

```bash
$ npm run deploy
```
