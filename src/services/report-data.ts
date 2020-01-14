export const getData = (data: any) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 6000);
  });
};