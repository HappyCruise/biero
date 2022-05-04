<template>
<div id="footer">
  <div id="footer-container">
    <h3 id="footer-title">Biero</h3>
    <div id="footer-credits">
      <p>Leevi "Leka" Laukkanen</p>
      <p>Cajus "Cape" Ellonen</p>
    </div>
  </div>

</div>
</template>
<script>
export default {
	name: 'FooterBar'
};
</script>
<style scoped>
  #footer-container{
    background-color: goldenrod;
    position: relative;
    left: 0;
    bottom: 0;
    height: 90px;
    width: 100%;
    display: flex;
    align-content: center;
    flex-direction: column;
    padding: 15px;

  }

  #footer-title{
    text-align: left;
    font-size: 1.5rem;
    margin: 0;
  }
  #footer-credits{
    text-align: left;
    white-space: pre-wrap;
  }
  #footer-credits p {
    font-size: small;
  }

</style>