import MyBookingTable from "@/components/ui/MyBookingTable";
import { getAllServices } from "@/utils/getAllServices";

const MyBookingsPage = async () => {
  const { data } = await getAllServices();
  return <MyBookingTable bookings={data.data}></MyBookingTable>;
};

export default MyBookingsPage;
