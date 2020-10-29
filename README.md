# Cumul.io React component issue

The `useCumulio` hooks state is not fully immutable. The `state.filters[n]` reference stays the same even if filters are changed.

## Run

Put your own dashboard ID, authKey and authToken in `src/index.js`.

Run

```
npm install
npm start
```

See console logs, change filters in a dashboard, no "Filters changed!"
message is seen after the first change.
