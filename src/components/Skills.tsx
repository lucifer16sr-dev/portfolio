function Skills() {
  const skillCategories = [
    {
      title: "AI/ML & Deep Learning",
      skills: [
        { name: "Python", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow/Keras", level: 85 },
        { name: "scikit-learn", level: 90 },
        { name: "XGBoost / LightGBM / CatBoost", level: 85 },
        { name: "RNN / CNN / LSTM / ViT", level: 80 },
      ],
    },
    {
      title: "Generative AI & LLMs",
      skills: [
        { name: "GPT-4 / Claude / LLaMA", level: 90 },
        { name: "LangChain / LlamaIndex / Haystack", level: 85 },
        { name: "RAG Pipelines", level: 90 },
        { name: "Prompt Engineering & PEFT", level: 85 },
        { name: "Vector DBs (Qdrant, FAISS, Pinecone)", level: 80 },
        { name: "OpenCV / Tesseract", level: 85 },
      ],
    },
    {
      title: "MLOps & Cloud",
      skills: [
        { name: "AWS (SageMaker, EC2, Lambda)", level: 90 },
        { name: "GCP (Vertex AI, BigQuery, GCS)", level: 85 },
        { name: "Docker / Kubernetes / Terraform", level: 80 },
        { name: "MLflow / Airflow / Prefect / Kubeflow", level: 85 },
        { name: "Ray (Train, Serve, Tune)", level: 80 },
        { name: "YOLO / Detectron2", level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Java",
              "C++",
              "R",
              "SQL",
              "JavaScript",
              "Bash",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Neo4j",
              "Streamlit",
              "Plotly",
              "Matplotlib",
              "Seaborn",
              "Grafana",
              "Prometheus",
              "Datadog",
              "CloudWatch",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
