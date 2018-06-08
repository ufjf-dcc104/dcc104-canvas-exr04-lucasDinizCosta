function Pipe() {
  this.sprite = [];

  //Propriedades
  this.distCanos = 70;
  this.yInicioEntreCanos = 70;                //Onde termina o cano de cima    (mínimo = 44,  máximo = 160)
  this.velocidade = -velFase;                 //Velocidade em x dos canos

  //Cano de cima
  this.sprite.push(new Sprite());
  this.sprite[0].x = 168;
  this.sprite[0].y = 0;
  this.sprite[0].w = 46;          //36
  this.sprite[0].h = this.yInicioEntreCanos - 0;
  this.sprite[0].sy = 483 - this.sprite[0].h;           //Para não deformar a imagem do cano, é mudada a altura dele
  this.sprite[0].hImagem = this.sprite[0].h;
  this.sprite[0].wImagem = 26;
  this.sprite[0].sx = 56;
  this.sprite[0].vx = this.velocidade;

  //Cano de baixo
  this.sprite.push(new Sprite());
  this.sprite[1].x = 168;
  this.sprite[1].y = this.sprite[0].y + this.sprite[0].h + this.distCanos;
  this.sprite[1].w = 46;        //36
  this.sprite[1].h = tela.height - 56 - this.sprite[1].y;
  this.sprite[1].wImagem = 26;
  this.sprite[1].hImagem = this.sprite[1].h;//160;
  this.sprite[1].sx = 84;
  this.sprite[1].sy = 322;
  this.sprite[1].vx = this.velocidade;


  this.pontuou = false;               //pontua o player se passar no meio dos canos
}

Pipe.prototype.mover = function(dt){
  for (var i = 0; i < this.sprite.length; i++) {
    this.sprite[i].x = this.sprite[i].x + this.sprite[i].vx*dt;
  }
}

Pipe.prototype.testePosicionamento = function(x){
  this.sprite[0].x = x;
  this.sprite[1].x = x;
}

Pipe.prototype.desenhar = function(ctx){
  this.sprite[0].desenhar(ctx);
  this.sprite[1].desenhar(ctx);
}

Pipe.prototype.alteraDistCanos = function(distCanos){
  this.distCanos = distCanos;
  this.sprite[1].y = this.distCanos + this.yInicioEntreCanos;     //Muda cano debaixo
  this.sprite[1].h = tela.height - 56 - this.sprite[1].y;
  this.sprite[1].hImagem = this.sprite[1].h;
}

Pipe.prototype.alteraYInicioEntreCanos = function(yInicioEntreCanos){
  this.yInicioEntreCanos = yInicioEntreCanos;
  this.sprite[0].y = 0;     //Muda cano debaixo
  this.sprite[0].h = this.yInicioEntreCanos - 0;
  this.sprite[0].sy = 483 - this.sprite[0].h;           //Para não deformar a imagem do cano , é mudada a altura dela
  this.sprite[0].hImagem = this.sprite[0].h;
  this.sprite[1].y = this.distCanos + this.yInicioEntreCanos;     //Muda cano debaixo
  this.sprite[1].h = tela.height-56-this.sprite[1].y;
  this.sprite[1].hImagem = this.sprite[1].h;
}

Pipe.prototype.colidiuCom = function(alvo){
  for(var i = 0; i < 2; i++){
    if(alvo.colidiuCom(this.sprite[i])){
      return true;
    }
  }
  return false;
}

Pipe.prototype.alteraXCanos = function(x){
  this.sprite[0].x = x;     //Muda cano debaixo
  this.sprite[1].x = x;
}
