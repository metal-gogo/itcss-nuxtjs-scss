<template>
  <section class="container">
    <h1 class="title">¿Qué es ITCSS?</h1>
    <p>
      <strong>ITCSS</strong> se refiere a Inverted Triangle CSS, un término introducido por Harry Roberts (@csswizardry), para lidear de manera simple con la creciente complejidad de manejar proyectos con CSS.
    </p>
    <p>Esta metodología te ayuda a organizar tus proyectos de CSS de tal manera que se pueda lidear con:</p>
    <ul>
      <li>El scope global de CSS.</li>
      <li>La cascada de CSS.</li>
      <li>Especificidad de selectores.</li>
    </ul>
    <p>Es una forma de pensar y no una librería. Debido a ello se puede utilizar con preprocesadores (LESS, SCSS, Stylus) y es compatible con metodologías como BEM, SMACSS y OOCSS.</p>
    <p>
      Uno de los principios principales de
      <strong>ITCSS</strong> es que se separe el código CSS en diversas secciones, conocidas como
      <strong>capas</strong>. Estas capas toman la forma de un tríangulo invertido:
    </p>
    <img src="/images/ITCSS.png" alt="Diagrama de ITCSS" class="image">
    <h2>Las capas de ITCSS</h2>
    <ol>
      <li>
        <p>
          <strong>Settings</strong>: capa utilizada con preprocesadores de CSS. Aquí se definen fuentes, colores, breakpoints y demás configuraciones.
        </p>
      </li>
      <li>
        <p>
          <strong>Tools</strong>: capa para agregar mixins y funciones globales. Es importante que no se genere CSS real en las primeras dos capas, es decir, son capas utilizadas para facilitar el desarrollo de CSS.
        </p>
      </li>
      <li>
        <p>
          <strong>Generic</strong>: aquí se normalizarán los estilos y se reiniciarán los estilos de los navegadores para darle consistencia al sitio. Esta es la primera capa que, en realidad, genera CSS.
        </p>
      </li>
      <li>
        <p>
          <strong>Elements</strong>: los estilos base de los elementos de HTML. Son los selectores con menor especificidad y por ello aparecerán al inicio de nuestro CSS.
        </p>
      </li>
      <li>
        <p>
          <strong>Objects</strong>: se definirán selectores de clase que engloben patrones de diseño para el sitio. Hay objetos en el sitio como contenedores y botones que deben ser consistentes, sin que contengan lógica. Por ello son un objeto y no componentes. Esta capa se basa en los conceptos de OOCSS.
        </p>
      </li>
      <li>
        <p>
          <strong>Components</strong>: UI específica de componentes del sitio. Aquí es donde se definirán la mayoría de las reglas de estilos de los sitios más complejos.
        </p>
      </li>
      <li>
        <p>
          <strong>Trumps</strong>: utilerías y clases auxiliares para poder sobreescribir cualquier cosa de las capas superiores. Podría ser una clase auxiliar para esconder elementos, sin embargo, en la mayoría de los casos no será necesario utilizar esta capa.
        </p>
      </li>
    </ol>
    <p>
      Como se puede observar por las capas del
      <strong>ITCSS</strong>, el objetivo es escribir el CSS siguiendo estos principios:
    </p>
    <ul>
      <li>Primero el código con mayor alcance, después el que tiene menor alcance.</li>
      <li>Primero el código con menor especificidad, después el que tiene mayor especificidad.</li>
      <li>Primero el código más genérico, después el más específico.</li>
    </ul>
    <img
      src="/images/ITCSS reach and specificity.png"
      alt="Diagrama del alcance y especificidad de ITCSS"
      class="image"
    >
    <h2>La gráfica de especificidad utilizando ITCSS</h2>
    <p>Harry Roberts introdujo el término de "La gráfica de especificidad" en el 2014. Esta es una representacioón visual de que tan específico es el código con respecto a su posición en el archivo. Con esta gráfica podemos determinar que tan específico es nuestro código y cuantas reglas se tienen que sobreescribir.</p>
    <img
      src="/images/specificity graph 2019-02-07.png"
      alt="Gráfica de especificidad al 2019-02-07 de este sitio"
      class="image"
    >
    <BackToIndexLink/>
  </section>
</template>

<script>
import BackToIndexLink from '~/components/BackToIndexLink.vue'

export default {
  components: {
    BackToIndexLink
  }
}
</script>
