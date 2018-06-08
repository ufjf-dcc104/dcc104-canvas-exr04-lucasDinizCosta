function Ground(tela){
  this.sprite = [];
  //this.sprite = new Sprite();
  this.sprite.push(new Sprite());
  this.sprite[0].x = 0;
  this.sprite[0].y = tela.height-56;
  this.sprite[0].w = tela.width+15;
  this.sprite[0].h = 56;
  this.sprite[0].wImagem = 168;
  this.sprite[0].hImagem = 56;
  this.sprite[0].sx = 292;
  this.sprite[0].sy = 0;
  this.sprite.push(new Sprite());
  this.sprite[1].x = this.sprite[0].x + this.sprite[0].w - 2;
  this.sprite[1].y = tela.height-56;
  this.sprite[1].w = tela.width+15;
  this.sprite[1].h = 56;
  this.sprite[1].wImagem = 168;
  this.sprite[1].hImagem = 56;
  this.sprite[1].sx = 292;
  this.sprite[1].sy = 0;
};

Ground.prototype.mover = function(dt, velFase){
  this.sprite[0].x = this.sprite[0].x - velFase*dt;
  this.sprite[1].x = this.sprite[1].x - velFase*dt;
  if(this.sprite[0].x + this.sprite[0].w <= 0)
    this.sprite[0].x = this.sprite[1].x + this.sprite[1].w - 2;
  if(this.sprite[1].x + this.sprite[1].w <= 0)
    this.sprite[1].x = this.sprite[0].x + this.sprite[0].w - 2;
}

Ground.prototype.desenhar = function(ctx){
  this.sprite[0].desenhar(ctx);
  this.sprite[1].desenhar(ctx);
}
