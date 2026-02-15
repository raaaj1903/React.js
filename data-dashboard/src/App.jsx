
import KPI from "./components/Kpi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SalesChart from "./components/SalesChart";
import SalesTable from "./components/SalesTable";
import Sidebar from "./components/Sidebar";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="p-6 bg-gray-100 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <KPI title="Total Sales" value="$3,350" />
            <KPI title="Active Users" value="245" />
            <KPI title="Conversion Rate" value="4.2%" />
          </div>
          <SalesChart />
          <SalesTable />
        </main>
      </div>
      <Footer />
    </div>
  );
}


      
      



