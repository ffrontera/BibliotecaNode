fetch("../info.json")
  .then((response) => response.json())
  .then((data) => {
    // Obtener el contenedor donde se agregarán los libros
    const librosContainer = document.getElementById("card_box");

    // Iterar sobre cada libro en los datos obtenidos

    data.forEach((libro) => {
      // Crear elementos HTML para el libro
      const imagenElement = document.createElement("img");
      imagenElement.src = libro.Imagen; // Asignar la ruta de la imagen
      imagenElement.alt = `Portada de ${libro.Título}`;

      const libroElement = document.createElement("div");
      libroElement.classList.add("libro");

      const frenteElement = document.createElement("div");
      frenteElement.classList.add("frente");

      const dorsoElement = document.createElement("div");
      dorsoElement.classList.add("dorso");

      const tituloElement = document.createElement("h3");
      tituloElement.textContent = libro.Título;

      const resumenElement = document.createElement("p");
      resumenElement.textContent = libro.Resumen;

      const editorialElement = document.createElement("p");
      editorialElement.textContent = `Editorial: ${libro.Editorial}`;

      const autorElement = document.createElement("p");
      autorElement.textContent = `Autor: ${libro.Autor}`;

      const generoElement = document.createElement("p");
      generoElement.textContent = `Género: ${libro.Género}`;

      // Agregar los elementos al contenedor de libros
      frenteElement.appendChild(imagenElement);
      dorsoElement.appendChild(tituloElement);
      dorsoElement.appendChild(resumenElement);
      dorsoElement.appendChild(editorialElement);
      dorsoElement.appendChild(autorElement);
      dorsoElement.appendChild(generoElement);

      libroElement.appendChild(frenteElement);
      libroElement.appendChild(dorsoElement);

      librosContainer.appendChild(libroElement);
    });
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });
