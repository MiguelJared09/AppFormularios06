"use strict";(self.webpackChunkformulariosApp=self.webpackChunkformulariosApp||[]).push([[887],{2887:(ee,g,s)=>{s.r(g),s.d(g,{AuthModule:()=>G});var m=s(6019),a=s(7537),f=s(1800),e=s(3556);let q=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:2,vars:0,template:function(r,t){1&r&&(e.TgZ(0,"p"),e._uU(1,"login works!"),e.qZA())},encapsulation:2}),o})(),U=(()=>{class o{constructor(){this.nombreApellidoPattern="([a-zA-Z]+) ([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.noPuedeSerStrider=r=>{var t;return"strider"===(null===(t=r.value)||void 0===t?void 0:t.trim().toLowerCase())?{noStrider:!0}:null}}camposIguales(r,t){return n=>{var l,d,p,h;return(null===(l=n.get(r))||void 0===l?void 0:l.value)!==(null===(d=n.get(t))||void 0===d?void 0:d.value)?(null===(p=n.get(t))||void 0===p||p.setErrors({noIguales:!0}),{noIguales:!0}):(null===(h=n.get(t))||void 0===h||h.setErrors(null),null)}}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var F=s(7908);class I extends F.w0{constructor(i,r){super()}schedule(i,r=0){return this}}const c={setInterval(...o){const{delegate:i}=c;return((null==i?void 0:i.setInterval)||setInterval)(...o)},clearInterval(o){const{delegate:i}=c;return((null==i?void 0:i.clearInterval)||clearInterval)(o)},delegate:void 0};var w=s(3980);const v={now:()=>(v.delegate||Date).now(),delegate:void 0};class u{constructor(i,r=u.now){this.schedulerActionCtor=i,this.now=r}schedule(i,r=0,t){return new this.schedulerActionCtor(this,i).schedule(t,r)}}u.now=v.now;const Z=new class extends u{constructor(i,r=u.now){super(i,r),this.actions=[],this._active=!1,this._scheduled=void 0}flush(i){const{actions:r}=this;if(this._active)return void r.push(i);let t;this._active=!0;do{if(t=i.execute(i.state,i.delay))break}while(i=r.shift());if(this._active=!1,t){for(;i=r.shift();)i.unsubscribe();throw t}}}(class extends I{constructor(i,r){super(i,r),this.scheduler=i,this.work=r,this.pending=!1}schedule(i,r=0){if(this.closed)return this;this.state=i;const t=this.id,n=this.scheduler;return null!=t&&(this.id=this.recycleAsyncId(n,t,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(n,this.id,r),this}requestAsyncId(i,r,t=0){return c.setInterval(i.flush.bind(i,this),t)}recycleAsyncId(i,r,t=0){if(null!=t&&this.delay===t&&!1===this.pending)return r;c.clearInterval(r)}execute(i,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const t=this._execute(i,r);if(t)return t;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,r){let n,t=!1;try{this.work(i)}catch(l){t=!0,n=l||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),n}unsubscribe(){if(!this.closed){const{id:i,scheduler:r}=this,{actions:t}=r;this.work=this.state=this.scheduler=null,this.pending=!1,(0,w.P)(t,this),null!=i&&(this.id=this.recycleAsyncId(r,i,null)),this.delay=null,super.unsubscribe()}}}),N=Z;var S=s(1404),A=s(9468),x=s(9947),E=s(8889),V=s(6921),T=s(4753),j=s(5724);function y(o,i){return i?r=>(0,S.z)(i.pipe((0,A.q)(1),(0,x.e)((o,i)=>{o.subscribe(new E.Q(i,V.Z))})),r.pipe(y(o))):(0,j.z)((r,t)=>o(r,t).pipe((0,A.q)(1),function(o){return(0,T.U)(()=>o)}(r)))}var P=s(8305),J=s(7398);var Y=s(4522);let Q=(()=>{class o{constructor(r){this.http=r}validate(r){const t=r.value;return console.log(t),this.http.get(`https://my-json-server.typicode.com/MiguelJared09/fakeAPI2/usuarios?q=${t}`).pipe(function(o,i=Z){const r=function(o=0,i,r=N){let t=-1;return null!=i&&((0,J.K)(i)?r=i:t=i),new P.y(n=>{let l=function(o){return o instanceof Date&&!isNaN(o)}(o)?+o-r.now():o;l<0&&(l=0);let d=0;return r.schedule(function(){n.closed||(n.next(d++),0<=t?this.schedule(void 0,t):n.complete())},l)})}(1e3,i);return y(()=>r)}(),(0,T.U)(n=>0===n.length?null:{emailTomado:!0}))}}return o.\u0275fac=function(r){return new(r||o)(e.LFG(Y.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function k(o,i){1&o&&(e.TgZ(0,"span",13),e._uU(1," Debe de ser en formato de Nombre y Apellido "),e.qZA())}function B(o,i){if(1&o&&(e.TgZ(0,"span",13),e._uU(1),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.hij(" ",r.emailErrorMsg," ")}}function D(o,i){1&o&&(e.TgZ(0,"span",13),e._uU(1," El UserName es Obligatorio y NO puede ser strider "),e.qZA())}function X(o,i){1&o&&(e.TgZ(0,"span",13),e._uU(1," La contrase\xf1a debe de ser m\xednimo de 6 caracteres. "),e.qZA())}function $(o,i){1&o&&(e.TgZ(0,"span",13),e._uU(1," Las contrase\xf1as deben de ser iguales "),e.qZA())}const K=[{path:"",children:[{path:"login",component:q},{path:"registro",component:(()=>{class o{constructor(r,t,n){this.fb=r,this.validatorService=t,this.emailValidator=n,this.miFormulario=this.fb.group({nombre:["",[a.kI.required,a.kI.pattern(this.validatorService.nombreApellidoPattern)]],email:["",[a.kI.required,a.kI.pattern(this.validatorService.emailPattern)],[this.emailValidator]],username:["",[a.kI.required,this.validatorService.noPuedeSerStrider]],password:["",[a.kI.required,a.kI.minLength(6)]],password2:["",[a.kI.required]]},{validators:[this.validatorService.camposIguales("password","password2")]})}get emailErrorMsg(){var r;const t=null===(r=this.miFormulario.get("email"))||void 0===r?void 0:r.errors;return(null==t?void 0:t.required)?"El correo es un campo Obligatorio":(null==t?void 0:t.pattern)?"Formato de correo No v\xe1lido":(null==t?void 0:t.emailTomado)?"El correo ya est\xe1 asociado a otra cuenta":""}ngOnInit(){this.miFormulario.reset({nombre:"Miguel Martinez",email:"test1@test.com",username:"miguel_jared09",password:"123456",password2:"123456"})}campoNoValido(r){var t,n;return(null===(t=this.miFormulario.get(r))||void 0===t?void 0:t.invalid)&&(null===(n=this.miFormulario.get(r))||void 0===n?void 0:n.touched)}submitFormulario(){console.log(this.miFormulario.value),this.miFormulario.markAllAsTouched()}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(a.qu),e.Y36(U),e.Y36(Q))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-registro"]],decls:76,vars:28,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","placeholder","Nombre del Usuario","formControlName","nombre",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","formControlName","email","placeholder","Email del Usuario",1,"form-control"],["type","text","placeholder","User Name","formControlName","username",1,"form-control"],["type","password","placeholder","Password de la cuenta","formControlName","password",1,"form-control"],["type","password","placeholder","Confirmar la Contrase\xf1a","formControlName","password2",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end",3,"disabled"],[1,"form-text","text-danger"]],template:function(r,t){1&r&&(e.TgZ(0,"h2"),e._uU(1,"Validaciones Reactivas"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0),e.TgZ(4,"div",1),e.TgZ(5,"form",2),e.NdJ("ngSubmit",function(){return t.submitFormulario()}),e.TgZ(6,"div",3),e.TgZ(7,"label",4),e._uU(8,"Nombre:"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,k,2,0,"span",7),e.qZA(),e.qZA(),e.TgZ(12,"div",3),e.TgZ(13,"label",4),e._uU(14,"Email:"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,B,2,1,"span",7),e.qZA(),e.qZA(),e.TgZ(18,"div",3),e.TgZ(19,"label",4),e._uU(20,"User Name:"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,D,2,0,"span",7),e.qZA(),e.qZA(),e.TgZ(24,"div",3),e.TgZ(25,"label",4),e._uU(26,"Password:"),e.qZA(),e.TgZ(27,"div",5),e._UZ(28,"input",10),e.YNc(29,X,2,0,"span",7),e.qZA(),e.qZA(),e.TgZ(30,"div",3),e.TgZ(31,"label",4),e._uU(32,"Confirmar Contrase\xf1a:"),e.qZA(),e.TgZ(33,"div",5),e._UZ(34,"input",11),e.YNc(35,$,2,0,"span",7),e.qZA(),e.qZA(),e.TgZ(36,"div",0),e.TgZ(37,"div",1),e.TgZ(38,"button",12),e._uU(39," Crear "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(40,"h2"),e._uU(41),e.qZA(),e.TgZ(42,"h2"),e._uU(43),e.qZA(),e.TgZ(44,"h2"),e._uU(45),e.qZA(),e.TgZ(46,"h2"),e._uU(47,"Form Errors"),e.qZA(),e.TgZ(48,"pre"),e._uU(49),e.ALo(50,"json"),e.qZA(),e.TgZ(51,"h2"),e._uU(52,"Nombre errors: "),e.qZA(),e.TgZ(53,"pre"),e._uU(54),e.ALo(55,"json"),e.qZA(),e.TgZ(56,"h2"),e._uU(57,"Email errors: "),e.qZA(),e.TgZ(58,"pre"),e._uU(59),e.ALo(60,"json"),e.qZA(),e.TgZ(61,"h2"),e._uU(62,"UserName errors: "),e.qZA(),e.TgZ(63,"pre"),e._uU(64),e.ALo(65,"json"),e.qZA(),e.TgZ(66,"h2"),e._uU(67,"Password: "),e.qZA(),e.TgZ(68,"pre"),e._uU(69),e.ALo(70,"json"),e.qZA(),e.TgZ(71,"h2"),e._uU(72,"Confirmaci\xf3n Psswd: "),e.qZA(),e.TgZ(73,"pre"),e._uU(74),e.ALo(75,"json"),e.qZA()),2&r&&(e.xp6(5),e.Q6J("formGroup",t.miFormulario),e.xp6(6),e.Q6J("ngIf",t.campoNoValido("nombre")),e.xp6(6),e.Q6J("ngIf",t.campoNoValido("email")),e.xp6(6),e.Q6J("ngIf",t.campoNoValido("username")),e.xp6(6),e.Q6J("ngIf",t.campoNoValido("password")),e.xp6(6),e.Q6J("ngIf",t.campoNoValido("password2")),e.xp6(3),e.Q6J("disabled",t.miFormulario.pending),e.xp6(3),e.hij("Form Valid: ",t.miFormulario.valid,""),e.xp6(2),e.hij("Form Status: ",t.miFormulario.status,""),e.xp6(2),e.hij("Form Pending: ",t.miFormulario.pending,""),e.xp6(4),e.Oqu(e.lcZ(50,16,t.miFormulario.errors)),e.xp6(5),e.Oqu(e.lcZ(55,18,t.miFormulario.controls.nombre.errors)),e.xp6(5),e.Oqu(e.lcZ(60,20,t.miFormulario.controls.email.errors)),e.xp6(5),e.Oqu(e.lcZ(65,22,t.miFormulario.controls.username.errors)),e.xp6(5),e.Oqu(e.lcZ(70,24,t.miFormulario.controls.password.errors)),e.xp6(5),e.Oqu(e.lcZ(75,26,t.miFormulario.controls.password2.errors)))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,m.O5],pipes:[m.Ts],encapsulation:2}),o})()},{path:"**",redirectTo:"registro"}]}];let W=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[f.Bz.forChild(K)],f.Bz]}),o})(),G=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,W,a.UX]]}),o})()}}]);