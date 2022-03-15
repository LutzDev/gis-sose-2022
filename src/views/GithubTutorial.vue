<template>
  <Header v-bind:example-button="false" v-bind:script-button="false" />
  <h1>Git -/ GitHub-Crashkurs</h1>
  <Sections>
    <Section>
      <Text headline="Was ist Git?">
        Kurz und knapp, <i>Git</i> ist schlichtweg ein Tool für die
        Versionsverwaltung von Projekten.
      </Text>
      <Text headline="Und wofür brauch ich das?">
        <i>Git</i> erleichtert es, in einem Projekt bestehend aus etlichen
        Dokumenten (z. B. Quelltextdateien), den Überblick zu bewahren.
      </Text>
      <Text
        >Vor allem in Teamprojekte hilft <i>Git</i> dabei, nicht von etlichen
        Versionen und Änderungen überwältigt zu werden. <i>Git</i> kümmert sich
        außerdem um das bewältigten von Problemen die entstehen, wenn z. B.
        mehrere Personen gerade die gleiche Datei bearbeiten.</Text
      >
      <Text headline="Geht das nicht auch ohne Git?">
        <List headline="Ja, geht schon, aber:">
          <li>Regeln im Team müssen davor genau festgelegt werden.</li>
          <li>
            Falls sich jemand an diese Regeln nicht hält, kann das zu
            verheerenden Komplikationen führen.
          </li>
          <li>Koordinierung ist manuell mühsam.</li>
          <li>
            Woher weiß ich genau wer welche Zeile wann und wie angepasst hat?
          </li>
        </List>
      </Text>
      <Text>All diese Probleme löst <i>Git</i>.</Text>
      <List headline="Der Git Workflow" :isOrdered="true">
        <li>
          Anlegen eines <i>Repositories</i> (Repo) auf einem Server. Dieses
          Verwaltet alle Versionen des Projekts.
        </li>
        <li>
          Jedes Teammitglied <i>klont</i> (kopiert) dieses Repository auf sein
          Endgerät.
        </li>
        <li>
          Das Teammitglied macht eine Änderung und sichert diese zunächst lokal,
          dieser Schritt <i>Commit</i> genannt.
        </li>
        <li>
          Wenn ein Teamitglied seine Änderung veröffentlichen möchte, zieht er
          zunächst einen aktuellen Stand des Repos auf sein Endgerät, genannt
          <i>pull</i>, und aktualisiert anschließend das Repo auf dem Server mit
          seinen Änderungen, genannt <i>push</i>.
        </li>
        <li>
          Das Repo merkt sich, <b>wer wann welche</b> Änderungen gemacht hat
        </li>
      </List>
      <Text
        headline="Klingt gut aber wo lege ich mein Repository an? Ich habe doch keinen
        eigenen Server."
      >
        Die Antwort heißt
        <a href="https://github.com/" target="_blank">GitHub</a>.
      </Text>
      <Text>
        GitHub ist eine von vielen und außerdem eine kostenlose Lösung, eigene
        <i>Repositories</i> zu hosten.
      </Text>
      <Text headline="Was brauche ich um GitHub zu nutzen?">
        <List
          headline="Für die Nutzung von Git in Kombination mit GitHub benötige ich am besten die folgenden zwei Tools."
          :isOrdered="true"
        >
          <li>
            Das Versionsverwaltungstool
            <a target="_blank" href="https://git-scm.com/downloads">Git</a>
          </li>
          <li>
            Den Client
            <a href="https://desktop.github.com/" target="_blank"
              >GitHub-Desktop</a
            >
            (oder ein Ähnliches Tool)
          </li>
        </List>
      </Text>
    </Section>
    <Section headline="Wie nutze ich GitHub">
      <Text headline="GitHub Account anlegen">
        Zunächst muss ein GitHub-Account erstellt werden. Das funktioniert wie
        üblich über den <i>SignUp</i>-Button auf der
        <a target="_blank" href="https://github.com/">GitHub-Seite</a>.
      </Text>
      <Text headline="Repository Anlegen">
        Nach dem ein Account angelegt wurde, kann nun ein Repo angelegt werden.
        Der Button für das Anlegen eines Repos befindet sich auf der linken
        Seite.
      </Text>
      <Image fileName="create_repo.png"></Image>
      <Text
        >Während dem Erstellungsprozess kann der Name festgelegt werden.
        Außerdem kann festgelegt werden, ob das Repo für jeden sichtbar (public)
        oder nur für eine selbst und kooperierende Nutzer sichtbar sein soll
        (privat).
      </Text>
      <Text>
        Des Weiteren gibt es die Möglichkeit das <i>Repository</i> mit einer
        <i>README</i> zu initialisieren. <i>README</i> können viele verschiedene
        Zwecke erfüllen. Sie können das <i>Repo</i> beschreiben,
        Anwendungsbeispiel zeigen oder auch auf wichtige Stellen im
        <i>Repo</i> verweisen. <i>READMEs</i> werden in vielen unterschiedlichen
        Repos für variierende Zweck eingesetzt und es empfiehlt sich auch für
        ihr Repo eine eigene <i>README</i> anzulegen.
      </Text>
      <Image fileName="create_README.png"></Image>
      <Text headline="Repository klonen"
        >Um nun Ihr Repo zu klonen, öffnen Sie zunächst <i>GitHub-Desktop</i>.
        Wählen Sie den Reiter <i>File</i> und wählen Sie anschließend im sich
        öffnenden Kontext-Menü den Punkt <i>Clone Repository</i> aus.
      </Text>
      <Image fileName="clone_repo.png"></Image>
      <Text>
        Loggen Sie sich nun mit Ihrem GitHub-Account ein. Öffnen Sie
        <a target="_blank" href="https://github.com/">GitHub</a> im Browser.
        Wählen Sie das Repo aus, das Sie klonen möchten. Gehen Sie oben rechts
        auf <i>Code</i> und kopieren Sie den Link des Repos in die
        Zwischenablage. Kopieren Sie letztendlich den Link wie im Folgenden Bild
        gezeigt.
      </Text>
      <Image fileName="clone_repo_2.png"></Image>
      <Text
        >Sie können sich jetzt noch aussuchen, wo Sie den lokalen Klon des Repos
        auf Ihrem Rechner speichern wollen und das Repo schließlich
        klonen.</Text
      >
      <Text headline="Änderungen vornehmen und Repository aktualisieren">
        Wenn Sie Änderungen in Ihrem Klon vornehmen, werden diese in
        GitHub-Desktop angezeigt.
      </Text>
      <Image fileName="changes.png"></Image>
      <Text
        >Um diese Änderungen zu sichern, sollten Sie einen <i>Commit</i> machen.
        Hierzu gibt es unten links einen eigenen Bereich. Jeder
        <i>Commit</i> braucht eine <i>Commit-Message</i> (im folgenden Bild blau
        markiert).</Text
      >
      <Image fileName="commit.png"></Image>
      <Text>
        Wenn Sie schließlich die gespeicherten Änderungen in ihrem GitHub-Repo
        veröffentlichen wollen, wählen Sie den Reiter <i>Repository</i> aus und
        gehen auf <i>Push</i>. Alle gesicherten Änderungen werden nun in Ihr
        GitHub-Repo hochgeladen.
      </Text>
      <Image fileName="push.png"></Image>
      <Text
        >Herzlichen Glückwunsch. Sie haben Ihr GitHub-Repo erfolgreich
        aktualisiert.</Text
      >
      <Text headline="Branches">
        Falls Sie in einem Team arbeiten und sich nicht gegenseitig in die Quere
        kommen wollen, gibt es die Möglichkeit, Branches anzulegen. Branches
        sind Zweige Ihres Repos.
      </Text>
      <Text>
        Üblich ist es, mit einem <i>dev</i>- und einem
        <i>master</i>-/<i>main</i>-Branch zu arbeiten. Die eigentliche
        Entwicklung findet im <i>dev</i>(developer)-Branch statt. Wenn die
        Entwicklung reif und funktionsfähig ist, werden die Änderungen in den
        master/main-Branch übernommen.
      </Text>
      <Text
        >Branches können im Reiter <i>Branch</i> unter
        <i>New branch</i> angelegt werden.</Text
      >
      <Image fileName="new_branch.png"></Image>
      <Text headline="Merge"
        >Wenn Sie Änderungen von einem Branch in den anderen Branch übernehmen
        möchten, mache Sie das über einen <i>Merge.</i></Text
      >
      <Text
        >Für einen Merge wählen Sie zunächst den Branch aus, in das Sie die
        Änderungen übernehmen möchten. Das geht über den Abschnitt
        <i>Current branch</i>.
      </Text>
      <Image fileName="merge.png"></Image>
      <Text
        >Nachdem Sie den Branch ausgewählt haben, gehen Sie im Reiter
        <i>Branch</i> auf den Punkt <i>Merge into current branch</i> und wählen
        anschließen das Repository aus, von dem Sie die Änderungen übernehmen
        wollen.</Text
      >
      <Image fileName="merge2.png"></Image>
      <Text headline="Merge Konflikte"
        >Beim, Zusammenfügen von Branches können Konflikte entstehen, bsw. wenn
        2 Personen an derselben Stelle einer Datei arbeiten. Grundsätzlich gibt
        es folgende Möglichkeiten Merge-Konflikte zu lösen.</Text
      >
      <List :isOrdered="true">
        <li>Die Änderungen von Branch 1 übernehmen.</li>
        <li>Die Änderungen von Branch 2 übernehmen.</li>
        <li>Manuell die Änderungen von Branch 1 und 2 zusammenfügen.</li>
      </List>
    </Section>
    <Section headline="GitHub-Pages">
      <Text
        ><a target="_blank" href="https://pages.github.com/">GitHub-Pages</a>
        ist eine schnell und einfache Variante, eine Webseite direkt über die
        Plattform GitHub zu hosten</Text
      >
      <Text
        >Um GitHub-Pages für Ihr Repository einzurichten, öffnen Sie zunächst
        GitHub im Browser und wählen dort Ihr Repo aus. Anschließend wählen Sie
        den Reiter <i>Settings</i> und dort den Unterpunkt <i>Pages</i> aus.
        Zuletzt müssen Sie noch den Branch auswählen, über den Sie hosten wollen
        und GitHub-Pages ist für ihr Repository startklar. Ihnen wird nun eine
        URL angezeigt mit ihrem Pages-Link.</Text
      >
      <Image fileName="Pages.png"></Image>
      <Text
        >Wenn ich nun eine URL: <i>MeineURL</i> habe und in ihrem Repo einen
        Ordner <i>src</i> mit der Webseitendatei <i>main.html</i> dann Verweise
        ich auf diese Seite mit <i>MeineURL/src/main.html</i>.</Text
      >
      <Text headline="Hinweis"
        >Um GitHub-Pages nutzen zu können benötigen sie GitHub-Pro. Sie haben
        kostenlos zugriff auf GitHub-Pro, wenn sie ihren Account über die
        Hochschule verifizieren.</Text
      >
    </Section>
    <Section headline="README schreiben">
      <Text
        >Zum Schreiben einer README wird das Format <i>Markdown</i> verwendet.
        Wie man mit Markdown umgehen erfahren Sie
        <a
          target="_blank"
          href="https://guides.github.com/features/mastering-markdown/"
          >hier</a
        >.</Text
      >
    </Section>
  </Sections>
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
export default {
  name: "GithubTutorial",
  components: {
    IconHeadline,
    Header,
    Sections,
    List,
    Section,
    Footer,
    Text,
    Image,
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