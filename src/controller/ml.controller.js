import fs from 'fs';
function agregarDatosAJSON(datos, rutaArchivo) {
  let datosExistentes = [];

  if (fs.existsSync(rutaArchivo)) {
    try {
      const datosJSON = fs.readFileSync(rutaArchivo, 'utf8');
      datosExistentes = JSON.parse(datosJSON);
    } catch (error) {
      console.error('Error al leer los datos existentes:', error);
    }
  }

  if (Array.isArray(datosExistentes)) {
    datosExistentes.push(datos);
  } else {
    datosExistentes = [datos];
  }

  fs.writeFile(rutaArchivo, JSON.stringify(datosExistentes), 'utf8', (err) => {
    if (err) {
      console.error('Error al agregar los datos:', err);
    } else {
      console.log('Los datos se han agregado correctamente.');
    }
  });
}


function leerDatosDeJSON(rutaArchivo) {
  fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }

    try {
      const datos = JSON.parse(data);
      console.log(datos);
    } catch (error) {
      console.error('Error al analizar los datos JSON:', error);
    }
  });
}

function testingSave(req, res) {
  try {
    const datos = {
      nombre: req.body.nombre,
      edad: req.body.edad,
      ciudad: req.body.ciudad
    };

    const rutaArchivo = 'datos.json';

    agregarDatosAJSON(datos, rutaArchivo);
  } catch (error) {
    console.log(error);
  }
}

export { leerDatosDeJSON, testingSave };