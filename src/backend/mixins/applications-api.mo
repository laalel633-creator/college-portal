import AppLib "../lib/applications";
import List "mo:core/List";

mixin (applications : List.List<AppLib.Application>) {
  var nextAppId : Nat = 1;

  public func submitApplication(name : Text, email : Text, phone : Text, courseChoice : Text) : async Nat {
    let newId = AppLib.submitApplication(applications, nextAppId, name, email, phone, courseChoice);
    nextAppId := newId;
    nextAppId - 1;
  };

  public query func getApplications() : async [AppLib.Application] {
    AppLib.getApplications(applications);
  };
};
