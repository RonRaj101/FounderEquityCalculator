(function(){"use strict";var e={5684:function(e,n,o){var t=o(9963),r=o(9876),a=(o(560),o(6252)),i=o(3577);const l=(0,a._)("nav",{class:"navbar bg-body-tertiary m-auto"},[(0,a._)("div",{class:"container"},[(0,a._)("span",{class:"navbar-brand mb-0 h1"},"Add Founder Names")])],-1),s={class:"form w-100"},u=["id","onUpdate:modelValue","required"],d=["for"],m={class:"text-start my-2 m-1"},f=(0,a._)("i",{class:"bi bi-plus"},null,-1),c=(0,a._)("button",{class:"btn btn-outline-dark btn-block col-12",type:"submit"}," Submit ",-1);function p(e,n,o,r,p,I){return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a._)("div",s,[(0,a._)("form",{onSubmit:n[1]||(n[1]=(0,t.iM)(((...e)=>I.submitForm&&I.submitForm(...e)),["prevent"])),class:"w-75 m-auto p-5"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{class:"form-floating",key:n},[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control rounded-bottom-0 mb-2",id:"founder"+n,"onUpdate:modelValue":n=>e.name=n,required:n<2,placeholder:"Founder Name"},null,8,u),[[t.nr,e.name]]),(0,a._)("label",{for:"founder"+n},"Founder "+(0,i.zw)(n+1),9,d)])))),128)),(0,a._)("p",m,[(0,a.wy)((0,a._)("a",{href:"#",class:"link-body-emphasis link-offset-2 link-underline-opacity-25",onClick:n[0]||(n[0]=(...e)=>r.store.addFounder&&r.store.addFounder(...e))},[(0,a.Uk)("Add Founder "),f],512),[[t.F8,r.store.founderDetails.length<4]])]),c],32)])],64)}const I=(0,r.Q_)("main",{state:()=>({founderDetails:[{name:""},{name:""}],founderInformation:{FounderInvolvementBeforeFunding:[],FounderInvolvementInProductDevelopment:[],FounderInvolvementInSalesAndMarketing:[],FounderInvolvementInOperations:[],FounderSalaryBeforeFunding:[],FounderYearsOfExperience:[],FounderReplicability:[],FounderIsCEO:[],FounderIsIdeaExecution:[],FounderInitialCapitalContribution:[]}}),actions:{initFounders(){for(let e=0;e<this.founderDetails.length;e++)this.founderInformation.FounderInvolvementBeforeFunding.push(0),this.founderInformation.FounderInvolvementInProductDevelopment.push(0),this.founderInformation.FounderInvolvementInSalesAndMarketing.push(0),this.founderInformation.FounderInvolvementInOperations.push(0),this.founderInformation.FounderSalaryBeforeFunding.push(0),this.founderInformation.FounderYearsOfExperience.push(0),this.founderInformation.FounderReplicability.push(1),this.founderInformation.FounderIsCEO.push(0),this.founderInformation.FounderIsIdeaExecution.push(0),this.founderInformation.FounderInitialCapitalContribution.push(1)},addFounder(){this.founderDetails.push({name:""})},removeFounder(e){this.founderDetails.splice(e,1);for(let n=e;n<this.founderDetails.length;n++)this.founderInformation.FounderInvolvementBeforeFunding[n]=this.founderInformation.FounderInvolvementBeforeFunding[n+1],this.founderInformation.FounderInvolvementInProductDevelopment[n]=this.founderInformation.FounderInvolvementInProductDevelopment[n+1],this.founderInformation.FounderInvolvementInSalesAndMarketing[n]=this.founderInformation.FounderInvolvementInSalesAndMarketing[n+1],this.founderInformation.FounderInvolvementInOperations[n]=this.founderInformation.FounderInvolvementInOperations[n+1],this.founderInformation.FounderSalaryBeforeFunding[n]=this.founderInformation.FounderSalaryBeforeFunding[n+1],this.founderInformation.FounderYearsOfExperience[n]=this.founderInformation.FounderYearsOfExperience[n+1],this.founderInformation.FounderReplicability[n]=this.founderInformation.FounderReplicability[n+1],this.founderInformation.FounderIsCEO[n]=this.founderInformation.FounderIsCEO[n+1],this.founderInformation.FounderIsIdeaExecution[n]=this.founderInformation.FounderIsIdeaExecution[n+1],this.founderInformation.FounderInitialCapitalContribution[n]=this.founderInformation.FounderInitialCapitalContribution[n+1]},reInitFounder(e){this.founderInformation.FounderInvolvementBeforeFunding[e]=0,this.founderInformation.FounderInvolvementInProductDevelopment[e]=0,this.founderInformation.FounderInvolvementInSalesAndMarketing[e]=0,this.founderInformation.FounderInvolvementInOperations[e]=0,this.founderInformation.FounderSalaryBeforeFunding[e]=0,this.founderInformation.FounderYearsOfExperience[e]=0,this.founderInformation.FounderReplicability[e]=1,this.founderInformation.FounderIsCEO[e]=0,this.founderInformation.FounderIsIdeaExecution[e]=0,this.founderInformation.FounderInitialCapitalContribution[e]=1}},getters:{equitySplit(){let e=[],n=this.founderInformation.FounderInitialCapitalContribution.reduce(((e,n)=>parseInt(e)+parseInt(n)),0);for(let t=0;t<this.founderDetails.length;t++){let o=0,r=parseFloat(this.founderInformation.FounderInvolvementBeforeFunding[t]),a=parseInt(this.founderInformation.FounderInvolvementInProductDevelopment[t])/100,i=parseInt(this.founderInformation.FounderInvolvementInSalesAndMarketing[t])/100,l=parseInt(this.founderInformation.FounderInvolvementInOperations[t])/100,s=this.founderInformation.FounderSalaryBeforeFunding[t];if(s>0)if(s>4e3)s=-4;else{let e=s/1e3;s=-.5*e}else s=4;let u=this.founderInformation.FounderYearsOfExperience[t]/10;u>1?u=1:u<0&&(u=0);let d=parseInt(this.founderInformation.FounderReplicability[t]);0==d?d=0:d/=5;let m=0;m=this.founderInformation.FounderIsCEO[t]?1:0;let f=0;f=this.founderInformation.FounderIsIdeaExecution[t]?1:0;let c=this.founderInformation.FounderInitialCapitalContribution[t]/n;o+=5*r+3*a+3*i+3*l+4*u+5*d+4*c+2*m+1*f+4*s,e.push(o)}let o=e.reduce(((e,n)=>e+n),0);for(let t=0;t<e.length;t++)e[t]=e[t]/o;return e}}});var F={emits:["to-calculate"],name:"FounderDetails",setup(){const e=I();return{store:e}},mounted(){},data(){return{}},methods:{submitForm(){this.$emit("to-calculate",this.store.founderDetails.filter((e=>""!==e.name)))}}},v=o(3744);const h=(0,v.Z)(F,[["render",p]]);var b=h;const y=e=>((0,a.dD)("data-v-5bc0eb8f"),e=e(),(0,a.Cn)(),e),g=y((()=>(0,a._)("nav",{class:"navbar bg-body-tertiary m-auto"},[(0,a._)("div",{class:"container"},[(0,a._)("p",{class:"navbar-brand mb-0 h1 text-start"},"Founder Equity Details")])],-1))),w={class:"details w-100 m-0 row"},_={class:"form p-0 m-0 col-lg-8 col-md-12"},D={class:"row pt-5 px-0",style:{"place-content":""}},k={class:"tables table-responsive-xxl founder-form col-auto text-start",style:{}},x={class:"table table-borderless table-striped"},E={class:"table-active"},C=y((()=>(0,a._)("th",{scope:"col"},null,-1))),S={class:""},O=y((()=>(0,a._)("th",{scope:"row"}," How much will this founder be engaged in this company before it raises funds? ",-1))),R={class:"form-check"},B=["name","onUpdate:modelValue"],U=y((()=>(0,a._)("label",{class:"form-check-label",for:"flexRadioDefault1"}," Exclusive ",-1))),V={class:"form-check"},Y=["name","onUpdate:modelValue"],M=y((()=>(0,a._)("label",{class:"form-check-label",for:"flexRadioDefault2"}," Full-Time ",-1))),H={class:"form-check"},q=["name","onUpdate:modelValue"],P=y((()=>(0,a._)("label",{class:"form-check-label",for:"flexRadioDefault3"}," Part-Time ",-1))),A=y((()=>(0,a._)("th",{scope:"row"},"Allocate how much each founder will be involved in product development.",-1))),K=["onUpdate:modelValue","name","id"],$=y((()=>(0,a._)("th",{scope:"row"},"Allocate how much each founder will be involved in sales and marketing. ",-1))),j=["onUpdate:modelValue","name","id"],T=y((()=>(0,a._)("th",{scope:"row"},"Allocate how much each founder will be involved in operations. ",-1))),z=["onUpdate:modelValue","name","id"],L=y((()=>(0,a._)("th",{scope:"row"},"Founder salary ($monthly) before funding?",-1))),N=["onUpdate:modelValue","name","id"],W=y((()=>(0,a._)("th",{scope:"row"}," How many years of experience is this co-founder bringing to the table in her or his primary field of responsibility? ",-1))),Z=["onUpdate:modelValue","name","id"],G=y((()=>(0,a._)("th",{scope:"row"},"How hard or easy is it replace or replicate this founder's contribution? ",-1))),J=["onUpdate:modelValue","name","id"],Q=y((()=>(0,a._)("br",null,null,-1))),X=y((()=>(0,a._)("th",{scope:"row"},"Is Founder CEO?",-1))),ee={class:"form-check"},ne=["onUpdate:modelValue","value"],oe=y((()=>(0,a._)("th",{scope:"row"},"Is it this founders idea execution?",-1))),te={class:"form-check"},re=["onUpdate:modelValue","value"],ae=y((()=>(0,a._)("th",{scope:"row"},"Will this founder be making an initial capital contribution and, if so, how much?",-1))),ie=["onUpdate:modelValue","name","id"],le={class:"card p-0 mt-3 border-0 col-lg-4 col-md-12",style:{}},se={class:"card-body text-dark"},ue={class:"card-title"},de={class:"results m-auto rounded-2 p-3 mb-5 rounded"},me={class:"progress-stacked row g-0 w-100"},fe=["aria-label","aria-valuenow","title"],ce={class:"text-truncate"},pe={class:"card-text p-0 m-0"},Ie=y((()=>(0,a._)("button",{type:"button",class:"btn btn-outline-primary btn-md mt-3","data-bs-toggle":"collapse","data-bs-target":"#collapseFounders","aria-expanded":"false","aria-controls":"collapseExample"},"Modify Founders",-1))),Fe={class:"collapse m-3",id:"collapseEmail"},ve={class:"card card-body"},he={class:"mb-3"},be=y((()=>(0,a._)("label",{for:"exampleFormControlInput1",class:"form-label"},"Email address",-1))),ye=["disabled"],ge=["value"],we=["disabled"],_e={class:"spinner-border spinner-border-sm","aria-hidden":"true"},De=y((()=>(0,a._)("div",{class:"alert alert-light mt-3",role:"alert",id:"status"},null,-1))),ke={class:"collapse m-3",id:"collapseFounders"},xe={class:"card card-body"},Ee=["id","onUpdate:modelValue","required"],Ce=["for"],Se={class:"text-start my-2 m-1"},Oe=["onClick"],Re=y((()=>(0,a._)("i",{class:"bi bi-trash"},null,-1))),Be={class:"text-start my-2 m-1"},Ue=y((()=>(0,a._)("i",{class:"bi bi-plus"},null,-1)));function Ve(e,n,o,r,l,s){const u=(0,a.up)("Pie");return(0,a.wg)(),(0,a.iD)(a.HY,null,[g,(0,a._)("div",w,[(0,a._)("div",_,[(0,a._)("div",D,[(0,a._)("div",k,[(0,a._)("table",x,[(0,a._)("thead",E,[(0,a._)("tr",null,[C,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,n)=>((0,a.wg)(),(0,a.iD)("th",{key:n,scope:"col"},(0,i.zw)(e.name),1)))),128))])]),(0,a._)("tbody",null,[(0,a._)("tr",S,[O,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,n)=>((0,a.wg)(),(0,a.iD)("td",{class:"",key:n,colspan:""},[(0,a._)("div",R,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"radio",name:"fibf"+e.name,id:"flexRadioDefault1",value:"1","onUpdate:modelValue":e=>r.store.founderInformation.FounderInvolvementBeforeFunding[n]=e},null,8,B),[[t.G2,r.store.founderInformation.FounderInvolvementBeforeFunding[n]]]),U]),(0,a._)("div",V,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"radio",name:"fibf"+e.name,id:"flexRadioDefault2",value:"0.8","onUpdate:modelValue":e=>r.store.founderInformation.FounderInvolvementBeforeFunding[n]=e},null,8,Y),[[t.G2,r.store.founderInformation.FounderInvolvementBeforeFunding[n]]]),M]),(0,a._)("div",H,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"radio",name:"fibf"+e.name,id:"flexRadioDefault3",value:"0.5","onUpdate:modelValue":e=>r.store.founderInformation.FounderInvolvementBeforeFunding[n]=e},null,8,q),[[t.G2,r.store.founderInformation.FounderInvolvementBeforeFunding[n]]]),P])])))),128))]),(0,a._)("tr",null,[A,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,n)=>((0,a.wg)(),(0,a.iD)("td",{key:n},[(0,a.wy)((0,a._)("input",{class:"form-range",type:"range",min:"0",max:"100",step:"10","onUpdate:modelValue":e=>r.store.founderInformation.FounderInvolvementInProductDevelopment[n]=e,name:"fipd"+e.name,id:"sliderfipd"+e.name},null,8,K),[[t.nr,r.store.founderInformation.FounderInvolvementInProductDevelopment[n]]]),(0,a.Uk)(" ("+(0,i.zw)(s.lpad(l.FoundersInformation.FounderInvolvementInProductDevelopment[n],3))+"%) ",1)])))),128))]),(0,a._)("tr",null,[$,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,n)=>((0,a.wg)(),(0,a.iD)("td",{colspan:"",class:"",key:n},[(0,a.wy)((0,a._)("input",{class:"form-range",type:"range",min:"0",max:"100",step:"10","onUpdate:modelValue":e=>r.store.founderInformation.FounderInvolvementInSalesAndMarketing[n]=e,name:"fism"+e.name,id:"sliderfism"+e.name},null,8,j),[[t.nr,r.store.founderInformation.FounderInvolvementInSalesAndMarketing[n]]]),(0,a.Uk)(" ("+(0,i.zw)(s.lpad(r.store.founderInformation.FounderInvolvementInSalesAndMarketing[n],3))+"%) ",1)])))),128))]),(0,a._)("tr",null,[T,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,n)=>((0,a.wg)(),(0,a.iD)("td",{colspan:"",class:"",key:n},[(0,a.wy)((0,a._)("input",{class:"form-range",type:"range",min:"0",max:"100",step:"10","onUpdate:modelValue":e=>r.store.founderInformation.FounderInvolvementInOperations[n]=e,name:"fiio"+e.name,id:"sliderfiio"+e.name},null,8,z),[[t.nr,r.store.founderInformation.FounderInvolvementInOperations[n]]]),(0,a.Uk)(" ("+(0,i.zw)(s.lpad(r.store.founderInformation.FounderInvolvementInOperations[n],3))+"%) ",1)])))),128))]),(0,a._)("tr",null,[L,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,o)=>((0,a.wg)(),(0,a.iD)("td",{colspan:"",key:o},[(0,a.wy)((0,a._)("input",{class:"form-control",type:"number","onUpdate:modelValue":e=>r.store.founderInformation.FounderSalaryBeforeFunding[o]=e,min:"0",onKeydown:n[0]||(n[0]=e=>"-"===e.key?e.preventDefault():null),onCopy:n[1]||(n[1]=(0,t.iM)((()=>{}),["prevent"])),onPaste:n[2]||(n[2]=(0,t.iM)((()=>{}),["prevent"])),name:"fsbf"+e.name,id:"fsbf"+e.name},null,40,N),[[t.nr,r.store.founderInformation.FounderSalaryBeforeFunding[o]]])])))),128))]),(0,a._)("tr",null,[W,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,o)=>((0,a.wg)(),(0,a.iD)("td",{colspan:"",key:o},[(0,a.wy)((0,a._)("input",{class:"form-control",type:"number","onUpdate:modelValue":e=>r.store.founderInformation.FounderYearsOfExperience[o]=e,min:"0",onKeydown:n[3]||(n[3]=e=>"-"===e.key?e.preventDefault():null),onCopy:n[4]||(n[4]=(0,t.iM)((()=>{}),["prevent"])),onPaste:n[5]||(n[5]=(0,t.iM)((()=>{}),["prevent"])),name:"fyoe"+e.name,id:"fyoe"+e.name},null,40,Z),[[t.nr,r.store.founderInformation.FounderYearsOfExperience[o]]])])))),128))]),(0,a._)("tr",null,[G,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,n)=>((0,a.wg)(),(0,a.iD)("td",{colspan:"",key:n},[(0,a.wy)((0,a._)("input",{type:"range",class:"form-range","onUpdate:modelValue":e=>r.store.founderInformation.FounderReplicability[n]=e,step:"1",min:"1",max:"5",name:"frep"+e.name,id:"frep"+e.name},null,8,J),[[t.nr,r.store.founderInformation.FounderReplicability[n]]]),Q,(0,a._)("span",null,"("+(0,i.zw)(["Very Easy","Easy","Fair","Hard","Very Hard"][r.store.founderInformation.FounderReplicability[n]-1])+")",1)])))),128))]),(0,a._)("tr",null,[X,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,n)=>((0,a.wg)(),(0,a.iD)("td",{colspan:"",key:n},[(0,a._)("div",ee,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":e=>r.store.founderInformation.FounderIsCEO[n]=e,name:"fceo",value:e.name,id:"fceo"},null,8,ne),[[t.e8,r.store.founderInformation.FounderIsCEO[n]]])])])))),128))]),(0,a._)("tr",null,[oe,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,n)=>((0,a.wg)(),(0,a.iD)("td",{colspan:"",key:n},[(0,a._)("div",te,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":e=>r.store.founderInformation.FounderIsIdeaExecution[n]=e,name:"fidea",value:e.name,id:"fidea"},null,8,re),[[t.e8,r.store.founderInformation.FounderIsIdeaExecution[n]]])])])))),128))]),(0,a._)("tr",null,[ae,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,o)=>((0,a.wg)(),(0,a.iD)("td",{colspan:"",key:o},[(0,a.wy)((0,a._)("input",{class:"form-control",type:"number","onUpdate:modelValue":e=>r.store.founderInformation.FounderInitialCapitalContribution[o]=e,min:"0",onKeydown:n[6]||(n[6]=e=>"-"===e.key?e.preventDefault():null),onCopy:n[7]||(n[7]=(0,t.iM)((()=>{}),["prevent"])),onPaste:n[8]||(n[8]=(0,t.iM)((()=>{}),["prevent"])),name:"ficc"+e.name,id:"ficc"+e.name},null,40,ie),[[t.nr,r.store.founderInformation.FounderInitialCapitalContribution[o]]])])))),128))])])])])])]),(0,a._)("div",le,[(0,a._)("div",se,[(0,a._)("h5",ue,[(0,a._)("div",de,[(0,a._)("div",me,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.store.founderDetails,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:"progress",role:"progressbar","aria-label":"Segment"+n,"aria-valuenow":100*r.store.equitySplit[n],"aria-valuemin":"0","aria-valuemax":"100",style:(0,i.j5)("width:"+100*r.store.equitySplit[n]+"%;"),title:e.name+" ("+Math.round(100*r.store.equitySplit[n])+"%)"},[(0,a._)("div",{class:"progress-bar",style:(0,i.j5)("background-color: "+l.colors[(n%r.store.founderDetails.length+r.store.founderDetails.length)%r.store.founderDetails.length]+";")},[(0,a._)("span",ce,(0,i.zw)(e.name)+" ("+(0,i.zw)(Math.round(100*r.store.equitySplit[n]))+"%)",1)],4)],12,fe)))),128))])])]),(0,a._)("div",pe,[(0,a.Wm)(u,{class:"m-auto p-0",data:s.chartData,options:l.chartOptions},null,8,["data","options"]),Ie,(0,a._)("button",{type:"button",class:"btn btn-outline-dark btn-md mt-3","data-bs-toggle":"collapse","data-bs-target":"#collapseEmail","aria-expanded":"false","aria-controls":"collapseExample",onClick:n[9]||(n[9]=(...e)=>s.submitForm&&s.submitForm(...e))},"View Results"),(0,a._)("div",Fe,[(0,a._)("div",ve,[(0,a._)("form",{action:"",onSubmit:n[11]||(n[11]=(0,t.iM)(((...e)=>s.sendEmailJS&&s.sendEmailJS(...e)),["prevent"]))},[(0,a._)("div",he,[be,(0,a.wy)((0,a._)("input",{type:"email","onUpdate:modelValue":n[10]||(n[10]=e=>l.email=e),name:"email",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com",disabled:l.sendEmail,required:""},null,8,ye),[[t.nr,l.email]])]),(0,a._)("input",{type:"hidden",value:s.emailMessage,name:"message"},null,8,ge),(0,a._)("button",{class:"btn btn-primary",type:"submit",disabled:l.sendEmail},[(0,a.wy)((0,a._)("span",_e,null,512),[[t.F8,l.sendEmail]]),(0,a.Uk)(" Send ")],8,we),De],32)])]),(0,a._)("div",ke,[(0,a._)("div",xe,[(0,a._)("form",{onSubmit:n[13]||(n[13]=(0,t.iM)(((...e)=>s.submitForm&&s.submitForm(...e)),["prevent"])),class:"w-100 m-auto"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.founders,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{class:"form-floating",key:n},[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control rounded-bottom-0 mb-2",id:"founder"+n,"onUpdate:modelValue":n=>e.name=n,required:n<2,placeholder:"Founder Name"},null,8,Ee),[[t.nr,e.name]]),(0,a._)("label",{for:"founder"+n},"Founder "+(0,i.zw)(n+1),9,Ce),(0,a._)("p",Se,[(0,a.wy)((0,a._)("a",{href:"#",class:"link-body-emphasis text-start text-danger link-offset-2 link-underline-opacity-0",onClick:e=>r.store.removeFounder(n)},[(0,a.Uk)("Remove Founder "),Re],8,Oe),[[t.F8,l.founders.length>2]])])])))),128)),(0,a._)("p",Be,[(0,a.wy)((0,a._)("a",{href:"#",class:"link-body-emphasis link-offset-2 link-underline-opacity-25",onClick:n[12]||(n[12]=(...e)=>s.addFounder&&s.addFounder(...e))},[(0,a.Uk)("Add Founder "),Ue],512),[[t.F8,l.founders.length<4]])])],32)])])])])])])],64)}var Ye=o(5750),Me=o(2005),He=o(9101);Ye.kL.register(Ye.qi,Ye.u,Ye.De);var qe={name:"StartupDetails",setup(){const e=I();return{store:e}},emits:["to-final-results"],components:{Pie:Me.by},mounted(){this.store.initFounders()},data(){return{founders:this.store.founderDetails,FoundersInformation:this.store.founderInformation,colors:["#D72638","#3F88C5","#F49D37","#140F2D","#183059"],chartOptions:{maintainAspectRatio:!0,aspectRatio:.9,responsive:!1},email:"",sendEmail:!1,message:"Equity Split Results: <br><br>"+this.store.founderDetails.toString()}},methods:{lpad(e,n){var o=new Array(n+1).join("0");return(o+e).slice(-n)},addFounder(){this.store.founderDetails.push({name:""});let e=this.store.founderDetails.length-1;this.store.reInitFounder(e)},sendEmailJS(e){this.sendEmail=!0;try{He.ZP.sendForm("service_5jfox0x","template_2jpbi5q",e.target,"dhB2CwPRXVzsCCBId",{email:this.email,message:this.message}).then((e=>{console.log(e.text),document.getElementById("status").innerHTML="Email Sent Successfully"}),(e=>{console.log(e.text),document.getElementById("status").innerHTML="Error Sending Email"}))}catch(n){document.getElementById("status").innerHTML="Error Sending Email",console.log({error:n})}this.email="",this.message="",this.sendEmail=!1},submitForm(){this.$emit("to-final-results",this.FoundersInformation)}},computed:{emailMessage(){let e="Equity Split Report: <br><hr>";for(let n=0;n<this.store.founderDetails.length;n++)e+=`<b>${this.store.founderDetails[n].name}</b>: <b>${100*this.store.equitySplit[n]}%</b><br>`,0==this.FoundersInformation.FounderInvolvementBeforeFunding[n]?e+="Founder Involvement Before Funding: None<br>":.5==this.FoundersInformation.FounderInvolvementBeforeFunding[n]?e+="Founder Involvement Before Funding: Part-Time<br>":.8==this.FoundersInformation.FounderInvolvementBeforeFunding[n]?e+="Founder Involvement Before Funding: Full-Time<br>":1==this.FoundersInformation.FounderInvolvementBeforeFunding[n]?e+="Founder Involvement Before Funding: Exclusive<br>":e+=`Founder Involvement Before Funding: ${this.FoundersInformation.FounderInvolvementBeforeFunding[n]}<br>`,e+=`Founder Involvement In Product Development: ${100*this.FoundersInformation.FounderInvolvementInProductDevelopment[n]}% <br>`,e+=`Founder Involvement In Sales And Marketing: ${100*this.FoundersInformation.FounderInvolvementInSalesAndMarketing[n]}% <br>`,e+=`Founder Involvement In Operations: ${100*this.FoundersInformation.FounderInvolvementInOperations[n]}% <br>`,e+=`Founder Salary Before Funding: $${this.FoundersInformation.FounderSalaryBeforeFunding[n]} per month<br>`,e+=`Founder Years Of Experience: ${this.FoundersInformation.FounderYearsOfExperience[n]}<br>`,1==this.FoundersInformation.FounderReplicability[n]?e+="Founder Replicability: Very Easy<br>":2==this.FoundersInformation.FounderReplicability[n]?e+="Founder Replicability: Easy<br>":3==this.FoundersInformation.FounderReplicability[n]?e+="Founder Replicability: Fair<br>":4==this.FoundersInformation.FounderReplicability[n]?e+="Founder Replicability: Hard<br>":5==this.FoundersInformation.FounderReplicability[n]?e+="Founder Replicability: Very Hard<br>":e+=`Founder Replicability: ${this.FoundersInformation.FounderReplicability[n]}<br>`,this.FoundersInformation.FounderIsCEO[n]?e+="Founder Is CEO: Yes<br>":e+="Founder Is CEO: No<br>",this.FoundersInformation.FounderIsIdeaExecution[n]?e+="Founder's Idea for Execution: Yes<br>":e+="Founder's Idea for Execution: No<br>",e+=`Founder Initial Capital Contribution: $${this.FoundersInformation.FounderInitialCapitalContribution[n]}<br><br>`,e+="----------------------------------------<br><br>";return e},chartData(){let e={labels:[...this.store.founderDetails.map((e=>e.name))],datasets:[{label:"% of Equity",backgroundColor:[...this.colors],data:[...this.store.equitySplit.map((e=>100*e))],borderWidth:1}]};return e}}};const Pe=(0,v.Z)(qe,[["render",Ve],["__scopeId","data-v-5bc0eb8f"]]);var Ae=Pe;const Ke=(0,a._)("nav",{class:"navbar bg-body-tertiary m-auto"},[(0,a._)("div",{class:"container"},[(0,a._)("span",{class:"navbar-brand mb-0 h1"},"Expanded Results")])],-1),$e={class:"container"};function je(e,n,o,t,r,l){return(0,a.wg)(),(0,a.iD)(a.HY,null,[Ke,(0,a._)("div",$e,(0,i.zw)(r.equitySplit),1)],64)}var Te={name:"FinalResults",setup(){const e=I();return{store:e}},data(){return{FoundersInformation:this.store.founderInformation,founderDetail:this.store.founderDetails,equitySplit:this.store.equitySplit}}};const ze=(0,v.Z)(Te,[["render",je]]);var Le=ze;const Ne={name:"App",components:{FounderDetails:b,StartupDetails:Ae,FinalResults:Le},data(){return{activeCompoment:b,founderDetails:[]}},methods:{toCalculate(e){this.activeCompoment=Ae,e.forEach((e=>{this.founderDetails.push(e)}))},toFinalResults(e){this.activeCompoment=Le,this.founderInformation=e}}};var We=Object.assign(Ne,{setup(e){I();return(e,n)=>((0,a.wg)(),(0,a.j4)((0,a.LL)(e.activeCompoment),{onToCalculate:e.toCalculate,onToFinalResults:e.toFinalResults,founderDetails:e.founderDetails,founderInformation:e.founderInformation},null,40,["onToCalculate","onToFinalResults","founderDetails","founderInformation"]))}});const Ze=We;var Ge=Ze;const Je=(0,r.WB)(),Qe=(0,t.ri)(Ge);Qe.use(Je),Qe.mount("#app")}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,a){if(!t){var i=1/0;for(d=0;d<e.length;d++){t=e[d][0],r=e[d][1],a=e[d][2];for(var l=!0,s=0;s<t.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](t[s])}))?t.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[t,r,a]}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,a,i=t[0],l=t[1],s=t[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(s)var d=s(o)}for(n&&n(t);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},t=self["webpackChunkequity_calculator"]=self["webpackChunkequity_calculator"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(5684)}));t=o.O(t)})();
//# sourceMappingURL=app.41885447.js.map