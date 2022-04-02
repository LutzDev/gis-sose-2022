<template>
  <Header
    v-bind:example-button="false"
    v-bind:script-button="true"
    v-bind:print-button="true"
  />
  <h1>CSS</h1>
  <Text
    >In dieser Aufgabe stilisieren sie die in der letzten Aufgabe erstellten
    HTML-Seiten mit CSS.</Text
  >
  <Sections>
    <Section headline="Allgemein">
      <List>
        <Checkbox
          >Überlegen Sie sich ein Design (muss nicht hochgeladen
          werden).</Checkbox
        >
        <Checkbox
          >Binden Sie das Styling
          <a target="_blank" href="https://www.w3schools.com/css/css_howto.asp"
            >extern</a
          >
          ein. Verwenden Sie <b>kein inline-Style</b> und
          <b>kein HTML-Style-Tag</b>.</Checkbox
        >
        <Checkbox
          >Verwenden Sie <b>eine</b> übergreifende CSS-Datei für alle Ihre
          HTML-Seiten</Checkbox
        >
      </List>
    </Section>
    <Section headline="Grundlagen">
      <List>
        <Checkbox
          >Wenden Sie das
          <a
            target="_blank"
            href="https://www.w3schools.com/css/css_boxmodel.asp"
            >Box-Model</a
          >
          an (margin, padding, etc.).</Checkbox
        >
        <Checkbox
          >Verwenden Sie <b>3 der 4</b> in der Vorlesung vorgestellten
          <a href="https://heintz-s.github.io/GIS/lecture/css/4">Selektoren</a>
          mindestens einmal.</Checkbox
        >
        <Checkbox
          ><a
            target="_blank"
            href="https://heintz-s.github.io/GIS/lecture/css/5"
            >Kombinieren</a
          >
          Sie mindestens <b>3-mal</b> in Ihrer CSS-Datei Selektoren.</Checkbox
        >
        <Checkbox
          >Betten Sie mindestens eine selbst oder fremdgehostete
          <a target="_blank" href="https://heintz-s.github.io/GIS/lecture/css/7"
            >Webfont</a
          >
          in ihrer Webseite ein.
        </Checkbox>
        <Checkbox
          >Experimentieren Sie mit verschiedenen
          <a target="_blank" href="https://heintz-s.github.io/GIS/lecture/css/7"
            >Maßeinheiten und/ oder Farbdefinitionen</a
          >.</Checkbox
        >
        <Checkbox
          >Arbeiten Sie mit der CSS-Eigenschaft
          <a target="_blank" href="https://heintz-s.github.io/GIS/lecture/css/9"
            >position</a
          >.</Checkbox
        >
      </List>
    </Section>
    <Section headline="Vertiefung">
      <List>
        <Checkbox
          >Wenden Sie
          <a
            target="_blank"
            href="https://developer.mozilla.org/de/docs/Web/CSS/Pseudo-classes"
            >Pseudoklassen</a
          >
          an.</Checkbox
        >
        <Checkbox
          >Erstellen Sie <b>zusätzlich</b> Hover-Effekte mit der Pseudoklasse
          <a
            target="_blank"
            href="https://www.w3schools.com/cssref/sel_hover.asp"
            >:hover</a
          >.</Checkbox
        >
        <Checkbox
          >Arbeiten Sie mit
          <a
            target="_blank"
            href="https://developer.mozilla.org/de/docs/Web/CSS/Pseudo-elements"
            >Pseudoelementen</a
          >.</Checkbox
        >
        <Checkbox
          >Nutzen Sie
          <a
            target="_blank"
            href="https://heintz-s.github.io/GIS/lecture/css2/4"
            >CSS-Funktionen</a
          >.</Checkbox
        >
        <Checkbox
          >Verwenden Sie
          <a
            target="_blank"
            href="https://heintz-s.github.io/GIS/lecture/css2/5"
            >Animationen und/ oder Transitionen</a
          >
          auf Ihrer Webseite.</Checkbox
        >
        <Checkbox
          >Gestallten Sie Ihre Webseiten
          <a
            target="_blank"
            href="https://heintz-s.github.io/GIS/lecture/css2/6"
            >Adaptiv/Responsive</a
          >. Hierbei können Sie falls nötig von
          <a href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp"
            >Media queries</a
          >
          Gebrauch machen.</Checkbox
        >
        <Checkbox
          >Achten Sie darauf, dass Sie ihre Webseiten möglichst
          <a
            target="_blank"
            href="https://heintz-s.github.io/GIS/lecture/css2/7"
            >Barrierefrei</a
          >
          gestallten.</Checkbox
        >
        <Checkbox
          >Verwenden Sie möglichst nur CSS-Eigenschafte, die in den gängigen
          Browsern (Chrome, Firefox, Safari, Edge) unterstützt werden (siehe
          <a target="_blank" href="https://caniuse.com/">Can I Use</a
          >).</Checkbox
        >
      </List>
    </Section>
    <Section headline="Hinweise und Tipps">
      <Text
        >Sie müssen nicht auf der HTML-Struktur der letzten Aufgabe beharren.
        Machen Sie wenn nötig Stukturenänderunge, wenn es dem Stil der Seite
        unterstützt. Styling und Struktur der Seite sollten eng
        zusammenarbeiten.</Text
      >
    </Section>
  </Sections>
  <Footer>
    <FooterItem>
      <IconHeadline headline="Nützliche Links" v-bind:info-icon="true" />
      <List headline="Designinspiration">
        <li><a href="https://dribbble.com" target="_blank">Dribbble</a></li>
        <li><a href="https://www.behance.net" target="_blank">Behance</a></li>
        <li>
          <a href="https://www.pinterest.de" target="_blank">Pinterest</a>
        </li>
      </List>
      <List headline="Interaktive Webseiten">
        <li>
          <a href="https://www.awwwards.com/" target="_blank">Awwwards</a>
        </li>
      </List>
      <List headline="Frei zugängliche Schriftarten">
          <li><a target="_blank" href="https://fonts.google.com/">Google Fonts</a></li>
      </List>
    </FooterItem>
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
    <FooterItem>
      <IconHeadline headline="Abgabetermin" v-bind:deadline-icon="true" />
      <List>
        <li>MIB: 10.04.22 - 18:00 Uhr</li>
        <li>OMB: 18.04.22 18:00 Uhr</li>
      </List>
    </FooterItem>
  </Footer>
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
  name: "Task2",
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