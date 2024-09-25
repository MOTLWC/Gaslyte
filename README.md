# GASLYTE

### [Check It Out](https://gaslyte.netlify.app/)

## Description 

Gaslyte is a satirical take on traditional social media platforms. Users create story-like posts and label them as either "true" or "false." 
Other users are then prompted to vote on whether they believe the post is true or false based on what they see.


## Features

- Infinite scroll on the feed page for seamless browsing.
- Mongoose Database for efficient and versatile data storage and retrieval.
- Full CRUD (Create, Read, Update, Delete) functionality for users and posts.
- EJS templates for server-side rendering of pages.
- Voting feature where users guess whether posts are true or false.

## Technologies Used

- **JavaScript**: Core programming language for both the front-end and back-end logic.
- **Mongoose**: To interface with MongoDB for data storage.
- **EJS**: Server-side templating engine to dynamically render HTML pages.
- **HTML/CSS**: For structuring and styling the Rendered pages.

## Limitations

As a solo project with a one-week timeframe, Gaslyte met the MVP (Minimum Viable Product) requirements, but several limitations were identified:

- **UI/UX Design**: The application's design is unfinished, leading to an inconsistent and unattractive user experience. Key components, such as an expandable menu and hyperlink
styling, require significant improvements.
- **Navigation Issues**: Users are automatically redirected to the sign-in page, but there was no visible link to the sign-up page, making it impossible to create new users
without typing in the URL manually.
- **Missing Features**: The core voting feature was not implemented in the MVP, leaving a significant gap in the app’s functionality.
- **Lack of Clear Directives**: Users may not know how to interact with the app without explicit instructions, and the missing features, like the voting system, exacerbated this
issue.

The biggest issue I encountered was mismanaging my time. I spent a disproportionate amount of time perfecting the infinite scroll feature, which led to neglect in other areas such
as design, user experience, and implementing core features like the voting system, commenting system and post filter searching.

## Future Steps

Moving forward, I plan to address the issues highlighted in the limitations section:

### Immediate Fixes:
- Improve the overall design and navigation to enhance the user experience.
- Add a clear and accessible sign-up page link for new users.
- Implement the core voting feature to complete the platform’s functionality.

### Future Enhancements:
- Introduce a comment system to allow users to engage with posts beyond voting.
- Add search and filtering capabilities to improve content discovery.
- Refactor the code for performance improvements and scalability.
