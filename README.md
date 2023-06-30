Develop a “NextJS” app that has two routes with the following functionality:

 1. #### “**About Me**” page with the following details:
 
 - [x] A Picture of yourself
 - [x] Your Name
 - [x] Where you went to College/University
 - [x] An interesting fact about yourself or something you enjoy doing in your free time
 - [x] How long you’ve worked at CGI

 - [x] “**Contact Me**” form with the following fields:
    - **Name** (text input)
    - **Email** (text input)
    - **Message** (text area)
    - **Save** and **Reset** Buttons

 - [x] The contact me form should send a message to a faked API containing the form data. That API should respond with a message saying “Sent” after receiving the request. The response “Sent” should show up somewhere near the form after the response has been received.
 - [x] Clicking the “Reset” Button should reset the form back to its default values and make the “Sent” message go away
 - [x] The form should use Validation (Bonus points for using React Hook Form) for at least one field in the form.

2. #### “**API**” page that utilizes a Free Online API or your own API with a backend to display some information from a third party source:

 - [ ] This page should contain at least 2 requests (example from the NASA Open API would be one GET to get a picture of a planet of the day and another GET to retrieve some information from the natural event tracker)
 - [ ] Information about what you are retrieving from that API.
 - [ ] Utilize a Grid Layout with CSS modules or Inline Styling

3. - [x] Both of these routes should utilize a common “Layout Component” that allows for navigation between the two pages.

4. - [x] The Application should utilize at least one example of Inline Styling and one example of CSS/SCSS modules.

5. - [x] The Application should use at least one common component (not including the layout)

6. - [x] The Application must have at least one Page that uses Server-Side Rendering or Static Generation (can use both but not required).