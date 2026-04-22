import StudentLib "../lib/students";

mixin () {
  public query func getStudent() : async StudentLib.Student {
    StudentLib.getStudent();
  };

  public func login(username : Text, password : Text) : async ?StudentLib.Student {
    StudentLib.loginStudent(username, password);
  };
};
