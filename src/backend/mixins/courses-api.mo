import CourseLib "../lib/courses";

mixin () {
  public query func getCourses() : async [CourseLib.Course] {
    CourseLib.getCourses();
  };
};
