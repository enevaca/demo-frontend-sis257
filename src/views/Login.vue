<template>
  <div class="login">
    <h1 class="title">Iniciar Sesión</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#user">Usuario:</label>
      <input
        v-model="user"
        class="form-input"
        type="text"
        required
        id="user"
        placeholder="Usuario"
      />
      <label class="form-label" for="#password">Contraseña:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Contraseña"
      />
      <p v-if="error" class="text-danger">
        Has introducido mal el usuario o la contraseña.
      </p>
      <input class="form-submit" type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import auth from "../services/AuthDataService";

export default {
  data() {
    return {
      user: "",
      password: "",
      error: false
    };
  },
  methods: {
    async login() {
      try {
        await auth.login(this.user, this.password);
        if (auth.getUserLogged()) { 
          this.$emit("update-user", auth.getUserLogged())
          this.$router.push("/");
        }
        else this.error = true;
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    }
  }
};
</script>

<style>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
</style>
