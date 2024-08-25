import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useGetCategoryQuery } from "../../services/category/categoryApi";
import {
  useAddCourseMutation,
  useEditCourseMutation,
} from "../../services/course/courseApi";
import { toast } from "react-toastify";

export default function FormCreateCourse({ isCreate, fnClosePopup }) {
  const courseToUpdate = useSelector((state) => state.course.courseUpdate);
  const { data: categoryData } = useGetCategoryQuery();

  const [editCourse] = useEditCourseMutation();
  const [addCourse] = useAddCourseMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    if (isCreate) {
      addCourse({ ...data, category_id: data.categoryId }).then((res) => {
        toast.success("Create successful!", 1000);
        fnClosePopup(false);
      });
      return;
    }
    editCourse({ id: courseToUpdate.id, body: data })
      .then((res) => {
        console.log({ res });
        toast("Update course successful!");
        fnClosePopup(false);
      })
      .catch((err) => toast.error("Something wrong?"));
    return console.log({ dataUpdate: data });
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[500px] bg-white p-4 rounded-lg px-4 max-h-[90%] overflow-y-scroll"
    >
      <h3 className="text-xl font-bold text-center">
        {isCreate ? "Create course" : "Update course"}
      </h3>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="image" className="font-medium">
          Image
        </label>
        <input
          defaultValue={courseToUpdate ? courseToUpdate.image : ""}
          type="text"
          id="image"
          className=" p-2 border border-gray-400 focus:outline-primary rounded-lg"
          {...register("image", {
            required: "Empty image",
          })}
        />
        {errors.image && (
          <span className="text-red-500">{errors.image.message}</span>
        )}

        <label htmlFor="category" className="font-medium">
          Category
        </label>
        <select
          defaultValue={courseToUpdate ? courseToUpdate.categoryDTO.id : ""}
          className="p-2 border border-gray-400 focus:outline-primary rounded-lg"
          id="category"
          {...register("categoryId", {
            required: "Category is empty!",
            validate: (value) => {
              if (!value) return "Category is empty";
              return true;
            },
          })}
        >
          <option value="">Select a category</option>
          {categoryData.data.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        {errors.categoryId && (
          <span className="text-red-500">{errors.categoryId.message}</span>
        )}

        <label htmlFor="title" className="font-medium">
          Title
        </label>
        <input
          defaultValue={courseToUpdate ? courseToUpdate.title : ""}
          autoComplete="off"
          id="title"
          className="p-2 border border-gray-400 focus:outline-primary rounded-lg"
          {...register("title", { required: "Title is empty!" })}
        />
        {errors.title && (
          <span className="text-red-500">{errors.title.message}</span>
        )}

        <label htmlFor="price" className="font-medium">
          Price
        </label>
        <input
          defaultValue={courseToUpdate ? courseToUpdate.price : ""}
          autoComplete="off"
          id="price"
          className="p-2 border border-gray-400 focus:outline-primary rounded-lg"
          {...register("price", { required: "Price is empty!" })}
        />
        {errors.price && (
          <span className="text-red-500">{errors.price.message}</span>
        )}

        <label htmlFor="lecturer" className="font-medium">
          Lecturer
        </label>
        <input
          defaultValue={courseToUpdate ? courseToUpdate.lecturer : ""}
          autoComplete="off"
          id="lecturer"
          className="p-2 border border-gray-400 focus:outline-primary rounded-lg"
          {...register("lecturer", {
            required: "Lecturer is empty!",
          })}
        />
        {errors.lecturer && (
          <span className="text-red-500">{errors.lecturer.message}</span>
        )}

        <label htmlFor="description" className="font-medium">
          Description
        </label>
        <textarea
          defaultValue={courseToUpdate ? courseToUpdate.description : ""}
          autoComplete="off"
          id="description"
          rows={3}
          className="p-2 border resize-none border-gray-400 focus:outline-primary rounded-lg"
          {...register("description", { required: "Description is empty" })}
        />
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}

        {!isCreate && (
          <>
            <input
              type="text"
              className="hidden"
              value={0}
              {...register("isFree")}
            />

            <input
              type="text"
              className="hidden"
              value={0}
              {...register("isPublic")}
            />
          </>
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
