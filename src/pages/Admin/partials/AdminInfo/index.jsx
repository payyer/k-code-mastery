import React from "react";

export default function AdminInfo() {
  return (
    <div>
      <section className="flex gap-2 mb-2 items-center p-2 justify-center">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="https://static.ybox.vn/2022/4/5/1649990881847-thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn%20(3).png"
            alt="Logo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-xl font-bold">K Code Mastery</div>
      </section>
      <section className="flex flex-col items-center">
        <div className="mb-2 w-10 h-10 rounded-full overflow-hidden">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
            alt="Logo"
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="text-sm font-medium">Admin</h3>
      </section>
    </div>
  );
}
