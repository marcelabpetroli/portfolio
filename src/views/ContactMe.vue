<template>
  <section class="contact">
    <h1 class="contact__title">
      Contact me |
      <img class="contact__image" src="../assets/message.png" alt="envelope" />
    </h1>
    <form class="form">
      <input
        class="form__input"
        v-model="emailData.name"
        type="text"
        placeholder="Your Name"
      />
      <input
        class="form__input"
        v-model="emailData.email"
        type="text"
        placeholder="Your Email"
      />
      <textarea
        v-model="emailData.bodyText"
        class="form__input"
        type="message"
        id="message"
        name="message"
        placeholder="What's on your mind?"
        cols="25"
        rows="4"
        required
      ></textarea>
      <input
        class="form__input btn"
        @click.prevent="SendEmail()"
        type="submit"
      />
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      emailData: {
        name: "",
        email: "",
        bodyText: "",
      },
    };
  },
  methods: {
    SendEmail() {
      axios
        .post(
          "https://lqjg7fuplj.execute-api.eu-west-3.amazonaws.com/prod/sendemail",
          this.emailData
        )
        .then((response) => {
          console.log(response);
          alert("Email sent!");
        })
        .catch((err) => {
          console.log(err);
          alert("Email Failed");
        });
    },
  },
};
</script>

<style lang="scss">
.contact {
  background-color: #444348;
  border-radius: 25px;
  padding: 40px;

  @media (min-width: 1084px) {
    padding: 100px;
  }

  &__title {
    padding-bottom: 20px;
    font-size: 3rem;
  }

  &__image {
    width: 55px;
    height: 55px;
    margin-bottom: -12px;
  }
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &__input {
    width: 280px;
    font-size: 1.8rem;
    padding: 10px;
    font-family: Avenir, Helvetica;
    border: none;

    @media (min-width: 768px) {
      width: 480px;
      font-size: 1.8rem;
    }
  }
}

.btn {
  width: 100px;
  margin-top: 10px;
  background-color: #aa6697;
  color: white;
  border-radius: 3px;
  font-size: 1.6rem;

  &:hover {
    color: #aa6697;
    background-color: white;
    cursor: pointer;
  }
}
</style>
