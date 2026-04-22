export interface Course {
  code: string;
  name: string;
  description: string;
  entryRequirements: string;
}

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

export interface PersonalDetails {
  address: string;
  phone: string;
}

export interface Student {
  studentId: string;
  name: string;
  enrolledCourse: string;
  grades: Grade[];
  personalDetails: PersonalDetails;
}

export interface Application {
  id: bigint;
  name: string;
  email: string;
  phone: string;
  courseChoice: string;
}

export interface ContactMessage {
  id: bigint;
  name: string;
  email: string;
  message: string;
}
