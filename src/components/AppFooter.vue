<template>
  <footer class="footer">
    <p>
      <strong>Lanista Run</strong>
      by
      <a :href="this.$options.adp" class="footer-link" target="_blank"
        >Adam Ponting.</a
      >
      View my
      <a :href="this.$options.gitHub" target="_blank" class="footer-link"
        >GitHub.</a
      >
      The source code is licensed
      <a :href="this.$options.MIT" target="_blank" class="footer-link">MIT.</a>
      The website content is licensed
      <a :href="this.$options.licence" target="_blank" class="footer-link"
        >CC BY NC SA 4.0.</a
      >
      <a v-scroll-to="'#NavBar'" class="footer-link">Return to top</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  adp: 'https://adp-cv.web.app/',
  MIT: 'http://opensource.org/licenses/mit-license.php',
  gitHub: 'https://github.com/Mada75/lanista-run',
  licence: 'http://creativecommons.org/licenses/by-nc-sa/4.0/'
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--bg-color-white);
  border-top: 1px solid var(--border-black);
  text-align: center;
  font-size: 0.7em;
  padding: 0.1em 0.5em;
}
.footer-link {
  color: orange;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:last-child {
    // return to top link on new line
    display: block;
    padding: 0.5em;
  }
}
</style>
