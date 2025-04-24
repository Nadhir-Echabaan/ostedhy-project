function o(a){const t=new Date(a),e=String(t.getUTCDate()).padStart(2,"0"),n=String(t.getUTCMonth()+1).padStart(2,"0"),r=t.getUTCFullYear();return`${e}/${n}/${r}`}export{o as f};
