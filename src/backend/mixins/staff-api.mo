import StaffLib "../lib/staff";

mixin () {
  public query func getStaff() : async [StaffLib.StaffMember] {
    StaffLib.getStaff();
  };
};
