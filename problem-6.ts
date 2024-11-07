interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (profile: Profile, update: object): Profile => {
  return {
    ...profile,
    ...update,
  };
};

