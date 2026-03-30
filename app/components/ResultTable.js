export default function ResultTable({ results }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left">Subject</th>
            <th className="px-6 py-3 text-left">Score</th>
            <th className="px-6 py-3 text-left">Grade</th>
            <th className="px-6 py-3 text-left">Term</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="px-6 py-4">{r.subject}</td>
              <td className="px-6 py-4">{r.score}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded text-white ${r.grade.startsWith('A') ? 'bg-green-500' : r.grade.startsWith('B') ? 'bg-blue-500' : 'bg-orange-500'}`}>
                  {r.grade}
                </span>
              </td>
              <td className="px-6 py-4">{r.term}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}