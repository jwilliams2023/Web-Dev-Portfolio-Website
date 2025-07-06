# Web Dev Portfolio Website

This project is a personal portfolio website built to re-learn and practice HTML, CSS, and JavaScript in their vanilla forms. The goal is to create a clean, functional, and visually appealing website, with an Agile approach to iteratively adding new features and improvements.

## Features

- **AI Summarization**: Uses Hugging Face's BART model to generate unique summaries of the "About My Journey" section
- **Responsive Design**: Mobile-friendly layout with dark theme
- **Interactive Elements**: Toggle buttons and smooth animations

## Setup

### Prerequisites
- Node.js (for development)
- A Hugging Face account (free)

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see below)
4. Run development server: `npm run dev`

### Environment Variables

To enable the AI summarization feature:

1. **Get a Hugging Face Token**:
   - Sign up at [Hugging Face](https://huggingface.co/)
   - Go to [Settings → Tokens](https://huggingface.co/settings/tokens)
   - Create a new token with "Read" permissions
   - Copy your token (starts with `hf_`)

2. **For Local Development**:
   ```bash
   cp env.example .env
   ```
   Edit `.env` and add your token:
   ```
   HUGGINGFACE_TOKEN=hf_your_actual_token_here
   ```

3. **For Production (Netlify)**:
   - Go to your Netlify dashboard
   - Site Settings → Environment Variables
   - Add `HUGGINGFACE_TOKEN` with your token value

4. **Security**: The `.env` file is already in `.gitignore` to keep your token private

## Agile Workflow

Tasks are organized into **Ongoing** (active work) and **Future Enhancements** (planned tasks) to support a flexible, iterative process where new ideas can be prioritized as they come up.

- **Ongoing**:
  - Fixing mobile compatibility and responsiveness.
  - Enhancing button and link styles to align with the dark theme.
  
- **Future Enhancements**:
  - Adding more UI/UX improvements.
  - Expanding functionality in the Projects section with JavaScript to dynamically display projects.
  - Improving accessibility for a better user experience.

## Technologies Used

- **HTML5**: Basic structure and layout.
- **CSS3**: Dark theme, styling, and hover effects.
- **JavaScript**: Interactive features including AI summarization.
- **Vite**: Development tooling for a faster development process.
- **Git**: Version control to track progress and updates.
- **Netlify**: Hosting and deployment for easy access and continuous deployment.
- **Hugging Face API**: AI-powered text summarization.

## Documentation

- **Vite Documentation**: [Vite Docs](https://vitejs.dev/guide/)
- **Netlify Documentation**: [Netlify Docs](https://docs.netlify.com/)
- **Hugging Face API**: [Hugging Face Inference API](https://huggingface.co/docs/api-inference)

## Live Site

The website is live at [https://josephwilliams.netlify.app/](https://josephwilliams.netlify.app/).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
