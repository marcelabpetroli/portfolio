<template>
  <div v-if="displaycontact" class="contact__me">
    <div class="contact__me--inner">
      <div
        @click="displaycontact = !displaycontact"
        class="contact__me--button x-button"
      ></div>
      <ContactMe />
    </div>
  </div>
  <div class="column">
    <header class="header">
      <div class="header__image--box">
        <img
          class="header__image--img"
          src="../assets/profile-photo.jpg"
          alt=""
        />
      </div>
      <section class="heading slider-thumb">
        <h3 class="heading__primary">Marcela B Petroli</h3>
        <div class="heading__icons">
          <img class="heading__icons--sub" src="../assets/code.png" alt="" />
          <img class="heading__icons--sub" src="../assets/book.png" alt="" />
          <img
            class="heading__icons--sub"
            src="../assets/mountain.png"
            alt=""
          />
          <img class="heading__icons--sub" src="../assets/branch.png" alt="" />
        </div>
        <p class="heading__sub">Frontend Web Developer</p>
        <div class="heading__social">
          <a
            class="heading__social--media floating-git"
            href="https://github.com/marcelabpetroli"
            target="blank"
            rel="noreferrer"
          >
            <i
              class="fa-brands fa-github heading__social--media--logo moving__git"
            ></i>
          </a>
          <a
            class="heading__social--media floating-in"
            href="https://www.linkedin.com/in/marcelabpetroli/"
            target="blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin heading__social--media--logo"></i>
          </a>
        </div>
      </section>
    </header>
    <section class="navigation">
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a class="navigation__link" href="#projects">Projects</a>
          </li>
          <li class="navigation__item">
            <a
              class="navigation__link"
              href="./resume-marcela-petroli.pdf"
              target="blank"
              rel="noreferrer"
              >Resume</a
            >
          </li>
          <li class="navigation__item">
            <router-link class="navigation__link" :to="{ name: 'Articles' }">
              Articles</router-link
            >
          </li>

          <div @click.prevent="displaycontact = !displaycontact">
            <li class="navigation__item">
              <a class="navigation__link" href="">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </section>
    <section class="about slider-top">
      <h1 class="about__main">Hey there 👋</h1>
      <p class="about__sub">
        I am a web developer from Brazil, currently living in Spain. I've always
        let my curiosity guide me to incredible experiences, from moving to San
        Francisco at 22, to exploring my Italian roots in Torino and teaching
        English in Madrid. Now my curiosity has led me to an amazing journey as
        a web developer. My background in Psychology and teaching brings a
        unique perspective to my projects. I believe in the power of teamwork to
        create high-quality and user-friendly applications.
        <span class="about__sub--detail">Let's get it done 🚀</span>
      </p>
    </section>

    <section class="technology">
      <h2 class="technology__title">Technologies</h2>
      <ul class="technology__logos">
        <li>
          <img
            class="technology__logos--image"
            src="../assets/react.png"
            alt=""
          />
          <p class="technology__logos--text">React</p>
        </li>
        <li>
          <img
            class="technology__logos--image"
            src="../assets/javascript.png"
            alt=""
          />
          <p class="technology__logos--text">JavaScript</p>
        </li>
        <li>
          <img
            class="technology__logos--image"
            src="../assets/node.png"
            alt=""
          />
          <p class="technology__logos--text">NodeJS</p>
        </li>
        <li>
          <img
            class="technology__logos--image"
            src="../assets/sql.png"
            alt=""
          />
          <p class="technology__logos--text">SQLite</p>
        </li>
        <li>
          <img
            class="technology__logos--image"
            src="../assets/html.png"
            alt=""
          />
          <p class="technology__logos--text">HTML5</p>
        </li>
        <li>
          <img
            class="technology__logos--image"
            src="../assets/css.png"
            alt=""
          />
          <p class="technology__logos--text">CSS3</p>
        </li>
        <li>
          <img
            class="technology__logos--image"
            src="../assets/sass.png"
            alt=""
          />
          <p class="technology__logos--text">SASS</p>
        </li>
        <li>
          <img
            class="technology__logos--image"
            src="../assets/git.png"
            alt=""
          />
          <p class="technology__logos--text">Git</p>
        </li>
        <li>
          <img
            class="technology__logos--image"
            src="../assets/github.png"
            alt=""
          />
          <p class="technology__logos--text">GitHub</p>
        </li>
      </ul>
    </section>
  </div>
  <section class="projects" id="projects">
    <h2 class="projects__title">| Projects |</h2>

    <ul class="projects__list">
      <li
        class="projects__item"
        v-for="(items, index) in projectData.projectsArray"
        v-bind:key="items"
      >
        <h2>
          {{ projectData.projectsArray[index].title }}
        </h2>
        <a
          class="projects__web"
          :href="projectData.projectsArray[index].website"
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="projects__image"
            :src="projectData.projectsArray[index].image"
            alt=""
        /></a>
        <div class="projects__links">
          <a
            class="projects__links--code"
            :href="projectData.projectsArray[index].github"
            target="_blank"
            rel="noreferrer"
            ><i class="fa-brands fa-github"></i
          ></a>
          <a
            class="projects__links--code"
            :href="projectData.projectsArray[index].website"
            target="_blank"
            rel="noreferrer"
            ><i class="fa-solid fa-arrow-up-from-bracket"></i
          ></a>
        </div>
      </li>
    </ul>
  </section>
  <footer class="footer">
    <p>Developed by Marcela</p>
  </footer>
