module {
  public type Grade = {
    subject : Text;
    score : Nat;
    grade : Text;
  };

  public type PersonalDetails = {
    address : Text;
    phone : Text;
  };

  public type Student = {
    studentId : Text;
    name : Text;
    enrolledCourse : Text;
    grades : [Grade];
    personalDetails : PersonalDetails;
  };
};
