import { Student, Students } from "types/student.type";
import http from "util/http";

export const getStudents = (page: number | string, limit: number | string) => http
    .get<Students>('students', {
        params: {
            _page: page,
            _limit: limit
        }
    })

export const getStudent = (id: number | string) => http.get<Student>(`students/${id}`)

//  add student with medthod post
export const addStudent = (student: Omit<Student, 'id'>) => http
    .post<Student>('/students', student)

export const updateStudent = (id: string | number, student: Student) => http.put<Student>(`students/${id}`, student)

export const removeStudent = (id: string | number) => http.delete<{}>(`students/${id}`)