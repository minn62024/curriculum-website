// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Module data for detailed view
const moduleData = {
    1: {
        title: "Introduction to AI and ML",
        duration: "1 week",
        description: "Foundation concepts and programming introduction",
        topics: [
            "Definition and Scope of AI and ML",
            "Introduction to programming",
            "Starting with Google Colab"
        ],
        learningOutcomes: [
            "Understand the fundamentals of AI and ML",
            "Set up development environment",
            "Get familiar with Google Colab platform"
        ]
    },
    2: {
        title: "Python Basics",
        duration: "2 weeks",
        description: "Core Python programming fundamentals",
        topics: [
            "Why Python?",
            "Data Types and Type Conversion",
            "Variables and Operators",
            "Conditional statements",
            "While Loops and For Loops",
            "Python Identifiers",
            "Function - Inbuilt vs User Defined",
            "Types of Function Arguments",
            "Global variable vs Local variable",
            "Anonymous Function | LAMBDA",
            "Libraries"
        ],
        learningOutcomes: [
            "Master Python syntax and basic programming concepts",
            "Understand control flow and loops",
            "Learn function creation and usage",
            "Get familiar with Python libraries"
        ]
    },
    3: {
        title: "Data Structures & Functions",
        duration: "2 weeks",
        description: "Advanced Python data structures",
        topics: [
            "List creation and manipulation",
            "List comprehension and mutable concept",
            "Dictionary creation and operations",
            "Tuple creation and immutable concept",
            "Set creation and operations",
            "String Operations and F-strings",
            "Advanced indexing and slicing"
        ],
        learningOutcomes: [
            "Master all Python data structures",
            "Understand mutability and immutability",
            "Learn advanced string operations",
            "Practice with real-world data manipulation"
        ]
    },
    4: {
        title: "NumPy",
        duration: "1 week",
        description: "Numerical computing with Python",
        topics: [
            "Importance of NumPy in Data Science",
            "Creating NumPy Arrays from various sources",
            "Array Attributes and Manipulation",
            "Mathematical Operations and Indexing",
            "Statistics using numpy array",
            "Linear Algebra Operations",
            "Matrix Operations and Determinants"
        ],
        learningOutcomes: [
            "Master NumPy array operations",
            "Understand mathematical operations on arrays",
            "Learn linear algebra with NumPy",
            "Compare performance with Python lists"
        ]
    },
    5: {
        title: "Pandas",
        duration: "2 weeks",
        description: "Data manipulation and analysis",
        topics: [
            "Series creation and operations",
            "DataFrame creation from various sources",
            "Data Loading from CSV, Excel files",
            "Data Cleaning and Missing Data Handling",
            "Data Filtering and Sorting",
            "Grouping and Aggregation",
            "Merging and Joining DataFrames",
            "Pivot Tables and Cross-tabulations"
        ],
        learningOutcomes: [
            "Master Pandas for data manipulation",
            "Learn data cleaning techniques",
            "Understand data aggregation and grouping",
            "Practice with real datasets"
        ]
    },
    6: {
        title: "Matplotlib",
        duration: "1 week",
        description: "Data visualization fundamentals",
        topics: [
            "Introduction to pyplot",
            "Basic Plot Functions",
            "Understanding Figures and Axes",
            "Creating Multiple Plots with subplots",
            "Different Types of Plots",
            "Line Graphs, Bar Charts, Histograms",
            "Scatter Plot and Pie Chart",
            "Adding Legends and Customization"
        ],
        learningOutcomes: [
            "Master basic plotting with Matplotlib",
            "Create various types of visualizations",
            "Learn plot customization techniques",
            "Understand figure and axes management"
        ]
    },
    7: {
        title: "Seaborn",
        duration: "1 week",
        description: "Statistical data visualization",
        topics: [
            "Creating Basic Plots with Seaborn",
            "Setting Styles and Color Palettes",
            "Categorical Plots: barplot, countplot, boxplot",
            "Distribution Plots: histplot, pairplot",
            "Relational Plots: scatterplot, lineplot",
            "Regression Plots: regplot",
            "Matrix Plots: heatmap",
            "Multi-variable Plots with hue, size, style"
        ],
        learningOutcomes: [
            "Master statistical visualization with Seaborn",
            "Create beautiful and informative plots",
            "Learn advanced plotting techniques",
            "Understand statistical plot types"
        ]
    },
    8: {
        title: "SciPy",
        duration: "1 week",
        description: "Scientific computing library",
        topics: [
            "Linear Algebra (scipy.linalg)",
            "Integration (scipy.integrate)",
            "Statistics (scipy.stats)"
        ],
        learningOutcomes: [
            "Understand SciPy's scientific computing capabilities",
            "Learn advanced mathematical operations",
            "Master statistical functions"
        ]
    },
    9: {
        title: "Exploratory Data Analysis (EDA)",
        duration: "2 weeks",
        description: "Comprehensive data exploration",
        topics: [
            "Introduction to EDA and its importance",
            "Data Collection and Preparation",
            "Data Profiling and Summary Statistics",
            "Univariate Analysis with visualizations",
            "Bivariate Analysis and correlations",
            "Multivariate Analysis techniques",
            "Feature Engineering and encoding",
            "Scaling and Normalization"
        ],
        learningOutcomes: [
            "Master comprehensive data exploration",
            "Learn statistical analysis techniques",
            "Understand feature engineering",
            "Practice with real-world datasets"
        ]
    },
    10: {
        title: "Mathematics",
        duration: "1 week",
        description: "Mathematical foundations for ML",
        topics: [
            "Linear Algebra - Linear Equations and Matrices",
            "Determinant, Eigen Value and Eigenvector",
            "Euclidean Distance & Manhattan Distance",
            "Calculus - Derivatives and Partial Differentiation",
            "Max & Min concepts",
            "Indices & Logarithm"
        ],
        learningOutcomes: [
            "Master mathematical foundations for ML",
            "Understand linear algebra concepts",
            "Learn calculus applications in ML",
            "Apply mathematical concepts to data science"
        ]
    },
    11: {
        title: "Statistics",
        duration: "2 weeks",
        description: "Statistical concepts and methods",
        topics: [
            "Descriptive Statistics - Central Tendency and Variability",
            "Quartiles, Percentiles, IQR",
            "Probability Basics and Sample Spaces",
            "Conditional Probability and Bayes' Theorem",
            "Statistical Distributions - Discrete and Continuous",
            "Central Limit Theorem",
            "Hypothesis Testing - Z-Tests and T-Tests"
        ],
        learningOutcomes: [
            "Master statistical concepts for data science",
            "Understand probability theory",
            "Learn hypothesis testing",
            "Apply statistical methods to real data"
        ]
    },
    12: {
        title: "Machine Learning",
        duration: "3 weeks",
        description: "Core ML algorithms and techniques",
        topics: [
            "Introduction to Machine Learning types",
            "Simple and Multiple Linear Regression",
            "Logistic Regression for Classification",
            "Support Vector Machine (SVM)",
            "Decision Tree and Random Forest",
            "Naive Bayes Classifier",
            "K-Nearest Neighbours (KNN)",
            "Model Evaluation and Optimization",
            "Overfitting and Underfitting",
            "Principal Component Analysis (PCA)"
        ],
        learningOutcomes: [
            "Master core machine learning algorithms",
            "Understand model evaluation techniques",
            "Learn to handle overfitting and underfitting",
            "Practice with real-world ML problems"
        ]
    },
    13: {
        title: "Deep Learning",
        duration: "2 weeks",
        description: "Neural networks and advanced architectures",
        topics: [
            "Introduction to Neural Networks",
            "Biological vs Artificial Neuron",
            "Perceptron and Multi Layer Perceptron",
            "Forward and Back Propagation",
            "Activation Functions - Sigmoid, Tanh, ReLU, Softmax",
            "Cost Function and Gradient Descent",
            "Regularization Techniques",
            "Convolutional Neural Networks (CNN)",
            "Recurrent Neural Networks (RNNs)",
            "Long Short-Term Memory (LSTM)"
        ],
        learningOutcomes: [
            "Master neural network fundamentals",
            "Understand deep learning architectures",
            "Learn CNN and RNN applications",
            "Practice with deep learning frameworks"
        ]
    },
    14: {
        title: "Generative AI",
        duration: "2 weeks",
        description: "Latest AI technologies and applications",
        topics: [
            "Introduction to Generative AI",
            "LLMs - Transformer Architecture",
            "Working with Open-Source LLMs",
            "Prompt Engineering techniques",
            "AI Agents and their applications",
            "Future of Generative AI"
        ],
        learningOutcomes: [
            "Understand Generative AI concepts",
            "Master prompt engineering techniques",
            "Learn to work with Large Language Models",
            "Explore AI agents and future applications"
        ]
    }
};

