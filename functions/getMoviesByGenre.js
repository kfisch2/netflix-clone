import fetch from "node-fetch";

exports.handler = async function () {
  const url = process.env.ASTRA_ENDPOINT;
  const query = `
  query getMoviesByGenre {
    movies_by_genre(value: 
      { genre: "Sci-Fi" }, 
      orderBy: [year_DESC]
    ) {
      values {
        title,
        synopsis,
        year,
        duration,
        thumbnail
      }
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
