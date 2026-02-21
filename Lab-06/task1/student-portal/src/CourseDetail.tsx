import { useParams, useLoaderData } from "react-router-dom";
import type { Course } from "./data";

export default function CourseDetail() {
  const { id } = useParams();

  const { course } = useLoaderData() as {
    course: Course;
  };

  return (
    <div>
      <h2>{course.title}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>
      <p>Route parameter ID: {id}</p>
    </div>
  );
}