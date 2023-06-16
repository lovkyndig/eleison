<script setup lang="ts">

</script>

<template>
  <div>
    <Head>
      <Title>Privacy</Title>
    </Head>
    <NuxtLayout name="base">
      <ContentDoc class="about-me-content-container container mx-auto lg:max-w-4xl px-6 md:px-12 py-12">
        <template #not-found>
          <div class="about-me-content-container">
            <h1>
              Privacy Policy
            </h1>
            <p class="max-w-prose mx-auto p-4">
              Denne siden vises pga. at det er et problem med innlasting av 
              personvernerklæringen i markdown-format. <br>
              <br>
              Trykk på følgende link for å laste inn personvernerklæringen 
              i vanlig tekstformat.
              <a
                href="privacy.txt"
                target="_blank"
                class="text-blue-500 hover:text-blue-600 underline font-bold transition-colors duration-300"
              >privacy.txt</a>.
            </p>
          </div>
        </template>
      </ContentDoc>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.about-me-content-container {
  h1, h2, h3, h4, h5, h6 {
    @apply py-8 sm:py-10 font-bold text-center;
  }

  p {
    @apply py-4 text-lg
  }
}
</style>
