document.addEventListener("DOMContentLoaded", function() {
    
    /* 1. NAVBAR ACTUALIZADO (Con enlace a CV) */
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = `
            <nav class="navbar">
                <div class="navbar-container">
                    <div class="logo">Lenin Zapata</div>
                    <ul class="nav-menu">
                        <li><a href="index.html" class="nav-link" data-i18n="nav_home">Inicio</a></li>
                        <li><a href="about.html" class="nav-link" data-i18n="nav_about">Sobre Mí</a></li>
                        <li><a href="projects.html" class="nav-link" data-i18n="nav_projects">Proyectos</a></li>
                        <li><a href="cv.html" class="nav-link" data-i18n="nav_cv">CV</a></li> <li><a href="contact.html" class="nav-link" data-i18n="nav_contact">Contacto</a></li>
                        <li><a href="#" id="lang-toggle" class="lang-btn">EN</a></li>
                    </ul>
                </div>
            </nav>
        `;

        // Active class logic
        const currentPage = window.location.pathname.split("/").pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPage) link.classList.add('active');
        });
    }

    /* 2. FOOTER (Igual que antes) */
    const footerElement = document.querySelector('.footer');
    if (footerElement) {
        const currentYear = new Date().getFullYear();
        footerElement.innerHTML = `
            <div class="footer-container">
                <p>&copy; ${currentYear} Lenin Zapata | Data & AI Analytics. <span data-i18n="footer_rights">Todos los derechos reservados.</span></p>
                <div class="social-links">
                    <a href="https://linkedin.com/in/leninzapata-profile/" target="_blank" class="social-btn linkedin"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/lenin-zapata" target="_blank" class="social-btn github"><i class="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/lenin.ze/" target="_blank" class="social-btn instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        `;
    }

    /* =========================================
       3. SISTEMA DE TRADUCCIÓN (I18n) COMPLETO
       ========================================= */
    const translations = {
        es: {
            // --- NAVBAR ---
            nav_home: "Inicio", nav_about: "Sobre Mí", nav_projects: "Proyectos", nav_cv: "CV", nav_contact: "Contacto",
            btn_lang: "EN",
            
            // --- HERO & INDEX ---
            hero_title: "Lenin Zapata",
            hero_role: "Data & AI Analytics",
            hero_desc: "Especializado en ingeniería de datos, analítica y automatización.",
            btn_projects: "Ver Proyectos", 
            btn_about: "Conóceme",
            
            // --- ABOUT (SOBRE MÍ) ---
            about_title: "Sobre Mí",
            about_story_title: "Mi Historia",
            // NOTA: Asegúrate de que este texto coincida con lo que quieres mostrar
            about_bio: "Data Engineer con más de 8 años de experiencia en Business Intelligence (BI), automatización de procesos y modelado de datos. Actualmente lidero proyectos de integración y analítica estratégica, usando herramientas como Snowflake, Airflow, Python y Power BI para transformar datos complejos en decisiones de negocio claras.",
            about_skills_title: "Habilidades Técnicas",

            // --- PROJECTS ---
            projects_title: "Mis Proyectos",
            project_1_title: "Monitor Estratégico de Demanda y Supply",
            project_1_desc: "Optimiza la planificación comercial alineando proyecciones, ventas y stock en tiempo real.",
            btn_view_more: "Ver Más →",

            // --- PÁGINA DETALLE PROYECTO (MONITOR) - NUEVO ---
            btn_back_projects: "Volver a Proyectos",
            p1_detail_title: "Monitor Estratégico de Demanda y Supply",
            p1_detail_subtitle: "Optimización de proyecciones, ventas y stock.",
            p1_summary_title: "Resumen del Proyecto",
            p1_summary_desc: "Este dashboard permite visualizar el grado de cumplimiento entre la demanda proyectada, las ventas y el abastecimiento. Está diseñado para apoyar la toma de decisiones estratégicas en áreas de planificación comercial, compras y logística, facilitando la identificación de brechas y oportunidades de mejora. La herramienta se alimenta de datos históricos y proyectados, y presenta indicadores clave que permiten evaluar el rendimiento por categoría, producto y periodo. Su implementación ha contribuido a mejorar la eficiencia operativa y la alineación entre áreas comerciales y operativas.",
            p1_obj_title: "¿Cuál era el objetivo?",
            p1_obj_desc: "Visualizar el cumplimiento de la demanda en relación con las ventas y el abastecimiento, permitiendo identificar brechas y oportunidades de mejora en la planificación comercial.",
            p1_kpi_title: "Indicadores Clave (KPIs)",
            p1_kpi_1_name: "Demanda", p1_kpi_1_desc: "Proyección de ventas",
            p1_kpi_2_name: "Ventas", p1_kpi_2_desc: "Reales registradas",
            p1_kpi_3_name: "Abastecimiento", p1_kpi_3_desc: "Inventario disponible",
            p1_kpi_4_name: "Órdenes", p1_kpi_4_desc: "Pedidos procesados",
            p1_tech_title: "Tecnologías",
            p1_tech_desc: "Python, Google Looker Studio, Google Sheets, Firebase Database.",
            p1_results_title: "Resultados de Negocio",
            p1_results_intro: "La implementación logró:",
            p1_res_1: "Reducir el riesgo de desabastecimiento.",
            p1_res_2: "Optimizar la eficiencia operativa.",
            p1_res_3: "Toma de decisiones basada en datos confiables.",

            /* === PROYECTO 2: CHATBOT LLAMA 3 (ESPAÑOL) === */
            p2_card_title: "Asistente IA con Llama 3",
            p2_card_desc: "Chatbot RAG privado para consultar documentos internos usando LLMs locales y LangChain.",

            // Detalle del Proyecto
            p2_detail_title: "Asistente Corporativo IA (Llama 3)",
            p2_detail_subtitle: "Inteligencia Artificial Generativa privada y segura.",
            
            p2_summary_title: "Resumen del Proyecto",
            p2_summary_desc: "Desarrollo de un asistente virtual capaz de ingerir documentación corporativa (PDFs, Excel) y responder consultas complejas en lenguaje natural. Utiliza una arquitectura RAG (Retrieval-Augmented Generation) ejecutada localmente para garantizar que ningún dato salga de la infraestructura de la empresa, eliminando riesgos de fuga de información.",
            
            p2_obj_title: "El Reto",
            p2_obj_desc: "Democratizar el acceso al conocimiento técnico de la empresa y reducir la fricción en la búsqueda de información, manteniendo una estricta privacidad de datos (sin enviar información a APIs públicas como OpenAI).",
            
            p2_features_title: "Características Clave",
            p2_feat_1: "Ejecución 100% Local",
            p2_feat_2: "Modelo Meta Llama 3",
            p2_feat_3: "Búsqueda Semántica (Vector DB)",
            p2_feat_4: "Respuestas Inmediatas",
            
            p2_tech_title: "Tecnologías",
            p2_tech_desc: "Python, LangChain, Ollama, ChromaDB, Streamlit.",
            
            p2_results_title: "Impacto en el Negocio",
            p2_results_intro: "La implementación logró:",
            p2_res_1: "Reducción del 70% en tiempo de búsqueda de información.",
            p2_res_2: "Cero exposición de datos sensibles a terceros.",
            p2_res_3: "Escalabilidad a otras áreas (RRHH, Legal).",

            /* === PROYECTO 3: RPA n8n (ESPAÑOL) === */
            p3_card_title: "Flujo RPA Inteligente",
            p3_card_desc: "Automatización de procesos con validación humana ('Human-in-the-Loop') usando n8n y Google Sheets.",

            // Detalle
            p3_detail_title: "Flujo RPA Inteligente con n8n",
            p3_detail_subtitle: "Automatización eficiente con validación humana.",
            p3_summary_title: "Resumen del Proyecto",
            p3_summary_desc: "Este proyecto es un flujo de trabajo de automatización de procesos robóticos (RPA) con 'Human-in-the-Loop', desarrollado en n8n. Su objetivo es optimizar los procesos de validación de datos que, por lo general, son lentos y propensos a errores humanos, combinando la eficiencia 24/7 del robot con la toma de decisiones críticas de una persona.",
            p3_prob_title: "El Problema a Resolver",
            p3_prob_desc: "En el mundo de los negocios, los procesos de validación manual se convierten en cuellos de botella que pierden tiempo y dinero. Esta solución elimina ese problema permitiendo que la automatización tenga un 'toque humano' cuando es necesario.",
            p3_how_title: "El Robot: Flujo de Trabajo",
            p3_step_1: "<strong>Extracción de datos:</strong> El robot se conecta a una API para obtener datos de tareas recientes.",
            p3_step_2: "<strong>Validación humana:</strong> Envía un correo electrónico interactivo a un gestor de proyectos, quien puede aprobar o rechazar con un solo clic.",
            p3_step_3: "<strong>Actualización automática:</strong> Basado en la decisión, el robot actualiza una hoja de cálculo de Google Sheets para mantener un registro validado.",
            p3_feat_title: "¿Por qué es genial?",
            p3_feat_1: "Funciona 24/7 autónomamente",
            p3_feat_2: "Decisiones en segundos (Email)",
            p3_feat_3: "Integridad de datos garantizada",
            p3_feat_4: "Ahorro de horas manuales",
            p3_tech_desc: "n8n (Orquestación), JSONPlaceholder API, Google Sheets, Gmail.",

            // --- CV (CURRÍCULUM) - TEXTOS NUEVOS ---
            cv_page_title: "Mi Trayectoria Profesional",
            cv_role_summary: "Data Engineer | Especialista BI | Automatización",
            btn_download_cv: "Descargar PDF",
            cv_exp_title: "Experiencia Profesional",
            cv_edu_title: "Educación",
            cv_skills_title: "Habilidades",
            cv_lang_title: "Idiomas",
            
            // Detalles de Trabajos (Español)
            cv_job1_date: "Oct 2025 - Presente",
            cv_job1_title: "Data Engineer",
            cv_job1_desc: "Diseño e implementación de arquitecturas de datos escalables para el sector farmacéutico/CPG. Desarrollo de pipelines ETL/ELT robustos con Python, SQL y Apache Airflow. Optimización de modelos en Snowflake para mejorar el rendimiento de consultas.",
            
            cv_job2_date: "Mar 2025 - Presente",
            cv_job2_title: "Coordinador de Datos e Información",
            cv_job2_desc: "Liderazgo en el diseño de herramientas de inteligencia de datos para planeación estratégica. Coordinación de integración de datos de múltiples fuentes y desarrollo de flujos automatizados con Power BI, Power Automate y Python.",
            
            cv_job3_date: "Oct 2024 - Presente",
            cv_job3_title: "Consultor de Datos y Automatización",
            cv_job3_desc: "Diseño de dashboards escalables, flujos de trabajo automatizados y pipelines de datos. Automatización de procesos de negocio usando Power Platform para reducir el esfuerzo manual y errores.",
            
            cv_job4_date: "Mar 2018 - Feb 2025",
            cv_job4_title: "Analista de Información",
            cv_job4_desc: "Automatización de procesos operativos y analíticos usando Power BI, Python y Azure Data Factory. Construcción de pipelines de datos escalables para integrar múltiples fuentes.",

            // --- CONTACTO ---
            contact_title: "Hablemos de Datos",
            contact_subtitle: "¿Tienes un proyecto en mente?",
            contact_desc: "Estoy disponible para colaboraciones y/o consultorías.",
            contact_loc_title: "Ubicación",
            contact_loc_text: "Quito, Ecuador (Disponible para remoto)",
            contact_email_title: "Email",
            contact_form_name: "Nombre",
            contact_form_msg: "Mensaje",
            btn_send: "Enviar Mensaje",
            
            // --- FOOTER ---
            footer_rights: "Todos los derechos reservados."
        },
        en: {
            // --- NAVBAR ---
            nav_home: "Home", nav_about: "About Me", nav_projects: "Projects", nav_cv: "Resume", nav_contact: "Contact",
            btn_lang: "ES",
            
            // --- HERO & INDEX ---
            hero_title: "Lenin Zapata",
            hero_role: "Data & AI Analytics",
            hero_desc: "Specialized in data engineering, analytics, and automation.",
            btn_projects: "View Projects", 
            btn_about: "About Me",
            
            // --- ABOUT ---
            about_title: "About Me",
            about_story_title: "My Story",
            about_bio: "Data Engineer with over 8 years of experience in Business Intelligence (BI), process automation, data modeling, and interactive data visualization. Proficient in Snowflake, Apache Airflow, Power BI, Python, and Azure Data Services, with a strong focus on operational efficiency and data quality.",
            about_skills_title: "Technical Skills",

            // --- PROJECTS ---
            projects_title: "My Projects",
            project_1_title: "Strategic Demand & Supply Monitor",
            project_1_desc: "Optimizes commercial planning by aligning projections, sales, and stock in real-time.",
            btn_view_more: "View More →",

            // Asegúrate de pegar esto dentro de translations.en (la sección de inglés)

            p1_detail_title: "Strategic Demand & Supply Monitor",
            p1_detail_subtitle: "Optimization of projections, sales, and stock.",

            p1_summary_title: "Project Summary",
            p1_summary_desc: "This dashboard allows visualizing the compliance degree between projected demand, sales, and supply. It is designed to support strategic decision-making in commercial planning, purchasing, and logistics areas, facilitating the identification of gaps and improvement opportunities. The tool is fed by historical and projected data and presents key indicators to evaluate performance by category, product, and period. Its implementation has contributed to improving operational efficiency and alignment between commercial and operational areas.",

            p1_obj_title: "The Objective",
            p1_obj_desc: "To visualize demand compliance in relation to sales and supply, allowing for the identification of gaps and improvement opportunities in commercial planning.",

            p1_kpi_title: "Key Indicators (KPIs)",
            p1_kpi_1_name: "Demand", 
            p1_kpi_1_desc: "Sales projection",
            p1_kpi_2_name: "Sales", 
            p1_kpi_2_desc: "Actual registered sales",
            p1_kpi_3_name: "Supply", 
            p1_kpi_3_desc: "Available inventory",
            p1_kpi_4_name: "Orders", 
            p1_kpi_4_desc: "Processed orders",

            p1_tech_title: "Technologies",
            p1_tech_desc: "Python, Google Looker Studio, Google Sheets, Firebase Database.",

            p1_results_title: "Business Results",
            p1_results_intro: "The implementation achieved:",
            p1_res_1: "Reduced risk of shortages.",
            p1_res_2: "Optimized operational efficiency.",
            p1_res_3: "Data-driven decision making based on reliable sources.",

            btn_back_projects: "Back to Projects",

            /* === PROJECT 2: LLAMA 3 CHATBOT (ENGLISH) === */
            p2_card_title: "AI Assistant with Llama 3",
            p2_card_desc: "Private RAG chatbot to query internal documents using local LLMs and LangChain.",

            // Project Detail
            p2_detail_title: "Corporate AI Assistant (Llama 3)",
            p2_detail_subtitle: "Private and secure Generative AI.",
            
            p2_summary_title: "Project Summary",
            p2_summary_desc: "Development of a virtual assistant capable of ingesting corporate documentation (PDFs, Excel) and answering complex queries in natural language. It utilizes a locally executed RAG (Retrieval-Augmented Generation) architecture to ensure no data leaves the company infrastructure, eliminating data leakage risks.",
            
            p2_obj_title: "The Challenge",
            p2_obj_desc: "To democratize access to corporate technical knowledge and reduce friction in information retrieval, while maintaining strict data privacy (zero data sent to public APIs like OpenAI).",
            
            p2_features_title: "Key Features",
            p2_feat_1: "100% Local Execution",
            p2_feat_2: "Meta Llama 3 Model",
            p2_feat_3: "Semantic Search (Vector DB)",
            p2_feat_4: "Instant Responses",
            
            p2_tech_title: "Technologies",
            p2_tech_desc: "Python, LangChain, Ollama, ChromaDB, Streamlit.",
            
            p2_results_title: "Business Impact",
            p2_results_intro: "The implementation achieved:",
            p2_res_1: "70% reduction in information retrieval time.",
            p2_res_2: "Zero exposure of sensitive data to third parties.",
            p2_res_3: "Scalability to other departments (HR, Legal).",

            /* === PROJECT 3: RPA n8n (ENGLISH) === */
            p3_card_title: "Intelligent RPA Workflow",
            p3_card_desc: "Process automation with human validation ('Human-in-the-Loop') using n8n and Google Sheets.",

            // Detail
            p3_detail_title: "Intelligent RPA Workflow with n8n",
            p3_detail_subtitle: "Efficient automation with human validation.",
            p3_summary_title: "Project Summary",
            p3_summary_desc: "This project is a Robotic Process Automation (RPA) workflow with 'Human-in-the-Loop', developed in n8n. It aims to optimize data validation processes that are typically slow and prone to human error, combining 24/7 robot efficiency with critical human decision-making.",
            p3_prob_title: "The Challenge",
            p3_prob_desc: "In the business world, manual validation processes become bottlenecks that waste time and money. This solution eliminates that problem by allowing automation to have a 'human touch' when necessary.",
            p3_how_title: "The Robot: Workflow",
            p3_step_1: "<strong>Data Extraction:</strong> The robot connects to an API to fetch recent task data.",
            p3_step_2: "<strong>Human Validation:</strong> Sends an interactive email to a project manager, who can approve or reject with a single click.",
            p3_step_3: "<strong>Automatic Update:</strong> Based on the decision, the robot automatically updates a Google Sheet to maintain a validated record.",
            p3_feat_title: "Why is it great?",
            p3_feat_1: "Runs 24/7 autonomously",
            p3_feat_2: "Decisions in seconds (Email)",
            p3_feat_3: "Guaranteed data integrity",
            p3_feat_4: "Saves manual work hours",
            p3_tech_desc: "n8n (Orchestration), JSONPlaceholder API, Google Sheets, Gmail.",

            // --- CV (RESUME) - ENGLISH TEXTS FROM PDF ---
            cv_page_title: "My Professional Carrer",
            cv_role_summary: "Data Engineer | BI Specialist | Automation",
            btn_download_cv: "Download PDF",
            cv_exp_title: "Professional Experience",
            cv_edu_title: "Education",
            cv_skills_title: "Skills",
            cv_lang_title: "Languages",

            // Job Details (English)
            cv_job1_date: "Oct 2025 - Present",
            cv_job1_title: "Data Engineer",
            cv_job1_desc: "Drive the design and implementation of scalable data architectures to support commercial and operational analytics in the pharmaceutical/CPG sector. Develop and maintain robust ETL/ELT pipelines using Python, SQL, and Apache Airflow. Optimize data models in Snowflake.",
            
            cv_job2_date: "Mar 2025 - Present",
            cv_job2_title: "Data and Information Coordinator",
            cv_job2_desc: "Lead the design and implementation of data intelligence tools for strategic planning. Coordinate data integration from multiple sources ensuring consistency. Develop automated workflows using Power BI, Power Automate, and Python.",
            
            cv_job3_date: "Oct 2024 - Present",
            cv_job3_title: "Data and Automation Consultant",
            cv_job3_desc: "Design and implement scalable dashboards, automated workflows, and data pipelines. Automate business processes using Power Platform, reducing manual effort and errors. Provide technical consulting on data architecture.",
            
            cv_job4_date: "Mar 2018 - Feb 2025",
            cv_job4_title: "Information Analyst",
            cv_job4_desc: "Automate operational and analytical processes using Power BI, Power Automate, Python, and Azure Data Factory. Build scalable data pipelines to integrate multiple sources.",

            // --- CONTACT ---
            contact_title: "Let's Talk Data",
            contact_subtitle: "Have a project in mind?",
            contact_desc: "I am available for collaborations and/or consulting.",
            contact_loc_title: "Location",
            contact_loc_text: "Quito, Ecuador (Available for remote)",
            contact_email_title: "Email",
            contact_form_name: "Name",
            contact_form_msg: "Message",
            btn_send: "Send Message", 
            
            // --- FOOTER ---
            footer_rights: "All rights reserved."
        }
    };

    function setLanguage(lang) {
        localStorage.setItem('preferredLang', lang);
        
        // Traducir elementos normales
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // CAMBIO AQUÍ: Usamos innerHTML en lugar de textContent
                // Antes: element.textContent = translations[lang][key];
                element.innerHTML = translations[lang][key]; 
            }
        });

        // (El resto de la función sigue igual...)
        const nameInput = document.getElementById('name');
        // ...
    }

    const savedLang = localStorage.getItem('preferredLang') || 'es';
    setLanguage(savedLang);

    document.body.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'lang-toggle') {
            e.preventDefault();
            const currentLang = localStorage.getItem('preferredLang') === 'es' ? 'en' : 'es';
            setLanguage(currentLang);
        }
    });
});