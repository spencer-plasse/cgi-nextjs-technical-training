# Next.js Technical Training Project
This web application project was developed over the past couple of weeks with Next.js, React, Redux, TypeScript, and Tailwind CSS to complete the CGI NextJS Technical Training. While I began with prior knowledge of React + Redux from the React Technical Training as well as TypeScript from client work, I feel that I have challenged myself by not only learning Next.js, but Tailwind CSS for styling as well.

Below are project setup instructions as well as descriptions of the major project folders and files that I have modified/created. I started this project from a `create-next-app` template but much of the original code does not remain.

Let me know if you have any questions or comments!

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