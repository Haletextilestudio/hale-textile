export default function Home() {
  return (
    <main style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'#FDFBF7',color:'#1B2A41',fontFamily:'Georgia, serif',textAlign:'center',padding:'2rem'}}>
      <div style={{fontSize:'2rem',color:'#E76F51',marginBottom:'1rem'}}>✕</div>
      <h1 style={{fontSize:'2.2rem',letterSpacing:'0.05em',marginBottom:'1.5rem'}}>Hale Textile Studio</h1>
      <p style={{maxWidth:'420px',lineHeight:'1.7',fontSize:'1.05rem'}}>
        After a beautiful run, Hale Textile Studio has closed its doors.
      </p>
      <p style={{maxWidth:'420px',lineHeight:'1.7',fontSize:'1.05rem',marginTop:'1rem'}}>
        Mahalo nui loa to the designers, workrooms, and vendor partners who made this studio what it was. For fabric orders, please reach out to your vendor representatives directly.
      </p>
      <p style={{marginTop:'2rem',fontSize:'0.9rem',color:'#5C6B73'}}>Aloha, Meeta</p>
    </main>
  );
}
