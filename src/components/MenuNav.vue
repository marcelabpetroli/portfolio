<template>
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
</template>

<script>
export default {
  data() {
    return {
      displaycontact: false,
    };
  },
};
</script>

<style lang="scss">
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
</style>
