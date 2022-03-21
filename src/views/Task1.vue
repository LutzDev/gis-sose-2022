<template>
  <Header
    v-bind:example-button="false"
    v-bind:script-button="true"
    v-bind:print-button="true"
  />
  <h1>HTML Grundlagen</h1>
  <Text
    >In dieser Aufgabe erstellen Sie eine stillose HTML-Seite (<b>ohne</b> CSS
    und Javascript).</Text
  >
  <Sections>
    <Section headline="Projektstruktur">
      <List>
        <Checkbox
          >Legen Sie zu Beginn für Ihr gewähltes Thema einen Projektordner mit
          <b>passendem Namen</b> an. (Bsp.
          <highlight>airbnb-clone_mustermann</highlight>)</Checkbox
        >
        <Checkbox
          >Überlegen Sie sich und realisieren Sie eine Seitenstruktur bestehend
          aus <b>mindestens zwei</b> HTML-Seiten, welche zu Ihrem Thema
          passen</Checkbox
        >
      </List>
    </Section>
    <Section headline="Seiteninhalt">
      <List>
        <Checkbox
          >Schreiben Sie im
          <highlight>&lt;head&gt;...&lt;/head&gt;</highlight> neben einem
          geeigneten <highlight>&lt;title&gt;</highlight> <b>vier</b>
          <highlight>&lt;meta&gt; Tags</highlight></Checkbox
        >
        <Checkbox
          >Verwenden Sie im
          <highlight>&lt;body&gt;...&lt;/body&gt;</highlight> die HTML-Tags
          <highlight
            >&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;</highlight
          ></Checkbox
        >
        <Checkbox
          >Benutzen Sie mindestens <b>sechs weitere</b> unterschiedliche
          HTML-Tags (Bsp.:
          <highlight
            >&lt;h1&gt;, &lt;p&gt;, &lt;img&gt;, &lt;table&gt;, ... </highlight
          >)</Checkbox
        >
      </List>
    </Section>
    <Section headline="Hinweis">
      <Text
        >In dieser Aufgabe wird auf die Korrekte Verwendung der HTML-Syntax
        geachtet. Mit dem
        <a target="_blank" href="https://validator.w3.org/#validate_by_input"
          >Markup Validation Service</a
        >
        können Sie Ihre Seite gegenprüfen. Falls Sie Bilder, Videos oder Audio
        verwenden, achten Sie darauf, dass diese zur kostenlosen Nutzung zur
        Verfügung stehen. Links zu lizenzfreien Medien finden Sie im Footer.
      </Text>
    </Section>
  </Sections>
  <Footer>
    <FooterItem>
      <IconHeadline headline="Nützliche Links" v-bind:info-icon="true" />
      <List headline="HTML-Validator">
        <li>
          <a href="https://validator.w3.org/#validate_by_input" target="_blank"
            >w3.org Validator</a
          >
        </li>
      </List>
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
      <List headline="Bildmaterial">
        <li>
          <a href="https://unsplash.com/" target="_blank">Unsplash</a>
        </li>
        <li>
          <a href="https://pixabay.com/de/" target="_blank"
            >Pixabay (auch Videos)</a
          >
        </li>
        <li>
          <a href="https://www.pexels.com/de-de/" target="_blank">Pexels</a>
        </li>
      </List>
      <List headline="Audiomaterial">
        <li>
          <a
            href="https://support.google.com/youtube/answer/3376882?hl=de"
            target="_blank"
            >YouTube Audio-Mediathek</a
          >
        </li>
        <li>
          <a href="https://freesound.org/" target="_blank">Freesound</a>
        </li>
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
        <li>MIB: 27.03.22 - 18:00 Uhr</li>
        <li>OMB: 04.03.22 - 18:00 Uhr</li>
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
import FooterItem from "../components/FooterItem.vue";
export default {
  name: "Task1",
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
    FooterItem,
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