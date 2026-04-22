import AppTypes "../types/applications";
import List "mo:core/List";

module {
  public type Application = AppTypes.Application;

  public func submitApplication(
    applications : List.List<Application>,
    nextId : Nat,
    name : Text,
    email : Text,
    phone : Text,
    courseChoice : Text,
  ) : Nat {
    let app : Application = { id = nextId; name; email; phone; courseChoice };
    applications.add(app);
    nextId + 1;
  };

  public func getApplications(applications : List.List<Application>) : [Application] {
    applications.toArray();
  };
};