</template>
<script>
import ContactMe from "../views/ContactMe.vue";
import jsonData from "../data/projects.json";

export default {
  data() {
    return {
      displaycontact: false,
      projectData: jsonData,
    };
  },
  components: {
    ContactMe,
  },
};
</script>

<style lang="scss">
body {
  height: 100vh;
  background-color: #f0eae3;
}

html {
  font-size: 62.5%;
}

.contact__me {
  position: absolute;
  z-index: 1;
  width: 100%;
  margin-top: 8%;
  animation: animate-contact 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: rgb(241, 239, 239);
  height: 100vh;

  @media (min-width: 1084px) {
    margin-top: 5%;
    height: 70vh;
  }

  &--button {
    position: relative;
    top: 21px;
    left: 10px;
    width: 45px;
    height: 45px;
    background-color: #ebebeb;
    margin-left: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    border-radius: 50px;
    cursor: pointer;

    &:hover {
      border: 2px solid #ac9cee;
      background-color: rgb(197, 176, 234);
    }
  }
}
.x-button::after {
  content: " \002B";
  font-weight: bold;
  font-size: 2.6rem;
  color: black;
}

@keyframes animate-contact {
  from {
    margin-top: -25%;
  }
  to {
    margin-top: 10%;
  }
}

@media (min-width: 1200px) {
  .column {
    max-width: 1500px;
    margin: auto;
  }
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border-radius: 1.5rem;
  background-image: url(https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80);
  background-color: purple;
  background-blend-mode: screen;
  background-size: cover;
  transition: 0.3s;
  width: 80%;
  margin: auto;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.263) 0px 3px 8px;

  @media (min-width: 768px) {
    width: 90%;
    flex-direction: row;
    gap: 5rem;
  }

  @media (min-width: 1700px) {
    width: 100%;
    margin: 20px 0 0 0;
    height: 50vh;
  }

  &__image--box {
    height: 348px;
    max-width: 230px;

    @media (min-width: 1084px) {
      height: 380px;
      max-width: 285px;
    }

    @media (min-width: 1700px) {
      height: 480px;
      max-width: 385px;
    }
  }
  &__image--img {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    clip-path: polygon(0% 0, 100% 0, 100% 75%, 0 100%, 0 10%);
    border-radius: 69px;
    animation: moveInRight 1s ease-out;
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(+10rem);
  }

  80% {
    transform: translateX(-1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

.heading {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  letter-spacing: 1px;
  line-height: 40px;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  padding-bottom: 10px;
  border-top: solid 1px rgb(59, 147, 162);
  border-bottom: solid 1px rgb(59, 147, 162);

  @media (min-width: 768px) {
    width: 55%;
    border: none;
  }

  @media (min-width: 1084px) {
    width: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    padding: 10px;
  }

  &__primary {
    font-size: 2.8rem;
    padding-top: 15px;

    @media (min-width: 1084px) {
      font-size: 3rem;
    }

    @media (min-width: 1700px) {
      font-size: 4rem;
    }
  }

  &__sub {
    font-size: 2rem;
  }

  &__icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    padding-top: 10px;

    &--sub {
      width: 40px;
      height: 40px;
    }
  }

  &__social {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;

    &--media {
      font-size: 3rem;

      &--logo {
        color: rgb(64, 65, 76);
      }
    }
  }
}

@media (min-width: 768px) {
  .slider-thumb::before {
    position: absolute;
    content: "";
    left: 70%;
    top: 65%;
    width: 120px;
    height: 120px;
    background-color: rgb(214, 209, 230);
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape 5s linear infinite;
    display: block;
    z-index: -1;
    -webkit-animation: sliderShape 5s linear infinite;

    @media (min-width: 1084px) {
      left: 90%;
      top: 80%;
    }

    @media (min-width: 1200px) {
      left: 83%;
      top: 90%;
    }
  }
}

@keyframes sliderShape {
  0%,
  100% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  34% {
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
  }
  50% {
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
  }
}
@media (min-width: 1084px) {
  .slider-top::before {
    position: absolute;
    content: "";
    left: 10%;
    top: 50%;
    width: 123px;
    height: 113px;
    background-color: rgb(194, 181, 237);
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShapeTop 5s linear infinite;
    display: block;
    z-index: -1;
    -webkit-animation: sliderShapeTop 5s linear infinite;
  }
}

@keyframes sliderShapeTop {
  0%,
  100% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  34% {
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
  }
  50% {
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
  }
}

.moving__git {
  animation-name: floating-git;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;

  &:hover {
    color: #333;
  }
}

@keyframes floating-git {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 6px);
  }
  to {
    transform: translate(0, -0px);
  }
}

