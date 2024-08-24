import { useForm } from "react-hook-form";
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
} from "../../services/category/categoryApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function FormCreateCategory({ isCreate, fnClosePopup }) {
  const categoryUpdate = useSelector((state) => state.category.categoryUpdate);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addCategory] = useAddCategoryMutation();
  const [editCategory] = useEditCategoryMutation();

  const onSubmit = (data) => {
    if (isCreate) {
      addCategory(data).then((res) => {
        fnClosePopup(false);
      });
      return;
    }

    editCategory({ id: categoryUpdate.id, body: data }).then((res) => {
      toast("Update successful!");
      fnClosePopup(false);
    });
    return;
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[500px] bg-white p-4 rounded-lg px-4 max-h-[90%] "
    >
      <h3 className="text-xl font-bold text-center">
        {isCreate ? "Create category" : "Update category"}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          defaultValue={categoryUpdate ? categoryUpdate.name : ""}
          autoComplete="off"
          id="name"
          className="p-2 border border-gray-400 focus:outline-primary rounded-lg"
          {...register("name", { required: "Name is empty!" })}
        />
        {errors.title && (
          <span className="text-red-500">{errors.name.message}</span>
        )}

        <input
          autoComplete="off"
          type="submit"
          className="mt-2 w-full py-2 bg-primary hover:bg-opacity-70 rounded-lg cursor-pointer text-white font-medium"
          value={isCreate ? "Create" : "Update"}
        />
      </form>
    </div>
  );
}
