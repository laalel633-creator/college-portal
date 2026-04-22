import CourseTypes "../types/courses";

module {
  public type Course = CourseTypes.Course;

  public func getCourses() : [Course] {
    [
      {
        code = "CSC101";
        name = "Intro to Computer Science";
        description = "An introductory course covering the fundamentals of computer science, programming concepts, algorithms, and data structures.";
        entryRequirements = "Grade C or above in Mathematics and any Science subject at GCSE level.";
      },
      {
        code = "BUS201";
        name = "Business Management";
        description = "A comprehensive course exploring business strategy, marketing, finance, human resources, and organizational behaviour.";
        entryRequirements = "Grade C or above in English and Mathematics at GCSE level. Prior work experience is advantageous.";
      },
      {
        code = "ART301";
        name = "Fine Arts Studio";
        description = "An advanced studio-based course exploring painting, sculpture, printmaking, and mixed media through practical projects and critical analysis.";
        entryRequirements = "Grade B or above in Art & Design at GCSE level, plus a portfolio of recent artwork submitted at enrolment.";
      },
    ];
  };
};
