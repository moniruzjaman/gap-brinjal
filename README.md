# GAP Brinjal Training Portal

An interactive web application for Good Agricultural Practices (GAP) training in brinjal cultivation, specifically designed for Bangladesh. This portal provides comprehensive lessons, farm logging, assessment tools, and visual resources extracted from official protocols.

## Features

- **Interactive Training Modules**: Step-by-step lessons on GAP protocols
- **Farm Activity Logging**: Record and track farming activities
- **Knowledge Assessment**: Quiz system to test understanding
- **Visual Library**: Gallery of farming images and diagrams
- **Cultivation Timeline**: Scheduled farming activities
- **Resource Downloads**: Access to official GAP documents
- **Bilingual Support**: English and Bengali (বাংলা) interface
- **User Authentication**: Login/Signup with Supabase
- **Cloud Data Storage**: User progress and records stored in Supabase

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Supabase (Authentication & Database)
- **Icons**: Lucide Icons
- **Fonts**: Google Fonts (Plus Jakarta Sans, Hind Siliguri)
- **Styling**: Custom CSS with responsive design

## Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Project Settings > API to get your Project URL and Anon Key
3. Update `supabase.js` with your credentials:
   const SUPABASE_URL = 'YOUR_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
4. Create the following tables in your Supabase dashboard:

   **completed_lessons**:
   - `user_id` (uuid, references auth.users.id) - Primary Key: auto-generated
   - `lesson_id` (text)
   - `completed_at` (timestamp with time zone) - Default: now()

   **farm_records**:
   - `id` (bigint, auto-increment) - Primary Key
   - `user_id` (uuid, references auth.users.id)
   - `date` (date)
   - `category` (text)
   - `description` (text)

   Enable Row Level Security (RLS) and create policies to allow users to access only their own data.

### Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/gap-brinjal.git
   cd gap-brinjal
   ```

2. Start a local server:

   ```bash
   # Using npm (recommended)
   npm start

   # OR using Python
   python -m http.server 8000
   ```

3. Open [http://localhost:8000](http://localhost:8000) in your browser

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically - no additional configuration needed

The app is static and will deploy directly to Vercel without build steps.

### Other Platforms

The app can be deployed to any static hosting service like:

- Netlify
- GitHub Pages
- Firebase Hosting

## Project Structure

```text
gap-brinjal/
├── index.html          # Main HTML file
├── style.css           # Stylesheets
├── app.js              # Main application logic
├── auth.js             # Authentication handling
├── supabase.js         # Supabase configuration and database functions
├── data.js             # Lesson and quiz data
├── extracted_assets/   # Images and branding
│   ├── branding/       # Logo and cover images
│   └── images/         # Lesson images
├── Brinjal.pdf         # Official GAP document
└── README.md           # This file
```

## Data Sources

- Official Bangladesh GAP protocols
- BARC (Bangladesh Agricultural Research Council)
- DAE (Department of Agricultural Extension)

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is developed for educational purposes in agricultural training.
