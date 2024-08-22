import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCameraRetro } from "react-icons/fa";
import { useSelector } from "react-redux";
import createFileList from "../../utils/createFile";

export default function FormCreateCourse({ isCreate }) {
  const courseToUpdate = useSelector((state) => state.course.courseUpdate);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    (async () => {
      const response = await createFileList([courseToUpdate?.image]);
      setValue("image", response);
    })();
  }, [courseToUpdate]);

  const onSubmit = (data) => {
    console.log({ data });
    if (isCreate) return console.log({ dataCreate: data });
    return console.log({ dataUpdate: data });
  };

  // Handle Image Preview
  const watchImage = watch("image");

  const imagePreview = useMemo(() => {
    if (watchImage && watchImage.length > 0) {
      return window.URL.createObjectURL(watchImage[0]);
    }
    return null;
  }, [watchImage]);

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[500px] bg-white p-4 rounded-lg px-4 max-h-[90%] overflow-y-scroll"
    >
      <h3 className="text-xl font-bold text-center">
        {isCreate ? "Create course" : "Update course"}
      </h3>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full h-[160px] relative">
          {courseToUpdate ? (
            <img
              src={imagePreview ? imagePreview : courseToUpdate.image}
              alt=""
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={
                imagePreview
                  ? imagePreview
                  : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              }
              alt=""
              className="w-full h-full object-contain"
            />
          )}

          <label htmlFor="image" className="absolute top-0 right-0 font-medium">
            <FaCameraRetro className="opacity-70 hover:opacity-100 text-xl cursor-pointer" />
          </label>
        </div>

        {errors.image && (
          <span className="text-red-500">{errors.image.message}</span>
        )}
        <input
          type="file"
          id="image"
          className="hidden p-2 border border-gray-400 focus:outline-primary rounded-lg"
          {...register("image", {
            required: "Empty image",
          })}
        />

        <label htmlFor="category" className="font-medium">
          Category
        </label>
        <select
          defaultValue={courseToUpdate ? courseToUpdate.category.name : ""}
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
          <option value="csharp">C#</option>
          <option value="java">Java</option>
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
