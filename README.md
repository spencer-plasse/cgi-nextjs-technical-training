# Next.js Technical Training Project
Hey there! My name is Spencer Plasse. I've been a Consultant at CGI in Mobile, AL since January 2022. Part of my job responsibility as a consultant is to engage in continual learning to maintain a fresh and valuable skill set that makes me an asset to the company and its clients. This web application project was developed over the past couple of weeks to complete the CGI NextJS Technical Training in my endeavor to learn more about the Next.js framework.

Below are project setup instructions as well as descriptions of the major project folders and files that I have modified/created. I started this project from a `create-next-app` template but much of the original code does not remain.

Let me know if you have any questions or comments!

## Tech Stack
This project was developed with **Next.js**, **React**, **Redux** (API access token storage), **React Hook Form** (form input validation), **TypeScript**, and **Tailwind CSS** (styling). While I already had prior knowledge of React + Redux from the React Technical Training as well as TypeScript from the Angular Technical Training and client work, I feel that I have challenged myself by not only learning Next.js but Tailwind CSS for styling as well. As such, this has been a very valuable learning experience for me.

Below are links to the documentation for each of these frameworks:
 - **Next.js** - https://nextjs.org
 - **React** - https://react.dev
 - **Redux** - https://redux.js.org
 - **React Hook Form** - https://react-hook-form.com
 - **TypeScript** - https://www.typescriptlang.org
 - **Tailwind CSS** - https://tailwindcss.com

## Spotify API
This project utilizes the free Spotify API for the functionality provided on the API page. Documentation on the API, including how to obtain access tokens and the two API endpoints I decided to use, are linked below:

- **Spotify API** - https://developer.spotify.com/documentation/web-api
- **Access Tokens (via Client Credentials)** - https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
- **Get Artist** - https://developer.spotify.com/documentation/web-api/reference/get-an-artist
- **Get Artist's Top Tracks** - https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks

## Project Setup
To set this project up to run locally, follow the below steps:

 - Open command prompt to a suitable location using `cd`.
 - Run `git clone https://github.com/spencer-plasse/cgi-nextjs-technical-training.git`.
 - Run `cd cgi-nextjs-technical-training`.
 - Run `git status` to make sure you have the `main` branch checked out (this should be the default).
 - Run `npm install` and verify that all project dependencies listed in `package.json` are installed correctly.
 - Follow the instructions [here](https://developer.spotify.com/documentation/web-api) to obtain a Spotify API Client ID and Client Secret (**Note**: This can be done with a free Spotify account, but you will have to sign up for one if you don't already have one).
 - Create a `.env` file at the root level of the project with the following contents:
	 - `LOCAL_URL=http://localhost:3000`
	 -  `SPOTIFY_CLIENT_ID=<your Spotify client ID>`
	 -  `SPOTIFY_CLIENT_SECRET=<your Spotify client secret>`
-	Run `npm run dev` while in the root folder of the project.
-	Open a web browser (I tested in Google Chrome) to `http://localhost:3000` and voila!

## Project Folders:

- **components**/ - Custom components, including the layout navbar
- **components**/**api**/ - Custom components to display Spotify API data
- **components**/**forms**/ - Custom components to wrap form elements with styling and validation
- **pages**/ - App pages, including `index.tsx` (*About Me*) and `spotify_api.tsx` (*API*)
- **pages**/**api**/ - Next.js API routes, including a mocked request for the *About Me* page's contact form
- **pages**/**api**/**spotify**/ - Next.js API routes for accessing Spotify API data
- **public**/ - Non-code project assets
- **styles**/ - CSS stylesheet modules, customized a bit from `create-next-app`
- **utils**/ - Utility functions, types, and constants as well as Redux setup
- **utils**/**api**/ - API-specific utility functions, types, and constants
- **utils**/**forms**/ - Form-specific types and style constants
- **utils**/**redux**/ - Redux code to set up a store and a slice for storing/accessing Spotify API access token data

## Other Project Files

 - **next.config.js** - Next.js configuration, customized to allow the image domain that the Spotify API returns image URLs from
 - **requirements.md** - Markdown copy of the project requirements
 - **tailwind.config.js** - Tailwind CSS configuration, customized with specific content paths, a font family theme extension, `forms` plugin, and disabled Preflight
 - **tsconfig.json** - TypeScript configuration