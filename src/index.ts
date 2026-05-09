interface Race {
  <T>(promise: Promise<T>, timeout: number): Promise<T>;
  <T extends Promise<unknown>[]>(promises: [...T], timeout: number): Promise<Awaited<T[number]>>;
}

const rejectAfter = async (
  ms: number
) => new Promise<never>((_, reject) => {
  globalThis.setTimeout(() => {
    reject(new Error(`Not settled after ${ms.toString()}ms!`));
  }, ms);
});

const race: Race = async (
  promiseOrPromises: Promise<unknown> | Promise<unknown>[],
  timeout: number
) => Promise.race([
  ...(Array.isArray(promiseOrPromises) ? promiseOrPromises : [promiseOrPromises]),
  rejectAfter(timeout)
]);

export default race;
