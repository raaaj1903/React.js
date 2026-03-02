export default function KPI({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow w-full text-center">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
