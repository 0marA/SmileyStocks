const { default: accounts } = await import("./accounts.json", {
  assert: {
    type: "json",
  },
});
//console.log(accounts[username][0].password);
console.log(accounts);
