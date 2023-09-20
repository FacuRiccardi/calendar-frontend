Configuration needed to start the project:

- Install all the dependencies with "npm i"
- Modify the .env file to match your variables

To run the project:

- Run "npm run dev", this will run project and listen to changes. You can see the App in http://localhost:5173/

How to use the app:

- First of all, you will see a Sign In Modal, to login into your account. If you don't have an account yet, you can change to the Sign Up modal with the bot button. Booth options will give access to the calendar after a confirmation.
- If you already have an account, and you have events in the actual week, you will see how the calendar is populated with the events information.
- If you don't have any event, you can create them with the "+" button that you will see in the top-left corner. It will pop up a Modal with the inputs that you have to complete to create an event.
- If you created an event, you will need to reload the page to see that event in the calendar.
- The calendar selector on the rigth-left corner of the App, let you select the actual week of the Week Events display (The one in the rigth of the app)
- In the botom-left corner of your app, you will goin to see the Events of the next 7 days from now, no matter what day you select.


Things to have in mind:

- Because of the time, I didnt create the app to be responsive, so its possible that it will be broken in other monitors. My monitor has a resolution of 1920x1080, please use a similar resolution to see the app.
- I didn't get to the solution to display overlaped events in a proper way, so if you create 2 or more events in the same time, they will overlap.
- I used Material UI components to develop the App faster, but it comes with the disadvantage that some styles are not going to match with the Figma, sry for that.
- I didn't implement the Logout button, or the configuration button, so they will do nothing when you click them.
- I didn't implement the View or Update Event modal
- The Events that are displayed are only the events in the range between the 7 AM and the 5 PM.
- I didn't manage the case when you create a Event that starts at 5 PM but the duration is longer that one hour, or it start at 5:15 PM. It will break the UI.
- The duration of an event can be lower than one hour, but I harcoded the min heigth of the events to match one hour so you can se the info of the event.


To Do:

- Use PropTypes for Prop validation (or change to Type Script)
- Manage Request Errors properly
- Add View or Update Event Modal
- Add Login and Config Modals
- Display the 24 hours of the day
- Proper managment of Multiday Events (Events that start at some day and finish in the next one)
- Proper managment of Overlaped Events