"use client";

type Model = Record<string, number>;

type TableProps = {
  models: Record<string, Model>;
  rowLabels: Record<string, string>;
};

export default function DesalinationTable({
  models,
  rowLabels,
}: TableProps) {

  const modelEntries = Object.entries(models);
  const rowKeys = Object.keys(rowLabels);

  return (
    <div className="overflow-x-auto mt-12">
      <table className="min-w-full border border-white/10 text-white text-sm">

        {/* 🔷 HEADER */}
        <thead className="bg-white/10">
          <tr>
            <th className="p-3 border border-white/10 text-left">
              Parameter
            </th>

            {modelEntries.map(([modelName]) => (
              <th
                key={modelName}
                className="p-3 border border-white/10"
              >
                {modelName}
              </th>
            ))}
          </tr>
        </thead>

        {/* 🔶 BODY */}
        <tbody>
          {rowKeys.map((key) => (
            <tr key={key} className="hover:bg-white/5 transition">

              {/* Label */}
              <td className="p-3 border border-white/10 text-white/80">
                {rowLabels[key]}
              </td>

              {/* Values */}
              {modelEntries.map(([modelName, model]) => (
                <td
                  key={modelName}
                  className="p-3 border border-white/10 text-center"
                >
                  {model[key] ?? "-"}
                </td>
              ))}

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}