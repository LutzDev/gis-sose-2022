<template>
  <!--  <Header v-bind:example-button="true" v-bind:script-button="true"/>-->
  <h1>Abgabe</h1>


  <Sections>
    <Section headline="Abgabeformat">
      <Text>
        Die Abgabe der Aufgaben findet über den zur Verfügung stehenden Abgabebereich der jeweiligen Aufgabe in Felix statt. Für das Abgabeformat der Aufgaben stehen Ihnen zwei Optionen zur Verfügung.
      </Text>
      <Text headline="Abgabe als GitHub-Link">
        Zum einen kann die Abgabe über ein GitHub-Repository erfolgen. Geben Sie hierfür über Felix eine <b>PDF-Datei</b> ab, welche einen Link auf Ihr angelegtes GitHub-Repository beinhaltet. Bitte fügen Sie Ihrem GitHub-Repository eine <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes" target="_blank">README</a> hinzu, welche zu jeder Aufgabe folgende zwei Verweise enthält:
      </Text>
      <List>
        <li>Verweis auf den Root-Ordner der Aufgabe</li>
        <li>Verweis auf eine <a href="https://docs.github.com/en/pages/quickstart" target="_blank">GitHub-Page</a></li>
      </List>
      <Text headline="Abgabe als Upload in Felix">
        Als Alternative können Sie das Uploadsystem von Felix benutzen, um den Quellcode Ihrer Aufgabe als <b>zip-Datei</b> abzugeben.
      </Text>
    </Section>

    <Section headline="Abgabetermine">
      <Text>
        Die Aufgaben sind wöchentlich abzugeben. Verspätete Abgaben werden mit einem <b>Strike</b> bewertet. Die Deadlines für den jeweiligen Studiengang sind:
      </Text>
      <List>
        <li>MIB: Sonntags 18:00 Uhr</li>
        <li>OMB: Montags 18:00 Uhr</li>
      </List>
    </Section>

    <Section headline="Korrekturschleife">
      <Text>
        Wenn die Abgabe nicht den Anforderungen entspricht, wird diese einmalig zur Korrektur zurückgegeben. Diese kann dann bis spätestens eine Woche nach dem ursprünglichen Abgabetermin unaufgefordert nachgereicht werden. Sollte die korregierte Abgabe weiterhin fehlerhaft sein, wird diese mit einem <b>Strike</b> bewertet.
      </Text>
    </Section>

    <Section headline="Strikes">
      <List headline="Strikes werden aus zwei Gründen vergeben:">
        <li>Verspätete Abgabe</li>
        <li>Aufgabe ist nach Korrekturschleife weiterhin fehlerhaft</li>
      </List>
      <Text>
        Beim dritten Strike wird das Praktikum als <b>nicht bestanden bewertet</b>.
      </Text>
    </Section>
  </Sections>

  <Footer>
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
          <li>MIB: Sonntags 18:00 Uhr</li>
          <li>OMB: Mittwochs 18:00 Uhr</li>
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
export default {
  name: "Abgabeformat",
  components: {Code, Image, IconHeadline, Header, Sections, List, Section, Footer, Text}
}
</script>

<style scoped>

</style>