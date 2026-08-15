import type { Skill } from "@/types";

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description?: string;
  skills: Skill[];
}

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: "genai-rag",
    title: "IA Générative, RAG & Agents IA",
    description: "Conception et déploiement de systèmes RAG d'entreprise, agents intelligents et orchestration LLM.",
    skills: [
      { name: "LLM", category: "genai-rag" },
      { name: "RAG", category: "genai-rag" },
      { name: "Agents IA", category: "genai-rag" },
      { name: "LangChain", category: "genai-rag" },
      { name: "LlamaIndex", category: "genai-rag" },
      { name: "LightRAG", category: "genai-rag" },
      { name: "MCP", category: "genai-rag" },
      { name: "Prompt Engineering", category: "genai-rag" },
      { name: "Function Calling", category: "genai-rag" },
      { name: "Groq", category: "genai-rag" },
      { name: "Ollama", category: "genai-rag" },
      { name: "RAGAS", category: "genai-rag" },
    ],
  },
  {
    id: "ml-datascience",
    title: "Machine Learning & Data Science",
    description: "Modélisation prédictive, préparation de données complexes et évaluation de modèles.",
    skills: [
      { name: "Python", category: "ml-datascience" },
      { name: "Pandas", category: "ml-datascience" },
      { name: "NumPy", category: "ml-datascience" },
      { name: "Scikit-learn", category: "ml-datascience" },
      { name: "XGBoost", category: "ml-datascience" },
      { name: "LightGBM", category: "ml-datascience" },
      { name: "Classification", category: "ml-datascience" },
      { name: "Régression", category: "ml-datascience" },
      { name: "Clustering", category: "ml-datascience" },
      { name: "Feature Engineering", category: "ml-datascience" },
      { name: "Cross-validation", category: "ml-datascience" },
      { name: "Model Evaluation", category: "ml-datascience" },
    ],
  },
  {
    id: "dl-cv",
    title: "Deep Learning & Computer Vision",
    description: "Architectures convolutives, transformers visuels et analyse spatio-temporelle.",
    skills: [
      { name: "PyTorch", category: "dl-cv" },
      { name: "TensorFlow", category: "dl-cv" },
      { name: "CNN", category: "dl-cv" },
      { name: "ResNet", category: "dl-cv" },
      { name: "YOLO", category: "dl-cv" },
      { name: "Vision Transformer (ViT)", category: "dl-cv" },
      { name: "U-Net", category: "dl-cv" },
      { name: "LSTM", category: "dl-cv" },
      { name: "Image Classification", category: "dl-cv" },
      { name: "Object Detection", category: "dl-cv" },
      { name: "Semantic Segmentation", category: "dl-cv" },
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Pipelines ETL, bases de données relationnelles et vectorielles.",
    skills: [
      { name: "SQL", category: "data-engineering" },
      { name: "PostgreSQL", category: "data-engineering" },
      { name: "Supabase", category: "data-engineering" },
      { name: "pgvector", category: "data-engineering" },
      { name: "ETL", category: "data-engineering" },
      { name: "Data Cleaning", category: "data-engineering" },
      { name: "Data Processing", category: "data-engineering" },
      { name: "Apache NiFi", category: "data-engineering", isNotion: true },
      { name: "Apache Spark", category: "data-engineering", isNotion: true },
    ],
  },
  {
    id: "backend-mlops",
    title: "Backend, Deployment & MLOps",
    description: "Industrialisation d'API REST, containerisation et bonnes pratiques de déploiement.",
    skills: [
      { name: "FastAPI", category: "backend-mlops" },
      { name: "REST API", category: "backend-mlops" },
      { name: "Docker", category: "backend-mlops" },
      { name: "Docker Compose", category: "backend-mlops" },
      { name: "Git", category: "backend-mlops" },
      { name: "GitHub", category: "backend-mlops" },
      { name: "CI/CD", category: "backend-mlops" },
      { name: "MLOps", category: "backend-mlops" },
      { name: "Azure", category: "backend-mlops", isNotion: true },
      { name: "GCP", category: "backend-mlops", isNotion: true },
    ],
  },
  {
    id: "embedded-iot",
    title: "Embedded / IoT",
    description: "Développement bas niveau, microcontrôleurs et communication sans fil.",
    skills: [
      { name: "C", category: "embedded-iot" },
      { name: "C++", category: "embedded-iot" },
      { name: "STM32", category: "embedded-iot" },
      { name: "Zephyr RTOS", category: "embedded-iot" },
      { name: "BLE", category: "embedded-iot" },
      { name: "Systèmes embarqués", category: "embedded-iot" },
      { name: "Objets connectés", category: "embedded-iot" },
    ],
  },
  {
    id: "tools",
    title: "Outils & Environnements",
    description: "Environnements de développement, rédaction scientifique et outils d'analyse.",
    skills: [
      { name: "Linux", category: "tools" },
      { name: "WSL2", category: "tools" },
      { name: "Jupyter", category: "tools" },
      { name: "VS Code", category: "tools" },
      { name: "Anaconda / Miniconda", category: "tools" },
      { name: "LaTeX", category: "tools" },
      { name: "Power BI", category: "tools", isNotion: true },
    ],
  },
];
