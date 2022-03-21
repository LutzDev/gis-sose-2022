<template>
  <Header
    v-bind:example-button="false"
    v-bind:script-button="false"
    v-bind:print-button="true"
  />
  <h1>Projektplanung</h1>
  <Text>Dieser Beitrag soll Ihnen dabei helfen, Ihr Projekt zu planen.</Text>
  <Sections>
    <Section headline="Inspirationssuche">
      <Text>
        Als aller erstes sollten Sie Ideen für Ihr Projekt sammeln. Hierbei
        lohnt es sich, Inspiration aus dem Internet zu suchen. Sie können sich
        an ähnlichen Webseiten orientieren oder dafür ausgelegte
        Inspirationsseiten verwenden. Im Anschluss werden Inspirationsseiten
        vorgestellt.</Text
      >
      <List headline="Für die Suche nach Design-Ideen gibt es:">
        <li><a target="_blank" href="https://dribbble.com/">Dribbble</a></li>
        <li><a target="_blank" href="https://www.behance.net/">Behance</a></li>
        <li>
          <a target="_blank" href="https://www.pinterest.de/">Pinterest</a>
        </li>
      </List>
      <List
        headline="Für die Suche nach vollwertigen interaktiven Webseiten gibt es:"
      >
        <li>
          <a target="_blank" href="https://www.awwwards.com/">Awwwards</a>
        </li>
      </List>
    </Section>
    <Section headline="Anforderungsanalyse">
      <Text>
        Zunächst ist es Sinnvoll, einen Funktionskatalog zu erstellen. Da es im
        Rahmen des Praktikums nicht möglich ist, jede gewünsche Funktionalität
        Ihrer Zieldomäne umzusetzen, sollten Sie sich darüber Gedanken machen,
        welche Funktionalität Sie umsetzen wollen. Hierbei sollten Sie sich
        darüber Gedanken machen, welche Funktione Sie auf jeden Fall gerne
        umsetzen würden und welche Funktione eine untergeordnete Rolle spielen,
        sodass Sie am eine Liste der Funktionen, nach Priorität geordnet
        erhalten.
      </Text>
    </Section>
    <Section headline="Ausarbeitung erster Ideen">
      <Text
        >Nach dem die Anforderungen geklärt wurden, können erste Ideen
        ausgestalltet werden. Ob Sie für diesen Zweck Moodboards, oder erste
        Screendesigns erstellen wollen ist Ihnene überlassen. Dieser Schritt
        kann dabei helfen das Projekt in die richtige Richtung zu lenken und
        sollte nicht vernachlässigt werden. Für die Ausarbeitung können Sie
        Stift und Paper, oder eines der unten aufgelisteten Tools verwenden.
      </Text>
      <List headline="Tools für das erstellen von Screendesigns">
        <li>
          <a target="_blank" href="https://www.figma.com/">Figma (kostenlos)</a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://creativecloud.adobe.com/apps/download/xd?mv=affiliate&mv2=red"
            >Adobe XD (kostenlos)</a
          >
        </li>
        <li>
          <a target="_blank" href="https://www.sketch.com/"
            >Sketch (kostenpflichtig)</a
          >
        </li>
      </List>
      <List headline="Tools für das bearbeiten von Bildern">
        <li>
          <a target="_blank" href="https://www.getpaint.net/index.html"
            >Paint.net (kostenlos)</a
          >
        </li>
        <li>
          <a target="_blank" href="https://pixlr.com/de/">PIXLR (kostenlos)</a>
        </li>
        <li>
          <a target="_blank" href="https://www.gimp.org/"
            >GIMP (OpenSource und kostenlos)</a
          >
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.adobe.com/de/products/photoshop.html"
            >Adobe Photoshop (kostenpflichtig)</a
          >
        </li>
        <li>
          <a target="_blank" href="https://affinity.serif.com/de/education/"
            >Affinity Photo (kostenpflichtig)</a
          >
        </li>
      </List>
      <List headline="Tools für das bearbeiten von Vektorgrafiken">
        <li>
          <a target="_blank" href="https://inkscape.org/de/"
            >Inkscape (OpenSource und kostenlos)</a
          >
        </li>
        <li>
          <a target="_blank" href="https://vectr.com/">Vectr (kostenlos)</a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.adobe.com/de/products/illustrator.html"
            >Adobe Illustrator (kostenpflichtig)</a
          >
        </li>
        <li>
          <a target="_blank" href="https://affinity.serif.com/de/designer/"
            >Affinity Designer (kostenpflichtig)</a
          >
        </li>
      </List>
    </Section>
  </Sections>
</template>
<script>
import Header from "../components/Header.vue";
import Sections from "../components/Sections.vue";
import Section from "../components/Section.vue";
import Text from "../components/Text.vue";
import List from "../components/List.vue";

export default {
  name: "ProjectPlanning",
  components: { Header, Sections, Section, Text, List },
  mounted() {
    console.log("Home geladen");
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "scripts/darkMode.js");
    document.head.appendChild(recaptchaScript);
  },
};
</script>