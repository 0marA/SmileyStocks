<template>
  <div class="usernameTextbox">
    <textarea
      class="textbox"
      type="textarea"
      id="USERNAME"
      rows="1"
      columns="3"
      placeholder="Username"
    ></textarea>
  </div>
  <div class="passwordTextbox">
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
  <div class="submitButton">
    <button class="buttons" onclick="submit()" id="SUBMIT">Submit</button>
  </div>
  <div class="newAccountButton">
    <button class="buttons" onclick="newAccount()" id="newAccount">
      New Account
    </button>
  </div>
</template>

<style scoped>
.usernameTextbox {
  position: relative;
  top: 30px;
}

.passwordTextbox {
  position: relative;
  top: 50px;
}

.submitButton {
  position: relative;
  top: 80px;
  right: 10px;
}

.newAccountButton {
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
