import fetch from "node-fetch";

exports.handler = async function (e) {
  const limit = JSON.parse(e.body)
  console.log(JSON.parse(e.body))

  const url = process.env.ASTRA_ENDPOINT;
  const query = `
    query getAllGenres {
      reference_list(value: { title: "genre" },
      options: { limit: ${JSON.stringify(limit)} }) {
        values {
          value
        }
      }
    }`;
  console.log(limit);
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
