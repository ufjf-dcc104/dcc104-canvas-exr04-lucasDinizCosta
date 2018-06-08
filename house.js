function House() {
  this.sprite = new Sprite();
  this.tipo = 0;
  this.estado = 0;    //0 - Normal, 1 - Destruida
}

House.prototype.desenhar(ctx){
    if(tipo == 0){
      if(this.estado == 0){
        this.sprite.desenhar(ctx, "house01");
      }
      else if(this.estado == 1){
        this.sprite.desenhar(ctx, "house01Destroyed");
      }
    }
    else{
      if(this.estado == 0){
        this.sprite.desenhar(ctx, "house02");
      }
      else if(this.estado == 1){
        this.sprite.desenhar(ctx, "house02Destroyed");
      }
    }
}
