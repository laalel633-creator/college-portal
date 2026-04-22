import ContactTypes "../types/contact";
import List "mo:core/List";

module {
  public type ContactMessage = ContactTypes.ContactMessage;

  public func submitMessage(
    messages : List.List<ContactMessage>,
    nextId : Nat,
    name : Text,
    email : Text,
    message : Text,
  ) : Nat {
    let msg : ContactMessage = { id = nextId; name; email; message };
    messages.add(msg);
    nextId + 1;
  };

  public func getMessages(messages : List.List<ContactMessage>) : [ContactMessage] {
    messages.toArray();
  };
};
