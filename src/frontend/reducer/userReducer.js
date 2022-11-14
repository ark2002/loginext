export const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOADING":
      return { ...state, loading: true };
    case "INITIALSET":
      return {
        ...state,
        userList: payload.map((user) => {
          return {
            ...user,
            fullname: `${user.name.first} ${user.name.last}`,
            website: `${user.name.first.toLowerCase()}${user.name.last.toLowerCase()}.com`,
            profileImg: `https://avatars.dicebear.com/v2/avataaars/{${user.login.username}}.svg?options[mood][]=happy`,
            liked: false,
          };
        }),
        loading: false,
      };
    case "LIKETOGGLE":
      return {
        ...state,
        userList: state.userList.map((user) =>
          user.id.value === payload
            ? { ...user, liked: !user.liked }
            : { ...user }
        ),
      };
    case "EDITUSER":
      return {
        ...state,
        userList: state.userList.map((user) =>
          user.id.value === payload.id.value ? { ...payload } : user
        ),
      };
    case "DELETEUSER":
      return {
        ...state,
        userList: state.userList.filter((user) => user.id.value !== payload),
      };
    default:
      return state;
  }
};
