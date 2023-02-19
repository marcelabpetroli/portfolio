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
    <header class="hero">
      <section class="heading articles">
        <h3 class="heading__primary">Articles</h3>
        <div class="heading__primary--sub">
          <p>Write</p>
          <p>Share</p>
          <p>Repeat</p>
        </div>
        <div class="heading__icon">
          <img class="heading__icon--sub" src="../assets/write.png" alt="" />
          <img class="heading__icon--sub" src="../assets/share.png" alt="" />
          <img class="heading__icon--sub" src="../assets/repeat.png" alt="" />
        </div>
      </section>
    </header>

    <section class="navigation">
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <router-link
              class="navigation__link"
              :to="{ name: 'Main', hash: '#projects' }"
              >Projects</router-link
            >
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
            <router-link class="navigation__link" :to="{ name: 'Main' }">
              Home</router-link
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

    <section class="content slider-thumb">
      <h3 class="content__title">Web Development Bootcamp: my experience</h3>
      <p class="content__main">
        Reinventing oneself professionally can be a challenging journey, it
        requires determination and a willingness to take risks. The tech
        industry has become a popular choice for career changers, offering
        endless opportunities for growth, high salaries, and the chance to work
        on impactful projects.
      </p>
      <p class="content__main">
        My journey towards a career in tech began with a degree in psychology,
        which I realized by the end it wasn't my passion. I took a leap of
        faith, and traveled abroad to live in San Francisco. Although I didn't
        end up making it my permanent home, I'm grateful for the experiences and
        growth it provided, as well as being the place that kindled my interest
        for the tech industry.
      </p>
      <p class="content__main">
        After teaching English in Madrid for a few years, I felt the urge to
        find a career that offered stability, growth, and excitement. The
        uncertainty of whether I had what it took to be a developer was real,
        but I was inspired by friends who had successfully transitioned into
        tech through bootcamps. I reached out to alumni and the overwhelmingly
        positive feedback from those who had attended Adalab, made me confident
        in my decision to enroll.
      </p>
      <p class="content__main">
        The Adalab web development program is built on three key pillars: Agile
        methodology, collaborative teamwork, and self-driven learning. Over the
        course of 14 weeks, we tackled a diverse range of projects, some solo,
        some through pair programming, and others as part of a team. Despite
        being fully remote, it only served to enhance our ability to be
        proactive in finding solutions and effectively communicating with our
        project partners.
      </p>
      <p class="content__main">
        The course is centered around front-end development, with a
        comprehensive introduction to back-end technologies. The program is
        structured into four modules: HTML & CSS, JavaScript and React for front
        and Node.js, Express, and SQLite for back. With a well-rounded
        curriculum and a focus on hands-on, practical experience, we gained the
        skills and knowledge needed to be well prepared to start as front-end
        developers.
      </p>
      <p class="content__main">
        The most valuable aspect of my experience was the strong sense of
        collaboration and friendship among the group. For me it became clear
        that being a developer is all about working as a team, exchanging
        knowledge and helping one another grow through constant feedback.
      </p>

      <p class="content__main">
        My take on the program is that yes, a bootcamp has limitations, it
        hasn’t taught me all the technologies available, it hasn’t made my logic
        thinking one hundred times better, and it hasn’t guaranteed I would have
        a job at the end. Although it has taught me to be resourceful, it has
        given me the tools to continue learning autonomously and not be afraid
        of failing. Additionally, this experience has sharpened my soft skills,
        enabling me to communicate more effectively, work collaboratively with
        my team, manage my time more proficiently, and approach problem-solving
        with a more strategic mindset.
      </p>
      <p class="content__main">
        Now, one month after finishing the bootcamp, I am confident that I made
        the right choice and that my career in tech will be nothing short of
        exciting. Here is to continue learning, staying curious and continuous
        refactoring! 😀
      </p>
      <p class="content__small">By Marcela | February 2023</p>
    </section>
  </div>
  <footer class="footer">
    <RouterLink class="navigation__link footer__home" to="/">Home |</RouterLink>
    <p>Developed by Marcela</p>
  </footer>
</template>

<script>
import ContactMe from "../views/ContactMe.vue";

export default {
  data() {
    return {
      displaycontact: false,
    };
  },
  components: {
    ContactMe,
  },
};
</script>

<style lang="scss" scoped>
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
.hero {
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
  min-height: 40vh;

  @media (min-width: 1000px) {
    width: 92%;
    gap: 5rem;
  }

  @media (min-width: 1700px) {
    width: 100%;
    margin: 20px 0 0 0;
    height: 50vh;
  }

  &__box {
    height: 348px;
    max-width: 230px;

    &--image {
      width: 100%;
      height: 100%;
      padding-top: 20px;
      clip-path: polygon(0% 0, 100% 0, 100% 75%, 0 100%, 0 10%);
      border-radius: 69px;
      animation: moveInRight 1s ease-out;
    }
  }
}

.heading__primary--sub {
  font-size: 1.6rem;
  letter-spacing: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-transform: uppercase;
  width: 100%;

  & p {
    padding-left: 1.3rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
      padding-left: 1.4rem;
    }
  }
}
.heading__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  &--sub {
    width: 45px;
    height: 45px;

    @media (min-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }
}
.articles {
  animation: moveInRight 1s ease-out;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 3rem;
  text-align: left;
  gap: 15px;
  line-height: 30px;

  @media (min-width: 768px) {
    padding: 4rem 4rem;
  }

  @media (min-width: 1084px) {
    padding: 4rem 20rem 4rem 20rem;
    line-height: 40px;
  }

  @media (min-width: 1600px) {
    padding: 4rem 10rem 4rem 10rem;
    line-height: 40px;
  }

  &__title {
    font-size: 1.8rem;

    @media (min-width: 768px) {
      font-size: 2.2rem;
    }

    @media (min-width: 1084px) {
      font-size: 3rem;
    }
  }

  &__main {
    font-size: 1.6rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }

    @media (min-width: 1084px) {
      font-size: 2.4rem;
    }
  }

  &__small {
    width: 100%;
    text-align: right;
    font-weight: bold;
    font-size: 1.6rem;
  }
}

.footer {
  display: flex;
  gap: 6rem;

  &__home {
    color: rgb(200, 169, 222);

    &:hover {
      color: white;
    }
  }
}
</style>
