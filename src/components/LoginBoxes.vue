<template>
  <div class="UsernameTextbox">
    <textarea
      class="textbox"
      type="textarea"
      id="USERNAME"
      rows="1"
      columns="3"
      placeholder="Username"
    ></textarea>
  </div>
  <div class="PasswordTextbox">
    <input
      type="password"
      class="textbox"
      input
      id="PASSWORD"
      rows="1"
      columns="3"
      placeholder="Password"
    />
  </div>
  <div class="Buttons">
    <button
      class="buttons"
      style="position: relative; top: 30px"
      @click="$router.push('/newaccount')"
      id="newAccount"
    >
      New Account
    </button>
    <button
      class="buttons"
      style="position: relative; top: 30px; left: 180px"
      @click="$router.push('/dashboard')"
      id="submit"
    >
      Submit
    </button>
  </div>
</template>

<style scoped>
.UsernameTextbox {
  position: relative;
  top: 30px;
}

.PasswordTextbox {
  position: relative;
  top: 50px;
}

.SubmitButton {
  position: relative;
  top: 80px;
  right: 12px;
}

.Buttons {
  position: relative;
  top: 40px;
  right: 150px;
}
.textbox {
  resize: none;
  width: 10%;
  padding: 10px;
}

.buttons {
  position: relative;
  right: -150px;
  padding: 10px;
}
</style>