// Modal functionality
const modal = document.getElementById('moduleModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

// Open modal with module details
document.querySelectorAll('.btn-expand').forEach(button => {
    button.addEventListener('click', (e) => {
        const moduleCard = e.target.closest('.module-card');
        const moduleNumber = parseInt(moduleCard.dataset.module);
        const module = moduleData[moduleNumber];
        
        if (module) {
            modalContent.innerHTML = `
                <div class="modal-header">
                    <h2>${module.title}</h2>
                    <span class="module-duration-badge">${module.duration}</span>
                </div>
                <div class="modal-body">
                    <p class="module-description">${module.description}</p>
                    
                    <div class="topics-section">
                        <h3>Topics Covered</h3>
                        <ul class="topics-list">
                            ${module.topics.map(topic => `<li>${topic}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="outcomes-section">
                        <h3>Learning Outcomes</h3>
                        <ul class="outcomes-list">
                            ${module.learningOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form submission
document.querySelector('.contact-form form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.module-card, .path-phase, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter animation for hero stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                if (target) {
                    animateCounter(stat, target);
                }
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Add CSS for modal content
const modalStyles = `
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #e5e7eb;
    }
    
    .modal-header h2 {
        color: #1f2937;
        font-size: 2rem;
        font-weight: 700;
    }
    
    .module-duration-badge {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        font-weight: 600;
        font-size: 0.9rem;
    }
    
    .module-description {
        font-size: 1.1rem;
        color: #6b7280;
        margin-bottom: 2rem;
        line-height: 1.6;
    }
    
    .topics-section, .outcomes-section {
        margin-bottom: 2rem;
    }
    
    .topics-section h3, .outcomes-section h3 {
        color: #1f2937;
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    
    .topics-list, .outcomes-list {
        list-style: none;
        padding: 0;
    }
    
    .topics-list li, .outcomes-list li {
        padding: 0.75rem 0;
        color: #4b5563;
        position: relative;
        padding-left: 2rem;
        border-bottom: 1px solid #f3f4f6;
    }
    
    .topics-list li:last-child, .outcomes-list li:last-child {
        border-bottom: none;
    }
    
    .topics-list li::before {
        content: '📚';
        position: absolute;
        left: 0;
        top: 0.75rem;
    }
    
    .outcomes-list li::before {
        content: '🎯';
        position: absolute;
        left: 0;
        top: 0.75rem;
    }
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});
