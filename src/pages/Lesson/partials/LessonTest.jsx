import React, { useState } from "react";
import { useForm } from "react-hook-form";

const answer = [
  {
    id: 0,
    answer: `What does the "Hello World!" program traditionally represent in
        programming education?`,
    value: 0,
  },
  {
    id: 1,
    answer: ` A complex program that demonstrates advanced programming techniques`,
    value: 1,
  },
  {
    id: 2,
    answer: `What does the "Hello World!" program traditionally represent in
        programming education?`,
    value: 2,
  },
  {
    id: 3,
    answer: `The final project in a programming course`,
    value: 3,
  },
];

export default function LessonTest() {
  const [selectAnswer, setSelectAnswer] = useState();
  function RadioInput({ id, value, answer }) {
    return (
      <>
        <label
          htmlFor={id}
          className={`${
            selectAnswer === id
              ? "border-secondary text-primary"
              : "border-black"
          }  py-3 px-4 border-2 rounded-lg hover:bg-primary hover:bg-opacity-50 cursor-pointer`}
        >
          {answer}
        </label>
        <input
          id={id}
          {...register("answer")}
          type="radio"
          value={value}
          onChange={() => setSelectAnswer(id)}
          className="hidden"
        />
      </>
    );
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log({ data });

  return (
    <div className="p-12">
      <h3 className="font-medium text-xl">
        What does the "Hello World!" program traditionally represent in
        programming education?
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-4"
      >
        {answer.map((item) => {
          return (
            <RadioInput
              key={item.id}
              answer={item.answer}
              id={item.id}
              value={item.value}
            />
          );
        })}
        <input
          type="submit"
          className="font-medium text-white bg-primary hover:bg-opacity-80 cursor-pointer rounded-lg py-2 px-1"
          value={"Submit"}
        />
      </form>
    </div>
  );
}
