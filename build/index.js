(()=>{"use strict";const t=window.wp.element,e=window.wp.components;wp.blocks.registerBlockType("ourplugin/la-saphire-our-values",{title:"La Saphire Our Values",icon:"smiley",category:"common",attributes:{skyColor:{type:"string"},grassColor:{type:"string"},titles:{type:"array",default:["All natural skin care","Manufacture of small batches","Beauty with intent","Reliability"]},contents:{type:"array",default:[""]}},edit:function(n){return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e.Flex,{className:"lsov-edit-block"},n.attributes.titles.map((function(a,l){return(0,t.createElement)(e.FlexItem,{className:"lsov-col"},(0,t.createElement)(e.TextControl,{label:"title",value:a,onChange:t=>{const e=n.attributes.titles.concat([]);e[l]=t,n.setAttributes({titles:e})}}),(0,t.createElement)(e.TextareaControl,{label:"content",value:n.attributes.contents[l],onChange:t=>{const e=n.attributes.contents.concat([]);e[l]=t,n.setAttributes({contents:e})}}))}))))},save:function(t){return null}})})();