# @rbnlffl/prush

![latest version](https://badgen/npm/v/@rbnlffl/prush)
![npm downloads a week](https://badgen/npm/dw/@rbnlffl/prush)
![typescript types](https://badgen.net/npm/types/@rbnlffl/prush)
![license](https://badgen/npm/l/license/@rbnlffl/prush)

> **pr**omise r**ush** — As in like "resolve until then, or else..." 🌝

Teeny-tiny wrapper around [`Promise.race`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race).

## Installation

```bash
npm i @rbnlffl/prush
```

## Usage

```typescript
import prush from "@rbnlffl/prush";

const charmander = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
  return response.json();
};

const data = await prush(charmander(), 5000);
```

If the promise resolves within 5000ms, you'll get the result. If not, it'll reject.

## License

[MIT](https://opensource.org/license/MIT)
