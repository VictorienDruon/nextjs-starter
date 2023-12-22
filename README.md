# Next.js Starter with Supabase, Panda CSS, Ark UI, and Storybook

This Next.js starter provides a pre-configured stack to start your project. It aims to eliminate the repetitive task of configuring the same settings for every new project.

## Tech Stack

This Next.js starter is opinionated and comes pre-configured with the following technologies:

- **[Next.js](https://nextjs.org/docs)**: A React framework for building web applications.
- **[Supabase](https://supabase.com/docs)**: An open-source Firebase alternative, providing a real-time database and authentication.
- **[Panda CSS](https://panda-css.com/docs/overview/getting-started)**: CSS-in-JS with build time generated styles.
- **[Ark UI](https://ark-ui.com/docs/overview/introduction)**: A comprehensive unstyled UI component library.
- **[Storybook](https://storybook.js.org/docs/get-started/install)**: A development environment for UI components, allowing easy testing and documentation.
- **[Zod](https://zod.dev/)**: A schema declaration and validation library for TypeScript.
- **[T3 Env](https://env.t3.gg/docs/introduction)**: A package for validating environment variables.
- **[Next Themes](https://github.com/pacocoursey/next-themes)**: A package for abstracting themes in Next.js.

## Project Files Structure

The project follows a simple and organized structure:

```plaintext
nextjs-starter/
    |-- .storybook/                      # Storybook configuration
    |-- src/
        |-- app/                         # Next.js App router
            |-- layout.tsx
            |-- page.tsx
        |-- components/ui/
            |-- heading/
                |-- index.tsx            # Component implementation
                |-- recipe.ts            # Multi-variant styles for the component
                |-- stories.tsx          # Component rendered state for the doc
                |-- doc.mdx              # Documentation block for Storybook
            ...
            |-- index.tsx
        |-- libs/supabase/
            |-- types/
                |-- database.types.ts    # Generated types by Supabase CLI (npm run supabase)
            |-- admin.ts                 # Supabase client with admin privileges
            |-- client.ts                #                 for client calls
            |-- server.ts                #                 for server calls
        |-- providers/
            |-- session-provider/
            |-- theme-provider.tsx
        |-- styles/
            |-- theme/
                |-- semantic-tokens/
                |-- tokens/
                |-- breakpoints.ts
                ...
                |-- index.ts             # Definition of the theme
            |-- globals.css
        |-- utils/
            |-- env.mjs                  # T3 Env Variables validation
            |-- supabase.ts
    |-- styled-system/                   # Generated CSS by Panda CSS (npm run prepare)
    |-- .env.example
    |-- panda.config.ts                  # Panda CSS configuration
    |-- postcss.config.cjs
    ...
```

## Getting Started

Follow these steps to set up and run the project:

### 1. Clone the Repository and Install Dependencies

```bash
git clone https://github.com/VictorienDruon/nextjs-starter.git
cd nextjs-starter
npm install
```

### 2. Configure Environment Variables

```env
## Server environment variables
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

## Client environment variables
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Don't forget to modify the env variables validation in `src/utils/env.mjs` as you go. You can mark the object in `createEnv()` with `skipValidation: true` if you wish to disabled the validation for the moment.

### 3. Add your Supabase project-id in `package.json`

```js
{
  "scripts": {
    "supabase": "supabase gen types typescript --project-id <your-project-id> --schema public > ./src/libs/supabase/types/database.types.ts"
  },
}
```

Then, run `npm run supabase` to generate the types from your database. You first need to log in to [Supabase CLI](https://supabase.com/docs/reference/cli/supabase-login) with `supabase login`.

### 4. Start Building

```bash
npm run dev
npm run storybook
```

And that's it! Your project is now setup.
