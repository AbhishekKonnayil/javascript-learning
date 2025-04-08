const props = [{ id: 1, name: "john" }, { id: 2, name: "jane" }];
const [, { id, name }] = props;
console.log(name)
console.log(id)