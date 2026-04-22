import AppLib "lib/applications";
import ContactLib "lib/contact";
import List "mo:core/List";

import CoursesApi "mixins/courses-api";
import StaffApi "mixins/staff-api";
import StudentsApi "mixins/students-api";
import ApplicationsApi "mixins/applications-api";
import ContactApi "mixins/contact-api";

actor {
  let applications = List.empty<AppLib.Application>();
  let contactMessages = List.empty<ContactLib.ContactMessage>();

  include CoursesApi();
  include StaffApi();
  include StudentsApi();
  include ApplicationsApi(applications);
  include ContactApi(contactMessages);
};
