# Sistema de Internacionalización (i18n)

## ✅ Ya implementado:

### 1. **Hero.tsx** - Listo

- Título: Cambia según idioma
- Botón "Ver CV": Cambia texto y descarga CV-ESP.pdf o CV-ENG.pdf

### 2. **Footer.tsx** - Listo

- Título "¿Estás interesado? Contáctame" / "Interested? Contact me"
- Mensaje "Email copiado" traducido

### 3. **LanguageSelector.tsx** - Listo

- Conectado al contexto global
- Cambia idioma en toda la app

---

## 📝 Dónde agregar traducciones:

### Archivo: `/translations/translations.ts`

Este archivo contiene TODAS las traducciones. Ya está estructurado, solo necesitas:

1. **Llenar los textos en ESPAÑOL** (ES) donde dice `// DESCRIPCIÓN EN ESPAÑOL`
2. **Llenar los textos en INGLÉS** (EN) donde dice `// TRADUCCIÓN AQUÍ`

---

## 🔧 Componentes que FALTAN actualizar:

### 1. **Navbar.tsx**

Agregar al inicio del componente:

```tsx
"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

export default function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];

  // Luego cambiar los textos:
  // "Inicio" -> {t.navbar.inicio}
  // "Sobre mí" -> {t.navbar.sobreMi}
  // etc.
}
```

### 2. **AboutMe.tsx**

Agregar:

```tsx
"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

export default function AboutMe() {
  const { language } = useLanguage();
  const t = translations[language];

  // Cambiar:
  // Título -> {t.aboutMe.title}
  // Descripción -> {t.aboutMe.description}
}
```

### 3. **Experience.tsx**

```tsx
"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  // Cambiar:
  // Título -> {t.experience.title}
  // Mapear experiencias desde t.experience.experiences
}
```

### 4. **Projects.tsx**

```tsx
"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  // Cambiar:
  // "Mis Proyectos" -> {t.projects.title}
  // Mapear proyectos desde t.projects.list
}
```

### 5. **FromIdeasToReality.tsx**

```tsx
"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

export default function FromIdeasToReality() {
  const { language } = useLanguage();
  const t = translations[language];

  // Cambiar:
  // "2026" -> {t.fromIdeas.year}
  // "De ideas a realidad" -> {t.fromIdeas.title}
  // Descripción -> {t.fromIdeas.description}
}
```

---

## 📦 Archivos importantes:

1. **`/contexts/LanguageContext.tsx`** - Maneja el estado global del idioma
2. **`/translations/translations.ts`** - Contiene TODAS las traducciones
3. **`/app/layout.tsx`** - Envuelve la app con LanguageProvider
4. **`/components/LanguageSelector.tsx`** - Botones para cambiar idioma

---

## 🎯 CVs:

Asegúrate de tener estos archivos en `/public/`:

- ✅ `/public/CV-ESP.pdf` (Ya existe)
- ❌ `/public/CV-ENG.pdf` (FALTA - agregar tu CV en inglés aquí)

---

## 💡 Ejemplo de uso en un componente:

```tsx
"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

export default function MiComponente() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <h1>{t.seccion.titulo}</h1>
      <p>{t.seccion.descripcion}</p>
    </div>
  );
}
```

---

## ✅ Ventajas del sistema:

1. **Un solo archivo** (`translations.ts`) para todas las traducciones
2. **Cambio instantáneo** al presionar ES/EN
3. **CV dinámico** - Descarga español o inglés según idioma seleccionado
4. **Fácil de mantener** - Solo edita `translations.ts`
5. **Type-safe** - TypeScript te ayuda a no olvidar traducciones
