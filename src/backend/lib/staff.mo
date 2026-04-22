import StaffTypes "../types/staff";

module {
  public type StaffMember = StaffTypes.StaffMember;

  public func getStaff() : [StaffMember] {
    [
      {
        staffId = "STF-001";
        name = "Dr. Margaret Hollis";
        role = "Principal";
        email = "m.hollis@college.edu";
      },
      {
        staffId = "STF-002";
        name = "Prof. James Okafor";
        role = "Head of Computer Science";
        email = "j.okafor@college.edu";
      },
      {
        staffId = "STF-003";
        name = "Ms. Patricia Nguyen";
        role = "Lecturer – Business Management";
        email = "p.nguyen@college.edu";
      },
      {
        staffId = "STF-004";
        name = "Mr. David Calloway";
        role = "Senior Lecturer – Fine Arts";
        email = "d.calloway@college.edu";
      },
      {
        staffId = "STF-005";
        name = "Mrs. Sandra Fletcher";
        role = "Admissions Administrator";
        email = "s.fletcher@college.edu";
      },
      {
        staffId = "STF-006";
        name = "Mr. Kevin Marsh";
        role = "Student Services Coordinator";
        email = "k.marsh@college.edu";
      },
    ];
  };
};
