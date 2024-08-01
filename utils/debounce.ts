const timer: Record<string, any> = {};
export const debounce = (key: string, fn, timeout: number = 500): void => {
  if (timer[key]) {
    clearTimeout(timer[key]);
    timer[key] = undefined;
  }

  timer[key] = setTimeout(() => {
    try {
      fn();
      console.log("function called");
    } catch (e) {
      console.log("error in debounce", e);
    }
  }, timeout);
};
