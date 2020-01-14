export const ConsoleLog = (msg: string, isError = false): void => {
  if (!msg) return;

  if (isError) {
    console.error(msg);
  } else {
    console.log(msg);
  }
};