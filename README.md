# Seminari 1 — JavaScript

## 📌 Descripció
Aquest exercici consisteix a processar dades reals obtingudes d’una API per practicar la manipulació d’arrays amb patrons funcionals de JavaScript: `filter`, `map`, `reduce` i destructuració.

---

## 🎯 Objectiu
Practicar:

- **Filtratge** d’elements amb `filter`
- **Transformació** d’estructures amb `map` i destructuració
- **Inserció sense mutar** l’array original (immutabilitat)
- **Càlcul d’estadístiques** amb `reduce`

---

## ✅ Requisits de l’exercici

### 1️⃣ Filtratge (Filter)
Incloure només els usuaris amb **id parell**.

### 2️⃣ Transformació (Transform)
Crear un nou array d’objectes amb només:
- `id`
- `name`
- `city` (extreta de `address.city`)

### 3️⃣ Inserció (Add)
Afegir un usuari `"Guest User"` al principi de la llista **sense mutar** el resultat original.

### 4️⃣ Estadístiques (Statistics)
Calcular el **nombre total de caràcters** de tots els `name` combinats utilitzant `reduce`.

---

## 🎥 Vídeo explicatiu

Dins del projecte s’inclou un vídeo explicatiu on es detalla l'exercici realitzat.

👉 `explicacio.mp4`

👉 [YouTube](https://youtu.be/CElE6n0bWms)

---

## 🛠️ Tecnologies
- JavaScript
- Node.js (v18 o superior recomanat)

---

## 📂 Estructura del projecte


```
.
├── exercise.js
├── explicacio.mp4
└── README.md
```

---

## ▶️ Execució
```bash
node exercise.js
```

## 📚 Codi base

Repositori base proporcionat per l’assignatura:

👉 https://github.com/rocmeseguer/EA-JS.git

Carpeta corresponent: 5-exercise
