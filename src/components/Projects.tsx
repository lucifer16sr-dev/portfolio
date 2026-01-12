function Projects() {
  const projects = [
    {
      title: "Mental Health LLM System",
      description:
        "HIPAA-compliant LLM-powered platform for mental health triage, patient support, and clinical summarization.",
      technologies: [
        "GPT-4",
        "LangChain",
        "Qdrant",
        "Ray Serve",
        "GCP Vertex AI",
      ],
      image: "🧠",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "RAG Pipeline for Enterprise Docs",
      description:
        "Retrieval-Augmented Generation system for large enterprise documents with vector search and hybrid retrieval.",
      technologies: ["GPT-4", "Haystack", "FAISS", "OpenSearch", "Python"],
      image: "📄",
      liveUrl: "#",
      githubUrl: "https://github.com/lucifer16sr-dev/rag-demo",
    },
    {
      title: "Computer Vision OCR Pipeline",
      description:
        "OCR and vision-language system for document analysis using OpenCV, Tesseract, and transformer-based models.",
      technologies: ["OpenCV", "Tesseract", "PyTorch", "ViT", "Ray Serve"],
      image: "📷",
      liveUrl: "#",
      githubUrl: "#",
    },
    // {
    //   title: "Distributed Hyperparameter Tuning",
    //   description:
    //     "Ray Tune-based distributed hyperparameter optimization pipelines for transformer models in production.",
    //   technologies: ["Ray Tune", "PyTorch", "Python", "MLflow", "GCP"],
    //   image: "⚡",
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "Healthcare Data Pipeline",
    //   description:
    //     "End-to-end scalable data pipeline for multi-source healthcare datasets, integrated with Databricks and Delta Lake.",
    //   technologies: [
    //     "Databricks",
    //     "Delta Lake",
    //     "BigQuery",
    //     "Python",
    //     "Airflow",
    //   ],
    //   image: "💾",
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "GenAI Experimentation Dashboard",
    //   description:
    //     "Streamlit dashboard for real-time LLM experimentation, evaluation harness integration, and hallucination monitoring.",
    //   technologies: [
    //     "Streamlit",
    //     "NeMo Guardrails",
    //     "Rebuff",
    //     "Python",
    //     "Datadog",
    //   ],
    //   image: "📊",
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a learning
            journey and a solution to a real-world problem.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 border border-gray-100 dark:border-gray-600"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
