import React from 'react';


function Problem() {
  return (
<section id="problem" className="problem">
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
    <div style={{ width: '150px', height: '670px', backgroundColor: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', color: '#000' }}>
      Anuncio
    </div>
    <iframe 
      width="1180" 
      height="670" 
      src="https://www.youtube.com/embed/odGD7rMRqJQ?si=ILEH5kslUuOa2bRi" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
    </iframe>
    <div style={{ width: '150px', height: '670px', backgroundColor: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', color: '#000' }}>
      Anuncio
    </div>
  </div>
</section>


  );
}

export default Problem;
