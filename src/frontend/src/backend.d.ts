import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface StaffMember {
    staffId: string;
    name: string;
    role: string;
    email: string;
}
export interface Grade {
    subject: string;
    score: bigint;
    grade: string;
}
export interface ContactMessage {
    id: bigint;
    name: string;
    email: string;
    message: string;
}
export interface Application {
    id: bigint;
    courseChoice: string;
    name: string;
    email: string;
    phone: string;
}
export interface Student {
    grades: Array<Grade>;
    studentId: string;
    name: string;
    personalDetails: PersonalDetails;
    enrolledCourse: string;
}
export interface PersonalDetails {
    address: string;
    phone: string;
}
export interface Course {
    code: string;
    name: string;
    description: string;
    entryRequirements: string;
}
export interface backendInterface {
    getApplications(): Promise<Array<Application>>;
    getContactMessages(): Promise<Array<ContactMessage>>;
    getCourses(): Promise<Array<Course>>;
    getStaff(): Promise<Array<StaffMember>>;
    getStudent(): Promise<Student>;
    login(username: string, password: string): Promise<Student | null>;
    submitApplication(name: string, email: string, phone: string, courseChoice: string): Promise<bigint>;
    submitContactMessage(name: string, email: string, message: string): Promise<bigint>;
}
