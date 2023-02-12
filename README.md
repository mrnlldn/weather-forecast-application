# Weather Forecast Application

## Tech Stack

- [Next](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Open Weather Map](https://openweathermap.org/api)
- [Tailwind](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/)
- [Next Auth](https://next-auth.js.org/)
- [React Query](https://react-query-v3.tanstack.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Zod](https://zod.dev/)

## Setting up your personal development environment

First, make sure to clone the repository then install the followng:

- At least `Node v.18.x`
- [pnpm](https://pnpm.io/)https://openweathermap.org/apiovided at the root of the repository. As the name suggests, this file
  is the _template_ for the environment variables that will be used in running this app. Copy the contents
  of this file into a new file named `.env` and place the appropriate values. See the [Environment](#environment) section for more
  details regarding each value.

Then, make sure to run `pnpm install` to install the local development dependencies of the application.

Finally, you can run `pnpm dev` to start a local development server of the entire application. This is already preconfigured with
_hot module reloading_ so that the changes you make on the code will be automatically displayed on your web browser.

### Environment

- `GITHUB_ID` and `GITHUB_SECRET`

  - As required, this application uses authentication via the Github provider. To generate this values, kindly checkout their
    [official documentation](https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app).
    - Make sure to generate the correct `callback url` for your application. To be safe, just use a value the same with your local
      `NEXTAUTH_URL`.

- `NEXTAUTH_URL`
  - This is the base URL of your application. This tells the `Next Auth` dependency on what URL to use when sign in/out of the application.
- `NEXTAUTH_SECRET`

  - To ensure that all data are properly secured, this is the value that will used to generate the different application tokens that `Next Auth`
    uses behind the scene to handle the authentication layer of the application. For development purposes, just any random string will do.

- `OPENWEATHER_API_KEY`
  - This value is used so that we can communicate with open weather map's public API. You can generate a free token using their [official site](https://openweathermap.org/api).

## Design Decisions and Challenges

- Next was chosen as the main framework for this application because:
  - It's a full stack framework
  - Ease of deployment because it's fully compatible with vercel.
    - All API routes are converted to serverless functions.
    - All assets are served at vercel's edge network.
  - Rich ecosystem
    - Like for authentication, we can easily setup different providers using `Next Auth`
  - File based routing
    - The structure of the code determines the different pages and api paths
  - Links
    - Next provides us a `Link` component that optimizes user navigation across the site by preloading different pages as long as their
      links are visible on the current page.
  - Image optimization
    - Though it was not used in this application, if ever this application will be extended in the future, Next provides us a great
      component that can easily handle image optimization and lazy loading for us.
- TypeScript

  - With this, errors are faced during development time and not during runtime. Also personally, I think all new projects should use TypeScript
    and not plain JavaScript anymore.

- Open Weather Map API

  - This was the API that was chosen because I could not make the other link work.
  - Also, instead of using the daily forecast API, I was forced to compromise to use the current weather API instead since the daily forecast API
    is not available to the free version anymore. More details can be found [here](https://openweathermap.org/faq#error401).
  - For best code reusability, this API was encapsulated into a custom client library that I created. We can just use this client library anywhere on the
    server side to handle communication between our server and the Open Weather Map API.

- Tailwind and Headless UI

  - Tailwind provides us with pre defined utily classes that helps us in creating beautiful UI with ease.
  - Headless UI provides us with unstyled components that provides us with rich behaviours and accessibility.
  - By using these two, we can create beautiful and accessible UI easily.

- Next Auth

  - Since we are already in Next, using this library for authentication makes the most senses. With it's wide array of different auth providers,
    we can easily extend the app to use not just Github, but also different providers like Google, Discord, etc.

- React Query

  - Since API calls are expensive, we often need to have a cache to prevent duplicate calls to API if they are using the same input values. With `react-query`,
    this is handled out of the box for us. This package ensured that as long as a function was called with the same parameters, subsequent calls are
    cached as long as they are within a specific period of time. The library is very extensible with our own custom configurations, also, we can invalidate
    caches at will through mutations as well.

- Axios

  - This the HTTP client that is used to handle API calls either through the Open Weather API or our very own internal API routes. I prefer this over the plain
    `fetch` because of the axios' interceptor features. This can be easily swapped out to use `fetch` though.

- Zod
  - This is one of my favorite libraries in the TypeScript ecosystem because this allows us to validate all types of data while maintaining type safety since
    it was designed with TypeScript in mind unlike other validation libraries. This library is used to validate both external calls (open weather) and internal
    API's.

### Improvements

Due to the time constraint, I was not able to add the following, but these will be valuable in an enterprise app setting:

- Testing through Jest and Playwright
- [Storybook for previewing components](https://storybook.js.org/docs/react/get-started/introduction)
- Better eslint rules for stricter coding guidlines
- [Husky](https://typicode.github.io/husky/#/) for the pre commit hooks and checks

## Deployment

This repository has been configured to interact with [vercel](https://vercel.com). With this, a simple `CI/CD` pipeline is present for the application.
Everytime there is a change for the repository, `vercel` will automatically verify and deploy these changes on the cloud.
