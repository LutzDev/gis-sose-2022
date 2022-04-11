<template>
  <Header
    v-bind:example-button="false"
    v-bind:script-button="true"
    v-bind:print-button="true"
  />
  <h1>ESLint Setup</h1>
  <Text>
    ESLint ist ein nützliches Tool, welches die Syntax von JavaScript-Dateien
    überprüft. ESLint kann frühzeitig auf mögliche Fehlerquellen hinweisen und
    hilft dabei, wohl formatierten Code zu schreiben.
  </Text>
  <Sections>
    <Section headline="Node.js">
      <Text
        >Falls noch nicht vorhanden, installieren Sie zunächst NodeJS auf ihrem
        Rechner.</Text
      >
      <Text headline="Windows">
        Den Link zum Windows-Installer finden sie
        <a target="_blank" href="https://nodejs.org">hier</a>.
      </Text>
      <Text headline="MacOS">
        Bei der Installation über macOS empfehlen wir die Verwendung von
        <a target="_blank" href="https://brew.sh/index_de">Homebrew</a>
      </Text>
      <Text>
        Bei Homebrew handelt es sich um einen Paketmanager für macOS, worüber
        "node" installiert werden kann. Öffnen Sie hierfür das "Terminal" und
        geben Sie nacheinander folgende Befehle ein:
      </Text>
      <List :isOrdered="true">
        <li>
          <pre
            v-highlightjs="sourcecode"
          ><code :class="language">/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code></pre>
        </li>
        <li>
          <pre
            v-highlightjs="sourcecode"
          ><code :class="language">echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> /Users/$USER/.zprofile</code></pre>
        </li>
        <li>
          <pre
            v-highlightjs="sourcecode"
          ><code :class="language">eval $(/opt/homebrew/bin/brew shellenv)</code></pre>
        </li>
      </List>
      <Text
        >Nun sollte Homebrew erfolgreich installiert sein. Dies kann mit
        folgendem Befehl überprüft werden:</Text
      >
      <pre
        v-highlightjs="sourcecode"
      ><code :class="language">brew -v</code></pre>
      <Text>Dieser Befehl sollte eine Versions-Nummer zurückgeben.</Text>
      <Text>
        Anschließend können Sie "node" über Homebrew installieren. Dies erfolgt
        mit folgendem Befehl:
      </Text>
      <pre
        v-highlightjs="sourcecode"
      ><code class="bash">brew install node</code></pre>
      <Text headline="Node.js Installation überprüfen">
        Die Installation von Node.js kann überprüft werden, wenn Sie die auf dem
        Mac das "Terminal" öffnen oder auf ihrem Windows-Rechner die CMD bzw.
        Powershell und folgende Befehle eingeben.
      </Text>
      <pre v-highlightjs="sourcecode"><code class="bash">node -v</code></pre>
      <pre v-highlightjs="sourcecode"><code class="bash">npm -v</code></pre>
      <Text
        >Für beide Befehle sollte eine Versionsnummer zurückgegeben
        werden.</Text
      >
    </Section>
    <Section headline="ESLint einrichten">
      <Text headline="Erweiterung für VS-Code">
        Zunächst müssen Sie die
        <a
          target="_blank"
          href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
          >ESLint Erweiterung</a
        >
        für VSCode installieren.</Text
      >
      <Text headline="Abhängigkeiten Installieren"
        >Laden Sie die
        <a
          target="_blank"
          href="https://felix.hs-furtwangen.de/auth/RepositoryEntry/4072407874/CourseNode/105532938896093"
          ><i>package.json</i> und die <i>.eslintrc.json</i></a
        >
        aus dem Kurs herunter. Fügen sie beide Dateien in ihren Projektordner
        ein.</Text
      >
      <Text
        >Öffnen Sie ihren Ordner in Terminal, CMD, oder Powershell (PS: am
        einfachsten geht das, wenn Sie den Ordner bereits in VS-Code geöffnet
        haben, dann müssen Sie lediglich auf den Tab <i>Terminal</i> der oberen
        linke Leiste klicken). führen sie folgenden Befehl aus.</Text
      >
      <pre v-highlightjs="sourcecode"><code class="bash">npm i</code></pre>
      <Text
        >Danach werden alle Abhängigkeiten, die ihr Projekt für die
        Syntax-Kontrolle braucht installiert.</Text
      >
    </Section>
    <Section headline="Testen von ESLint">
      Nun können Sie die Funktionalität von ESLint testen. Legen Sie bsw. eine
      neue Datei <i>eslint_test.js</i> in ihrem Projekt an. Füllen Sie diese
      Datei mit dem Inhalt:
    </Section>
    <pre v-highlightjs="sourcecode"><code class="javascript">const test = 0

console.log(test);</code></pre>
    <Text>
      Wenn alles korrekt installiert und eingebunden wurde, sollte das Ende der
      Zeile <Highlight>const test = 0</Highlight> rot markiert werden. Wenn Sie
      über diese Stelle mit der Maus drüberfahren, dann wird Ihnen angezeigt,
      dass ein <i>Semikolon (";")</i> am ende der Zeile fehlt. ESLint
      funktioniert nun erfolgreich für alle JavaScript-Dateien Ihres Projektes
    </Text>
  </Sections>
</template>

<script>
import Header from "../components/Header.vue";
import Text from "../components/Text.vue";
import Section from "../components/Section.vue";
import List from "../components/List.vue";
import Highlight from "../components/Highlight.vue";

export default {
  name: "ESLintSetup",
  components: {
    Header,
    Text,
    Section,
    List,
    Highlight,
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "scripts/darkMode.js");
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style scoped>
</style>