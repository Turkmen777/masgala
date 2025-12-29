export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '40px',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
          ❤️ MASGALA
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
          Türkmenistanyň sosial ulgamy
        </p>
        
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          padding: '30px',
          borderRadius: '15px',
          marginBottom: '30px'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Hoş geldiňiz!</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            Täze adamlar bilen tanışyň, söhbetdeşlik ediň,<br/>
            dostluk ýola goýuň we ýüregiňizi tapyň!
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/register" style={{
            background: 'white',
            color: '#FF6B6B',
            padding: '15px 30px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            display: 'inline-block',
            minWidth: '200px'
          }}>
            📝 REGISTRASIÝA
          </a>
          
          <a href="/login" style={{
            background: 'transparent',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            border: '2px solid white',
            display: 'inline-block',
            minWidth: '200px'
          }}>
            🔑 HASABA GIR
          </a>
        </div>
        
        <div style={{ marginTop: '40px', fontSize: '0.9rem', opacity: 0.8 }}>
          <p>Ynamly • Yşyl • Türkmençe</p>
          <p>Masgala - Ýüregiňizi tapyň!</p>
        </div>
      </div>
    </div>
  );
}
