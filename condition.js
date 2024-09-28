const myPromise = new Promise(function (resolve, reject) {
    const succes = "naila";
  
    if (succes === "Naila") {
      resolve();
    } else {
      reject();
    }
  });
  
  myPromise
    .then(function (result) {
      console.log("nama saya benar");
    })
    .catch(function (error) {
      console.log("nama saya tidak benar");
    })
    .finally(function () {
      console.log("sistem promise ini telah selesai membaca variabel promise");
    });