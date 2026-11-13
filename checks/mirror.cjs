const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync('./mirror-caverns.js','utf8');
const cut=src.slice(0,src.indexOf('const key='));
const funcs=src.slice(src.indexOf('function formula('),src.indexOf('function feedback('));
const context={};vm.createContext(context);vm.runInContext(cut+funcs+';this.test={graphs,areas,tasks,isConnected,isomorphic,formula}',context);
const {graphs,areas,tasks,isConnected,isomorphic,formula}=context.test;
assert.equal(tasks.length,16);for(const [name,g] of Object.entries(graphs)){assert(isConnected(g.n,g.e),name);let degree=Array(g.n).fill(0);for(const [a,b] of g.e){assert(a>=0&&a<g.n&&b>=0&&b<g.n&&a!==b);degree[a]++;degree[b]++}assert(degree.every(d=>d<=4),name);assert(isomorphic(g.n,g.e,g.e),name);const e=g.e.map(([a,b])=>[g.n-1-a,g.n-1-b]);assert(isomorphic(g.n,g.e,e),name+' reversal');}
for(const [a,b] of [['butane','isobutane'],['pentane','methylbutane'],['methylbutane','dimethylpropane'],['methylpentane2','methylpentane3'],['dimethylbutane22','dimethylbutane23'],['cyclobutane','methylcyclopropane'],['cyclohexane','methylcyclopentane']])assert(!isomorphic(graphs[a].n,graphs[a].e,graphs[b].e),a+' != '+b);
for(const t of tasks){if(t.type==='build')assert(graphs[t.target]);if(t.type==='choose')assert(t.options.includes(t.answer));}
assert.equal(formula(4,graphs.butane.e),'C<sub>4</sub>H<sub>10</sub>');assert.equal(formula(4,graphs.cyclobutane.e),'C<sub>4</sub>H<sub>8</sub>');assert.equal(formula(5,graphs.methylcyclobutane.e),'C<sub>5</sub>H<sub>10</sub>');assert.equal(formula(6,graphs.cyclohexane.e),'C<sub>6</sub>H<sub>12</sub>');assert.equal(formula(6,graphs.methylcyclopentane.e),'C<sub>6</sub>H<sub>12</sub>');console.log('PASS: 16 missions, valence, connectivity, formulae, isomer distinction and graph reversal');
