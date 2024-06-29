import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestions = async (board: Board) => {
  const todos = formatTodosForAI(board);

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });

  let content;
  if (res.ok) {
    const GPTdata = await res.json();
    content = GPTdata.content;
  } else {
    // Handle the case where the response is not OK
    content = "Error: Unable to fetch suggestions";
  }

  return content;
};

export default fetchSuggestions;
