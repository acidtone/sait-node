# Assignment #2 - Express website with contact form

# Forms and View Engines
In this project, you will use the skills and knowledge you've gained to write Pug/ejs and work with forms.

## Instructions
Choose a multi-page, static website (html, css and js plus assets) of your choice for use in this activity. It must be your own work. For example:
- a past frontend assignment
- your portfolio site 
- a personal project
- something new(!)
This activity requires the use of a view engine: you may use either pug or ejs. Other view engines permitted by request.

### Deliverables and Rubric
One point will be given for each of the following:
- Create an express app that serves your website on port 3000.
- Place repeating layout elements (header, footer, navigation, etc) in template partials.
- Add an accessible contact form to the footer with name and email fields.
- Create a POST endpoint that accepts requests from the form and redirects to a thank you page that displays the submitted name and email.
- Create a middleware module that logs the name and email to a log file every time a form is summitted.