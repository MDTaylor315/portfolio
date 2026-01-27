// translations.ts - Aquí colocas todos los textos en español e inglés

export const translations = {
  ES: {
    // HERO
    hero: {
      title: "DESARROLLADOR\nMÓVIL FLUTTER",
      cvButton: "Ver CV",
    },

    // NAVBAR
    navbar: {
      inicio: "Inicio",
      sobreMi: "Sobre mí",
      experiencia: "Experiencia",
      proyectos: "Proyectos",
      contacto: "Contacto",
    },

    // ABOUT ME
    aboutMe: {
      greeting: "Hola, yo soy",
      name: "Eduardo Velarde",
      role: "Desarrollador Móvil Flutter",
      specialty: "Especialista en Flutter y Arquitectura Limpia.",
      description1:
        "Con base en Android y experiencia en iOS, manejo el ciclo completo de desarrollo: desde la integración de APIs hasta el despliegue final. Me enfoco en crear componentes reutilizables que aseguren la escalabilidad.",
      description2:
        "Bilingüe (Inglés avanzado), de aprendizaje ágil y comprometido con la entrega de software técnico de alta calidad.",
    },

    // EXPERIENCE
    experience: {
      title: "Mi Experiencia",
      experiences: [
        {
          company: "Simbiosys",
          period: "Marzo 2024 - Junio 2025",
          description:
            "Me encargué de mejorar la experiencia de usuario arreglando bugs visuales y de lógica, incluso aquellos detectados por reportes automáticos de excepciones. Implementé mejoras en los módulos de GPS, documentos y aprobación de solicitudes. Desarrollé por completo un módulo para supervisores que permitía asignar centros de costo y horarios, incluyendo un calendario para el monitoreo histórico de la asistencia",
        },
        {
          company: "Sistematic",
          period: "Septiembre 2025 - Actualidad",
          description:
            "Me uní al equipo para que la empresa pueda ampliarse al desarrollo móvil. Hice de inicio a fin una aplicación de puntos y premios, manejando toda la lógica técnica y la privacidad con códigos de unión. Actualmente desarrollo una app logística que le da un plus a su sistema web actual, permitiendo rastrear los viajes en vivo y registrar entregas con mucho más detalle. Trabajo con el equipo de requerimientos para llevar las necesidades del cliente a la aplicación.",
        },
      ],
    },

    // PROJECTS
    projects: {
      title: "Mis Proyectos",
      list: [
        {
          title: "ADIPIX",
          subtitle: "Aplicación de control de salud física",
          period: "2025-2026",
          description:
            "Es mi proyecto de tesis y el más completo que he realizado hasta ahora, ya que me encargué tanto del desarrollo en Flutter como de toda la lógica de backend y el entrenamiento del modelo de IA. Utilicé visión computacional para estimar la composición corporal a partir de fotos, un reto que requirió entrenar el modelo desde cero utilizando una mezcla estratégica de data sintética y datos reales para maximizar la precisión de los resultados. El sistema no solo procesa la imagen, sino que analiza los datos obtenidos para generar de forma automática rutinas personalizadas de alimentación y ejercicio físico.",
          icons: [
            "/icons/Flutter.svg",
            "/icons/Python.svg",
            "/icons/Android.svg",
          ],
        },
        {
          title: "SYSTMAP",
          subtitle: "Aplicación de gestión de entregas y movilización",
          period: "2025-2026",
          description:
            "Actualmente desarrollo esta solución de rastreo para darle un plus al sistema web de la empresa, buscando un control mucho más detallado de los viajes en vivo. Como el proyecto está en fase inicial y el backend aún no se desarrolla, estoy trabajando la lógica de rastreo en segundo plano utilizando datos sintéticos para simular las rutas y el flujo de información. El objetivo es que la app permita registrar entregas e incidentes en tiempo real, dándole a la empresa una visión clara de lo que pasa en la ruta. Trabajo coordinado con el equipo de requerimientos para aterrizar estas funciones.",
          icons: ["/icons/Flutter.svg", "/icons/Android.svg"],
        },
        {
          title: "BEDIA",
          subtitle: "Aplicación de seguridad con inteligencia artificial",
          period: "2025-2026",
          description:
            "Es una aplicación de seguridad diseñada para la vigilancia del hogar mediante gestión de espacios y reconocimiento facial. Permite registrar casas por habitaciones y crear listas de invitados o familiares; si la cámara detecta a alguien desconocido, el sistema dispara una alerta inmediata al propietario. Aunque fue un proyecto pequeño desarrollado a escala local compartiendo la misma red WiFi, logré implementar con éxito la transmisión de video en vivo y la lógica de detección, demostrando mi capacidad para manejar flujos de datos de video y procesamiento de imágenes en tiempo real.",
          icons: ["/icons/Flutter.svg", "/icons/Android.svg"],
        },
        {
          title: "Planiweb",
          subtitle: "Aplicación de control de salud física",
          period: "2024-2025",
          description:
            "Me encargué de estabilizar y mejorar la experiencia de usuario en una plataforma de gestión de recursos humanos con una base de usuarios activa. Mi trabajo se centró en rediseñar interfaces críticas y resolver bugs de lógica para elevar la calidad del producto. Implementé módulos complejos como Asistencia 360 y Planidocs (firma digital), asegurando que procesos sensibles de planilla funcionaran de manera fluida y segura.",
          icons: [
            "/icons/Flutter.svg",
            "/icons/Python.svg",
            "/icons/Android.svg",
            "/icons/Apple.svg",
          ],
        },
      ],
    },

    // FROM IDEAS TO REALITY
    fromIdeas: {
      year: "2026",
      title: "De ideas a realidad",
      description1:
        "No solo programo pantallas, construyo aplicaciones que duran. Invierto tiempo en diseñar una buena arquitectura y componentes reutilizables, porque esa es la clave de una app con bases sólidas.",
      description2:
        "Al tener bases en backend, soy muy cuidadoso con el manejo de la data y la integración de APIs, siempre aplicando validaciones y manejo de excepciones para que nada falle. Mi meta es que cada actualización sea fluida, el código mantenga su calidad y el usuario tenga una experiencia impecable.",
    },

    // FOOTER
    footer: {
      title: "¿Estás interesado? Contáctame",
      emailCopied: "✓ Email copiado al portapapeles",
    },
  },

  EN: {
    // HERO
    hero: {
      title: "MOBILE FLUTTER\nDEVELOPER",
      cvButton: "View CV",
    },

    // NAVBAR
    navbar: {
      inicio: "Home",
      sobreMi: "About me",
      experiencia: "Experience",
      proyectos: "Projects",
      contacto: "Contact",
    },

    // ABOUT ME
    aboutMe: {
      greeting: "Hello, I am",
      name: "Eduardo Velarde",
      role: "Flutter Mobile Developer",
      specialty: "Specialist in Flutter and Clean Architecture.",
      description1:
        "With a foundation in Android and experience in iOS, I handle the full development cycle: from API integration to final deployment. I focus on creating reusable components that ensure scalability.",
      description2:
        "Bilingual (Advanced English), quick learner, and committed to delivering high-quality technical software.",
    },

    // EXPERIENCE
    experience: {
      title: "My Experience",
      experiences: [
        {
          company: "Simbiosys",
          period: "March 2024 - June 2025",
          description:
            "I was responsible for improving the user experience by fixing visual and logic bugs, including those detected by automatic exception reports. I implemented improvements in GPS modules, documents, and request approvals. I fully developed a supervisor module that allowed assigning cost centers and schedules, including a calendar for historical attendance monitoring.",
        },
        {
          company: "Sistematic",
          period: "September 2025 - Present",
          description:
            "I joined the team to enable the company to expand into mobile development. I built from scratch a points and rewards application, handling all technical logic and privacy with join codes. Currently, I am developing a logistics app that enhances their existing web system, allowing real-time trip tracking and more detailed delivery registration. I work with the requirements team to translate client needs into the application.",
        },
      ],
    },

    // PROJECTS
    projects: {
      title: "My Projects",
      list: [
        {
          title: "ADIPIX",
          subtitle: "Physical health control application",
          period: "2025-2026",
          description:
            "This is my thesis project and the most comprehensive one I've completed so far, as I handled both Flutter development and all backend logic as well as AI model training. I used computer vision to estimate body composition from photos, a challenge that required training the model from scratch using a strategic mix of synthetic and real data to maximize result accuracy. The system not only processes the image but also analyzes the obtained data to automatically generate personalized nutrition and exercise routines.",
          icons: [
            "/icons/Flutter.svg",
            "/icons/Python.svg",
            "/icons/Android.svg",
          ],
        },
        {
          title: "SYSTMAP",
          subtitle: "Delivery and mobilization management application",
          period: "2025-2026",
          description:
            "I am currently developing this tracking solution to enhance the company's web system, seeking much more detailed control of trips in real time. Since the project is in its initial phase and the backend has not yet been developed, I am working on background tracking logic using synthetic data to simulate routes and information flow. The goal is for the app to allow registering deliveries and incidents in real time, giving the company a clear view of what's happening on the route. I work coordinated with the requirements team to implement these features.",
          icons: ["/icons/Flutter.svg", "/icons/Android.svg"],
        },
        {
          title: "BEDIA",
          subtitle: "AI-powered security application",
          period: "2025-2026",
          description:
            "It is a security application designed for home surveillance through space management and facial recognition. It allows registering houses by rooms and creating guest or family lists; if the camera detects an unknown person, the system immediately triggers an alert to the owner. Although it was a small project developed locally on the same WiFi network, I successfully implemented live video streaming and detection logic, demonstrating my ability to handle video data flows and real-time image processing.",
          icons: ["/icons/Flutter.svg", "/icons/Android.svg"],
        },
        {
          title: "Planiweb",
          subtitle: "Physical health control application",
          period: "2024-2025",
          description:
            "I was responsible for stabilizing and improving the user experience on an HR management platform with an active user base. My work focused on redesigning critical interfaces and resolving logic bugs to elevate product quality. I implemented complex modules like 360 Attendance and Planidocs (digital signature), ensuring that sensitive payroll processes ran smoothly and securely.",
          icons: [
            "/icons/Flutter.svg",
            "/icons/Python.svg",
            "/icons/Android.svg",
            "/icons/Apple.svg",
          ],
        },
      ],
    },

    // FROM IDEAS TO REALITY
    fromIdeas: {
      year: "2026",
      title: "From ideas to reality",
      description1:
        "I don't just code screens, I build applications that last. I invest time in designing good architecture and reusable components, because that's the key to an app with solid foundations.",
      description2:
        "Having a background in backend, I am very careful with data handling and API integration, always applying validations and exception handling so nothing fails. My goal is for every update to be smooth, the code to maintain its quality, and the user to have a flawless experience.",
    },

    // FOOTER
    footer: {
      title: "Interested? Contact me",
      emailCopied: "✓ Email copied to clipboard",
    },
  },
};
