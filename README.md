# Portfolio

A personal portfolio website built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

- Responsive design
- Dark/light mode toggle
- Modern UI with shadcn/ui components
- Static export for GitHub Pages deployment
- TypeScript support
- Optimized for performance

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
```

2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
```

This will generate a static site in the `out` directory.

### Linting and Type Checking

Run the linter:

```bash
npm run lint
```

Check TypeScript types:

```bash
npm run typecheck
```

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push your changes to the `main` branch
2. The GitHub Action workflow will automatically build and deploy your site
3. Your site will be available at `https://<your-username>.github.io/<repository-name>/`

### Manual Configuration

If you need to manually configure GitHub Pages:

1. Go to your repository settings
2. Navigate to the "Pages" section
3. Select "GitHub Actions" as the source
4. Your site will be deployed automatically after each push to the main branch

### Custom Domain (Optional)

To use a custom domain:

1. Add your custom domain to the `CNAME` file in the `public` directory
2. Configure DNS settings with your domain registrar
3. Update your GitHub repository settings to use the custom domain

## Project Structure

```
src/
├── app/              # Next.js 13+ app directory
├── components/       # Reusable React components
│   ├── sections/     # Page sections
│   └── ui/          # shadcn/ui components
├── hooks/           # Custom React hooks
└── lib/             # Utility functions and constants
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.