import os
import sys
from PIL import Image

# Elevar el límite de seguridad de PIL para permitir imágenes grandes
Image.MAX_IMAGE_PIXELS = 300_000_000

CARPETA_RAIZ = sys.argv[1] if len(sys.argv) > 1 else "."
# Extensiones de imagen rasterizadas que se convertirán. Los SVG se ignoran.
EXTENSIONES_VALIDAS = (".jpg", ".jpeg", ".png", ".bmp", ".tiff", ".gif", ".webp")
MAX_SIZE = 2400
WEBP_QUALITY = 90

print(f"🚀 Iniciando conversión a WebP en: {CARPETA_RAIZ}\n" + "-"*50)
print(f"📐 Redimensionando a máximo {MAX_SIZE}px y calidad {WEBP_QUALITY}\n")

for ruta_actual, _subcarpetas, archivos in os.walk(CARPETA_RAIZ):
    for archivo in archivos:
        if not archivo.lower().endswith(EXTENSIONES_VALIDAS):
            continue

        ruta_imagen_original = os.path.join(ruta_actual, archivo)

        nombre_sin_extension, extension = os.path.splitext(archivo)
        nuevo_nombre = f"{nombre_sin_extension}.webp"
        ruta_imagen_webp = os.path.join(ruta_actual, nuevo_nombre)

        if os.path.exists(ruta_imagen_webp) and extension.lower() != ".webp":
            print(f"⏭️  Saltada: {archivo} (ya existe {nuevo_nombre})")
            continue

        try:
            with Image.open(ruta_imagen_original) as img:
                # Redimensionar si excede el tamaño máximo manteniendo la proporción
                img.thumbnail((MAX_SIZE, MAX_SIZE), Image.Resampling.LANCZOS)

                # Forzar a RGB/RGBA para compatibilidad con WebP
                if img.mode in ("P", "RGBA"):
                    img = img.convert("RGBA")
                elif img.mode != "RGB":
                    img = img.convert("RGB")

                img.save(ruta_imagen_webp, "WEBP", quality=WEBP_QUALITY, method=6)

            print(f"✅ Convertida: {archivo} ➡️ {nuevo_nombre} (en {os.path.basename(ruta_actual)})")

        except Exception as e:
            print(f"❌ Error al procesar {archivo}: {e}")

print("-"*50 + "\n🎉 ¡Proceso terminado con éxito!")