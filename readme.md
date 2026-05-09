# @rbnlffl/race

![latest version](https://badgen.net/npm/v/@rbnlffl/race)
![npm downloads a week](https://badgen.net/npm/dw/@rbnlffl/race)
![typescript types](https://badgen.net/npm/types/@rbnlffl/race)
![license](https://badgen.net/npm/license/@rbnlffl/race)

> Whoever resolves first, wins! 🏃‍♂️

Teeny-tiny wrapper around [`Promise.race`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) that adds a timeout.

## Installation

```bash
npm i @rbnlffl/race
```

## Usage

```typescript
import race from "@rbnlffl/race";

// race a single promise against a timeout
const result = await race(someAsyncOperation(), 5000);

// race multiple promises: resolves with whichever settles first
const first = await race([fetchFromPrimary(), fetchFromFallback()], 5000);
```

If the timeout expires before any promise settles, `race` rejects with an `Error`:

```sh
Error: Not settled after 5000ms!
```

## License

[MIT](https://opensource.org/license/MIT)
