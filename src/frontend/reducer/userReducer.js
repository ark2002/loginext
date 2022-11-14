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
          liked: false,
        };
      });
    case "LIKETOGGLE":
      return state.map((user) =>
        user.id.value === payload
          ? { ...user, liked: !user.liked }
          : { ...user }
      );
    case "EDITUSER":
      return state.map((user) =>
        user.id.value === payload.id.value ? { ...payload } : user
      );
    case "DELETEUSER":
      return state.filter((user) => user.id.value !== payload);
    default:
      return "";
  }
};
