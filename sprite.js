function Sprite() {
  this.x = 100;
  this.y = 100;
  this.w = 20;
  this.h = 15;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.colorBG = "grey";
  this.colorBorder = "yellow";
  this.borderSize = 1;

  //imagem status
  this.wImagem = 0;
  this.hImagem = 0;
  this.sx = 0;
  this.sy = 0;
}

Sprite.prototype.mover = function (dt) {
    this.vx = this.vx + this.ax*dt;
    this.vy = this.vy + (G+this.ay)*dt;
    this.x = this.x + this.vx*dt;
    this.y = this.y + this.vy*dt;
}

Sprite.prototype.desenhar = function (ctx) {
  imageLibrary.drawClipSize(ctx, "spriteSheet", this.sx, this.sy, this.wImagem, this.hImagem, this.x, this.y, this.w, this.h);
}

Sprite.prototype.desenharBarreira = function (ctx) {
  imageLibrary.drawClip(ctx, "spriteSheet", this.sx, this.sy, this.w, this.h, this.x, this.y);    //chão
}

Sprite.prototype.impoeLimites = function(x, y, w, h){
  if(this.x + this.w < x){
    this.x = x;
    this.vx = 0;
  }
  if(this.x + this.w > x + w){
    this.x = x + w - this.w;
    this.vx = 0;
  }
  if(this.y < y){
    this.y = y;
    this.vy = 0;
  }
  if(this.y + this.h > y + h){
    this.y = y + h - this.h;
    this.vy = 0;
  }
};

Sprite.prototype.colidiuCom = function (alvo) {
  if(alvo.x+alvo.w < this.x) return false;
  if(alvo.x > this.x+this.w) return false;
  if(alvo.y+alvo.h < this.y) return false;
  if(alvo.y > this.y+this.h) return false;
  return true;
};
