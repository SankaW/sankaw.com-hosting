const projects = [
  {
    id: "child-abuse",
    title: "A Data-Driven Approach to Understanding Child Abuse in Sri Lanka",
    description: "This project transforms government reports on child abuse in Sri Lanka into interactive data visualizations, aiming to raise awareness and facilitate informed discussions among stakeholders to address the issue effectively.",
    image: "img/Child_abuse/project_01.png",
    link: "portfolio/srilanka_child_abuse.html",
    technologies: ["Data Visualization", "Python", "Tableau"],
    year: "2023"
  },
  {
    id: "aws-s3",
    title: "Host Your Static Website on AWS S3 with Terraform",
    description: "This guide walks you through hosting your static website on AWS S3 using Terraform. Follow these steps to set up your environment and deploy your website.",
    image: "img/project_02.webp",
    link: "https://github.com/SankaW/Host_static_web_on_S3_terrafrom",
    technologies: ["AWS", "Terraform", "DevOps"],
    year: "2023"
  },
  {
    id: "auto-theft",
    title: "Toronto Auto Theft Dashboard",
    description: "An interactive Tableau dashboard visualizing auto theft data across Toronto, with insights into theft locations, premises types, and trends by division. Filter by year, month, and location type for a comprehensive look at auto theft incidents. Powered by open data from the Toronto Police Service.",
    image: "img/Auto_theft/Auto_theft.webp",
    link: "portfolio/TPS _Auto_theft.html",
    technologies: ["Tableau", "Data Analysis", "Visualization"],
    year: "2023"
  }
];

function renderProjects() {
  const portfolioContainer = document.querySelector('#portfolio .row');
  if (!portfolioContainer) return;

  portfolioContainer.innerHTML = projects.map(project => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a href="${project.link}" target="_blank">
          <img src="${project.image}" class="card-img-top" alt="${project.title}">
        </a>
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <div class="tech-stack">
            ${project.technologies.map(tech => `<span class="badge bg-primary me-1">${tech}</span>`).join('')}
          </div>
          <small class="text-muted">${project.year}</small>
        </div>
      </div>
    </div>
  `).join('');
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects); 