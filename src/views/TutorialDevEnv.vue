<template>
  <Header v-bind:example-button="false" v-bind:script-button="false" />
  <h1>Einrichten der Entwicklungsumgebung</h1>
  <Text>
    Wir werden in diesem Praktikum mit dem Editor Visual Studio Code arbeiten.
    Falls Sie jedoch eine andere IDE oder einen anderen Editor verwenden wollen,
    steht Ihnen diese Entscheidung offen.
  </Text>

  <List headline="Hier wäre eine Liste denkwürdiger Alternativen:">
    <li>
      <a href="https://www.jetbrains.com/de-de/phpstorm/" target="_blank"
        >PhpStorm</a
      >/
      <a href="https://www.jetbrains.com/de-de/webstorm/" target="_blank"
        >WebStorm</a
      >
    </li>
    <li>
      <a href="https://atom.io/" target="_blank">Atom</a>
    </li>
    <li>
      <a href="https://www.sublimetext.com/" target="_blank">Sublime Text</a>
    </li>
  </List>
  <Sections>
    <Section headline="Warum Visual Studio Code">
      <Text>
        Visual Studio Code ist ein kostenloser Text-Editor entwickelt von
        Microsoft und bietet einige Vorteile und Features welche zu einer
        hervorragenden Wahl für Entwickler jeglicher Art machen.
      </Text>
      <Text headline="Gründe für VS-Code">
        <List>
          <li>Frei zugänglich</li>
          <li>Für MacOS/ Linux und Windows verfügbar</li>
          <li>Große Community und professionell verbreitet</li>
          <li>Vielfalt an Erweiterungen und Konfigurationsmöglichkeiten</li>
          <li>
            Mit den richtigen Erweiterungen ist VS-Code nicht mehr von einer
            vollwertigen IDE unterscheidbar
          </li>
          <li>
            Leichtgewichtig und performant selbst nach Installation einer
            Vielzahl von Erweiterungen
          </li>
          <li>schlaue <i>IntelliSense</i>-Autovervollständigung</li>
        </List>
      </Text>
    </Section>
    <Section headline="Installation">
      <Text>
        Die Installation von VS-Code ist schnell und einfach durchführbar. Nach
        einem Download klickt man sich durch die Installation durch und die
        Entwicklungsumgebung ist startklar. Ein paar Kleinigkeiten sollte man
        allerdings bei der Installation beachten, um den späteren Umgang mit dem
        Editor zu erleichtern.</Text
      >
      <Text headline="Download">
        Der Download Link:
        <a href="https://code.visualstudio.com/download" target="_blank"
          >https://code.visualstudio.com/download</a
        >
      </Text>
      <Text headline="Während der Installation">
        Bei der Installation auf Windows Geräten beachten sie bitte das sie bei
        der Installation die im Bild gezeigten Einstellungen auswählen</Text
      >
      <Image fileName="vs_code_installation.png"></Image>
      <Text>
        Durch das Auswählen der ersten beiden Häkchen unter <i>Andere</i> haben
        Sie später die Möglichkeit, Dateien und Ordner direkt über das
        Kontextmenü im Editor zu öffnen.
      </Text>
    </Section>
    <Section headline="Nützliche Erweiterungen">
      <Text>
        Wie bereits in den Vorteilen erwähnt ist die Erweiterungs-Bibliothek von
        VS-Code gewaltig und bietet für viele verschiedene Probleme Lösungen an.
        In diesem Abschnitt werden zwei Erweiterungen genannt, welche Ihnen für
        den Anfang behilflich sein könnten. Im Laufe des Praktikums werden
        vermutlich noch einige weitere Erweiterungen hinzukommen.
      </Text>
      <Text headline="Live Server">
        <a
          href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
          target="_blank"
          >Live Server</a
        >
        ist eine Erweiterung, die es ihnen ermöglicht, HTML-Seiten über das
        Kontextmenü direkt in einer Serverumgebung öffnen können. Die Seite wird
        direkt im Browser-Fenster geöffnet und Änderungen im Quellcode wirken
        sich direkt auf die geöffnete Seite aus. Diese Erweiterung könnte vor
        allem im späteren Verlauf des Praktikums behilflich sein.
      </Text>
      <Text headline="Project Manager">
        <a
          href="https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager"
          target="_blank"
          >Project Manager</a
        >
        ist eine Erweiterung welche das einrichten und schnelle wechseln
        zwischen verschiedenen Projekten ermöglicht.
      </Text>
    </Section>
  </Sections>
  <Footer> </Footer>
</template>

<script>
import Text from "../components/Text.vue";
import Footer from "../components/Footer.vue";
import Section from "../components/Section.vue";
import List from "../components/List.vue";
import Sections from "../components/Sections.vue";
import Header from "../components/Header.vue";
import IconHeadline from "../components/IconHeadline.vue";
import FooterItem from "../components/FooterItem.vue";
import Image from "../components/Image.vue";
export default {
  name: "TutorialDevEnv",
  components: {
    IconHeadline,
    Header,
    Sections,
    List,
    Section,
    Footer,
    Text,
    FooterItem,
    Image,
  },
  mounted() {
    console.log("Home geladen");
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "scripts/darkMode.js");
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style scoped>
</style>