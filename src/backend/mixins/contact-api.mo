import ContactLib "../lib/contact";
import List "mo:core/List";

mixin (contactMessages : List.List<ContactLib.ContactMessage>) {
  var nextContactId : Nat = 1;

  public func submitContactMessage(name : Text, email : Text, message : Text) : async Nat {
    let newId = ContactLib.submitMessage(contactMessages, nextContactId, name, email, message);
    nextContactId := newId;
    nextContactId - 1;
  };

  public query func getContactMessages() : async [ContactLib.ContactMessage] {
    ContactLib.getMessages(contactMessages);
  };
};
