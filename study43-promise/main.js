const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise); //Status:pending

fetchPromise.then((resp) => {
  console.log(`${resp.status}`);
});

//
//

const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise2
  .then((resp2) => {
    console.log(resp2.ok)//Status:ok
    return resp2.json();
  })
  .then((data) => {
    console.log(data[1].name);
  });

//
//

const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise3
  .then((resp3) => {
    if (!resp3.ok) {
      throw new Error(`HTTP error: ${resp3.status}`);
    }
    return resp3.json();
  })
  .then((dat3) => {
    console.log(dat3[3].name);
    return dat3;
  })
  .then((dat4) => {
    console.log(dat4[4].name);
  })
  .catch((paramError) => {
    console.error(`Could not get products: ${paramError}`);
  });
