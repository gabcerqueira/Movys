# Movys App

Movys is a React Native application that connects to The Movie DB API to provide users with information about movies, including details, images, and more.

VIDEO : https://drive.google.com/file/d/1Bug4VgVRyRumNWblqOuxJtCVEoRsg2Bn/view?usp=sharing

## Features

- **Browse Movies:** Explore a vast collection of movies with detailed information.
- **Movie Details:** View in-depth information about each movie, including cast, crew, and reviews.
- **Pull-to-Refresh:** Easily refresh the movie list with a simple pull gesture.
- **Infinite Scroll:** Seamlessly load more movies as you reach the end of the list.
- **Responsive Design:** A user-friendly interface that adapts to various screen sizes.

## Getting Started

Follow these steps to set up and run the Movys app on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/gabcerqueira/Movys.git
   ```

2. **Install Dependencies:**
   ```bash
   cd movys
   yarn install
   ```

3. **Configure API Key:**
   - Obtain an API key from [The Movie DB](https://www.themoviedb.org/documentation/api).
   - Create a file named `.env` in the root directory.
   - Add your API key to the `.env` file:
     ```env
     API_KEY=your_api_key_here
     ```

4. **Run the Application:**
   ```bash
   yarn start && yarn android
   ```

   - Follow the instructions to run the app on an emulator, physical device, or web browser.

## Tech Stack

- **React Native:** A cross-platform framework for building mobile applications.
- **The Movie DB API:** A comprehensive database of movie information.
- **Redux:** State management for React applications.
- **React Navigation:** Navigation library for React Native.
- **Axios:** HTTP client for making API requests.

## Folder Structure

- **src/components:** Reusable UI components.
- **src/features:** Redux slices and actions.
- **src/navigations:** App navigation setup.
- **src/screens:** Individual screens of the app.
- **src/styles:** Global styles and theme configuration.


Thank you for checking out Movys! If you have any questions or feedback, feel free to reach out. Happy coding! 🎬🍿
