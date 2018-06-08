function Bird() {
  this.sprite = new Sprite();
  this.sprite.x = 100;
  this.sprite.y = 100;
  this.sprite.w = 17*2;   //17
  this.sprite.h = 12*2;   //12
  this.sprite.wImagem = 17;
  this.sprite.hImagem = 12;
  this.sprite.sx = 31;
  this.sprite.sy = 491;
  this.pontos = 0;

  /*************************
  *-Trabalha com animação--*
  *************************/

  this.animacao = [];
  this.animacao.push(new Sprite());
  this.animacao.push(new Sprite());
  this.animacao.push(new Sprite());
  this.tempoAnimacao = 1;
  this.estadoAnimacaoAtual = 0;
  this.sentidoAnimacao = true;      //true - crescente, false - descrescente

  //Estados de animacao
  this.animacao[0].wImagem = 17;
  this.animacao[0].hImagem = 12;
  this.animacao[0].sx = 3;
  this.animacao[0].sy = 491;
  this.animacao[1].wImagem = 17;
  this.animacao[1].hImagem = 12;
  this.animacao[1].sx = 31;
  this.animacao[1].sy = 491;
  this.animacao[2].wImagem = 17;
  this.animacao[2].hImagem = 12;
  this.animacao[2].sx = 59;
  this.animacao[2].sy = 491;

};

Bird.prototype.desenhar = function (ctx) {
  this.trocarAnimacao();
  imageLibrary.drawClipSize(ctx, "spriteSheet", this.sprite.sx, this.sprite.sy, this.sprite.wImagem, this.sprite.hImagem, this.sprite.x, this.sprite.y, this.sprite.w, this.sprite.h);
};

Bird.prototype.trocarAnimacao = function () {
    if(this.tempoAnimacao <= 0){
      this.tempoAnimacao = 1;
      if(this.estadoAnimacaoAtual >= 0 && this.estadoAnimacaoAtual < 3){
        var proximoEstado;
        if(this.sentidoAnimacao){
          proximoEstado = this.estadoAnimacaoAtual + 1;
          if(proximoEstado > 2){
            this.sentidoAnimacao = false;                      //Inverte o sentido de animação
            this.estadoAnimacaoAtual = this.estadoAnimacaoAtual - 1;
          }
          else{
            this.estadoAnimacaoAtual = this.estadoAnimacaoAtual + 1;
          }
        }
        else{
          proximoEstado = this.estadoAnimacaoAtual - 1;
          if(proximoEstado < 0){
            this.sentidoAnimacao = true;                      //Inverte o sentido de animação
            this.estadoAnimacaoAtual = this.estadoAnimacaoAtual + 1;
          }
          else{
            this.estadoAnimacaoAtual = this.estadoAnimacaoAtual - 1;
          }
        }
      }
    }
    console.log(this.estadoAnimacaoAtual);
    this.sprite.sx = this.animacao[this.estadoAnimacaoAtual].sx;
    this.sprite.sy = this.animacao[this.estadoAnimacaoAtual].sy;
    this.tempoAnimacao = this.tempoAnimacao - 10*dt;
};

Bird.prototype.mover = function (dt) {
    this.sprite.mover(dt);
    this.tempoAnimacao = this.tempoAnimacao - 0.5*dt;
};

Bird.prototype.impoeLimites = function (x, y, w, h) {
    this.sprite.impoeLimites(x, y, w, h);
};

Bird.prototype.colidiuCom = function (alvo) {
  if(alvo.x + alvo.w < this.sprite.x)  return false;
  if(alvo.x > this.sprite.x + this.sprite.w)  return false;
  if(alvo.y + alvo.h < this.sprite.y)  return false;
  if(alvo.y > this.sprite.y + this.sprite.h)  return false;
  return true;
};
