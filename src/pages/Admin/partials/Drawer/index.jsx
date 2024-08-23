import AdminInfo from "../AdminInfo";
import ListOption from "../ListOption";

export default function Drawer() {
  return (
    <div className="w-[250px] flex flex-col gap-4 items-center bg-primary text-white min-h-screen py-4">
      <div className="fixed flex flex-col gap-4 items-center">
        {/* Header */}
        <AdminInfo />
        {/* List option */}
        <ListOption />
      </div>
    </div>
  );
}
