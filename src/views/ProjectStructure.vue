<template>
  <Header v-bind:example-button="false" v-bind:script-button="false"/>
  <h1>Projektstruktur</h1>
  <Sections>
    <Section headline="Übersichtliche Projektstruktur">
      <Text>
        Achten Sie bei der Bearbeitung der Praktikumsaufgabe auf eine geeignete Projektstruktur. Code sollte auf mehrere Dateien aufgeteilt werden, sofern dies sinnvoll erscheint (z. B. um eine Trennung von Funktion und Daten zu erreichen). Die nachfolgenden Beispiele dienen nur als Inspiration und können spezifisch auf das gewählte Thema angepasst werden.
      </Text>
    </Section>

    <Section headline="Beispielstruktur einer einfachen Webanwendung">
      <Text>
        Diese Projektstruktur dient für einfache Webanwendungen <b>ohne</b> serverseitige Verarbeitung. Diese Projektstruktur steht Ihnen unter dem Reiter <a href="https://felix.hs-furtwangen.de/auth/RepositoryEntry/4072407874/CourseNode/105309104187283" target="_blank">"Vorlagen -> projektstruktur-einfache-vorlage.zip"</a> in Felix zum Download zur Verfügung.
      </Text>
      <pre v-highlightjs="sourcecode"><code :class="language">
        └─┬ root
          |
          ├─┬ styles
          | └ ... // .css, .scss oder .sass Dateien
          |
          ├─┬ scripts
          | └ ... // .js Dateien
          |
          ├─┬ assets
          | └ ... // Bsp. Bilder, SVG, ...
          |
          ├─ index.html
          └─ ... // weitere .html Dateien
      </code></pre>
    </Section>

    <Section headline="Beispielstruktur einer komplexeren Webanwendung">
      <Text>
        Diese Projektstruktur ist erst nötig, wenn die Anwendung Daten auch serverseitig verarbeitet (node.js).
      </Text>
      <pre v-highlightjs="sourcecode"><code :class="language">
        └─┬ root
          |
          ├─┬ Client
          | |
          | ├─ index.html // sämtliche .html Dateien
          | |
          | ├─┬ styles
          | | └ ... // .css, .scss oder .sass Dateien
          | |
          | ├─┬ scripts
          | | └ ... // js Dateien
          | |
          | └─┬ assets
          |   └ ... // Bsp. Bilder, SVG, ...
          |
          ├─┬ Server
          | |
          | ├─┬ scripts
          | | └ ... // .js Dateien
          | |
          | └─┬ node_modules
          |   └ ... // mit npm installierte Module
          |
          ├─ package-lock.json
          └─ package.json
      </code></pre>
    </Section>
  </Sections>

  <Footer>
    <FooterItem>
      <IconHeadline headline="Nützliche Links" v-bind:info-icon="true"/>
      <List>
        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files" target="_blank">Projekstruktur</a></li>
      </List>
    </FooterItem>
    <FooterItem>
      <IconHeadline headline="Kontaktaufnahme" v-bind:contact-icon="true"/>
      <List>
        <li>Philipp Oeschger: <a href="mailto:p.oeschger@hs-furtwangen.de">p.oeschger@hs-furtwangen.de</a></li>
        <li>Lutz Weigold: <a href="l.weigold@hs-furtwangen.de">l.weigold@hs-furtwangen.de</a></li>
      </List>
    </FooterItem>
  </Footer>
</template>

<script>
import Text from "../components/Text.vue";
import Footer from "../components/Footer.vue";
import Section from "../components/Section.vue";
import List from "../components/List.vue";
import Sections from "../components/Sections.vue";
import Header from "../components/Header.vue";
import IconHeadline from "../components/IconHeadline.vue";
import Image from "../components/Image.vue";
import Code from "../components/Code.vue";
import Highlight from "../components/Highlight.vue";

export default {
  name: "ProjectStructure",
  components: {Highlight, Code, Image, IconHeadline, Header, Sections, List, Section, Footer, Text},
  mounted() {
    console.log("Home geladen")
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'scripts/darkMode.js')
    document.head.appendChild(recaptchaScript)
  }
}
</script>

<style scoped>

</style>