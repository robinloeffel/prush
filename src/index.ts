const impatientPromise = async <T>(promise: Promise<T>, timeout: number) =>
  Promise.race([
    promise,
    new Promise<string>((reject) => {
      globalThis.setTimeout(() => {
        reject(`Promise not fulfilled after ${timeout.toString()}ms!`);
      }, timeout);
    })
  ]);

export default impatientPromise;
