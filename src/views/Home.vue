<template>
  <Header v-bind:example-button="true" v-bind:script-button="true"/>
  <h1>First headline</h1>
  <Code language="JavaScript">
    Let Test = 4;
  </Code>
  <Sections>
    <Section headline="Test">
      <Text>
        das ist ein weiterer test
      </Text>
      <List>
        <li>fetch, Promise, async/await</li>
        <li>List</li>
        <li>Node</li>
        <li>asda</li>
      </List>
    </Section>
    <Section headline="Test">
      <Text>
        das ist ein weiterer test
      </Text>
      <List>
        <li>fetch, Promise, async/await</li>
        <li>List</li>
        <li>Node</li>
        <li>asda</li>
      </List>
      <Image file-name="logo.png" img-title="Das ist der Titel"/>
    </Section>
  </Sections>

  <Footer>
    <FooterItem>
      <IconHeadline headline="meineeadline" v-bind:info-icon="true"/>
      <List>
        <li>fetch, Promise, async/await</li>
        <li>List</li>
        <li>Node</li>
      </List>
    </FooterItem>
    <FooterItem>
      <IconHeadline headline="meineeadline" v-bind:contact-icon="true"/>
      <List>
        <li>fetch, Promise, async/await</li>
        <li>List</li>
        <li>Node</li>
      </List>
    </FooterItem>
    <FooterItem>
      <IconHeadline headline="meineeadline" v-bind:deadline-icon="true"/>
      <List>
        <li>fetch, Promise, async/await</li>
        <li>List</li>
        <li>Node</li>
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
  name: "Home",
  components: {Code, Image, IconHeadline, Header, Sections, List, Section, Footer, Text}
}
</script>

<style scoped>

</style>