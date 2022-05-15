// answer 2

const key = "13cc7e028dcf4a7d9d4ae4004d1aa685";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;
const answer = document.querySelector(".answers");


async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data.results;
    console.log(result);
    console.log(data.results.length);
    console.log(data.results[2].tags.length);
    answer.innerHTML = "";
    for (i = 0; i < result.length; i++) {
      console.log(i.rating);
      if (i === 8) {
        break;
      }
      answer.innerHTML += ` <div class="dynamic-content"> <h2>${result[i].name}</h2>
                                    <p>Rating:${result[i].rating}</p>
                                    <p>No. of tags:${result[i].tags.length}</p>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getData();
