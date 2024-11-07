const getProperty = <T>(obj: T, property: keyof T) => {
  return obj[property];
};

