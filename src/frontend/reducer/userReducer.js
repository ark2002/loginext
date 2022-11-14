export const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INITIALSET":
      return payload.map((user) => {
        return {
          ...user,
          fullname: `${user.name.first} ${user.name.last}`,
          website: `${user.name.first.toLowerCase()}${user.name.last.toLowerCase()}.com`,
          profileImg: `https://avatars.dicebear.com/v2/avataaars/{${user.login.username}}.svg?options[mood][]=happy`,
          liked:false
        };
      });
    default:
      return "";
  }
};
