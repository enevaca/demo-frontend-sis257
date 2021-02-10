<template>
  <div>
    <!-- <div id="nav">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/about">Acerca De</router-link>  |
    <router-link to="/tasks">Tasks</router-link>
  </div> -->

    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container">
        <div class="header-container d-flex align-items-center">
          <div class="logo mr-auto">
            <h1 class="text-light">
              <router-link to="/"><span>SIS257</span></router-link>
            </h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
          </div>

          <nav class="nav-menu d-none d-lg-block">
            <ul>
              <li class="active"><router-link to="/">Inicio</router-link></li>
              <li><router-link to="/about">Acerca De</router-link></li>
              <li><a href="#services">Services</a></li>
              <li v-if="currentRol == 'admin'">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li v-if="authenticate" class="drop-down">
                <a href="">Catálogos</a>
                <ul>
                  <li><router-link to="/tasks">Tareas</router-link></li>
                  <li class="drop-down">
                    <a href="#">Drop Down 2</a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                  <li><a href="#">Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact</a></li>
              <li v-if="authenticate">
                <a href="#contact">Hola {{ currentUser }}</a>
              </li>
              <li v-if="authenticate" class="get-started">
                <router-link to="/login" @click="logout()"
                  >Cerrar Sesión</router-link
                >
              </li>
            </ul>
          </nav>
          <!-- .nav-menu -->
        </div>
        <!-- End Header Container -->
      </div>
    </header>
    <!-- End Header -->

    <!-- ======= Hero Section ======= -->
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container text-center position-relative"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <h1>Your New Online Presence with Bethany</h1>
          <h2>
            We are team of talanted designers making websites with Bootstrap
          </h2>
          <a href="#about" class="btn-get-started scrollto">Get Started</a>
        </div>
      </section>
    <!-- End Hero -->

    <main id="main">
      <router-view @update-user="updateUser" @showImg="showImg" />
    </main>

    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>Bethany</h3>
              <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Web Design</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Marketing</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" /><input
                  type="submit"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container d-md-flex py-4">
        <div class="mr-md-auto text-center text-md-left">
          <div class="copyright">
            &copy; Copyright <strong><span>Bethany</span></strong
            >. All Rights Reserved
          </div>
          <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bethany-free-onepage-bootstrap-theme/ -->
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div class="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>
    <!-- End Footer -->

    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  </div>
</template>
<script>
import auth from "./services/AuthDataService";

export default {
  data() {
    return {
      authenticate: auth.getUserLogged(),
      showImgMain: true
    };
  },
  methods: {
    logout() {
      auth.deleteUserLogged();
      this.authenticate = null;
    },
    updateUser(user) {
      this.authenticate = user;
    },
    showImg(show) {
      this.showImgMain = show;
    }
  },
  computed: {
    currentUser() {
      if (this.authenticate) {
        var r = JSON.parse(auth.getUserLogged());
        return r.user;
      } else return "";
    },
    currentRol() {
      if (this.authenticate) {
        var r = JSON.parse(auth.getUserLogged());
        return r.rol;
      } else return "";
    }
  }
};
</script>
