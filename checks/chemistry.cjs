const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const stub=()=>({hidden:false,innerHTML:'',textContent:'',querySelectorAll:()=>[],classList:{},showModal(){},close(){}}),els={};
const ctx={window:{},CQStore:{read:()=>({}),write(){}},document:{getElementById:id=>els[id]??=(stub())},localStorage:{getItem:()=>null,setItem(){}},console};vm.createContext(ctx);vm.runInContext(fs.readFileSync('./naming-city.js','utf8'),ctx);
vm.runInContext(`
function verify(condition,msg){if(!condition)throw Error(msg)};
function diameter(m){let best=0;function walk(n,path){best=Math.max(best,path.length);m.edges.filter(e=>e.includes(n)).forEach(e=>{let next=e[0]===n?e[1]:e[0];if(!path.includes(next))walk(next,[...path,next])})}m.nodes.forEach((_,i)=>walk(i,[i]));return best}
for(const [name,m] of Object.entries(molecules)){
 const degree=m.nodes.map((_,i)=>m.edges.filter(e=>e.includes(i)).length);verify(degree.every(x=>x>0&&x<=4),name+' violates carbon valence');
 verify(m.edges.every(([a,b])=>a!==b&&m.nodes[a]&&m.nodes[b]),name+' invalid bond');
 verify(new Set(m.edges.map(e=>[...e].sort().join(','))).size===m.edges.length,name+' duplicate bond');
 verify(m.parent.every((x,i)=>!i||adjacent(m,m.parent[i-1],x)),name+' disconnected parent');
}
const counts={ethane:[2,6],butane:[4,10],heptane:[7,16],nonane:[9,20],decane:[10,22],methylbutane:[5,12],methylpentane:[6,14],dimethyl22:[6,14],dimethyl23:[6,14],methylcyclopentane:[6,12]};
for(const [name,[c,h]]of Object.entries(counts)){let m=molecules[name];verify(m.nodes.length===c&&4*c-2*m.edges.length===h,name+' atom count')}
for(const t of all){if(t.type==='trace')verify(diameter(molecules[t.mol])===t.length,t.id+' wrong longest route');if(t.type==='build'){let m=chain(t.parent,t.branches.map(x=>[x,1]));verify(diameter(m)===t.parent,t.id+' parent not longest');verify(m.nodes.length<=6,t.id+' unexpected C6 extension')}if(t.answer&&typeof t.answer==='string')verify(t.answer===t.answer.trim().toLowerCase(),t.id+' invalid answer')}
verify(all.length===20,'wrong task total');verify(prefixes.length===10,'C1-C10 prefixes missing');
// Independent decomposition checks for the named branched structures.
const named={methylbutane:{p:4,b:[2]},methylpentane:{p:5,b:[3]},dimethyl22:{p:4,b:[2,2]},dimethyl23:{p:4,b:[2,3]}};
for(const [key,v]of Object.entries(named)){const m=molecules[key];let locants=m.edges.flatMap(([a,b])=>m.parent.includes(a)&&!m.parent.includes(b)?[m.parent.indexOf(a)+1]:m.parent.includes(b)&&!m.parent.includes(a)?[m.parent.indexOf(b)+1]:[]);verify(JSON.stringify(locants.sort())===JSON.stringify(v.b),key+' branch positions');verify(diameter(m)===v.p,key+' longest parent')}
`,ctx);
console.log('PASS: 20 missions, carbon valence/atom counts, longest paths, branch locants, C1–C10 prefixes.');
