<template xmlns="http://www.w3.org/1999/html">
  <Header
      v-bind:example-button="false"
      v-bind:script-button="true"
      v-bind:print-button="true"
  />
  <h1>JavaScript-Vorbereitung</h1>
  <Text
  >Diese Aufgabe dient als Einführung in die Programmiersprache JavaScript. Hierfür muss zunächst die
    Entwicklungsumgebung konfiguriert werden. Darüberhinaus soll mittels der MoSCoW-Methode Funktionalitäten priorisiert
    werden.
  </Text
  >
  <Sections>
    <Section headline="Konfiguration">
      <List>
        <Checkbox
        >Konfigurieren Sie ihre Entwicklungsumgebung, sodass ESLint Sie beim programmieren unterstützt. Richten Sie sich
          hierbei nach diesem  <a target="_blank" href="https://felix.hs-furtwangen.de/auth/RepositoryEntry/4072407874/CourseNode/105532938847246"
          >Guide</a>.
        </Checkbox>
      </List>
    </Section>
    <Section headline="MoSCoW-Priorisierung">
      <List>
        <Checkbox
        >Definieren Sie, passend zu Ihrem gewählten Thema, <b>mindestens vier</b> Funktionalitäten, welche Sie im Laufe
          des Semesters umsetzen möchten. <br>Folgend ein paar Beispielfunktionalitäten: <br><Highlight>Anlegen von Nutzerdaten</Highlight>; <Highlight>Verwalten von Nutzerdaten</Highlight>; <Highlight>Abfragen und Anzeigen von Wetterdaten</Highlight>; <Highlight>...</Highlight>
        </Checkbox>
        <Checkbox
        >Priorisieren Sie die zuvor definierten Funktionalitäten nach der <a target="_blank" href="https://blog.doubleslash.de/wie-priorisiere-ich-anforderungen-an-eine-softwareloesung/"><b>MoSCoW-Methode</b></a>.
        </Checkbox>
        <Checkbox
        >Legen Sie die Informationen als <b>PDF</b> in ihrem Projektordner ab.
        </Checkbox>
      </List>
    </Section>
  </Sections>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Text from "../components/Text.vue";
import Sections from "../components/Sections.vue";
import Section from "../components/Section.vue";
import List from "../components/List.vue";
import Highlight from "../components/Highlight.vue";
import IconHeadline from "../components/IconHeadline.vue";
import Checkbox from "../components/Checkbox.vue";

export default {
  name: "Task3",
  components: {
    Checkbox,
    Highlight,
    List,
    Section,
    Sections,
    Text,
    Footer,
    Header,
    IconHeadline,
  },
  mounted() {
    let darkMode = document.createElement("script");
    darkMode.setAttribute("src", "scripts/darkMode.js");
    document.head.appendChild(darkMode);

    let partyjs = document.createElement("script");
    partyjs.setAttribute(
        "src",
        "https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js"
    );
    document.head.appendChild(partyjs);

    let checkBox = document.createElement("script");
    checkBox.setAttribute("src", "scripts/checkBox.js");
    checkBox.setAttribute("type", "module");
    document.head.appendChild(checkBox);
  },
}
</script>
<style scoped>
</style>