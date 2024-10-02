import React, { useEffect, useState } from "react";

function IPLTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
        );
        const data = await response.json();
        const sortedTeams = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedTeams);
      } catch (error) {
        console.error("Error fetching IPL data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-10 p-5">
      <h2 className="text-2xl font-bold text-center mb-5">IPL 2022 Points Table (Sorted by NRR)</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-green-500 text-white">
            <th className="py-3 px-4">Rank</th>
            <th className="py-3 px-4">Team</th>
            <th className="py-3 px-4">Played</th>
            <th className="py-3 px-4">Won</th>
            <th className="py-3 px-4">Lost</th>
            <th className="py-3 px-4">Tied</th>
            <th className="py-3 px-4">Points</th>
            <th className="py-3 px-4">NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 text-center py-3">{index + 1}</td>
              <td className="border border-gray-300 text-center py-3">{team.Team}</td>
              <td className="border border-gray-300 text-center py-3">{team.Played}</td>
              <td className="border border-gray-300 text-center py-3">{team.Won}</td>
              <td className="border border-gray-300 text-center py-3">{team.Lost}</td>
              <td className="border border-gray-300 text-center py-3">{team.Tied}</td>
              <td className="border border-gray-300 text-center py-3">{team.Points}</td>
              <td className="border border-gray-300 text-center py-3">{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IPLTable;
