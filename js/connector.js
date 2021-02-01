//Cargar Libros
window.onload = function() {
    verTabla();
  };

// Valores por defecto
var libros = [
  {
    Codigo: 201,
    Nombre: "Harry Potter",
    Autor: "J.K.R",
    Genero: "Fantasia",
    Edicion: 2019,
    Disponible: true,
  },
  {
    Codigo: 609,
    Nombre: "Hobbit",
    Autor: "R. Thomas",
    Genero: "Fantasia",
    Edicion: 2000,
    Disponible: true,
  },
  {
    Codigo: 101,
    Nombre: "Paco y Lola",
    Autor: "Laura M.",
    Genero: "Cuento",
    Edicion: 2010,
    Disponible: true,
  },
];

// Crear Libro
function nuevoLibro() {
  let nuevoLibro = {
    Codigo: parseInt(document.getElementById("Codigo").value),
    Nombre: document.getElementById("Nombre").value,
    Autor: document.getElementById("Autor").value,
    Genero: document.getElementById("Genero").value,
    Edicion: parseInt(document.getElementById("Edicion").value),
    Disponible: document.getElementById("Disponible").checked,
  };
  libros.push(nuevoLibro);
  verTabla();
}

//Borrar un Libro
function borrarLibro() {
  libros = libros.filter(function (jsonObject) {
    return jsonObject.Codigo != document.getElementById("CodigoBorrar").value;
  });
  verTabla();
}

//Actualizar Libro
function actualizarLibro() {
  for (var i in libros) {
    if (
      libros[i].Codigo === parseInt(document.getElementById("Codigo").value)
    ) {
      libros[i].Codigo = parseInt(document.getElementById("Codigo").value);
      libros[i].Nombre = document.getElementById("Nombre").value;
      libros[i].Autor = document.getElementById("Autor").value;
      libros[i].Genero = document.getElementById("Genero").value;
      libros[i].Edicion = parseInt(document.getElementById("Edicion").value);
      libros[i].Disponible = document.getElementById("Disponible").checked;
    }
  }
  verTabla();
}

//Creación de la tabla
function creacionTabla(json) {
  let cols = Object.keys(json[0]);
  //Crear un Map sobre columnas para obtener el header
  let headerRow = cols.map((col) => `<th>${col}</th>`).join("");

  //Crear un Map sobre las filas para obtener los valores
  let rows = json
    .map((row) => {
      let tds = cols.map((col) => `<td>${row[col]}</td>`).join("");
      return `<tr>${tds}</tr>`;
    })
    .join("");

  //Contruccion del HTML
  const table = `
      <table class="table table-bordered">
          <thead class="thead-dark">
              <tr>${headerRow}</tr>
          <thead>
          <tbody>
              ${rows}
          <tbody>
      <table>`;

  return table;
}

//Suplementar el div por la nueva tabla
function verTabla() {
  output = document.getElementById("tabla");
  output.innerHTML = creacionTabla(libros);
}
