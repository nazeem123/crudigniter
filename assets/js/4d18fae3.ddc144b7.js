"use strict";(self.webpackChunkcrudigniter=self.webpackChunkcrudigniter||[]).push([[30],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(m,".").concat(c)]||s[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4846:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:2},m=void 0,p={unversionedId:"methods/read",id:"methods/read",isDocsHomePage:!1,title:"read",description:"It will return all records in json format and fast. method will use GET.",source:"@site/docs/methods/read.md",sourceDirName:"methods",slug:"/methods/read",permalink:"/crudigniter/docs/methods/read",editUrl:"https://github.com/rohit-chouhan/crudigniter/docs/methods/read.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"create",permalink:"/crudigniter/docs/methods/create"},next:{title:"update",permalink:"/crudigniter/docs/methods/update"}},u=[{value:"Read Paramters and Usage",id:"read-paramters-and-usage",children:[]},{value:"Read Parameter examples",id:"read-parameter-examples",children:[]}],d={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"It will return all records in json format and fast. method will use ",(0,l.kt)("inlineCode",{parentName:"p"},"GET"),"."),(0,l.kt)("h3",{id:"read-paramters-and-usage"},"Read Paramters and Usage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blank"),(0,l.kt)("td",{parentName:"tr",align:null},"if you not passing any parameter it will retrive all data from table"),(0,l.kt)("td",{parentName:"tr",align:null},"---")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"column"),(0,l.kt)("td",{parentName:"tr",align:null},"It will work like where clause, it will retrive all data where column = value, its can take multiple value also."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name=Rohit")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"name=Rohit&city=Ajmer"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"only"),(0,l.kt)("td",{parentName:"tr",align:null},"If you want to retrive data for perticular column so here user can use ",(0,l.kt)("inlineCode",{parentName:"td"},"only")," parameter and can give column by comma, so it will return only perticular column records"),(0,l.kt)("td",{parentName:"tr",align:null},"only=name,city")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"not"),(0,l.kt)("td",{parentName:"tr",align:null},"If you want to ignore some columns from record so user can pass column in not parameter"),(0,l.kt)("td",{parentName:"tr",align:null},"not=phone_number,password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"Sometime maybe you will expect own records, so this is special parameter here you can direcly give SQL Query"),(0,l.kt)("td",{parentName:"tr",align:null},"query=select * from users")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"single"),(0,l.kt)("td",{parentName:"tr",align:null},"If you want to get only one single data so you can use single parameter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"single=true")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"id=1&single=true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},"If you want know column name, datatype of table"),(0,l.kt)("td",{parentName:"tr",align:null},"columns=true")))),(0,l.kt)("p",null,"Here the parameter for joins ","[NEW]"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"leftjoin"),(0,l.kt)("td",{parentName:"tr",align:null},"to apply left joins"),(0,l.kt)("td",{parentName:"tr",align:null},"leftjoin=foreign_table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rightjoin"),(0,l.kt)("td",{parentName:"tr",align:null},"to apply right joins"),(0,l.kt)("td",{parentName:"tr",align:null},"rightjoin=foreign_table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"innerjoin"),(0,l.kt)("td",{parentName:"tr",align:null},"to apply inner joins"),(0,l.kt)("td",{parentName:"tr",align:null},"innerjoin=foreign_table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"leftouterjoin"),(0,l.kt)("td",{parentName:"tr",align:null},"to apply left outer joins"),(0,l.kt)("td",{parentName:"tr",align:null},"leftouterjoin=foreign_table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rightouterjoin"),(0,l.kt)("td",{parentName:"tr",align:null},"to apply right outer joins"),(0,l.kt)("td",{parentName:"tr",align:null},"rightouterjoin=foreign_table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fullouterjoin"),(0,l.kt)("td",{parentName:"tr",align:null},"to apply full outer joins"),(0,l.kt)("td",{parentName:"tr",align:null},"fullouterjoin=foreign_table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"on")," is must with joins parameter, its use connect columns for both table"),(0,l.kt)("td",{parentName:"tr",align:null},"on=self_column,foreign_column")))),(0,l.kt)("p",null,"Join Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET | api.example.com/users?innerjoin=address&on=id,user_id\n")),(0,l.kt)("p",{align:"left"},(0,l.kt)("img",{width:"750",src:"https://github.com/rohit-chouhan/crudigniter/blob/main/joins-working.jpg?raw=true"})),(0,l.kt)("h3",{id:"read-parameter-examples"},"Read Parameter examples"),(0,l.kt)("p",null,"Example Table and Records, table name is ",(0,l.kt)("inlineCode",{parentName:"p"},"users")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"email"),(0,l.kt)("th",{parentName:"tr",align:null},"password"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Rohit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:rohit@gmail.com"},"rohit@gmail.com")),(0,l.kt)("td",{parentName:"tr",align:null},"Rohit321")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Rahul"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:rahul@gmail.com"},"rahul@gmail.com")),(0,l.kt)("td",{parentName:"tr",align:null},"123Rahul")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Komal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:komal@gmail.com"},"komal@gmail.com")),(0,l.kt)("td",{parentName:"tr",align:null},"Xyz123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Neha"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:komal@gmail.com"},"komal@gmail.com")),(0,l.kt)("td",{parentName:"tr",align:null},"iloveyou")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Pooja"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:pooja@gmail.com"},"pooja@gmail.com")),(0,l.kt)("td",{parentName:"tr",align:null},"iampooja")))),(0,l.kt)("h4",{id:"blank"},"Blank"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET | api.example.com/users\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "1",\n    "name": "Rohit",\n    "email": "rohit@gmail.com",\n    "password": "Rohit321"\n  },\n  {\n    "id": "2",\n    "name": "Rahul",\n    "email": "rahul@gmail.com",\n    "password": "123Rahul"\n  },\n  {\n    "id": "3",\n    "name": "Komal",\n    "email": "komal@gmail.com",\n    "password": "Xyz123"\n  },\n  {\n    "id": "4",\n    "name": "Neha",\n    "email": "neha@gmail.com",\n    "password": "iloveyou"\n  },\n  {\n    "id": "5",\n    "name": "Pooja",\n    "email": "pooja@gmail.com",\n    "password": "iampooja"\n  }\n]\n')),(0,l.kt)("h4",{id:"column"},"Column"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET | api.example.com/users?name=Rohit\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET | api.example.com/users?name=Rohit&id=1\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "1",\n    "name": "Rohit",\n    "email": "rohit@gmail.com",\n    "password": "Rohit321"\n  }\n]\n')),(0,l.kt)("h4",{id:"only"},"Only"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET | api.example.com/users?only=id,name\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "1",\n    "name": "Rohit"\n  },\n  {\n    "id": "2",\n    "name": "Rahul"\n  },\n  {\n    "id": "3",\n    "name": "Komal"\n  },\n  {\n    "id": "4",\n    "name": "Neha"\n  },\n  {\n    "id": "5",\n    "name": "Pooja"\n  }\n]\n')),(0,l.kt)("h4",{id:"not"},"Not"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET | api.example.com/users?not=email,password\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "1",\n    "name": "Rohit"\n  },\n  {\n    "id": "2",\n    "name": "Rahul"\n  },\n  {\n    "id": "3",\n    "name": "Komal"\n  },\n  {\n    "id": "4",\n    "name": "Neha"\n  },\n  {\n    "id": "5",\n    "name": "Pooja"\n  }\n]\n')),(0,l.kt)("h4",{id:"query"},"query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET | api.example.com/users?query=select * from users where id!=1\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "2",\n    "name": "Rahul",\n    "email": "rahul@gmail.com",\n    "password": "123Rahul"\n  },\n  {\n    "id": "3",\n    "name": "Komal",\n    "email": "komal@gmail.com",\n    "password": "Xyz123"\n  },\n  {\n    "id": "4",\n    "name": "Neha",\n    "email": "neha@gmail.com",\n    "password": "iloveyou"\n  },\n  {\n    "id": "5",\n    "name": "Pooja",\n    "email": "pooja@gmail.com",\n    "password": "iampooja"\n  }\n]\n')),(0,l.kt)("h4",{id:"single"},"Single"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET | api.example.com/users?name=Rohit&single=true\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1",\n  "name": "Rohit",\n  "email": "rohit@gmail.com",\n  "password": "Rohit321"\n}\n')),(0,l.kt)("h4",{id:"columns"},"Columns"),(0,l.kt)("p",null,"If you want to know what columns are in table and what data type here we use ",(0,l.kt)("inlineCode",{parentName:"p"},"columns")," parameter."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET | api.example.com/users?columns=true\n")),(0,l.kt)("p",null,"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "id",\n    "datatype": "int",\n    "columntype": "int(11)",\n    "length": null\n  },\n  {\n    "name": "name",\n    "datatype": "varchar",\n    "columntype": "varchar(15)",\n    "length": "15"\n  },\n  {\n    "name": "email",\n    "datatype": "varchar",\n    "columntype": "varchar(35)",\n    "length": "35"\n  },\n  {\n    "name": "password",\n    "datatype": "varchar",\n    "columntype": "varchar(35)",\n    "length": "35"\n  }\n]\n')))}s.isMDXComponent=!0}}]);