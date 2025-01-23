function saudacao() {
    const agora = new Date();
    const hora = agora.getHours();
  
    if (hora >= 0 && hora < 12) {
      return "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
      return "Boa tarde!";
    } else {
      return "Boa noite!";
    }
  }
  
  console.log(saudacao());
  