<template>
  <textarea
    class="textbox"
    type="textarea"
    id="USERNAME"
    rows="1"
    columns="3"
    placeholder="Username"
    style="position: relative; top: -200x; left: 866px"
  ></textarea>
  <input
    type="password"
    class="textbox"
    input
    id="PASSWORD"
    rows="1"
    columns="3"
    placeholder="Password"
    style="position: relative; top: 40px; left: 700px"
  />

  <div class="Buttons">
    <button
      class="buttons"
      style="position: relative; top: 30px; right: -150px"
      @click="$router.push('/')"
      id="GOBACK"
    >
      New Account
    </button>
    <button
      class="buttons"
      style="position: relative; top: 30px; left: 160px"
      @click="$router.push('/dashboard')"
      id="SUBMIT"
    >
      Submit
    </button>
  </div>
</template>

<style scoped>
.Buttons {
  position: relative;
  top: 30px;
  left: 718px;
  max-width: 400px;
}
.textbox {
  resize: none;
  width: 10%;
  padding: 10px;
}

.buttons {
  position: relative;
  padding: 5px;
}
</style>
