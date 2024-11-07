const countWordOccurrences = (str: string, query: string): number => {
  return str.toLowerCase().split(query.toLocaleLowerCase()).length - 1;
};

