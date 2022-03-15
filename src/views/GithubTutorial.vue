<template>
  <Header v-bind:example-button="false" v-bind:script-button="false" />
  <h1>Git -/ GitHub-Crashkurs</h1>
  <Sections>
    <Section>
      <Text headline="Was ist Git?">
        Kurz und knapp, <i>Git</i> ist schlichtweg ein Tool für die
        Versionsverwaltung von Projekten.
      </Text>
      <Text headline="Und wofür brauch ich das?">
        <i>Git</i> erleichtert es, in einem Projekt bestehend aus etlichen
        Dokumenten (z. B. Quelltextdateien), den Überblick zu bewahren.
      </Text>
      <Text
        >Vor allem in Teamprojekte hilft <i>Git</i> dabei, nicht von etlichen
        Versionen und Änderungen überwältigt zu werden. <i>Git</i> kümmert sich
        außerdem um das bewältigten von Problemen die entstehen, wenn z. B.
        mehrere Personen gerade die gleiche Datei bearbeiten.</Text
      >
      <Text headline="Geht das nicht auch ohne Git?">
        <List headline="Ja, geht schon, aber:">
          <li>Regeln im Team müssen davor genau festgelegt werden.</li>
          <li>
            Falls sich jemand an diese Regeln nicht hält, kann das zu
            verheerenden Komplikationen führen.
          </li>
          <li>Koordinierung ist manuell mühsam.</li>
          <li>
            Woher weiß ich genau wer welche Zeile wann und wie angepasst hat?
          </li>
        </List>
      </Text>
      <Text>All diese Probleme löst <i>Git</i>.</Text>
      <List headline="Der Git Workflow" :isOrdered="true">
        <li>
          Anlegen eines <i>Repositories</i> (Repo) auf einem Server. Dieses
          Verwaltet alle Versionen des Projekts.
        </li>
        <li>
          Jedes Teammitglied <i>klont</i> (kopiert) dieses Repository auf sein
          Endgerät.
        </li>
        <li>
          Das Teammitglied macht eine Änderung und sichert diese zunächst lokal,
          dieser Schritt <i>Commit</i> genannt.
        </li>
        <li>
          Wenn ein Teamitglied seine Änderung veröffentlichen möchte, zieht er
          zunächst einen aktuellen Stand des Repos auf sein Endgerät, genannt
          <i>pull</i>, und aktualisiert anschließend das Repo auf dem Server mit
          seinen Änderungen, genannt <i>push</i>.
        </li>
        <li>
          Das Repo merkt sich, <b>wer wann welche</b> Änderungen gemacht hat
        </li>
      </List>
      <Text
        headline="Klingt gut aber wo lege ich mein Repository an? Ich habe doch keinen
        eigenen Server."
      >
        Die Antwort heißt
        <a href="https://github.com/" target="_blank">GitHub</a>.
      </Text>
      <Text>
        GitHub ist eine von vielen und außerdem eine kostenlose Lösung, eigene
        <i>Repositories</i> zu hosten.
      </Text>
      <Text headline="Was brauche ich um GitHub zu nutzen?">
        <List
          headline="Für die Nutzung von Git in Kombination mit GitHub benötige ich am besten die folgenden zwei Tools."
          :isOrdered="true"
        >
          <li>
            Das Versionsverwaltungstool
            <a target="_blank" href="https://git-scm.com/downloads">Git</a>
          </li>
          <li>
            Den Client
            <a href="https://desktop.github.com/" target="_blank"
              >GitHub-Desktop</a
            >
            (oder ein Ähnliches Tool)
          </li>
        </List>
      </Text>
    </Section>
    <Section headline="Wie nutze ich GitHub">
      <Text headline="GitHub Account anlegen">
        Zunächst muss ein GitHub-Account erstellt werden. Das funktioniert wie
        üblich über den <i>SignUp</i>-Button auf der
        <a target="_blank" href="https://github.com/">GitHub-Seite</a>.
      </Text>
    </Section>
  </Sections>
</template>

<script>
import Text from "../components/Text.vue";
import Footer from "../components/Footer.vue";
import Section from "../components/Section.vue";
import List from "../components/List.vue";
import Sections from "../components/Sections.vue";
import Header from "../components/Header.vue";
import IconHeadline from "../components/IconHeadline.vue";
export default {
  name: "GithubTutorial",
  components: {
    IconHeadline,
    Header,
    Sections,
    List,
    Section,
    Footer,
    Text,
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