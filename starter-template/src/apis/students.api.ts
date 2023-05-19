import { Student, Students } from "types/student.type";
import http from "util/http";

export const getStudents = (page: number | string, limit: number | string) => http
    .get<Students>('students', {
        params: {
            _page: page,
            _limit: limit
        }
    })

export const getStudent = (id: string) => http.get<Student>(`students/${id}`)

export const addStudent = (student: Omit<Student, 'id'>) => http
    .post<Student>('/students', student)