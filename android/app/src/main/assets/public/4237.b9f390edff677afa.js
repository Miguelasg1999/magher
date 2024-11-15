"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4237],{4237:(b,s,a)=>{a.r(s),a.d(s,{ProductoPageModule:()=>C});var p=a(177),l=a(4341),c=a(4742),u=a(4964),o=a(4438),m=a(4796),f=a(2727);let P=(()=>{var n;class i{constructor(t){this.productoService=t,this.producto={nombre:"",descripcion:"",precio:0,imageUrl:""}}ngOnInit(){}addProducto(){this.productoService.addProducto(this.producto).then(()=>{alert("Se ha agregado correctamente el producto"),this.producto={nombre:"",descripcion:"",precio:0,imageUrl:""}}).catch(t=>{alert("Error al agregar producto"+t)})}}return(n=i).\u0275fac=function(t){return new(t||n)(o.rXU(f.J))},n.\u0275cmp=o.VBU({type:n,selectors:[["app-productos"]],decls:16,vars:4,consts:[[3,"ngSubmit"],[1,"dark"],["name","nombre","placeholder","Nombre producto","required","",3,"ngModelChange","ngModel"],["name","descripcion","placeholder","Descripci\xf3n",3,"ngModelChange","ngModel"],["position","floating"],["type","number","name","precio","placeholder","Precio",3,"ngModelChange","ngModel"],["name","imageUrl","placeholder","URL imagen",3,"ngModelChange","ngModel"],["type","submit","expand","full",2,"color","white","--background","#3c59e7"]],template:function(t,e){1&t&&(o.j41(0,"form",0),o.bIt("ngSubmit",function(){return e.addProducto()}),o.j41(1,"ion-item",1)(2,"ion-input",2),o.mxI("ngModelChange",function(r){return o.DH7(e.producto.nombre,r)||(e.producto.nombre=r),r}),o.k0s()(),o.j41(3,"ion-item",1)(4,"ion-input",3),o.mxI("ngModelChange",function(r){return o.DH7(e.producto.descripcion,r)||(e.producto.descripcion=r),r}),o.k0s()(),o.j41(5,"ion-item",1)(6,"ion-label",4),o.EFF(7,"Precio"),o.k0s(),o.j41(8,"ion-input",5),o.mxI("ngModelChange",function(r){return o.DH7(e.producto.precio,r)||(e.producto.precio=r),r}),o.k0s()(),o.j41(9,"ion-item",1)(10,"ion-input",6),o.mxI("ngModelChange",function(r){return o.DH7(e.producto.imageUrl,r)||(e.producto.imageUrl=r),r}),o.k0s()(),o.nrm(11,"br"),o.j41(12,"ion-button",7),o.EFF(13,"Guardar"),o.k0s()(),o.nrm(14,"br")(15,"br")),2&t&&(o.R7$(2),o.R50("ngModel",e.producto.nombre),o.R7$(2),o.R50("ngModel",e.producto.descripcion),o.R7$(4),o.R50("ngModel",e.producto.precio),o.R7$(2),o.R50("ngModel",e.producto.imageUrl))},dependencies:[l.qT,l.BC,l.cb,l.YS,l.vS,l.cV,c.Jm,c.$w,c.uz,c.he,c.su,c.Gw],styles:[".dark[_ngcontent-%COMP%]{--background: #111;color:#fff;padding:10px;border-radius:5px}"]}),i})();const h=[{path:"",component:(()=>{var n;class i{constructor(t,e){this.aService=t,this.router=e}ngOnInit(){}logout(){this.aService.logout(),alert("Sesi\xf3n cerrada"),this.router.navigate(["/inicio"])}}return(n=i).\u0275fac=function(t){return new(t||n)(o.rXU(m.u),o.rXU(u.Ix))},n.\u0275cmp=o.VBU({type:n,selectors:[["app-producto"]],decls:13,vars:2,consts:[[3,"translucent"],["rel","preconnect","href",o.wXG`https://fonts.googleapis.com`],["rel","preconnect","href",o.wXG`https://fonts.gstatic.com`,"crossorigin",""],["href",o.wXG`https://fonts.googleapis.com/css2?family=Pacifico&display=swap`,"rel","stylesheet"],["id","head"],["routerLink","/inicio",2,"color","white"],["slot","end","fill","clear","routerLink","/inicio"],[3,"fullscreen"],[2,"margin-left","20px"]],template:function(t,e){1&t&&(o.j41(0,"ion-header",0),o.nrm(1,"link",1)(2,"link",2)(3,"link",3),o.j41(4,"ion-toolbar",4)(5,"ion-title",5),o.EFF(6," MAGHER "),o.k0s(),o.j41(7,"ion-button",6),o.EFF(8,"Volver"),o.k0s()()(),o.j41(9,"ion-content",7)(10,"h2",8),o.EFF(11,"Agregar productos"),o.k0s(),o.nrm(12,"app-productos"),o.k0s()),2&t&&(o.Y8G("translucent",!0),o.R7$(9),o.Y8G("fullscreen",!0))},dependencies:[c.Jm,c.W9,c.eU,c.BC,c.ai,c.N7,u.Wk,P],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.fondo[_ngcontent-%COMP%]{background:#3c59e7;width:100%;margin:auto;height:100%}.blnk[_ngcontent-%COMP%]{background:#fff}#head[_ngcontent-%COMP%]{--background:#000000}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:#fff}#top[_ngcontent-%COMP%]{text-align:center;width:60%;margin:auto;background-color:#f7dc3c;padding:1px;border-radius:20px}h1[_ngcontent-%COMP%]{font-size:40px;font-family:Pacifico,cursive;font-weight:400;font-style:normal;text-align:center;margin-top:10px;margin-bottom:15px}h3[_ngcontent-%COMP%]{font-size:20px;font-family:Pacifico,cursive;font-weight:400;font-style:normal;text-align:center;margin-top:10px;margin-bottom:15px;color:#000}swiper-container[_ngcontent-%COMP%]{width:90%;height:50%}swiper-slide[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}img[_ngcontent-%COMP%]{border-radius:20px}#sub[_ngcontent-%COMP%]{color:#fff;font-size:20px;font-family:Pacifico,cursive;font-weight:400;font-style:normal;text-align:center;margin-top:10px;margin-bottom:15px}#center[_ngcontent-%COMP%]{width:80%}.btn-center[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]{--background: #222}"]}),i})()}];let M=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.$C({type:n}),n.\u0275inj=o.G2t({imports:[u.iI.forChild(h),u.iI]}),i})(),C=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.$C({type:n}),n.\u0275inj=o.G2t({imports:[p.MD,l.YN,c.bv,M]}),i})()}}]);