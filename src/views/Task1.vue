<template>
  <Header v-bind:example-button="false" v-bind:script-button="true"/>
  <h1>HTML Grundlagen</h1>
  <Text>In dieser Aufgabe erstellen Sie eine stillose HTML-Seite (<b>ohne</b> CSS und Javascript).</Text>
  <Sections>
    <Section headline="Projektstruktur">
        <List>
          <Checkbox>Legen Sie zu Beginn für Ihr gewähltes Thema einen Projektordner mit <b>passendem Namen</b> an. (Bsp. <highlight>airbnb-clone_mustermann</highlight>)</Checkbox>
          <Checkbox>Überlegen Sie sich und realisieren Sie eine Seitenstruktur bestehend aus <b>mindestens zwei</b> HTML-Seiten, welche zu Ihrem Thema passen</Checkbox>
        </List>
    </Section>
    <Section headline="Seiteninhalt">
      <List>
        <Checkbox>Schreiben Sie im <highlight>&lt;head&gt;...&lt;/head&gt;</highlight> neben einem geeigneten <highlight>&lt;title&gt;</highlight> <b>vier</b> <highlight>&lt;meta&gt; Tags</highlight></Checkbox>
        <Checkbox>Verwenden Sie im <highlight>&lt;body&gt;...&lt;/body&gt;</highlight> die HTML-Tags <highlight>&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;</highlight></Checkbox>
        <Checkbox>Benutzen Sie mindestens <b>sechs weitere</b> unterschiedliche HTML-Tags (Bsp.: <highlight>&lt;h1&gt;, &lt;p&gt;, &lt;img&gt;, &lt;table&gt;, ... </highlight>)</Checkbox>
      </List>
    </Section>
  </Sections>
  <Footer>
    <FooterItem>
      <IconHeadline headline="Nützliche Links" v-bind:info-icon="true"/>
      <List>
        <li>Philipp Oeschger: <a href="mailto:p.oeschger@hs-furtwangen.de">p.oeschger@hs-furtwangen.de</a></li>
        <li>Lutz Weigold: <a href="l.weigold@hs-furtwangen.de">l.weigold@hs-furtwangen.de</a></li>
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
        <li>MIB: Sonntags 18:00 Uhr</li>
        <li>OMB: Mittwochs 18:00 Uhr</li>
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
  name: "Task1",
  components: {Checkbox, Highlight, List, Section, Sections, Text, Footer, Header, IconHeadline},
  mounted() {
    let darkMode = document.createElement('script')
    darkMode.setAttribute('src', 'scripts/darkMode.js')
    document.head.appendChild(darkMode)

    let checkBox = document.createElement('script')
    checkBox.setAttribute('src', 'scripts/checkBox.js')
    checkBox.setAttribute('type', 'module')
    document.head.appendChild(checkBox)
  }
}
</script>

<style scoped>

</style>