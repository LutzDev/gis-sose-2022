<template>
  <Header
    v-bind:example-button="false"
    v-bind:script-button="true"
    v-bind:print-button="true"
  />
  <h1>JavaScript: 1. Funktionaliät</h1>
  <Text
    >Ab dieser Aufgabe werden Sie die Funktionalitäten, welche mittels der
    MoSCoW-Methode priorisiert wurden, umsetzen.
  </Text>
  <Sections>
    <Section headline="Umsetzung der ersten Funktionalität">
      <List>
        <Checkbox
          >Wählen Sie <b>eine Funktionalität</b>, welche Sie zuvor mittels der
          MoSCoW-Methode definiert haben, und setzen Sie diese in JavaScript um.
        </Checkbox>
        <Checkbox
          >Machen Sie in der <b>PDF</b>, welche Sie zum Thema MoSCoW-Methode
          erstellt haben, kenntlich, welche Funktionalität Sie umgesetzt haben
          und fügen Sie diese Ihrem Projekt an.
        </Checkbox>
      </List>
    </Section>
  </Sections>
  <Footer>
    <FooterItem>
      <IconHeadline headline="Nützliche Links" v-bind:info-icon="true" />
      <List>
        <li>
          <a
            target="_blank"
            href="https://heintz-s.github.io/GIS/lecture/events/2"
            >JavaScript-Funktionen</a
          >
        </li>
        <li>
          <a
            target="_blank"
            href="https://heintz-s.github.io/GIS/lecture/events/3"
            >JavaScript-Events</a
          >
        </li>
        <li>
          <a
            target="_blank"
            href="https://heintz-s.github.io/GIS/lecture/canvas/3"
            >JavaScript-Canvas</a
          >
        </li>
      </List>
    </FooterItem>
    <FooterItem>
      <IconHeadline headline="Kontaktaufnahme" v-bind:contact-icon="true" />
      <List headline="Medieninformatik:">
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
      <br />
      <List headline="OnlineMedien:">
        <li>
          Tim Scheifler:
          <a href="mailto:tim.scheifler@hs-furtwangen.de"
            >tim.scheifler@hs-furtwangen.de</a
          >
        </li>
        <li>
          Jonathan Rißler:
          <a href="mailto:jonathan.rissler@hs-furtwangen.de"
            >jonathan.rissler@hs-furtwangen.de</a
          >
        </li>
      </List>
    </FooterItem>
    <FooterItem>
      <IconHeadline headline="Abgabetermin" v-bind:deadline-icon="true" />
      <List>
        <li>MIB: 08.05.22 - 18:00 Uhr</li>
        <li>OMB: 09.05.22 18:00 Uhr</li>
      </List>
    </FooterItem>
  </Footer>
</template>

<script>
import Checkbox from "../components/Checkbox.vue";
import Highlight from "../components/Highlight.vue";
import List from "../components/List.vue";
import Section from "../components/Section.vue";
import Sections from "../components/Sections.vue";
import Text from "../components/Text.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import IconHeadline from "../components/IconHeadline.vue";

export default {
  name: "Task4",
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
};
</script>

<style scoped>
</style>