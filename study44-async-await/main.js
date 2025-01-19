async function functionName() {
  try {
    const fetchPromise = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    const parseData = await fetchPromise.json()
    console.log(parseData)
  }
  catch (error) {
    console.error(error)
  }
}
functionName()
console.log("this string will show first")

//
//

async function functionFetch() {
  const fetchPromise = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  )
  if (!fetchPromise.ok) {
    console.log(`HTTP error: ${fetchPromise.status}`);
  }
  const parseData = await fetchPromise.json()
  return parseData;
}

functionFetch()
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })

//
//

async function functionFetch2() {
  try {
    const fetchData = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!fetchData.ok) {
      throw new Error(`HTTP error: ${fetchData.status}`);
    }
    const parseData = await fetchData.json();
    console.log(parseData[2])
  }
  catch (error) {
    console.log(`Failed to get data: ${error}`)
  }
}

functionFetch2()

//
//

async function functionFetch3() {
  try {
    const fetchData = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    const parseData = await fetchData.json();
    console.log(parseData[2].price)
  }
  catch (error) {
    console.log(`Failed to get data: ${error}`)
  }
}

functionFetch3()