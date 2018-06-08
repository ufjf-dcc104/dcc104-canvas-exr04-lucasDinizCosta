function Asteroid() {
  this.sprite = new Sprite();
  this.sprite.w = 30;
  this.sprite.h = 30;
  this.sprite.wImagem = 864;
  this.sprite.hImagem = 242;
  this.sprite.sx = 56;
  this.sprite.sy = 28;
}

Asteroid.prototype.mover = function(dt){
  this.sprite.mover(dt);
}

Asteroid.prototype.desenhar = function(ctx){
  imageLibrary.drawClipAngle(ctx, "asteroide", this.sprite.sx, this.sprite.sy, this.sprite.w, this.sprite.h, this.sprite.x, this.sprite.y, this.sprite.ang);
}

Asteroid.prototype.colidiuCom = function(alvo){
  return this.sprite.colidiuCom(alvo.sprite);
}
