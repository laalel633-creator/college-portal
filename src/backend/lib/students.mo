import StudentTypes "../types/students";

module {
  public type Student = StudentTypes.Student;
  public type Grade = StudentTypes.Grade;
  public type PersonalDetails = StudentTypes.PersonalDetails;

  let demoStudent : Student = {
    studentId = "S2024-001";
    name = "Jane Smith";
    enrolledCourse = "CSC101 Intro to Computer Science";
    grades = [
      { subject = "Introduction to Programming"; score = 82; grade = "B" },
      { subject = "Mathematics for Computing"; score = 91; grade = "A" },
      { subject = "Computer Systems & Architecture"; score = 74; grade = "C" },
      { subject = "Data Structures & Algorithms"; score = 88; grade = "B+" },
    ];
    personalDetails = {
      address = "42 Maple Street, Springfield, SP1 2AB";
      phone = "07700 900123";
    };
  };

  public func getStudent() : Student {
    demoStudent;
  };

  public func loginStudent(username : Text, password : Text) : ?Student {
    if (username == "student" and password == "demo") {
      ?demoStudent;
    } else {
      null;
    };
  };
};
