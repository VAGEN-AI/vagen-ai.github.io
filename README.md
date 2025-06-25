# VAGEN Project Website

This is the official website for the VAGEN (Vision-Agent Generation) project, built with Astro.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/RAGEN-AI/vagen-ai.github.io.git
   cd vagen-ai.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to view the website.

## 📁 Project Structure

```
vagen-ai.github.io/
├── src/
│   ├── components/          # Astro components
│   │   ├── Hero.astro      # Main hero section
│   │   ├── Algorithm.astro # Algorithm explanation
│   │   ├── FindingsSection.astro # Research findings
│   │   ├── TrajectoryViewer.astro # Interactive trajectory viewer
│   │   ├── AuthorsCitation.astro # Authors and citation info
│   │   ├── Header.astro    # Navigation header
│   │   └── Footer.astro    # Footer section
│   ├── pages/              # Page files
│   │   └── index.astro     # Main page
│   ├── styles/             # CSS stylesheets
│   │   ├── global.css      # Global styles
│   │   ├── section.css     # Section-specific styles
│   │   ├── hero.css        # Hero section styles
│   │   ├── trajectoryViewer.css # Trajectory viewer styles
│   │   └── authors.css     # Authors section styles
│   ├── scripts/            # TypeScript scripts
│   │   ├── trajectoryViewer.ts # Trajectory viewer logic
│   │   └── citation.ts     # Citation copy functionality
│   └── layouts/            # Layout templates
│       └── Layout.astro    # Main layout
├── public/                 # Static assets
│   ├── data/              # Trajectory data and thumbnails
│   ├── pdf/               # PDF documents
│   └── images/            # Images and icons
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Updating Content

- **Hero Section**: Edit `src/components/Hero.astro` to update the main title, description, and authors
- **Algorithm Section**: Modify `src/components/Algorithm.astro` to change the technical content
- **Findings Section**: Update `src/components/FindingsSection.astro` with your research findings
- **Trajectory Data**: Replace files in `public/data/trajectories/` with your own trajectory data

### Styling

The website uses a clean, modern design with:
- **Color Scheme**: Fresh white-green gradient theme
- **Typography**: Inter font family
- **Layout**: Responsive design with CSS Grid and Flexbox
- **Animations**: Smooth transitions and hover effects

### Adding New Sections

1. Create a new `.astro` component in `src/components/`
2. Import and use it in `src/pages/index.astro`
3. Add corresponding styles in `src/styles/`

## 📊 Trajectory Data Format

The trajectory viewer expects data in the following structure:

```
public/data/trajectories/
├── model-version/
│   ├── environment-1/
│   │   ├── thumbnail.png
│   │   ├── traj1/
│   │   │   ├── step1.png
│   │   │   ├── step2.png
│   │   │   └── ...
│   │   └── traj2/
│   └── environment-2/
└── index.json
```

## 🚀 Deployment

This website is designed to be deployed on GitHub Pages. The build process creates static files that can be served from any web server.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Citation

If you use VAGEN in your research, please cite our work:

```bibtex
@misc{wang2025vagen,
  title={Reinforcing Visual State Reasoning for Multi-Turn VLM Agents},
  author={Kangrui Wang* and Pingyue Zhang* and Zihan Wang* and Yaning Gao* and Linjie Li* and Qineng Wang and Hanyang Chen and Chi Wan and Yiping Lu and Zhengyuan Yang and Lijuan Wang and Ranjay Krishna and Jiajun Wu and Li Fei-Fei and Yejin Choi and Manling Li},
  year={2025},
  url={https://github.com/RAGEN-AI/VAGEN}
}
```

## 🤝 Contributing

For questions about the VAGEN project, please visit our [GitHub repository](https://github.com/RAGEN-AI/VAGEN) or contact the research team.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
