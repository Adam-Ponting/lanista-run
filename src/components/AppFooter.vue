<template>
  <footer id="footer" class="footer">
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
@import '@/assets/css/app.scss';

.footer {
  padding: 2em 1em;

  background-color: #111;
  box-shadow: 0 0 5px #111;
  color: #bbb;

  font-size: 0.75em;
  text-align: center;
}
.footer-link {
  color: #eee;
  &:hover {
    cursor: pointer;

    text-decoration: underline;
  }
  &:last-child {
    // return to top link on new line
    display: block;
    color: #fff;
    padding-top: 2em;
  }
}
</style>
