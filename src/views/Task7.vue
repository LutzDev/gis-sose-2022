<template>
  <Header
    v-bind:example-button="true"
    v-bind:script-button="true"
    v-bind:print-button="true"
  />
  <h1>NoSQL Datenbanken - MongoDB</h1>
  <Text
    >In dieser Aufgabe sollen Sie eine Node.js-Server um eine MongoDB-Datenbank erweitern.
  </Text>
  <Sections>
    <Section headline="Umsetzung">
      <List>
        <Checkbox>
          Installieren Sie <a target="_blank" href="https://www.mongodb.com/try/download/community">MongoDB</a>.
        </Checkbox>
        <Checkbox
          >Erweitere Sie ihre Server interaktionen mit Datenbankzugriffen
        </Checkbox>
        <Checkbox
          >Wählen Sie <b>eine Funktionalität</b>, welche Sie zuvor mittels der
          MoSCoW-Methode definiert haben, und <b>erweitern</b> Sie diese
          Funktionalität <b>oder</b> implementieren Sie eine <b>neue</b> Funktionalität.
        </Checkbox>
        <Checkbox
          >Es soll möglich sein, durch eine POST-Anfrage Daten an den Server zu senden. Diese Daten sollen in der Datenbank gespeichert werden.
        </Checkbox>
        <Checkbox
          >Es soll möglich sein, durch eine GET-Anfrage an den Server Daten aus der Datenbank zu erfragen.
        </Checkbox>
      </List>
    </Section>
    <Section headline="Optional">
       <List>
        <Checkbox
          >Es soll möglich sein, durch eine DELETE-Anfrage Daten aus der Datenbank zu löschen.
        </Checkbox>
        <Checkbox
          >Es soll möglich sein, durch eine PUT-Anfrage Daten in der Datenbank zu abzuändern.
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
            href="https://heintz-s.github.io/GIS/lecture/server-request/1"
            >Webserver Kommunikation</a
          >
        </li>
        <li>
          <a
            target="_blank"
            href="https://heintz-s.github.io/GIS/lecture/server-request/3"
            >fetch, Promise, async/ await</a
          >
        </li>
        <li>
          <a
            target="_blank"
            href="https://heintz-s.github.io/GIS/lecture/server-request/6"
            >Node.js</a
          >
        </li>
        <li>
          <a
            target="_blank"
            href="https://heintz-s.github.io/GIS/lecture/server-request/9"
            >Node.js POST</a
          >
        </li>
        <li>
          <a target="_blank" href="https://heintz-s.github.io/GIS/lecture/db2/2"
            >MongoDB</a
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
        <li>MIB: 26.06.22 - 18:00 Uhr</li>
        <li>OMB: 27.06.22 - 18:00 Uhr</li>
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