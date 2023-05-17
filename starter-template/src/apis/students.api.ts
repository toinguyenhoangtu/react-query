import { Students } from "types/student.type";
import http from "util/http";

export const getStudents = (page: number | string, limit: number | string) => http
    .get<Students>('students', {
        params: {
            _page: page,
            _limit: limit
        }
    })