.fa-linkedin {
  animation-name: floating-in;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;

  &:hover {
    color: #0e76a8;
  }
}

@keyframes floating-in {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 6px);
  }
  to {
    transform: translate(0, -0px);
  }
}

.navigation {
  height: 50px;
  width: 100%;
  background-color: rgba(43, 43, 43, 0.7);
  margin: 0 0 20px 0;
  font-size: 1.4rem;

  @media (min-width: 1000px) {
    border-radius: 3px;
    font-size: 1.6rem;
  }

  @media (min-width: 1200px) {
    border-radius: 3px;
    font-size: 2rem;
  }

  &__list {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  &__item {
    list-style: none;
  }

  &__link {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;

    &:hover {
      color: black;
    }
  }
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  80% {
    transform: translateX(1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

.about {
  padding: 20px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 10px;

  @media (min-width: 768px) {
    padding: 20px 50px 20px 50px;
    animation: moveInLeft 1s ease-out;
  }
  @media (min-width: 1084px) {
    padding: 20px 80px 20px 80px;
    line-height: 33px;
  }

  &__main {
    padding-bottom: 15px;
    font-size: 2rem;

    @media (min-width: 1084px) {
      font-size: 3rem;
    }
  }

  &__sub {
    font-size: 1.8rem;
    @media (min-width: 1084px) {
      font-size: 2.2rem;

      &--detail {
        font-weight: bold;
        display: block;
        padding-top: 15px;
      }
    }
  }
}

.technology {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;

  @media (min-width: 1000px) {
    border-radius: 3px;
    padding: 45px;
  }

  &__title {
    font-size: 2.6rem;
    @media (min-width: 1084px) {
      font-size: 3rem;
    }
  }

  &__logos {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    list-style: none;
    padding: 0 2rem 0 2rem;

    @media (min-width: 768px) {
      gap: 40px;
    }

    &--image {
      width: 40px;
      height: 40px;
      opacity: 0.85;

      @media (min-width: 768px) {
        width: 50px;
        height: 50px;
      }

      @media (min-width: 1084px) {
        width: 55px;
        height: 55px;
      }
    }

    &--text {
      font-size: 1.4rem;

      @media (min-width: 1084px) {
        font-size: 1.8rem;
      }
    }
  }
}

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 4rem 0 4rem 0;

  @media (min-width: 1084px) {
    margin: 12rem 0 14rem 0;
  }

  &__title {
    font-size: 3rem;
    background-color: rgba(131, 94, 147, 0.668);
    color: white;
    width: 100%;
    padding: 10px;

    @media (min-width: 1084px) {
      padding: 22px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin: 4rem 0 4rem 0;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  &__item {
    box-shadow: rgba(0, 0, 0, 0.263) 0px 3px 8px;
    border-radius: 25px;
    background-color: rgb(209, 202, 220);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    padding: 10px;
    font-size: 1.4rem;
  }

  &__image {
    height: 160px;
    width: 240px;
    border-radius: 3px;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.263) 0px 3px 8px;
    border: 2px solid rgb(138, 138, 138);

    &:hover {
      border: 2px solid white;
    }
  }

  &__links {
    display: flex;
    gap: 20px;
    border-radius: 25px;
    margin-top: 3px;
    font-size: 2rem;

    &--code {
      display: block;
      width: 40px;
      color: white;
      padding: 2px;
      background-color: rgba(52, 51, 51, 0.563);
      border-radius: 20px;

      &:hover {
        background-color: white;
        color: rgb(49, 49, 49);
      }
    }
  }
}

.footer {
  background-color: rgb(87, 87, 87);
  color: white;
  margin-top: 25px;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.4rem;
  font-weight: bold;
  padding-right: 30px;
  letter-spacing: 1px;

  @media (min-width: 1084px) {
    font-size: 1.6rem;
  }
}
</style>
