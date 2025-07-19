# Global Influencers Hub - React Application

A complete React.js conversion of the Global Influencers Hub WordPress website, featuring modern UI components, responsive design, and interactive features.

## 🚀 Features

- **Complete WordPress to React Conversion**: All pages and functionality converted to React components
- **Responsive Design**: Fully responsive layout using React-Bootstrap
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Hero sliders, contact forms, and dynamic content
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading times and efficient code structure

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   └── Footer.js       # Site footer
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── About.js        # About page
│   ├── Contact.js      # Contact page
│   ├── InfluencerJourneys.js
│   ├── Trending.js
│   ├── Bidding.js
│   ├── AmplifyYourBrand.js
│   ├── ShareYourSpotlight.js
│   └── InfluencerAcademy.js
├── data/               # Mock data
│   └── mockData.js     # All static data
├── assets/             # Images and static assets
├── App.js              # Main app component
└── index.js            # App entry point
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **React Router v6** - Client-side routing
- **React-Bootstrap** - UI component library
- **React Hook Form** - Form handling
- **Font Awesome** - Icons
- **CSS-in-JS** - Styled components approach

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd global-influencers-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📱 Pages & Features

### Home Page
- Hero slider with auto-rotation
- Featured stories section
- Journey categories
- Trending content
- Call-to-action sections

### About Page
- Company information
- Feature highlights
- FAQ section with accordion

### Contact Page
- Contact form with validation
- Office locations (USA & India)
- Business hours
- Contact information

### Other Pages
- **Influencer Journeys**: Showcase of influencer stories
- **Trending**: Latest stories and videos
- **The Bidding Room**: Coming soon page
- **Amplify Your Brand**: Coming soon page
- **Share Your Spotlight**: Coming soon page
- **Influencer Academy**: Coming soon page

## 🎨 Design System

### Colors
- **Primary Blue**: `#1e3c72` to `#2a5298`
- **Secondary Orange**: `#f4891d` to `#f68b1f`
- **Text**: `#333333`
- **Light Gray**: `#f8f9fa`

### Typography
- **Font Family**: Inter, Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Headings**: 600-700 weight
- **Body**: 400 weight

### Components
- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Shadow effects with hover animations
- **Forms**: Bootstrap-styled with custom validation
- **Navigation**: Sticky header with active states

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.js`
3. Update navigation data in `src/data/mockData.js`

### Modifying Styles
- Global styles are in `src/App.css`
- Component-specific styles use CSS-in-JS approach
- Bootstrap classes are used for layout and spacing

### Updating Content
- All content is stored in `src/data/mockData.js`
- Images and media are referenced from the original WordPress site
- Easy to replace with your own content

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect React settings
3. Deploy with one click

### Other Platforms
The build output in the `build/` folder can be deployed to any static hosting service.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: info@globalinfluencershub.com
- Website: https://globalinfluencershub.com

---

**Built with ❤️ using React and modern web technologies**
