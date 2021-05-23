Welcome to SunJet Liu's LightFeather Code Challenge

To run this app, clone directory to your local machine and input "npm start" to start the app!

The app does the following functions:

Allows for a team member to receive notifications from a supervisor and
be notified through email or phone (for the purposes of this challenge, we will not be building out
the email or phone functionality, but we do want to capture the data that would be necessary).
Your form must be able to perform the following functions:

❏ Retrieve a list of supervisors and display in a dropdown from:

GET https://6099a4760f5a13001721985c.mockapi.io/api/supervisors.

❏ Capture the following fields:

❏ First Name

❏ Last Name

❏ Email (if preferred)

❏ Phone number (if preferred)

❏ Supervisor

❏ Submit form information to the following endpoint:

POST https://6099a4760f5a13001721985c.mockapi.io/api/submit

❏ Please add validation to the following fields:

❏ Name fields are required and must only contain letters, no numbers.

❏ Either an email or phone number must be provided

❏ Apply standard validation for these two fields
