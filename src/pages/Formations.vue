<template>
  <Layout class="formations-page">

     <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Les formations</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">

      <h1 class="highlight"><Formations class="h1__icon" focusable="false" aria-hidden="true"/>Les formations</h1>

      <p class="cover__subtitle">De nombreuses formations sont disponibles, certaines accessibles
        gratuitement, pour vous former personnellement ou en équipe sur les divers
        sujets liés au design, à la qualité des services numériques et à l’accessibilité.</p>

      <FormationsIllustration class="cover__illustration" focusable="false" aria-hidden="true"/>

      </div>
    </div>

    <div class="content">

      <section>

        <h2>
          <Formations class="h2__icon" focusable="false" aria-hidden="true"/>Initiations
        </h2>
        <p>Initiez-vous facilement et gratuitement. C'est une bonne manière de découvrir rapidement un nouveau domaine&nbsp;!</p>

        <h3>Design</h3>
        <ul>
          <li><a href="https://openclassrooms.com/fr/courses/3013836-initiez-vous-au-design-thinking" title="Initiez-vous au Design - Nouvelle fenêtre" target="_blank"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>Initiez-vous au Design</a>, 6 heures, gratuit.</li>
          <li><a href="https://openclassrooms.com/fr/courses/3013856-ux-design-decouvrez-les-fondamentaux" title="UX design : découvrez les fondamentaux - Nouvelle fenêtre" target="_blank"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>UX design&nbsp;: découvrez les fondamentaux</a>, 8 heures, gratuit.</li>
        </ul>

        <h3>Accessibilité</h3>
        <ul>
          <li><a href="https://www.fun-mooc.fr/courses/course-v1:inria+41012+self_paced/about" title="L'accessibilité numérique - Nouvelle fenêtre" target="_blank"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>L'accessibilité numérique</a>, 15 heures, gratuit.</a></li>
          <li><a href="https://fr.wikiversity.org/wiki/Mise_en_%C5%93uvre_de_l_accessibilite_numerique" title="Mise en œuvre de l’accessibilité numérique - Nouvelle fenêtre" target="_blank"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>Mise en œuvre de l’accessibilité numérique</a>, 14 heures, gratuit.</li>
        </ul>

      </section>

      <section>

        <h2>
          <Formations class="h2__icon" focusable="false" aria-hidden="true"/>Certifications
        </h2>
        <p>Avec les formations certifiantes, vous pouvez acquérir rapidement des
          compétences sur les sujets qui vous intéressent.</p>

        <h3>Qualité</h3>
        <ul>
          <li><a href="https://www.opquast.com/formation/" title="Maîtrise de la qualité en projet web - Nouvelle fenêtre" target="_blank"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>Maîtrise de la qualité en projet web</a>, 14 heures, 250€ HT.</li>
        </ul>

      </section>

      <section>

        <h2>
          <Formations class="h2__icon" focusable="false" aria-hidden="true"/>Diplômes
        </h2>
        <p>Les formations diplômantes vous permettent de devenir expert ou de vous diriger vers un nouveau métier.</p>

        <h3>Bientôt disponible</h3>

      </section>

    </div>

  </Layout>
</template>


<script>

  import Formations from "~/assets/images/formations.svg"
  import FormationsIllustration from "~/assets/images/formationsIllustration.svg"

  export default {
    components: {
      Formations,
      FormationsIllustration,
    },
    metaInfo: {
      title: "Les formations au design numérique et à l'accessibilté - DesignGouv",
      meta: [{
        name: 'description',
        content: "Découvrez les formations liées au design, à la qualité des services numériques et à l’accessibilité."
      },
      {
        property: 'og:title',
        content: "Les formations au design numérique et à l'accessibilté - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Découvrez les formations liées au design, à la qualité des services numériques et à l’accessibilité."
      },
      {
        property: 'og:image',
        content: "https://designgouv.fr/designGouv.png"
      }],
    }
  }

</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .formations-page {

    li {
      list-style-type: none;
    }

    a {
      font-weight: bold;

      svg {
        padding-right: 12px;
        transition: .1s all;
      }

      &:hover {
        svg {
          padding-left: 8px;
          padding-right: 4px;
        }
      }
    }
  }

</style>
