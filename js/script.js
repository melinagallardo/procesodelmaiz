// script.js

const preguntas = [
    { texto: '¿Cuál es la primera fase del circuito productivo del maíz?', opciones: ['Agricultura', 'Comercialización', 'Industrialización'], respuestaCorrecta: 0 },
    { texto: '¿Qué productos se obtienen del maíz?', opciones: ['Harina y aceite', 'Carne', 'Lácteos'], respuestaCorrecta: 0 },
    { texto: '¿En que región se lleva a cabo la producción del maíz en Argentina?', opciones: ['Región Noroeste', 'Región Pampeana', 'Región Patagónica'], respuestaCorrecta: 1 },
    { texto: '¿Cuál es el principal uso industrial del maíz?', opciones: ['Energía eólica', 'Construcción', 'Biocombustible'], respuestaCorrecta: 2 },
    { texto: '¿En qué etapa se recolectan las mazorcas?', opciones: ['Siembra', 'Cosecha', 'Distribución'], respuestaCorrecta: 1 },
    { texto: '¿Cómo se llama el proceso de transformación del maíz en harina?', opciones: ['Molino', 'Cocción', 'Refinado'], respuestaCorrecta: 0 },
    { texto: '¿Qué tipo de clima favorece al cultivo del maíz?', opciones: ['Clima templado', 'Clima polar', 'Clima desértico'], respuestaCorrecta: 0 },
    { texto: '¿Qué maquinaria se usa para la cosecha?', opciones: ['Tractor', 'Cosechadora', 'Arado'], respuestaCorrecta: 1 },
    { texto: '¿Cuál es el destino del maíz después de la cosecha?', opciones: ['Directo al mercado', 'Almacenamiento y distribución', 'Desecho'], respuestaCorrecta: 1 },
    { texto: '¿En qué época del año se cosecha el maíz?', opciones: ['Otoño', 'Primavera', 'Invierno'], respuestaCorrecta: 0 }
  ];
  
  let preguntaActual = 0;
  let correctas = 0;
  let respuestas = [];
  
  function comenzarQuiz() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('quiz').classList.remove('oculto');
    mostrarPregunta();
  }
  
  function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    const contenedor = document.getElementById('preguntaActual');
  
    let opcionesHtml = pregunta.opciones.map((opcion, index) => `
      <label>
        <input type="radio" name="opcion" value="${index}"> ${opcion}
      </label>
    `).join('');
  
    contenedor.innerHTML = `<p>${pregunta.texto}</p>${opcionesHtml}`;
    document.getElementById('siguienteBtn').classList.add('oculto');
  }
  
  function siguientePregunta() {
    const seleccion = document.querySelector('input[name="opcion"]:checked');
    if (!seleccion) return alert('Selecciona una opción.');
  
    const seleccionUsuario = parseInt(seleccion.value);
    const esCorrecto = seleccionUsuario === preguntas[preguntaActual].respuestaCorrecta;
  
    respuestas.push({
      texto: preguntas[preguntaActual].texto,
      correcta: esCorrecto,
      respuestaCorrecta: preguntas[preguntaActual].opciones[preguntas[preguntaActual].respuestaCorrecta]
    });
  
    if (esCorrecto) correctas++;
  
    preguntaActual++;
  
    if (preguntaActual < preguntas.length) {
      mostrarPregunta();
    } else {
      mostrarResultado();
    }
  }
  
  function mostrarResultado() {
    const porcentaje = (correctas / preguntas.length) * 100;
    const resultadoDiv = document.getElementById('resultado');
  
    let mensaje = `<h2>Resultado:</h2>`;
    mensaje += `<p>Acertaste el ${porcentaje}% de las preguntas.</p>`;
    mensaje += `<h3>Respuestas:</h3><ul>`;
  
    respuestas.forEach(respuesta => {
      mensaje += `<li>${respuesta.texto} - ${
        respuesta.correcta ? '✅ Correcto' : `❌ Incorrecto (Respuesta: ${respuesta.respuestaCorrecta})`
      }</li>`;
    });
  
    mensaje += `</ul>`;
    resultadoDiv.innerHTML = mensaje;
    resultadoDiv.classList.remove('oculto');
  }
  
  document.addEventListener('change', () => {
    document.getElementById('siguienteBtn').classList.remove('oculto');
  });
  