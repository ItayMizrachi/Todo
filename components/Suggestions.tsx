"use client";
import fetchSuggestions from "@/lib/fetchSuggestions";
import { useBoardStore } from "@/store/BoardStore";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Suggestions = () => {
  const [board] = useBoardStore((state) => [state.board]);
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<string>("");

  useEffect(() => {
    if (board.columns.size === 0) return;
    setLoading(true);

    const fetchSuggestionsFunc = async () => {
      const suggestion = await fetchSuggestions(board);
      setSuggestion(suggestion);
      setLoading(false);
    };

    fetchSuggestionsFunc();
  }, [board]);

  return (
    <div className="flex items-center justify-center py-4 px-5 md:py-5">
      <p className="flex items-center p-5 pr-5 text-md shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
        <UserCircleIcon
          className={`inline-block mr-1 h-10 w-10 text-[#0055D1] ${
            loading && "animate-spin"
          }`}
        />
        {suggestion && !loading
          ? suggestion
          : "GPT is summarising your tasks for the day..."}
      </p>
    </div>
  );
};

export default Suggestions;
