import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "regulor",
    title: "Regulor - Assistant RAG d'entreprise pour la conformité bancaire",
    shortDescription:
      "Assistant RAG complet dédié à la conformité bancaire avec ingestion et vectorisation de documents, retrieval hybride, orchestration LLM et fallback local.",
    description:
      "Regulor est un assistant RAG d'entreprise complet dédié à la conformité bancaire. Le système orchestre l'ingestion automatisée de documents réglementaires, leur vectorisation dans Supabase/pgvector, un retrieval hybride combinant similarité vectorielle et recherche lexicale, une orchestration d'agents LLM avec Groq (LLaMA 3.3-70B) et un fallback local automatique vers Ollama (Mistral 7B) en cas d'indisponibilité.",
    category: "RAG",
    technologies: [
      "FastAPI",
      "Next.js",
      "Supabase/pgvector",
      "LangChain",
      "Groq",
      "Ollama",
      "Docker",
    ],
    featured: true,
    video: "/projects/regulor/Short_Demo_Regulor.mp4",
    highlights: [
      "Embeddings all-MiniLM-L6-v2 et vectorisation dans Supabase/pgvector",
      "Retrieval hybride (similarité cosinus 60 %, score lexical 40 %)",
      "Pénalité de diversité des sources pour éviter la redondance",
      "Orchestration LLM Groq / LLaMA 3.3-70B avec fallback local Ollama / Mistral 7B",
      "Sécurité et authentification via Supabase Auth & JWT",
      "Backend REST avec FastAPI et frontend Next.js",
      "Containerisation complète Docker / Docker Compose",
    ],
    metrics: ["Évaluation RAGAS", "Precision@5", "MRR (Mean Reciprocal Rank)"],
  },
  {
    slug: "silverai-handbook-generator",
    title: "SilverAI Handbook Generator",
    shortDescription:
      "Application Streamlit de génération de manuels basée sur LightRAG, avec indexation de documents, embeddings et génération augmentée par récupération.",
    description:
      "Application interactive développée en Streamlit s'appuyant sur l'architecture LightRAG pour la génération automatisée de manuels et documentations techniques. Le système assure l'indexation asynchrone des documents, le calcul d'embeddings vectoriels et la génération augmentée via l'API Groq.",
    category: "Generative AI",
    technologies: ["Streamlit", "LightRAG", "Groq API", "Supabase", "Python"],
    featured: true,
    highlights: [
      "Vectorisation de texte via sentence-transformers",
      "Architecture RAG structurée avec LightRAG",
      "Inférence ultra-rapide via Groq API (llama-3.3-70b-versatile)",
      "Persistance et gestion des documents dans Supabase",
      "Traitement RAG asynchrone pour une expérience utilisateur fluide",
    ],
  },
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    shortDescription:
      "Pipeline de détection de fraude sur des données extrêmement déséquilibrées.",
    description:
      "Pipeline complet de détection de fraude sur des données de transactions par carte de crédit caractérisées par un déséquilibre extrême des classes. Mise en œuvre de stratégies avancées de rééchantillonnage et de modèles de gradient boosting.",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "XGBoost"],
    featured: true,
    highlights: [
      "Exploratory Data Analysis (EDA) et standardisation des variables",
      "Stratégies de rééchantillonnage : SMOTE et Undersampling",
      "Modélisation comparative : Logistic Regression, Random Forest, XGBoost",
      "Validation croisée stratifiée pour préserver la distribution des classes",
    ],
    metrics: [
      "Précision",
      "Recall",
      "F1-score",
      "AUC-ROC",
      "Courbe Precision-Recall",
    ],
  },
  {
    slug: "vehicle-classification-vision-transformers",
    title: "Vehicle Classification using Vision Transformers",
    shortDescription:
      "Classification multiclasses de véhicules avec fine-tuning d’un ViT pré-entraîné.",
    description:
      "Système de classification multiclasses d'images de véhicules fondé sur l'architecture Vision Transformer (ViT). Adaptation et fine-tuning de backbone pré-entraîné avec régularisation et ordonnancement du taux d'apprentissage.",
    category: "Computer Vision",
    technologies: ["PyTorch", "Vision Transformer", "Python"],
    featured: true,
    highlights: [
      "Data augmentation spécifique aux images de véhicules",
      "Fine-tuning d'un modèle ViT pré-entraîné avec gel partiel des premières couches",
      "Learning-rate scheduling et optimisation AdamW",
    ],
    metrics: ["Accuracy", "Macro F1-score", "Matrice de confusion par classe"],
  },
  {
    slug: "brain-tumor-segmentation-unet",
    title: "Brain Tumor Segmentation with U-Net",
    shortDescription:
      "Segmentation sémantique de tumeurs cérébrales sur des images IRM.",
    description:
      "Modèle de Deep Learning médical basé sur l'architecture convolutive U-Net pour la segmentation sémantique pixel-par-pixel de tumeurs cérébrales sur des coupes d'imagerie par résonance magnétique (IRM).",
    category: "Deep Learning",
    technologies: ["PyTorch", "U-Net", "Python"],
    featured: true,
    highlights: [
      "Preprocessing poussé des volumes IRM et alignement des masques",
      "Augmentation de données biomédicales (rotations, déformations élastiques)",
      "Fonction de perte combinée : Dice Loss & Binary Cross-Entropy (BCE)",
      "Entraînement optimisé sur GPU avec calcul de métriques d'intersection",
    ],
    metrics: ["IoU (Intersection over Union)", "Dice Score"],
  },
  {
    slug: "automated-etl-pipeline-document-processing",
    title: "Automated ETL Pipeline for Document Processing",
    shortDescription:
      "Pipeline ETL exposé via une API FastAPI permettant de traiter automatiquement des documents PDF.",
    description:
      "Pipeline d'ingestion et de traitement ETL automatisé pour documents PDF complexes. Exposé via des endpoints REST FastAPI, le système exécute l'extraction OCR par Tesseract, la structuration de données et la persistance traçable dans PostgreSQL/Supabase.",
    category: "Data Engineering",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Tesseract OCR",
    ],
    featured: true,
    highlights: [
      "API REST asynchrone d'upload et de traitement avec FastAPI",
      "Reconnaissance optique de caractères (OCR) via Tesseract & parsing PDF",
      "Nettoyage, normalisation et structuration des champs extraits",
      "Persistance relationnelle dans PostgreSQL / Supabase",
      "Gestion robuste des erreurs et logs de traçabilité d'exécution",
    ],
  },
  {
    slug: "hotel-booking-cancellation-prediction",
    title: "Hotel Booking Cancellation Prediction",
    shortDescription:
      "Pipeline Machine Learning complet pour prédire l’annulation de réservations hôtelières.",
    description:
      "Pipeline end-to-end de Machine Learning visant à prédire les annulations de réservations d'hôtels à partir de données historiques d'enseignes hôtelières.",
    category: "Machine Learning",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    featured: false,
    highlights: [
      "Analyse exploratoire des données (EDA) approfondie",
      "Traitement des valeurs manquantes et encodage des variables catégorielles",
      "Feature engineering ciblé (délais de réservation, historique client)",
      "Entraînement de Logistic Regression, Random Forest et Gradient Boosting",
      "Optimisation via GridSearchCV et validation croisée",
    ],
    metrics: ["Accuracy", "F1-score", "Matrice de confusion"],
  },
  {
    slug: "new-york-taxi-tips-prediction",
    title: "New York Taxi Tips Prediction",
    shortDescription:
      "Modèle de prédiction sur des données de courses de taxi à grande volumétrie.",
    description:
      "Modèle de régression prédictive appliqué à l'immense dataset des courses de taxis de la ville de New York (NYC Yellow Taxi) pour prédire le montant des pourboires attribués aux chauffeurs.",
    category: "Data Science",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    featured: false,
    highlights: [
      "Nettoyage rigoureux des données aberrantes et outliers GPS/temporels",
      "Feature engineering temporel (heure, jour, vacances) et géospatial",
      "Modélisation avec Random Forest Regressor & XGBoost Regressor",
      "Tuning fin des hyperparamètres de régression",
    ],
    metrics: ["RMSE", "MAE", "R²"],
  },
  {
    slug: "employee-attrition-prediction",
    title: "Employee Attrition Prediction",
    shortDescription:
      "Classification binaire permettant d'identifier les risques d’attrition des employés.",
    description:
      "Modèle de classification prédictive identifiant les facteurs de risque d'attrition des collaborateurs afin de fournir des insights décisionnels aux équipes RH.",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn"],
    featured: false,
    highlights: [
      "Prise en charge du déséquilibre des classes via SMOTE et class_weight",
      "Encodage ordinal/one-hot et normalisation des variables",
      "Sélection d'attributs et explicabilité des décisions via SHAP values",
      "Optimisation des hyperparamètres de classification",
    ],
    metrics: ["Recall", "Précision", "F1-score"],
  },
  {
    slug: "spam-message-classification",
    title: "Spam Message Classification",
    shortDescription:
      "Classifieur NLP permettant de détecter les messages indésirables.",
    description:
      "Système de filtrage NLP de messages texte permettant de catégoriser automatiquement les SMS ou emails comme spams ou messages légitimes.",
    category: "NLP",
    technologies: ["Python", "NLP", "Scikit-learn"],
    featured: false,
    highlights: [
      "Nettoyage du texte (stop words, ponctuation) et lemmatisation",
      "Vectorisation documentaire via TF-IDF et Bag-of-Words",
      "Modélisation et comparaison : Naive Bayes, SVM, Logistic Regression",
    ],
    metrics: ["Accuracy", "Précision", "Recall", "F1-score"],
  },
  {
    slug: "cat-vs-dog-image-classification",
    title: "Cat vs Dog Image Classification",
    shortDescription:
      "Classification binaire d’images avec un CNN développé from scratch.",
    description:
      "Réseau de neurones convolutif (CNN) conçu et entraîné from scratch sous TensorFlow/Keras pour la classification d'images d'animaux.",
    category: "Computer Vision",
    technologies: ["TensorFlow", "CNN", "Python"],
    featured: false,
    highlights: [
      "Preprocessing des flux d'images (redimensionnement, normalisation)",
      "Augmentation de données à la volée (rotation, flip horizontal, zoom)",
      "Architecture réseau custom : empilement Conv2D/MaxPooling2D & Dropout",
      "Régularisation par Early Stopping sur le loss de validation",
    ],
    metrics: ["Accuracy", "Matrice de confusion"],
  },
  {
    slug: "violence-detection-in-videos",
    title: "Violence Detection in Videos",
    shortDescription:
      "Pipeline CNN-RNN pour la reconnaissance d’actions violentes dans des vidéos.",
    description:
      "Architecture hybride Deep Learning spatio-temporelle combinant un réseau ResNet pré-entraîné pour l'extraction de représentations visuelles et un réseau récurrent LSTM avec mécanisme d'attention pour la reconnaissance d'actions dans des flux vidéo.",
    category: "Deep Learning",
    technologies: ["PyTorch", "ResNet", "LSTM", "Python"],
    featured: false,
    highlights: [
      "Découpage et extraction de séquences de frames vidéo",
      "Extraction de caractéristiques spatiales via ResNet pré-entraîné",
      "Modélisation des dépendances temporelles longues via LSTM avec attention",
    ],
    metrics: ["Accuracy", "F1-score", "Matrice de confusion"],
  },
  {
    slug: "real-time-object-detection-yolo",
    title: "Real-Time Object Detection using YOLO",
    shortDescription:
      "Système de détection d’objets en temps réel basé sur YOLO.",
    description:
      "Projet en cours de développement axé sur la construction et le déploiement d'un pipeline de détection d'objets ultra-rapide basé sur YOLO.",
    category: "Computer Vision",
    status: "En cours",
    technologies: ["PyTorch", "YOLO", "Python"],
    featured: false,
    highlights: [
      "Constitution et annotation de datasets d'objets",
      "Entraînement et réglage fin de l'architecture YOLO",
      "Optimisation de l'inférence : réduction de la latence & quantification",
      "Préparation pour l'intégration temps réel",
    ],
  },
];
