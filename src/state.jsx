import { useResolvedPath } from "react-router-dom";

const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@ya.ru",
  id: 1,
  about: "Тут я рассказываю о себе...",
  avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
};

const users = {
  0: {name: "Валерия", lastname: "Енютина", id: 4}, 
  1: {name: "Ипатий", lastname: "Яблочков", id: 14},
  2: {name: "Серж", lastname: "Петров", id: 22},
  3: {name: "Константин", lastname: "Тетерин", id: 7},
  4: {name: "Владислав", lastname: "Енютин", id: 12},
  5: {name: "Евгения", lastname: "Петрова", id: 8},
}

export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}
export function getUsers() {
  return users;
}