# Cypress Saucedemo Test Automation 🚀

Este proyecto es una prueba de automatización desarrollada con **Cypress** para la aplicación web **Saucedemo**. Se centra en el proceso de **login** y **logout**, 
destacando habilidades fundamentales en la automatización de pruebas de aplicaciones web.

## Descripción del Proyecto

El objetivo principal de este proyecto fue automatizar el flujo de inicio de sesión y cierre de sesión en la plataforma de pruebas Saucedemo,
un entorno de prueba comúnmente utilizado en el aprendizaje de automatización de pruebas. A lo largo del desarrollo, se trabajó en:

- **Automatización de Login y Logout**: Implementación de un test que simula la entrada y salida de un usuario en la aplicación.
  
- **Uso de Selectores**: Aplicación de diferentes tipos de selectores en Cypress para interactuar con los elementos de la interfaz de usuario, fortaleciendo el conocimiento en la identificación y manipulación de elementos del DOM.

- **Variables de Entorno**: Implementación de variables de entorno para manejar las credenciales de usuario, lo que mejora la seguridad al evitar la exposición directa de información sensible en el código.

- **Aserciones**: Uso de aserciones para validar que las condiciones esperadas se cumplan durante la ejecución de las pruebas, asegurando que el flujo de trabajo funcione como se esperaba.
- Se utilizó la aserción `cy.url().should('include', '/inventory.html')` para verificar que el usuario fue redirigido correctamente después de iniciar sesión y cerrar sesión.

## Tecnologías Utilizadas

- **Cypress**: Framework de pruebas end-to-end que permite la automatización de la interacción con aplicaciones web.
- **JavaScript**: Lenguaje de programación utilizado para la implementación de las pruebas.

Este proyecto demuestra competencias basicas esenciales en la automatización de pruebas, incluyendo:

- Habilidad para manejar selectores y crear scripts de pruebas confiables.
- Conocimiento en la configuración y uso de variables de entorno, lo que es crucial para mantener la seguridad en proyectos reales.
- Comprensión de la importancia de las aserciones en la verificación de resultados durante las pruebas automatizadas.

---
Espero que este proyecto sirva de inspiración para quienes están comenzando su viaje en la automatización de pruebas. ¡Cada paso cuenta! 🌟
Si tienes alguna pregunta o deseas más información, no dudes en abrir un issue en este repositorio.
