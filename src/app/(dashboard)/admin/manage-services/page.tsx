import ManageServiceTable from "@/components/ui/ManageServiceTable";
import { getAllServices } from "@/utils/getAllServices";

const ManageServicePage = async () => {
  const { data } = await getAllServices();
  return (
    <div className="bg-gray-200 lg:p-6 md:p-6 p-4 rounded-xl lg:min-h-screen">
      <ManageServiceTable services={data} />
    </div>
  );
};

export default ManageServicePage;
