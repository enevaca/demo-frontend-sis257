import http from "../http-common";
import Cookies from "js-cookie";

export default {
  getUserLogged() {
    return Cookies.get("userLogged");
  },
  deleteUserLogged() {
    return Cookies.remove("userLogged");
  },
  async login(user, password) {
    var userDB = {};
    password = require("crypto").createHmac("sha256", "Sis257").update(password).digest("hex");
    await http.get(`/users/${user}/${password}`).then(response => {
      userDB = response.data;
      if (user === userDB.usuario && password === userDB.clave) {
        const userCookie = { user: userDB.usuario, rol: userDB.rol };
        Cookies.set("userLogged", userCookie, { expires: (1 / 1440) * 30 }); //Expira en 30 minutos
        return userCookie;
      } else return "";
    });
  },
  register() {
    return "";
  }
};
