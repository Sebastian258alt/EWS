// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/b1/unit1.js
// ═══════════════════════════════════════════════════════
// Unit ID: u6
// Part of UNITS_B1

const UNITS_B1_UNIT1 = [
  {
      id:'u6', cefr:'B1', title:'Phrasal Verbs', titlePt:'Verbos Frasais',
      desc:'Sound like a native speaker 🤯',
      descPt:'Soa como um falante nativo 🤯',
      color:'#bc8cff', icon:'💬', premium:true,
      lessons:[
        {id:'l19', title:'Common Phrasal Verbs', titlePt:'Verbos Frasais Comuns', icon:'💬', xp:30, learn:{
          explanation:{
            en:'Phrasal verbs combine a verb with a preposition or particle to create a new meaning, often totally different from the original verb. "Give up" (verb: give) means to quit! Native speakers use them constantly.',
            pt:'Os phrasal verbs combinam um verbo com uma preposição ou partícula para criar um novo significado, muitas vezes totalmente diferente do verbo original. "Give up" (verbo: give) significa desistir! Os falantes nativos usam-nos constantemente.'
          },
          examples:[
            {en:'Don\'t give up on your dreams.', pt:'Não desistas dos teus sonhos.'},
            {en:'I ran into an old friend yesterday.', pt:'Encontrei um velho amigo ontem, por acaso.'},
            {en:'Can you look after my dog?', pt:'Podes cuidar do meu cão?'},
          ],
          practice:[
            {q:'"Give up" means:', opts:['to donate','to quit','to grow','to wake up'], ans:1, exp:'Give up = quit/stop trying.'},
            {q:'"Look after" means:', opts:['to search for','to take care of','to admire','to ignore'], ans:1, exp:'Look after = take care of.'},
          ],
        }, qs:[
          {q:'"Give up" means:',opts:['to donate','to stop trying','to increase effort','to hand over'],ans:1,exp:'"Give up" = quit/desistir. "Don\'t give up!" 💪'},
          {q:'"She ran ___ her ex at the mall."',opts:['over','into','away','out'],ans:1,exp:'"Run into" = to meet unexpectedly. Awkward! 😬'},
          {q:'"Turn ___ the TV — I\'m sleeping!"',opts:['on','up','off','down'],ans:2,exp:'"Turn off" = stop a device.'},
          {q:'"He needs to ___ up with a good idea."',opts:['come','give','bring','look'],ans:0,exp:'"Come up with" = to think of/invent.'},
          {q:'"Can you ___ after my dog this weekend?"',opts:['look','watch','take','see'],ans:0,exp:'"Look after" = to take care of.'},
        ]},
      ]
    }
];
