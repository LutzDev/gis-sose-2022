<template>
  <Header v-bind:example-button="false" v-bind:script-button="false" />
  <h1>Themenvergabe</h1>
  <Sections>
    <Section>
      <Text>
        Die Vergabe der Themen erfolgt über den Themenvergabe-Bereich des
        jeweiligen Kurses. Aus dem bereitgestellten Themenpool können Projekte
        ausgewählt werden. Jeder Student bekommt ein eigenes Thema, dass er im
        Laufe des Semesters bearbeiten soll. Themen können innerhalb des
        Studiengangs nur
        <b>einmal</b> Vergeben werden. Suchen Sie sich bitte bis spätestens zum
        <b>22.03.2022 (MIB)</b> bzw. <b>23.03.2022 (OMB)</b> ein Thema aus.
      </Text>
      <Text headline="Hinweis">
        Beim Bearbeiten der Projekte ist es <b>nicht</b> notwendig, jede
        einzelne Funktionalität des Zielobjekts umzusetzen (das gilt vor allem
        für die Themen, bei denen eine Webseite nachgebaut werden soll). Es
        reicht aus, lediglich Teilfunktionalität umzusetzen. Das Ergebnis sollte
        letztendlich ein Prototyp einer Web-App sein.
      </Text>
    </Section>
    <Section headline="Eigene Themen">
      <Text>
        Gerne können auch eigene Themenideen bearbeitet werden. Sprechen Sie
        hierfür zuvor bitte das gewünschte Thema mit Ihrem Betreuer ab, um zu
        klären, ob dieses Thema den Anforderungen des Praktikums gerecht wird.
      </Text>
    </Section>
  </Sections>
  <Footer>
    <FooterItem>
      <IconHeadline headline="Kontaktaufnahme" v-bind:contact-icon="true" />
      <List>
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
import FooterItem from "../components/FooterItem.vue";
export default {
  name: "TopicSelection",
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