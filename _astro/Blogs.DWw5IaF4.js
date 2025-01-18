import{r as u,R as h}from"./index.D15Q2Owl.js";var c={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function p(){if(x)return n;x=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(t,r,a){var d=null;if(a!==void 0&&(d=""+a),r.key!==void 0&&(d=""+r.key),"key"in r){a={};for(var o in r)o!=="key"&&(a[o]=r[o])}else a=r;return r=a.ref,{$$typeof:l,type:t,key:d,ref:r!==void 0?r:null,props:a}}return n.Fragment=i,n.jsx=s,n.jsxs=s,n}var m;function j(){return m||(m=1,c.exports=p()),c.exports}var e=j();const R=()=>{const[l,i]=u.useState([]);return u.useEffect(()=>{(async()=>{const t=await(await fetch("https://dev.to/api/articles?username=merichard123")).json();console.log(t),i(t)})()},[]),e.jsxs(h.Fragment,{children:[!l?.length&&e.jsx("h2",{className:"post-loader",children:"Loading Posts...."}),e.jsx("ol",{className:"blog-list",children:l?.map(s=>e.jsx("li",{className:"blog-item",children:e.jsx("a",{href:s.url,target:"_blank",className:"blog-link",rel:"noreferrer noopener",children:e.jsxs("div",{className:"blog",children:[e.jsx("h2",{className:"blog__title",children:s.title}),e.jsxs("div",{className:"bottom",children:[e.jsx("p",{className:"blog__date",children:s.readable_publish_date}),e.jsx("span",{className:"divider",children:"|"}),e.jsx("div",{className:"ui-tag__wrapper tags",children:s.tag_list.slice(0,2).map(t=>e.jsx("div",{className:"ui-tag",children:e.jsxs("span",{className:"tag-title",children:[t,","]})},t))})]})]})})},s.id))})]})};export{R as default};
