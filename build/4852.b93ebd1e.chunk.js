"use strict";(self.webpackChunkminigolf_api=self.webpackChunkminigolf_api||[]).push([[4852],{94852:(Y,C,s)=>{s.d(C,{ProtectedEditPage:()=>J});var t=s(92132),B=s(21272),E=s(94061),M=s(83997),m=s(30893),h=s(85963),I=s(90151),A=s(68074),g=s(7537),R=s(5287),U=s(38413),T=s(55356),W=s(4198),c=s(21610),o=s(55506),K=s(46270),f=s(61535),p=s(54894),j=s(17703),H=s(71389),x=s(12083),e=s(24972),Q=s(46445),$=s(75163),ns=s(15126),is=s(63299),Es=s(67014),rs=s(59080),ds=s(79275),es=s(14718),ls=s(82437),Ms=s(5790),Ps=s(35223),Ds=s(5409),Os=s(74930),ms=s(2600),hs=s(48940),As=s(41286),gs=s(56336),Rs=s(13426),Ls=s(84624),vs=s(77965),Cs=s(54257),Bs=s(71210),Is=s(51187),Us=s(39404),Ts=s(58692),Ws=s(501),cs=s(57646),Ks=s(23120),fs=s(44414),js=s(25962),xs=s(14664),us=s(42588),ys=s(90325),ps=s(62785),Ss=s(87443),Ns=s(41032),Fs=s(22957),Vs=s(93179),zs=s(73055),Ys=s(15747),Hs=s(85306),Qs=s(26509),$s=s(32058),Gs=s(81185),Xs=s(82261),Zs=s(412),Js=s(94710);const G=({disabled:n,role:a,values:D,errors:_,onChange:r,onBlur:L})=>{const{formatMessage:i}=(0,p.A)();return(0,t.jsx)(E.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(M.s,{justifyContent:"space-between",children:[(0,t.jsxs)(E.a,{children:[(0,t.jsx)(E.a,{children:(0,t.jsx)(m.o,{fontWeight:"bold",children:a?a.name:i({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(E.a,{children:(0,t.jsx)(m.o,{textColor:"neutral500",variant:"pi",children:a?a.description:i({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.$,{disabled:!0,variant:"secondary",children:i({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount})})]}),(0,t.jsxs)(I.x,{gap:4,children:[(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(g.k,{disabled:n,name:"name",error:_.name&&i({id:_.name}),label:i({id:"global.name",defaultMessage:"Name"}),onChange:r,onBlur:L,required:!0,value:D.name||""})}),(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(R.T,{disabled:n,label:i({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&i({id:_.name}),onChange:r,onBlur:L,children:D.description||""})})]})]})})},X=x.Ik().shape({name:x.Yj().required(o.iW.required),description:x.Yj().optional()}),Z=()=>{const n=(0,o.hN)(),{formatMessage:a}=(0,p.A)(),_=(0,j.W5)("/settings/roles/:id")?.params.id,r=B.useRef(null),{lockApp:L,unlockApp:i}=(0,o.MA)(),{trackUsage:b}=(0,o.z1)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:N}=(0,o.wq)(),{isLoading:k,data:F}=(0,e.A)({role:_??""}),{roles:w,isLoading:V,refetch:q}=(0,Q.u)({id:_},{refetchOnMountOrArgChange:!0}),P=w[0]??{},{data:ss,isLoading:ts}=(0,e.B)({id:_},{skip:!_,refetchOnMountOrArgChange:!0}),[_s]=(0,e.G)(),[as]=(0,e.E)();if(!_)return(0,t.jsx)(j.rd,{to:"/settings/roles"});const os=async(u,v)=>{try{L();const{permissionsToSend:O,didUpdateConditions:y}=r.current?.getPermissions()??{},d=await _s({id:_,...u});if("error"in d){(0,e.x)(d.error)&&d.error.name==="ValidationError"?v.setErrors(N(d.error)):n({type:"warning",message:S(d.error)});return}if(P.code!=="strapi-super-admin"&&O){const l=await as({id:d.data.id,permissions:O});if("error"in l){(0,e.x)(l.error)&&l.error.name==="ValidationError"?v.setErrors(N(l.error)):n({type:"warning",message:S(l.error)});return}y&&b("didUpdateConditions")}r.current?.setFormAfterSubmit(),await q(),n({type:"success",message:{id:"notification.success.saved"}})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{i()}},z=!V&&P.code==="strapi-super-admin";return(0,t.jsxs)(U.g,{children:[(0,t.jsx)(o.x7,{name:"Roles"}),(0,t.jsx)(f.l1,{enableReinitialize:!0,initialValues:{name:P.name??"",description:P.description??""},onSubmit:os,validationSchema:X,validateOnChange:!1,children:({handleSubmit:u,values:v,errors:O,handleChange:y,handleBlur:d,isSubmitting:l})=>(0,t.jsxs)("form",{onSubmit:u,children:[(0,t.jsx)(T.Q,{primaryAction:(0,t.jsx)(M.s,{gap:2,children:(0,t.jsx)(h.$,{type:"submit",disabled:P.code==="strapi-super-admin",loading:l,size:"L",children:a({id:"global.save",defaultMessage:"Save"})})}),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(c.N,{as:H.k2,startIcon:(0,t.jsx)(K.A,{}),to:"/settings/roles",children:a({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(W.s,{children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(G,{disabled:z,errors:O,values:v,onChange:y,onBlur:d,role:P}),!k&&!V&&!ts&&F?(0,t.jsx)(E.a,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)($.P,{isFormDisabled:z,permissions:ss,ref:r,layout:F})}):(0,t.jsx)(E.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.Bl,{})})]})})]})})]})},J=()=>{const n=(0,e.j)(r=>r.admin_app.permissions.settings?.roles),{isLoading:a,allowedActions:{canRead:D,canUpdate:_}}=(0,o.ec)(n);return a?(0,t.jsx)(o.Bl,{}):!D&&!_?(0,t.jsx)(j.rd,{to:"/"}):(0,t.jsx)(Z,{})}},46445:(Y,C,s)=>{s.d(C,{u:()=>m});var t=s(21272),B=s(55506),E=s(54894),M=s(24972);const m=(h={},I)=>{const{locale:A}=(0,E.A)(),g=(0,B.QM)(A,{sensitivity:"base"}),{data:R,error:U,isError:T,isLoading:W,refetch:c}=(0,M.z)(h,I);return{roles:t.useMemo(()=>[...R??[]].sort((K,f)=>g.compare(K.name,f.name)),[R,g]),error:U,isError:T,isLoading:W,refetch:c}}}}]);