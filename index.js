// ------------------------------------------------- first program -----------------------------------------------------

const caller = new Promise((resolve, reject) => {
    fetch("https://cat-fact.herokuapp.com/facts")
        .then(response => response.json())
        .then(data => {
            if (data) {
                resolve(data);
            } else {
                reject('No data received');
            }
        })
        .catch(err => {
            reject(err);
        });
});

caller.then((result) => {
    console.log(result);
})
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("finally done with promises");
    });


    // --------------------------------------------- second program -------------------------------------------------------

const obj = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "rahul", password: "06062003" });
    }, 4000)
})

obj.then((result) => {
    return result.username
})
    .then((outp) => {
        console.log(outp)
    })
    .catch((err) => {
        console.log(err)
    })