function fetchData(callback) {
    setTimeout(() => {
        callback("Data recieved")
    }, 500);
}
fetchData((Data) => {
    console.log(Data)
});