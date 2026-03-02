import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { salesData } from "../data/salesData";

export default function SalesChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">📊 Monthly Sales</h2>
      <LineChart width={600} height={300} data={salesData}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
      </LineChart>
    </div>
  );
}
