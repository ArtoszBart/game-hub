# Game Hub

A **production-grade front-end application** for discovering video games, packed with features and UI patterns you'd expect in modern apps. Game Hub connects to the [RAWG API](https://api.rawg.io/docs/) to fetch game data, enabling users to browse, search, and explore detailed information about their favorite video games.

You can access the live application here: [Game Hub](https://game-hub.bartart.dev).

## Features

### User Experience

-   Browse games displayed on cards featuring:
    -   Thumbnail
    -   Title
    -   Available platforms
    -   Metascore
    -   Rating (displayed as emojis).
-   Search games by string input.
-   Filter games:
    -   **By genre** (using an aside menu list).
    -   **By platform** (via a dropdown button).
-   Sort games by:
    -   Relevance
    -   Date added
    -   Name
    -   Release date
    -   Popularity
    -   Average rating.
-   Infinite scrolling for seamless browsing.
-   Expandable text for displaying lengthy content dynamically.
-   Game details page with:
    -   Description
    -   Listed platforms and genres
    -   Metascore
    -   Publishers
    -   Screenshots
    -   Trailers (if available).
-   Light and dark mode switching for accessibility and user preference.

### Programming Features

-   **Reusable Components**: Modular design ensures code maintainability and reusability across the app.
-   **Basic Form Handling**: Streamlined handling for user input forms, ensuring intuitive interactions.
-   **Data Fetching**: Built with a reusable API client for efficient communication with the RAWG API.
-   **State Management**: Powered by React Query and Zustand for efficient client-side state and caching.
-   **Routing**: Dynamic routing with React Router.
-   **Performance Optimizations**:
    -   Infinite scrolling for enhanced user experience.
    -   Caching for optimized data retrieval and revalidation.
    -   Optimized image loading for faster rendering.
-   **UI Enhancements**:
    -   Responsive design to support multiple screen sizes.
    -   Basic animations for smooth transitions.
    -   Skeleton loaders to improve perceived performance.

---

## Technology Stack

-   [**Vite**](https://vite.dev/): A modern build tool for fast development and optimized production builds.
-   [**React**](https://react.dev/): A component-based JavaScript library for building interactive user interfaces.
-   [**TypeScript**](https://www.typescriptlang.org/): Enhances JavaScript with static typing for better code quality and scalability.
-   [**React Query**](https://tanstack.com/query/latest/docs/framework/react/overview): Manages client-side fetching, caching, and updating of data, reducing redundant API calls.
-   [**Zustand**](https://zustand.docs.pmnd.rs/getting-started/introduction): A lightweight and flexible state management library for predictable and straightforward state handling.
-   [**Chakra UI**](https://www.chakra-ui.com/): A modular and accessible component library for building clean and responsive user interfaces.

---

## Getting Started

### Prerequisites

-   Node.js (v16 or later recommended).
-   A RAWG API key ([obtain one here](https://rawg.io/login?forward=developer)).

### Setup

1. **Clone the Repository**  
   Open a terminal and run:

    ```bash
    git clone https://github.com/your-username/game-hub.git
    cd game-hub
    ```

    This command downloads the repository and navigates to its folder.

2. **Install Dependencies**  
   Install the required Node.js packages by running:

    ```bash
    npm install
    ```

    This step ensures that all necessary libraries and dependencies are set up.

3. **Configure Environment Variables**  
  Create a `.env` file in the project root directory and add your RAWG API key:

    ```env
    VITE_RAWG_API_KEY=your_rawg_api_key_here
    ```
    
    This key allows the app to fetch game data from the RAWG API.

4. **Start the Development Server**  
   Launch the app locally using:

    ```bash
    npm run dev
    ```
    
    The app will start, and you can access it in your browser at http://localhost:3000.

## Environment Variables

| Variable            | Description                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------ |
| `VITE_RAWG_API_KEY` | Required to access the RAWG API. Obtain at [RAWG Developer Portal](https://rawg.io/login?forward=developer). |
