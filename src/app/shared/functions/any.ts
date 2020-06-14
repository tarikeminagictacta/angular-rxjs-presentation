export const ANY = {
  sumByKeys: (item: any) => {
    const sum = Object.keys(item)
      .map((key) => item[key])
      .reduce((a, b) => a + b, 0);
    return sum;
  },
  findById: (id: any) => {
    return (item: any) => item.id === id;
  },
  getKey: (key: string, defaultValue: any) => {
    return (item: any) => item[key] || defaultValue;
  },
};
