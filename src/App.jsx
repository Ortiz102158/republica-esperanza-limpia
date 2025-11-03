import React from 'react';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      {/* Menú */}
      <nav style={{ backgroundColor: '#333', padding: '12px 0', textAlign: 'center' }}>
        {['Inicio', 'Sobre Nosotros', 'Principios', 'Valores', 'Teología', 'Internacional', 'Diáspora', 'Derechos Humanos', 'Colaboraciones', 'Contacto'].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            style={{
              color: 'white',
              textDecoration: 'none',
              margin: '0 10px',
              fontSize: '14px'
            }}
            onMouseOver={e => e.target.style.textDecoration = 'underline'}
            onMouseOut={e => e.target.style.textDecoration = 'none'}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Header con logo mejorado (SVG) */}
      <header id="inicio" style={{ backgroundColor: '#8B0000', color: 'gold', textAlign: 'center', padding: '30px 16px' }}>
        <div style={{ marginBottom: '16px' }}>
          {/* Estrella dorada como SVG */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="gold"
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: '0 auto 12px', display: 'block' }}
          >
            <polygon points="12,2 14.7,8.2 21.4,8.8 16.2,13.2 18.3,19.6 12,16.5 5.7,19.6 7.8,13.2 2.6,8.8 9.3,8.2" />
          </svg>
          {/* Letras MSR debajo de la estrella */}
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'gold', letterSpacing: '2px' }}>
            MSR
          </div>
        </div>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '12px' }}>
          REPÚBLICA ESPERANZA LIMPIA
        </div>
        <div style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '16px', letterSpacing: '1px' }}>
          Movimiento por la Salvación de la República
        </div>
        <p style={{ marginTop: '12px', maxWidth: '700px', margin: '0 auto', padding: '0 16px', fontSize: '1.1rem' }}>
          El Movimiento por la Salvación de la República convoca a todas las fuerzas populares a organizarse, resistir y construir el futuro que merecemos.
        </p>
      </header>

      <main style={{ flex: 1, padding: '30px 16px' }}>

        {/* Sobre Nosotros */}
        <section id="sobre-nosotros" style={{ maxWidth: '800px', margin: '0 auto 40px', backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#8B0000', fontSize: '1.8rem', textAlign: 'center', marginBottom: '16px' }}>
            Sobre Nosotros
          </h2>
          <p style={{ lineHeight: '1.6', color: '#333', marginBottom: '20px' }}>
            Somos una organización popular comprometida con la defensa de la soberanía nacional, los derechos del pueblo y la construcción de una República limpia, justa y profundamente democrática.
          </p>

          <h3 style={{ color: '#8B0000', fontSize: '1.4rem', marginBottom: '12px' }}>
            Consejo Directivo del MSR
          </h3>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#333', marginBottom: '20px' }}>
            <li><strong>Alejandro Ortiz</strong> — Coordinador General y Portavoz Nacional</li>
            <li><strong>Dolores Ricart</strong> — Secretaria de Organización y Movilización Popular</li>
            <li><strong>Nelson Díaz</strong> — Responsable de Relaciones Internacionales y Solidaridad Antiimperialista</li>
          </ul>

          <div style={{ textAlign: 'center' }}>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=TU_ID_DE_BOTON"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#003087',
                color: 'white',
                fontWeight: 'bold',
                padding: '12px 24px',
                borderRadius: '6px',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '1rem'
              }}
            >
              Donar a República Esperanza Limpia
            </a>
          </div>
        </section>

        {/* Principios */}
        <section id="principios" style={{ maxWidth: '800px', margin: '0 auto 40px', backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#8B0000', fontSize: '1.8rem', textAlign: 'center', marginBottom: '16px' }}>
            Declaración de Principios
          </h2>
          <p style={{ lineHeight: '1.6', color: '#333', marginBottom: '12px' }}>
            El <strong>Movimiento por la Salvación de la República (MSR)</strong> se funda en los siguientes principios irrenunciables:
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#333', marginBottom: '12px' }}>
            <li><strong>Soberanía Popular:</strong> El poder emana del pueblo y debe ejercerse sin mediaciones neocoloniales ni tutelas oligárquicas.</li>
            <li><strong>Antiimperialismo:</strong> Rechazamos toda forma de dominación extranjera, ya sea económica, política, militar o cultural.</li>
            <li><strong>Justicia Social:</strong> Luchamos por la redistribución radical de la riqueza, el acceso universal a la salud, la educación, la vivienda y el trabajo digno.</li>
            <li><strong>Defensa de la Madre Tierra:</strong> Nos oponemos al extractivismo depredador y promovemos un modelo de desarrollo ecológico, sostenible y en armonía con la naturaleza.</li>
            <li><strong>Unidad Latinoamericana:</strong> Creemos en la integración de nuestros pueblos como única vía para la independencia real del continente.</li>
            <li><strong>Teología de Liberación:</strong> Afirmamos que la fe sin justicia es una farsa, y que la lucha por los pobres es el corazón del Evangelio.</li>
            <li><strong>Democracia Revolucionaria:</strong> No reconocemos como legítimo ningún régimen que no garantice la participación directa del pueblo en la toma de decisiones que afectan su vida.</li>
          </ul>
          <p style={{ lineHeight: '1.6', color: '#333', fontStyle: 'italic' }}>
            Estos principios guían nuestra acción política, cultural y organizativa en la construcción de una República limpia, soberana y profundamente democrática.
          </p>
        </section>

        {/* Valores */}
        <section id="valores" style={{ maxWidth: '800px', margin: '0 auto 40px', backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#8B0000', fontSize: '1.8rem', textAlign: 'center', marginBottom: '16px' }}>
            Valores
          </h2>
          <p style={{ lineHeight: '1.6', color: '#333' }}>
            Solidaridad, honestidad, coraje, humildad y compromiso con los oprimidos.
          </p>
        </section>

        {/* Teología */}
        <section id="teologia" style={{ maxWidth: '800px', margin: '0 auto 40px', backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', borderLeft: '4px solid #006400' }}>
          <h2 style={{ color: '#8B0000', fontSize: '1.8rem', textAlign: 'center', marginBottom: '16px' }}>
            Teología de Liberación
          </h2>
          <p style={{ lineHeight: '1.6', color: '#333' }}>
            La Teología de Liberación es un grito profético nacido en América Latina, que une el Evangelio con la lucha de los pobres por su liberación integral.
          </p>
          <p style={{ lineHeight: '1.6', color: '#333', marginTop: '12px' }}>
            Figuras como <strong>Camilo Torres Restrepo</strong> afirmaron: <em>“La eficacia del cristianismo exige la revolución.”</em> Y <strong>Ernesto Cardenal</strong> vivió la fe como poesía en acción.
          </p>
          <p style={{ lineHeight: '1.6', color: '#333', marginTop: '12px', fontWeight: '500' }}>
            Para el <strong>Movimiento por la Salvación de la República</strong>, esta teología es brújula viva en la construcción de una República limpia y soberana.
          </p>
        </section>

        {/* Sección Internacional — ID CORREGIDO */}
        <section id="internacional" style={{ padding: '2rem', backgroundColor: '#f9fafb', color: '#111827', fontFamily: 'system-ui, sans-serif', lineHeight: '1.75', fontSize: '1.125rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem', textAlign: 'center', color: '#000' }}>
            ACTUALIDAD Y COYUNTURA
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La geopolítica mundial entre 2014 y 2025 ha sido testigo de una profunda transformación en el orden internacional...
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            La guerra genocida de Ucrania contra el Dombás y Donetsk, más el incumplimiento de los acuerdos de Minsk por parte de Ucrania y los garantes, provocó la Operación Militar Especial que condujo a la invasión rusa de Ucrania en febrero de 2022.
          </p>
        </section>

        {/* Sección Diáspora — ID SIN ACENTO */}
        <section id="diaspora" style={{ padding: '2rem', backgroundColor: '#f9fafb', color: '#111827', fontFamily: 'system-ui, sans-serif', lineHeight: '1.75', fontSize: '1.125rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem', textAlign: 'center', color: '#000' }}>
            Los Aportes de la Diáspora Dominicana al Desarrollo Nacional
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La Diáspora dominicana —más de 2.3 millones de compatriotas viviendo en el exterior...
          </p>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '0.5rem', color: '#000' }}>
            diaspora@republicalimpia.org
          </p>
        </section>

        {/* Derechos Humanos */}
        <section id="derechos-humanos" style={{ padding: '2rem', backgroundColor: '#f9fafb', color: '#111827', fontFamily: 'system-ui, sans-serif', lineHeight: '1.75', fontSize: '1.125rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem', textAlign: 'center', color: '#000' }}>
            Declaración Universal de los Derechos Humanos
          </h2>
          <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem', color: '#4b5563' }}>
            Adoptada por la Asamblea General de las Naciones Unidas el 10 de diciembre de 1948
          </p>
          <p>Todos los seres humanos nacen libres e iguales en dignidad y derechos...</p>
        </section>

        {/* Colaboraciones / Tabaco */}
        <div id="colaboraciones" style={{ padding: '2rem', backgroundColor: '#f9fafb', color: '#111827', fontFamily: 'system-ui, sans-serif', lineHeight: '1.75', fontSize: '1.125rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem', textAlign: 'center', color: '#000' }}>
            Colaboración
          </h2>
          <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center', color: '#000' }}>
            Tabaco y Cigarro son dominicanos
          </h3>
          <p style={{ fontStyle: 'italic', textAlign: 'center', marginBottom: '2rem', color: '#4b5563' }}>
            Por Ing. Francisco Matos Mancebo — Editor HLM / Humo Latino
          </p>
          <p>El tabaco fue, es y será un viajero preferente en el carrusel del tiempo...</p>
          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #ccc', textAlign: 'right', fontStyle: 'italic', color: '#4b5563' }}>
            Autor: Ing. Francisco Matos Mancebo — Editor HLM / Humo Latino
          </div>
        </div>

        {/* Contacto */}
        <section id="contacto" style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#8B0000', fontSize: '1.8rem', textAlign: 'center', marginBottom: '16px' }}>
            Contacto y Donaciones
          </h2>
          <p style={{ textAlign: 'center', color: '#333', marginBottom: '12px' }}>
            <strong>Correos:</strong>
          </p>
          <p style={{ textAlign: 'center', margin: '6px 0', color: '#333' }}>
            📧 <a href="mailto:ale102158@gmail.com" style={{ color: '#333', textDecoration: 'underline' }}>ale102158@gmail.com</a>
          </p>
          <p style={{ textAlign: 'center', margin: '6px 0', color: '#333' }}>
            📞 <strong>Alejandro Ortiz:</strong> +1 (849) 590-4555
          </p>
          <p style={{ textAlign: 'center', margin: '6px 0', color: '#333' }}>
            📞 <strong>Nelson Díaz:</strong> +1 (829) 640-2468
          </p>
          <p style={{ textAlign: 'center', margin: '6px 0', color: '#333' }}>
            📞 <strong>Dolores Ricart:</strong> +1 (829) 994-8829
          </p>
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=TU_ID_DE_BOTON"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#003087',
                color: 'white',
                fontWeight: 'bold',
                padding: '12px 24px',
                borderRadius: '6px',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '1rem'
              }}
            >
              Donar a República Esperanza Limpia
            </a>
          </div>
          <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.9rem', color: '#555' }}>
            Tu aporte fortalece la lucha por una República soberana, justa y profundamente democrática.
          </p>
        </section>

      </main>

      <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '16px' }}>
        <p>© 2025 República Esperanza Limpia — Movimiento por la Salvación de la República</p>
      </footer>
    </div>
  );
}

export default App;