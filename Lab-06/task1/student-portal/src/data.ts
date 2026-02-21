export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Web Development",
    instructor: "John Smith",
    description: "Learn React and modern frontend development."
  },
  {
    id: 2,
    title: "Data Structures",
    instructor: "Alice Brown",
    description: "Deep dive into arrays, trees and graphs."
  },
  {
    id: 3,
    title: "Algorithms",
    instructor: "Michael Lee",
    description: "Sorting, searching and dynamic programming."
  },
  {
    id: 4,
    title: "Databases",
    instructor: "Emma Davis",
    description: "SQL and NoSQL systems."
  }
];

export function getCourseById(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}