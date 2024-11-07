const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
  for (const key of keys) {
    if (!(key in (obj as object))) {
      return false;
    }
  }
  return true;
};
