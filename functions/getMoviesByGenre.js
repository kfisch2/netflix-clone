import fetch from "node-fetch";

exports.handler = async function (e) {
  const body = JSON.parse(e.body)
  const genre = body.genre;
  const pageState = body.pageState;
  const url = process.env.ASTRA_ENDPOINT;
  const query = `
  query getMoviesByGenre {
    movies(value: 
      { genre: ${JSON.stringify(genre)} }, 
      orderBy: [year_DESC], 
      options: { pageSize: 3, pageState: ${JSON.stringify(pageState)} }
    ) {
      values {
        title,
        synopsis,
        year,
        duration,
        thumbnail
      }
      pageState
    }
  }
    `;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-cassandra-token": process.env.ASTRA_TOKEN,
    },
    body: JSON.stringify({ query }),
  });

  try {
    const responseBody = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(responseBody),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
