<template>
  <!--  <Header v-bind:example-button="true" v-bind:script-button="true"/>-->
  <h1>Über diesen Kurs</h1>
  <Text>
    Über diesen Kurs wird das Praktikum für das Modul Grundlagen interaktiver
    Systeme organisiert. In diesem Kurs finden sie die Praktikumsaufgaben,
    welche das in der Vorlesung gelernte Wissen festigen sollen. Betreuer des
    Praktikums sind Lutz Weigold und Philipp Oeschger.
  </Text>
  <Sections>
    <Section headline="Ablauf des Praktikums">
      <Text>
        Jede Woche wird eine neue Praktikumsaufgabe veröffentlicht, die sich mit
        einem Thema aus der Vorlesung genauer befasst. Ziel ist es, die Aufgabe
        bis zur Deadline (siehe <a href="#abgabetermine">Abgabetermine</a>) zu
        bewältigen. Für den Fall, dass die Abgabe nicht allen geforderten
        Anforderungen entspricht, ist es möglich, die Abgabe einmalig zu
        korrigieren und bis spätestens eine Woche nach dem Abgabetermin
        unaufgefordert nachzureichen. Sollte die korregierte Abgabe weiterhin
        nicht den Anforderungen entsprechen, so wird diese mit einem
        <b>Strike</b> gewertet.
      </Text>
      <Text>
        Das Praktikum findet <b>in Präsenz</b> statt. Während der
        Praktikumsblöcke werden die Aufgabenstellungen genaue erläutert, einige
        Tipps und Hilfestellungen zur Bewältigung der Aufgaben mit auf den Weg
        gegeben und offene Fragen geklärt. Außerdem bietet der Praktikumsblock
        ein Arbeitsumfeld, in dem Sie die Aufgaben unter Hilfestellung von
        Betreuern und Kommilitonen bearbeiten können.
      </Text>
    </Section>

    <Section headline="Abgabeformat">
      <Text>
        Ein Großteil der Praktikumsaufgaben bauen aufeinander auf. Bitte legen
        Sie deshalb für jede Praktikumsaufgabe einen neuen Ordner an und
        kopieren Sie die relevanten Dateien der vorigen Abgabe in den Ordner der
        neuen Aufgabe.
      </Text>
      <Text>
        Die Abgabe der Aufgaben findet über den zur Verfügung stehenden
        Abgabebereich der jeweiligen Aufgabe in Felix statt. Für die Abgabe der
        Aufgabe stehen Ihnen zwei Optionen zur Verfügung.
      </Text>
      <Text headline="Abgabe als GitHub-Link">
        Die Erste Möglichkeit ist die Abgabe der Aufgaben über einen Verweis auf
        ein für den Kurs angelegtes GitHub-Repository. Geben Sie hierfür über
        Felix eine Text-Datei ab, welche einen Link auf Ihr angelegtes
        GitHub-Repository beinhaltet. Bitte fügen Sie Ihrem GitHub-Repository
        eine
        <a
          href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
          target="_blank"
          >README</a
        >
        hinzu, welche zu jeder Aufgabe folgende zwei Verweise enthält:
      </Text>
      <List>
        <li>Verweis auf den Root-Ordner der Aufgabe</li>
        <li>
          Verweis auf eine
          <a href="https://docs.github.com/en/pages/quickstart" target="_blank"
            >GitHub-Page</a
          >
        </li>
      </List>
      <Text headline="Abgabe als Upload in Felix">
        Als Alternative können Sie das Uploadsystem von Felix benutzen, um den
        Quellcode Ihrer Aufgabe als zip-Datei abzugeben.
      </Text>
    </Section>

    <Section headline="Abgabetermine" id="abgabetermine">
      <Text>
        Die Aufgaben sind wöchentlich abzugeben. Verspätete Abgaben werden mit
        einem <b>Strike</b> bewertet. Die Deadlines für den jeweiligen
        Studiengang sind:
      </Text>
      <List>
        <li>MIB: Sonntag 18:00 Uhr</li>
        <li>OMB: Montag 18:00 Uhr</li>
      </List>
    </Section>

    <Section headline="Strikes">
      <List headline="Strikes werden aus zwei Gründen vergeben:">
        <li>Verspätete Abgabe</li>
        <li>Aufgabe ist nach Korrekturschleife weiterhin fehlerhaft</li>
      </List>
      <Text>
        Beim dritten Strike wird das Praktikum als
        <b>nicht bestanden bewertet</b>.
      </Text>
    </Section>

    <Section headline="Fragen und Probleme">
      <Text>
        Für Fragen und Probleme, welche außerhalb des Praktikumsblocks
        auftreten, steht Ihnen der Forumsbereich des Kurses zur Verfügung. Dort
        können Sie Ihre Fragen und Problem stellen und wir werden versuchen,
        diese möglichst zeitnah zu beantworten.
      </Text>
      <Text>
        Außerdem wurde für die Veranstaltung ein Matrix Chatroom erstellt:
        <a
          href="https://matrix.to/#/#GIS-OMB-MIB:hs-furtwangen.de"
          target="_blank"
          >https://matrix.to/#/#GIS-OMB-MIB:hs-furtwangen.de</a
        >
      </Text>
      <List
        headline="Außerdem wurde für die Veranstaltung ein Matrix Chatroom erstellt:"
      >
        <li>
          Philipp Oeschger:
          <a href="mailto:p.oeschger@hs-furtwangen.de"
            >p.oeschger@hs-furtwangen.de</a
          >
        </li>
        <li>
          Lutz Weigold:
          <a href="l.weigold@hs-furtwangen.de">l.weigold@hs-furtwangen.de</a>
        </li>
      </List>
    </Section>
  </Sections>
  <Footer> </Footer>

  <!--  <Footer>
    <FooterItem>
      <IconHeadline headline="Links" v-bind:info-icon="true"/>
      <List>
        <li>fetch, Promise, async/await</li>
        <li>List</li>
        <li>Node</li>
      </List>
    </FooterItem>
    <FooterItem>
      <IconHeadline headline="Kontaktaufnahme" v-bind:contact-icon="true"/>
      <List>
        <li>Philipp Oeschger: <a href="mailto:p.oeschger@hs-furtwangen.de">p.oeschger@hs-furtwangen.de</a></li>
        <li>Lutz Weigold: <a href="l.weigold@hs-furtwangen.de">l.weigold@hs-furtwangen.de</a></li>
      </List>
    </FooterItem>
    <FooterItem>
      <IconHeadline headline="Abgabetermin" v-bind:deadline-icon="true"/>
      <List>
        <li>MIB: sonntags 18:00 Uhr</li>
        <li>OMB: mittwochs 18:00 Uhr</li>
      </List>
    </FooterItem>
  </Footer>-->
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
export default {
  name: "Home",
  components: {
    Code,
    Image,
    IconHeadline,
    Header,
    Sections,
    List,
    Section,
    Footer,
    Text,
  },
};
</script>

<style scoped>
</style>