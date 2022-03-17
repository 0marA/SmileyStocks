<template>
	<textarea class="textbox" type="textarea" id="USERNAME" rows="1" columns="3" placeholder="Username"> </textarea>
	<textarea class="textbox" type="text" id="PASSWORD" rows="1" columns="3"> </textarea>
    <br>
    <button class="buttons" onclick="submit()" id="SUBMIT"> Submit </button>
    <button class="buttons" onclick="newAccount()" id="newAccount"> New Account </button>
</template>

<style scoped>
.textbox{
    resize: none;
    width: 10%;
}

.buttons {
    position: relative;
    right: -150px;
}
</style>