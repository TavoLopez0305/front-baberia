# front-baberia
Panel administrativo desarrollado en Angular para la gestión integral de una barbería. Incluye autenticación segura, control de usuarios por roles, administración de citas, ventas, productos, clientes y sucursales. El sistema consume una API REST desarrollada en Laravel y está diseñado con una arquitectura modular, escalable.

# Barbería – Panel Administrativo (Frontend)

Panel administrativo desarrollado en **Angular 20 (LTS)** para la gestión de una barbería.

## 🚀 Tecnologías
- Angular 20 (Standalone Components)
- SCSS
- Bootstrap (pendiente de integrar)
- Arquitectura basada en Core / Pages / Shared

## 📁 Estructura
- `core/`: servicios, guards, interceptors
- `layout/`: header, sidebar, layout principal
- `pages/`: pantallas del sistema (login, dashboard, usuarios, productos, etc.)
- `shared/`: componentes reutilizables

## ⚙️ Requisitos
- Node.js >= 20
- Angular CLI >= 20

## ▶️ Ejecutar proyecto
```bash
npm install
ng serve

