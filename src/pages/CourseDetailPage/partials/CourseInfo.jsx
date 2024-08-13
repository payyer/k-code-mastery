import { ButtonPrimary } from '../../../components/Button';

export default function CourseInfo() {
  return (
    <section className="flex flex-col justify-center gap-2 bg-primary rounded-md p-4">
      <h1 className="text-2xl font-bold ">Lap trinh Javascript nang cao</h1>
      <p className="text-pretty">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur
        dolor explicabo odio dolorem ab corporis et, nihil aliquam consectetur
        suscipit quasi ipsum porro. Sit laudantium nostrum eius fugiat mollitia?
      </p>
      <div>
        <div className="mb-2 text-xl">
          Gia: <span className="font-medium">799.000d</span>{' '}
        </div>
        <ButtonPrimary className={'bg-accent'}>Buy now!</ButtonPrimary>
      </div>
    </section>
  );
}
