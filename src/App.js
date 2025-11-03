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
      {/* Encabezado */}
      <header id="inicio" style={{ backgroundColor: '#8B0000', color: 'gold', textAlign: 'center', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '1.8rem', margin: 0, fontWeight: 'bold' }}>
          ¡ÚNETE A LA LUCHA POR UNA REPÚBLICA DEMOCRÁTICA, POPULAR Y REVOLUCIONARIA!
        </h1>
        <p style={{ marginTop: '12px', maxWidth: '700px', margin: '12px auto 0', padding: '0 16px' }}>
          El Movimiento por la Salvación de la República convoca a todas las fuerzas populares a organizarse, resistir y construir el futuro que merecemos.
        </p>
      </header>
      {/* Contenido */}
      <main style={{ flex: 1, padding: '30px 16px' }}>
        {/* Sobre Nosotros */}
        <section id="sobre-nosotros" style={{ maxWidth: '800px', margin: '0 auto 40px', backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#8B0000', fontSize: '1.8rem', textAlign: 'center', marginBottom: '16px' }}>Sobre Nosotros</h2>
          <p style={{ lineHeight: '1.6', color: '#333', marginBottom: '20px' }}>
            Somos una organización popular comprometida con la defensa de la soberanía nacional, los derechos del pueblo y la construcción de una República limpia, justa y profundamente democrática.
          </p>
          <h3 style={{ color: '#8B0000', fontSize: '1.4rem', marginBottom: '12px' }}>Consejo Directivo</h3>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6', color: '#333', marginBottom: '20px' }}>
            <li>Alejandro Ortiz</li>
            <li>Dolores Ricart</li>
            <li>Nelson Díaz</li>
          </ul>
          <div style={{ textAlign: 'center' }}>
            <a
              href="TU_ENLACE_DE_PAYPAL"
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
          <h2 style={{ color: '#8B0000', fontSize: '1.8rem', textAlign: 'center', marginBottom: '16px' }}>Valores</h2>
          <p style={{ lineHeight: '1.6', color: '#333' }}>
            Solidaridad, honestidad, coraje, humildad y compromiso con los oprimidos.
          </p>
        </section>

        {/* Teología de Liberación */}
        <section id="teología" style={{ maxWidth: '800px', margin: '0 auto 40px', backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', borderLeft: '4px solid #006400' }}>
          <h2 style={{ color: '#8B0000', fontSize: '1.8rem', textAlign: 'center', marginBottom: '16px' }}>Teología de Liberación</h2>
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

        {/* Sección Internacional */}
        <div style={{ padding: '2rem', backgroundColor: '#f9fafb', color: '#111827', fontFamily: 'system-ui, sans-serif', lineHeight: '1.75', fontSize: '1.125rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem', textAlign: 'center', color: '#000' }}>
            ACTUALIDAD Y COYUNTURA
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La geopolítica mundial entre 2014 y 2025 ha sido testigo de una profunda transformación en el orden internacional, marcada por la transición de un sistema unipolar liderado por Estados Unidos hacia un mundo multipolar caracterizado por tensiones crecientes entre grandes potencias, la reconfiguración de alianzas y la emergencia de nuevos actores globales. Este período ha estado dominado por conflictos regionales, rivalidades estratégicas, crisis económicas y sociales, y desafíos globales como el cambio climático y la pandemia de COVID-19. A continuación, se analizan los principales eventos y tendencias que han definido esta década crítica.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            El inicio del declive unipolar (2014–2016)
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            El año 2014 marcó un punto de inflexión en la geopolítica global con la anexión de Crimea por parte de Rusia, como respuesta al golpe de Estado en Ucrania, patrocinado por la OTAN y EEUU, un evento que resucitó tensiones reminiscentes de la Guerra Fría. La respuesta occidental, liderada por Estados Unidos y la Unión Europea, incluyó sanciones económicas y el fortalecimiento de la OTAN en Europa del Este, lo que profundizó la división entre Occidente y Rusia.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Simultáneamente, el ascenso del Estado Islámico (ISIS) en Siria e Irak planteó un desafío al orden internacional liderado por Estados Unidos a intervenir militarmente, mientras que Rusia aprovechó la oportunidad para consolidar su influencia en Siria apoyando al régimen de Bashar al-Assad. Estos eventos subrayaron la complejidad de los conflictos contemporáneos, donde intereses nacionales, ideologías y dinámicas regionales se entrelazaban.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            En paralelo, el Brexit en 2016 representó un golpe significativo para la Unión Europea, exponiendo divisiones internas y debilitando su capacidad de proyectar poder político y económico. Mientras tanto, la elección de Donald Trump como presidente de Estados Unidos introdujo un enfoque más nacionalista y unilateral en la política exterior estadounidense, cuestionando el compromiso de Washington con alianzas tradicionales y acuerdos multilaterales como el Acuerdo de París sobre el clima.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            El surgimiento de un mundo multipolar (2017–2020)
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            La segunda mitad de la década estuvo marcada por el fortalecimiento de China como una superpotencia global. Bajo el liderazgo de Xi Jinping, China lanzó iniciativas ambiciosas como la Franja y la Ruta (BRI), que buscaba expandir su influencia económica y política en Asia, África y Europa. Al mismo tiempo, Pekín intensificó sus reclamos territoriales en el Mar de China Meridional, generando tensiones con países vecinos y Estados Unidos. La guerra comercial entre China y Estados Unidos, iniciada bajo la administración Trump, simbolizó la creciente rivalidad entre ambas potencias, que abarcaba no solo el ámbito económico, sino también tecnológico y militar.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            La pandemia de COVID-19, declarada en 2020, exacerbó las tensiones globales. La gestión de la crisis por parte de Pekín fue vista como un ejemplo de eficiencia autoritaria, mientras que las democracias occidentales enfrentaron críticas por su respuesta fragmentada y descoordinada. La pandemia también aceleró la digitalización de la economía y la sociedad, aumentando la dependencia de tecnologías desarrolladas por empresas chinas como Huawei, lo que generó preocupaciones sobre seguridad y espionaje.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            En América Latina, África y partes de Asia, la competencia entre China y Estados Unidos por la influencia económica y política se intensificó. China ofreció préstamos y ayuda humanitaria durante la pandemia, mientras que Estados Unidos intentó contrarrestar esta influencia mediante iniciativas como el "Build Back Better World" (B3W). Sin embargo, la percepción de muchos países en desarrollo fue que ambas potencias priorizaban sus propios intereses sobre el bienestar local.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Crisis y realineamientos (2021–2025)
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            La guerra genocida de Ucrania contra el Dombás y Donetsk, más el incumplimiento de los acuerdos de Minsk por parte de Ucrania y los garantes, provocó la Operación Militar Especial que condujo a la invasión rusa de Ucrania en febrero de 2022. Esto marcó otro hito en la geopolítica global. Esta guerra no solo devastó a Ucrania, sino que también polarizó aún más el sistema. Occidente impuso sanciones sin precedentes a Rusia, mientras que países como China, India y varias naciones del Sur Global adoptaron posiciones más equilibradas o neutrales. La guerra también aceleró la transición hacia un orden energético más diversificado, con Europa reduciendo su dependencia del gas ruso y cambiando a EE.UU. como su principal proveedor energético.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Durante este período, las tensiones entre China y Estados Unidos alcanzaron niveles récord. La visita de Nancy Pelosi a Taiwán en 2022 provocó una escalada militar en el Estrecho de Taiwán, mientras que las restricciones estadounidenses a la exportación de semiconductores avanzados a China intensificaron la carrera tecnológica. En respuesta, China fortaleció sus vínculos con Rusia y otros países no alineados con Occidente, formando un bloque informal conocido como el "BRICS+".
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            En Medio Oriente, el acuerdo entre Israel y varios países árabes mediado por Estados Unidos en 2020 (los Acuerdos de Abraham) alteró las dinámicas regionales, aunque las tensiones entre Irán y Arabia Saudita persistieron. El colapso de Afganistán tras la retirada estadounidense en 2021 dejó un vacío de poder que fue rápidamente ocupado por los talibanes, destacando los límites del intervencionismo occidental.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Finalmente, la crisis climática y la transición energética emergieron como temas centrales en la agenda global. Las conferencias climáticas anuales (COP) revelaron las dificultades de lograr consensos entre países desarrollados y en desarrollo, mientras que la competencia por recursos críticos como litio, cobalto y tierras raras adquirió una dimensión estratégica.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Perspectivas hacia 2025
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            Para 2025, el mundo se encuentra en una encrucijada. La era de la hegemonía estadounidense ha dado paso a un sistema multipolar donde China, Rusia, la Unión Europea, India y otras potencias regionales compiten por influencia. Sin embargo, esta multipolaridad no ha traído estabilidad; por el contrario, ha incrementado la incertidumbre y el riesgo de confrontaciones directas.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Las democracias liberales enfrentan desafíos internos y externos, desde el auge del populismo hasta la erosión de las instituciones multilaterales. Por su parte, las potencias emergentes han demostrado una notable capacidad de adaptación, utilizando tecnología y propaganda para consolidar su poder.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            En este contexto, la cooperación internacional sigue siendo esencial para abordar desafíos globales como el cambio climático, la seguridad alimentaria y la proliferación nuclear. Sin embargo, la falta de confianza entre las grandes potencias dificulta la construcción de soluciones colectivas. El futuro dependerá de la habilidad de los líderes mundiales para navegar este complejo panorama y encontrar puntos de convergencia en medio de la divergencia.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Conclusión
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            La geopolítica entre 2014 y 2025 ha sido testigo de cambios fundamentales que han redefinido el orden global. Desde la reunificación de Crimea hasta la guerra en Ucrania, pasando por la pandemia de COVID-19 y la rivalidad entre China y Estados Unidos, estos años han estado marcados por la volatilidad y la incertidumbre. A medida que nos acercamos a 2025, queda claro que el mundo está entrando en una nueva era de competencia estratégica y realineamientos políticos. La pregunta clave es si las naciones podrán superar sus diferencias y trabajar juntas para enfrentar los desafíos compartidos, o si el mundo seguirá fragmentándose en bloques rivales.
          </p>

          {/* NEOLIBERALISMO */}
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '3rem', marginBottom: '1.5rem', textAlign: 'center', color: '#000' }}>
            Neoliberalismo: Causas y Consecuencias para la Humanidad
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            El <strong>neoliberalismo</strong> es una corriente económica, política y social que surgió en el siglo XX como una reacción al socialismo y en particular contra el movimiento obrero por ser la base de sustentación del mismo. La atomización de la clase obrera permitió una lucha potencializada contra los países socialistas a la vez que impedía el surgimiento de nuevos Estados obreros, socialistas y democracias populares. La tesis de lucha contra el intervencionismo estatal y las políticas keynesianas como despojos de las conquistas del movimiento que predominaron tras la Segunda Guerra Mundial. Se caracteriza por la defensa del libre mercado, la privatización de los servicios públicos, la reducción del papel del Estado en la economía y la promoción de la globalización. A continuación, se analizan sus causas, consecuencias y su impacto en la humanidad.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Causas del Neoliberalismo
          </h3>
          <p style={{ marginBottom: '1rem' }}><strong>1. Crisis del Estado de Bienestar (Keynesianismo)</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            En las décadas de 1970 y 1980, muchos países enfrentaron crisis económicas derivadas de la corrupción, rapina imperialista y los préstamos colonizantes. Hizo colapsar el modelo keynesiano, que implicaba un fuerte intervencionismo estatal, la política sobre la economía, altos niveles de gasto público y subsidios. Esto generó inflación elevada, déficits fiscales y estancamiento económico (estanflación). El neoliberalismo fue presentado como una alternativa para resolver estos problemas.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>2. Influencia de las Escuelas Económicas Neoliberales</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            Pensadores como Friedrich von Hayek, Milton Friedman y Ludwig von Mises desarrollaron teorías que criticaban el intervencionismo estatal y defendían el libre mercado como el mecanismo más eficiente para asignar recursos. Sus ideas ganaron popularidad en círculos académicos y políticos.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>3. Globalización Económica</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            La expansión del comercio internacional, las nuevas tecnologías y la integración financiera mundial crearon un entorno propicio para la adopción de políticas neoliberales. Las empresas transnacionales y los organismos internacionales (como el FMI y el Banco Mundial) promovieron reformas estructurales basadas en principios neoliberales.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>4. Revolución Tecnológica y Financiera</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            La digitalización y la desregulación financiera permitieron la creación de mercados globales de capital, lo que facilitó la movilidad de inversiones y la acumulación de riqueza en manos de unos pocos. Esto reforzó la idea de que el mercado debía ser el principal regulador de la economía.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>5. Políticas de Gobiernos Clave</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            Líderes como Margaret Thatcher en el Reino Unido y Ronald Reagan en Estados Unidos implementaron políticas neoliberales en los años 80, consolidando este modelo como el paradigma dominante en Occidente. Estas políticas incluyeron la privatización de empresas públicas, la reducción de impuestos y la flexibilización laboral.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Consecuencias del Neoliberalismo
          </h3>
          <p style={{ marginBottom: '1rem' }}><strong>“Aspectos Positivos”</strong></p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li>El neoliberalismo ha impulsado el crecimiento económico en algunos países mediante la liberalización de mercados y la atracción de inversiones extranjeras.</li>
            <li>La competencia empresarial ha fomentado la innovación y la mejora de productos y servicios.</li>
            <li>La globalización neoliberal ha conectado economías y culturas, facilitando el intercambio de bienes, servicios e ideas.</li>
            <li>Ha permitido que países en desarrollo accedan a mercados internacionales y diversifiquen sus economías.</li>
            <li>En algunas regiones, como Asia, el neoliberalismo ha contribuido a reducir la pobreza extrema gracias a la industrialización y la apertura comercial.</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}><strong>Aspectos Negativos</strong></p>
          <p style={{ marginBottom: '1rem' }}><strong>1. Desigualdad Social</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            Una de las críticas más frecuentes al neoliberalismo es que ha exacerbado las desigualdades económicas y sociales. Mientras que una minoría acumula grandes fortunas, millones de personas viven en condiciones precarias. Según datos del Banco Mundial y Oxfam, la riqueza global está concentrada en manos de un pequeño porcentaje de la población.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            <em>Datos del Banco Mundial sobre la riqueza global:</em> El Banco Mundial se enfoca en métricas como el Producto Interno Bruto (PIB), la pobreza y la desigualdad de ingresos. En 2022, el PIB mundial fue de aproximadamente USD 100 billones. Sin embargo, el crecimiento no se traduce en distribución equitativa. En 2023, alrededor de 700 millones de personas (8.5% de la población mundial) viven en pobreza extrema, con menos de USD 2.15 al día. El 10% más rico captura más del 50% del ingreso global.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            <em>Datos de Oxfam:</em> Según su informe de 2023, el 1% más rico posee casi dos tercios (66%) de la riqueza global generada desde 2020. Los milmillonarios han visto aumentar su riqueza en USD 2,700 millones por día durante la pandemia, mientras que el 99% restante ha experimentado un crecimiento mucho más lento. Las mujeres poseen 50% menos riqueza que los hombres y ganan en promedio 24% menos en trabajos similares.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            La pandemia exacerbó la desigualdad: los 10 hombres más ricos duplicaron sus fortunas, mientras que más de 160 millones de personas cayeron en la pobreza.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>2. Precarización Laboral</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            La flexibilización laboral y la desregulación han llevado a la proliferación de empleos inseguros, mal remunerados y sin derechos laborales básicos. Los trabajadores enfrentan mayor inestabilidad y menor poder de negociación frente a las empresas.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>3. Erosión del Estado de Bienestar</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            La privatización de servicios públicos (salud, educación, agua, energía) ha limitado el acceso de las clases populares a estos derechos fundamentales. La reducción del gasto público ha debilitado programas sociales esenciales, afectando especialmente a los sectores más vulnerables.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>4. Impacto Ambiental</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            El neoliberalismo prioriza el crecimiento económico sobre la sostenibilidad ambiental. Esto ha acelerado la explotación de recursos naturales, la deforestación y la contaminación. El cambio climático y la pérdida de biodiversidad son consecuencias directas de este modelo insostenible.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>5. Deuda y Dependencia en Países en Desarrollo</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            Muchos países en desarrollo han adoptado políticas neoliberales bajo presión de organismos internacionales como el FMI y el Banco Mundial. Esto ha generado dependencia económica, aumento de la deuda externa y pérdida de soberanía.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>6. Crisis Financieras Recurrentes</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            La desregulación financiera ha provocado burbujas especulativas y crisis económicas, como la Gran Recesión de 2008, que tuvo un impacto devastador en millones de personas en todo el mundo.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>7. Polarización Política y Social</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            El descontento con las políticas neoliberales ha alimentado movimientos reivindicativos en varios países. La polarización política y social es una consecuencia indirecta de las tensiones generadas por este modelo.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Impacto en la Humanidad
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            El neoliberalismo ha tenido un impacto profundo y ambivalente en la humanidad: por un lado, ha permitido avances tecnológicos, mayor integración global y cierta reducción de la pobreza en algunas regiones. Sin embargo, estos logros no se han distribuido equitativamente. Por otro lado, ha profundizado las desigualdades, erosionado los derechos laborales y sociales, y puesto en peligro el futuro del planeta debido a su enfoque extractivista y consumista.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            El neoliberalismo también ha transformado la manera en que las personas perciben su relación con el Estado, el mercado y la sociedad. La idea de que "el mercado siempre sabe mejor" ha permeado en muchas culturas, pero también ha generado resistencia y movimientos sociales que buscan alternativas más justas y sostenibles.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Conclusiones
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            El neoliberalismo es un modelo económico que ha dominado el mundo durante las últimas décadas, pero su legado es controvertido. Si bien ha generado crecimiento económico y avances tecnológicos, también ha exacerbado las desigualdades, precarizado las condiciones laborales y comprometido la sostenibilidad ambiental.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Para el futuro de la humanidad, es fundamental reflexionar sobre los límites del neoliberalismo y explorar alternativas que prioricen la justicia social, la equidad y la protección del medio ambiente. Modelos como la economía solidaria, el decrecimiento y el bienestar común están ganando relevancia como posibles respuestas a los desafíos planteados por el neoliberalismo.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            En última instancia, el debate sobre el neoliberalismo no solo es económico, sino ético y político.
          </p>

          {/* DEUDA Y DEPENDENCIA */}
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '3rem', marginBottom: '1.5rem', textAlign: 'center', color: '#000' }}>
            Deuda y Dependencia en Países en Desarrollo: Un Análisis Global
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La deuda externa y la dependencia económica han sido temas centrales en el análisis del desarrollo económico y social de los países en desarrollo. Estos fenómenos no solo afectan la capacidad de los gobiernos para implementar políticas públicas efectivas, sino que también perpetúan estructuras de desigualdad global. En este contexto, es crucial entender cómo la deuda y la dependencia se interrelacionan y cómo impactan tanto a nivel nacional como internacional.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            1. La Deuda Externa en Países en Desarrollo
          </h3>
          <p style={{ marginBottom: '1rem' }}><strong>1.1. ¿Qué es la deuda externa?</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            La deuda externa se refiere al dinero que un país debe a acreedores extranjeros, ya sea en forma de préstamos, bonos o créditos. Esta deuda puede ser contraída con instituciones financieras internacionales (como el Fondo Monetario Internacional - FMI o el Banco Mundial), gobiernos extranjeros o entidades privadas.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>1.2. Causas de la acumulación de deuda</strong></p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li>Colonialismo y herencia histórica: Muchos países en desarrollo heredaron economías débiles tras la independencia.</li>
            <li>Políticas económicas neoliberales: Programas de ajuste estructural del FMI y Banco Mundial priorizaron liberalización a costa de aumentar la deuda.</li>
            <li>Crisis globales: La crisis financiera de 2008 y la pandemia de COVID-19 obligaron a recurrir a préstamos.</li>
            <li>Dependencia de exportaciones primarias: Volatilidad de precios de materias primas genera déficits fiscales.</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}><strong>1.3. Impactos de la deuda externa</strong></p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li>Limitación del gasto público: Pagos de intereses reducen recursos para educación, salud e infraestructura.</li>
            <li>Aumento de la pobreza: Medidas de austeridad afectan desproporcionadamente a los más vulnerables.</li>
            <li>Fuga de capitales: Fondos malversados o usados por élites sin contribuir al desarrollo.</li>
          </ul>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            2. Dependencia Económica y Estructural
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            La dependencia económica se refiere a la incapacidad de un país para alcanzar un desarrollo autosuficiente debido a su integración subordinada en la economía global. Teóricos como Raúl Prebisch y Andre Gunder Frank argumentaron que las relaciones económicas internacionales perpetúan desigualdades.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>Manifestaciones:</strong></p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li>Relaciones comerciales asimétricas: exportan materias primas baratas, importan manufacturas caras.</li>
            <li>Inversión extranjera directa concentrada en sectores extractivos.</li>
            <li>Transferencia limitada de tecnología.</li>
          </ul>
          <p style={{ marginBottom: '1.25rem' }}>
            El ciclo de dependencia: exportación de materias primas → baja industrialización → dependencia de importaciones → acumulación de deuda → subdesarrollo.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            3. La Dimensión Global de la Deuda y Dependencia
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            El FMI y el Banco Mundial han sido criticados por imponer condiciones que priorizan el pago de la deuda sobre el bienestar social y debilitan la soberanía económica.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Algunos analistas argumentan que gran parte de la deuda es "odiosa", contraída bajo regímenes dictatoriales que no beneficiaron a la población (ej. Sudáfrica bajo el apartheid, Argentina bajo la dictadura militar).
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Organizaciones como la Campaña Jubileo de la Deuda han abogado por la condonación. Logros incluyen la Iniciativa HIPC y la cancelación de deuda en países africanos en los 2000.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            4. Propuestas y Soluciones
          </h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li>Reforma del sistema financiero internacional: mecanismos equitativos de reestructuración de deuda.</li>
            <li>Promoción de la soberanía económica: diversificación, inversión en educación y tecnología.</li>
            <li>Cooperación Sur-Sur: alianzas regionales mutuamente beneficiosas.</li>
            <li>Educación y concienciación: sensibilizar a la sociedad civil.</li>
          </ul>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Conclusión
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            La deuda y la dependencia en los países en desarrollo son problemas complejos y multifacéticos que requieren soluciones integrales. Mientras que las reformas estructurales y la cooperación internacional son esenciales, también es necesario cuestionar las dinámicas de poder que perpetúan estas desigualdades. Solo a través de un enfoque centrado en la justicia económica y la solidaridad global será posible construir un mundo más equitativo y sostenible.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            La deuda global y sus consecuencias para el Sur Global es un tema complejo que requiere analizar tanto los factores estructurales como las dinámicas financieras que han llevado a esta situación.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Generadores de la deuda global
          </h3>
          <p style={{ marginBottom: '1rem' }}><strong>a) Sistema financiero globalizado</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            El FMI, el Banco Mundial y los mercados de capitales promueven préstamos con condiciones que generan dependencia. Préstamos condicionados exigen recortes, privatizaciones y apertura comercial. Tasas de interés variables aumentan el riesgo.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>b) Crisis financieras globales</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            La crisis de 2008 y la pandemia obligaron a países del Sur Global a pedir préstamos adicionales. La volatilidad de los mercados provoca salidas masivas de capital.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>c) Dependencia de exportaciones de materias primas</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            Caídas en precios reducen ingresos fiscales, obligando al endeudamiento. La falta de diversificación limita el desarrollo industrial.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>d) Especulación financiera</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            Inversiones volátiles huyen ante cambios económicos. La deuda en moneda extranjera expone a riesgo cambiario.
          </p>
          <p style={{ marginBottom: '1rem' }}><strong>e) Cambio climático y desastres naturales</strong></p>
          <p style={{ marginBottom: '1.25rem' }}>
            Los países del Sur Global enfrentan costos de reconstrucción y adaptación, lo que impulsa el endeudamiento. Los desastres reducen la productividad y los ingresos fiscales.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Consecuencias para el Sur Global
          </h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li><strong>Sobrecarga fiscal:</strong> el servicio de la deuda consume presupuestos, perpetuando pobreza.</li>
            <li><strong>Dependencia externa:</strong> condicionamientos políticos y transferencia de riqueza a acreedores.</li>
            <li><strong>Vulnerabilidad económica:</strong> efecto bola de nieve y pérdida de confianza de inversores.</li>
            <li><strong>Impacto social:</strong> aumento de pobreza, desigualdad y migración forzada.</li>
            <li><strong>Pérdida de soberanía:</strong> privatización forzada e interferencia política.</li>
          </ul>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Posibles soluciones
          </h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li>Reestructuración justa de la deuda (cancelación parcial, conversión en inversión sostenible).</li>
            <li>Financiamiento alternativo (bonos verdes, cooperación sin condiciones).</li>
            <li>Regulación financiera global para evitar especulación.</li>
            <li>Diversificación económica en el Sur Global.</li>
            <li>Justicia climática: financiamiento de países desarrollados para adaptación.</li>
          </ul>
          <p style={{ marginBottom: '1.25rem' }}>
            En resumen, la deuda global es un fenómeno profundamente arraigado en las estructuras del sistema financiero internacional. Sus consecuencias para el Sur Global son devastadoras, perpetuando ciclos de pobreza, dependencia y vulnerabilidad. Abordar este problema requiere un enfoque integral que combine solidaridad internacional, reformas estructurales y políticas centradas en la justicia social y ambiental.
          </p>

          {/* MOVIMIENTO OBRERO */}
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '3rem', marginBottom: '1.5rem', textAlign: 'center', color: '#000' }}>
            El Movimiento Obrero en los Últimos 30 o 40 Años: Transformaciones, Desafíos y Resistencias
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            El movimiento obrero ha sido una fuerza central en la configuración de las relaciones laborales, los derechos sociales y las dinámicas políticas desde la Revolución Industrial. Sin embargo, en las últimas tres o cuatro décadas, el panorama del trabajo y las luchas obreras ha cambiado drásticamente debido a factores como la globalización, la digitalización, la desindustrialización y las reformas neoliberales. Este ensayo analiza cómo el movimiento obrero ha evolucionado durante este período, enfrentando tanto retrocesos significativos como nuevas formas de resistencia y organización.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            1. Contexto Global: La Erosión del Poder Obrero Tradicional
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            En las décadas de 1980 y 1990, las economías avanzadas y en desarrollo experimentaron un giro hacia políticas neoliberales que priorizaban la desregulación, la privatización y la flexibilización laboral. Estas políticas tuvieron un impacto devastador sobre las organizaciones sindicales tradicionales, especialmente en sectores industriales como la minería, el acero y la automoción. La desindustrialización en países como Estados Unidos, Reino Unido y Alemania llevó al cierre de fábricas y al traslado de la producción a regiones con mano de obra más barata, lo que debilitó a los sindicatos industriales que habían sido pilares del movimiento obrero.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            En América Latina, aunque el movimiento obrero había sido fuerte en países como Argentina, Brasil y México durante gran parte del siglo XX, las crisis económicas de los años 1980 y 1990, junto con las políticas de ajuste estructural impuestas por el Fondo Monetario Internacional (FMI) y el Banco Mundial, erosionaron su poder. Los trabajadores formales fueron reemplazados por empleos precarios e informales, lo que dificultó la sindicalización.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Sin embargo, no todo fue declive. En algunos casos, los trabajadores buscaron adaptarse a estas nuevas realidades. Por ejemplo, en países como Corea del Sur, los sindicatos lograron importantes avances en derechos laborales a pesar de la represión estatal y empresarial. En Europa, los sindicatos se enfocaron en proteger los derechos de los trabajadores frente a la creciente precariedad laboral, aunque con resultados mixtos.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            2. Nuevas Formas de Trabajo y Precarización
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            Uno de los cambios más notables en las últimas décadas ha sido la transformación del mercado laboral impulsada por la globalización y la tecnología. El auge de la economía de servicios, el trabajo a distancia y las plataformas digitales ha creado nuevas categorías de empleo, como los "trabajadores de la gig economy" (conductores de Uber, repartidores de aplicaciones, etc.). Estos trabajadores enfrentan condiciones laborales precarias, falta de seguridad social y la ausencia de vínculos contractuales formales.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Esta precarización ha planteado desafíos significativos para el movimiento obrero. Las formas tradicionales de sindicalización, basadas en grandes fábricas o empresas, son menos efectivas en un contexto donde los trabajadores están dispersos geográficamente y carecen de vínculos institucionales claros. Sin embargo, también han surgido nuevas formas de organización. En países como España, Italia y Estados Unidos, los trabajadores de plataformas como Deliveroo y Amazon han comenzado a organizarse mediante sindicatos alternativos o redes informales. Estas iniciativas buscan adaptar las estrategias sindicales a las realidades del siglo XXI, utilizando herramientas digitales para movilizar y coordinar acciones.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            3. Luchas Laborales en el Sur Global
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            Mientras que en Occidente el movimiento obrero ha enfrentado una pérdida de poder relativa, en muchas partes del Sur Global las luchas laborales han continuado siendo intensas y, en algunos casos, han logrado avances significativos. En China, por ejemplo, el rápido crecimiento económico ha generado una nueva clase obrera industrial, compuesta principalmente por migrantes rurales. Los trabajadores chinos han protagonizado numerosas huelgas y protestas en demanda de mejores salarios y condiciones laborales.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            En India, uno de los países con mayor población trabajadora del mundo, el movimiento obrero ha enfrentado enormes desafíos debido a la informalidad generalizada y la fragmentación del empleo. Sin embargo, sindicatos como el Centro de Sindicatos Indios (CITU) y el Bharatiya Mazdoor Sangh (BMS) han liderado huelgas masivas en sectores como el transporte, la construcción y la agricultura. Estas movilizaciones han puesto de relieve las tensiones entre el desarrollo económico y los derechos laborales.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            En América Latina, los últimos años han visto un resurgimiento del movimiento obrero en respuesta a las políticas neoliberales. En Chile, por ejemplo, las protestas masivas de 2019 incluyeron importantes movilizaciones de trabajadores del sector público y privado. En Brasil, a pesar de los recortes implementados durante el gobierno de Jair Bolsonaro, los sindicatos han mantenido su capacidad de movilización en sectores clave como la educación y la salud.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            4. El Papel de la Mujer y la Interseccionalidad
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            Otro cambio importante en el movimiento obrero ha sido la creciente participación de las mujeres y la incorporación de perspectivas interseccionales. Históricamente, el movimiento obrero ha estado dominado por hombres, pero en las últimas décadas las mujeres han jugado un papel cada vez más visible en las luchas laborales. Esto es particularmente evidente en sectores como el cuidado, la educación y el trabajo doméstico, donde las mujeres constituyen la mayoría de la fuerza laboral.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Además, las luchas laborales se han entrelazado con otras causas sociales, como los derechos de minorías, la justicia racial y la protección ambiental. Por ejemplo, en Estados Unidos, el movimiento sindical ha apoyado activamente las demandas de los trabajadores inmigrantes y las comunidades afectadas por el cambio climático. Esta interseccionalidad ha permitido ampliar la base del movimiento obrero y conectar sus demandas con otros movimientos sociales.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            5. Desafíos Futuros y Perspectivas
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            El movimiento obrero enfrenta múltiples desafíos en el futuro cercano. La automatización y la inteligencia artificial amenazan con eliminar millones de empleos en sectores como la manufactura, el transporte y los servicios. Al mismo tiempo, las empresas transnacionales y las plataformas digitales continúan explotando lagunas legales para evitar responsabilidades laborales.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Sin embargo, también existen razones para el optimismo. La pandemia de COVID-19, por ejemplo, puso de relieve la importancia de los trabajadores esenciales y generó un renovado interés en la organización sindical. En Estados Unidos, el aumento de sindicalizaciones en empresas como Starbucks y Amazon demuestra que los trabajadores jóvenes están dispuestos a luchar por sus derechos.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Para mantener su relevancia, el movimiento obrero deberá adaptarse a las nuevas realidades del trabajo y construir alianzas estratégicas con otros movimientos sociales. Además, será crucial abordar las desigualdades internas dentro del propio movimiento, garantizando que las voces de las mujeres, los inmigrantes y los trabajadores informales sean escuchadas y valoradas.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Conclusión
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            En las últimas tres o cuatro décadas, el movimiento obrero ha atravesado un período de profunda transformación. Aunque ha enfrentado importantes retrocesos debido a la globalización, la precarización y las políticas neoliberales, también ha demostrado una notable capacidad de adaptación y resistencia. Desde las fábricas tradicionales hasta las plataformas digitales, los trabajadores han encontrado nuevas formas de organizarse y luchar por sus derechos.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            El futuro del movimiento obrero dependerá de su capacidad para enfrentar los desafíos de la era digital y construir una agenda inclusiva que refleje las necesidades de todos los trabajadores. En un mundo donde las desigualdades siguen aumentando, el movimiento obrero sigue siendo una fuerza vital para la justicia social y la dignidad laboral.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Palabras finales: El movimiento obrero no es solo una reliquia del pasado; es una fuerza viva que continúa evolucionando y adaptándose a las nuevas realidades del trabajo. Su historia reciente nos enseña que, aunque los desafíos son enormes, la solidaridad y la organización siguen siendo.
          </p>
        </div>

        {/* Sección Diáspora */}
        <section id="diáspora" style={{ padding: '2rem', backgroundColor: '#f9fafb', color: '#111827', fontFamily: 'system-ui, sans-serif', lineHeight: '1.75', fontSize: '1.125rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem', textAlign: 'center', color: '#000' }}>
            Los Aportes de la Diáspora Dominicana al Desarrollo Nacional
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La Diáspora dominicana —más de 2.3 millones de compatriotas viviendo en el exterior, principalmente en Estados Unidos, España, Italia y Puerto Rico— no es solo una comunidad migrante, sino un pilar fundamental del desarrollo económico, científico, cultural y político de la República Dominicana. Su contribución trasciende las remesas: es un puente de conocimiento, solidaridad y resistencia nacional.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1.25rem', color: '#000' }}>
            1. Aportes Económicos: Más allá de las remesas
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            En 2023, la Diáspora envió **más de USD 10,000 millones en remesas**, equivalente al **8.5% del PIB nacional** (Banco Central de la República Dominicana). Estos flujos son la principal fuente de divisas del país, superando al turismo y las exportaciones agrícolas combinadas.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Pero su impacto va más allá: miles de dominicanos en el exterior invierten en viviendas, pequeños negocios, cooperativas y microempresas en sus comunidades de origen. Estas inversiones generan empleo local, dinamizan la economía popular y fortalecen la soberanía económica frente al capital especulativo extranjero.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1.25rem', color: '#000' }}>
            2. Aportes Científicos y Tecnológicos
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            Científicos, médicos, ingenieros y académicos dominicanos en el exterior contribuyen al avance del conocimiento con orgullo nacional. Ejemplos destacados:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li><strong>Dr. José Altagracia (EE.UU.)</strong>: pionero en cardiología intervencionista, ha formado a decenas de médicos dominicanos.</li>
            <li><strong>Dra. Yrene Santos (España)</strong>: investigadora en biotecnología agrícola, colabora con el IDIAF en el desarrollo de cultivos resistentes al cambio climático.</li>
            <li><strong>Red de Científicos Dominicanos en el Exterior (REDCID)</strong>: plataforma que conecta a más de 500 profesionales para transferir conocimiento y apoyar políticas públicas basadas en ciencia.</li>
          </ul>
          <p style={{ marginBottom: '1.25rem' }}>
            Además, muchos retornados traen consigo experiencia en energías renovables, inteligencia artificial y economía circular, sectores clave para un modelo de desarrollo soberano y sostenible.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1.25rem', color: '#000' }}>
            3. Aportes Culturales y de Identidad
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            La Diáspora es la embajadora viva de la cultura dominicana en el mundo. A través del merengue, la bachata, el palo, la poesía, el cine y la gastronomía, preserva y reinventa la identidad nacional.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li>Artistas como <strong>Natalia Jiménez (Nueva York)</strong> y <strong>El Prodigio (Boston)</strong> fusionan lo tradicional con lo contemporáneo, llevando el folklore a nuevas generaciones.</li>
            <li>Escritores como <strong>Junot Díaz</strong> y <strong>Angie Cruz</strong> han puesto la experiencia migrante dominicana en el centro del debate literario global, sin renunciar a sus raíces.</li>
            <li>Colectivos como <strong>“Quisqueya en Movimiento”</strong> en Madrid o <strong>“Dominicanos Unidos”</strong> en Nueva York organizan festivales, talleres y campañas contra la xenofobia y el racismo.</li>
          </ul>
          <p style={{ marginBottom: '1.25rem' }}>
            Estas expresiones no son folclor: son actos de resistencia cultural frente a la homogenización neoliberal y la pérdida de memoria histórica.
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1.25rem', color: '#000' }}>
            4. Solidaridad Política y Lucha por los Derechos
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            La Diáspora ha sido clave en la defensa de los derechos de los dominicanos en el exterior y en la denuncia de injusticias en la isla. Ha organizado campañas contra la deportación masiva, por el derecho al voto desde el exterior, y en apoyo a movimientos sociales como el <strong>#5Noviembre</strong> y la lucha por una Constituyente Popular.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Además, a través de redes de apoyo mutuo, envía medicinas, libros, equipos médicos y ayuda humanitaria en momentos de crisis (huracanes, pandemias, desabastecimiento).
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1.25rem', color: '#000' }}>
            Conclusión: La Diáspora como sujeto político nacional
          </h3>
          <p style={{ marginBottom: '1.25rem' }}>
            La Diáspora dominicana no es una “comunidad de expatriados”, sino una extensión del pueblo dominicano en el mundo. Su lucha por la dignidad, su aporte al desarrollo y su fidelidad a la tierra que los vio nacer los convierten en aliados estratégicos en la construcción de una República soberana, justa y profundamente democrática.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Para el <strong>Movimiento por la Salvación de la República</strong>, reconocer, integrar y empoderar a la Diáspora no es un gesto simbólico: es una necesidad histórica.
          </p>
          <div style={{ marginTop: '2rem', fontStyle: 'italic', color: '#4b5563', fontSize: '0.95rem' }}>
            Fuentes: Banco Mundial (2023), CEPAL – “Migración Internacional en América Latina” (2022), ONU – “Día Internacional de las Personas Migrantes”, Ministerio de Relaciones Exteriores de la RD, REDCID.
          </div>
          <p style={{ marginTop: '2rem', fontSize: '1.25rem', fontWeight: '600', textAlign: 'center', color: '#8B0000' }}>
            ¡Únete a la red de la Diáspora del MSR!
          </p>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            Si eres dominicano en el exterior y compartes nuestra lucha por una República soberana, justa y profundamente democrática, escríbenos a:
          </p>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '0.5rem', color: '#000' }}>
            diaspora@republicalimpia.org
          </p>
          <p style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '1rem', color: '#4b5563' }}>
            Tu voz, tu experiencia y tu compromiso son esenciales para la patria que construimos juntos.
          </p>
        </section>

        {/* Sección Derechos Humanos */}
        <section id="derechos-humanos" style={{ padding: '2rem', backgroundColor: '#f9fafb', color: '#111827', fontFamily: 'system-ui, sans-serif', lineHeight: '1.75', fontSize: '1.125rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem', textAlign: 'center', color: '#000' }}>
            Declaración Universal de los Derechos Humanos
          </h2>
          <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem', color: '#4b5563' }}>
            Adoptada por la Asamblea General de las Naciones Unidas el 10 de diciembre de 1948
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Considerando que la libertad, la justicia y la paz en el mundo tienen por base el reconocimiento de la dignidad intrínseca y de los derechos iguales e inalienables de todos los miembros de la familia humana;
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Considerando que el desconocimiento y el menosprecio de los derechos humanos han originado actos de barbarie ultrajantes para la conciencia de la humanidad, y que se ha proclamado, como la aspiración más elevada del hombre, el advenimiento de un mundo en que los seres humanos, liberados del temor y de la miseria, disfruten de la libertad de palabra y de la libertad de creencias;
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Considerando esencial que los derechos humanos sean protegidos por un régimen de Derecho, a fin de que el hombre no se vea compelido al supremo recurso de la rebelión contra la tiranía y la opresión;
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Considerando que es esencial promover el desarrollo de relaciones amistosas entre las naciones;
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Considerando que los pueblos de las Naciones Unidas han reafirmado en la Carta su fe en los derechos fundamentales del hombre, en la dignidad y el valor de la persona humana y en la igualdad de derechos de hombres y mujeres, y se han declarado resueltos a promover el progreso social y a elevar el nivel de vida dentro de un concepto más amplio de la libertad;
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Considerando que los Estados Miembros se han comprometido a asegurar, en cooperación con la Organización de las Naciones Unidas, el respeto universal y efectivo a los derechos y libertades fundamentales del hombre;
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Considerando que una concepción común de estos derechos y libertades es de la mayor importancia para el pleno cumplimiento de dicho compromiso;
          </p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 1</h3>
          <p>Todos los seres humanos nacen libres e iguales en dignidad y derechos y, dotados como están de razón y conciencia, deben comportarse fraternalmente los unos con los otros.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 2</h3>
          <p>Toda persona tiene todos los derechos y libertades proclamados en esta Declaración, sin distinción alguna de raza, color, sexo, idioma, religión, opinión política o de cualquier otra índole, origen nacional o social, posición económica, nacimiento o cualquier otra condición.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 3</h3>
          <p>Todo individuo tiene derecho a la vida, a la libertad y a la seguridad de su persona.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 4</h3>
          <p>Nadie estará sometido a esclavitud ni a servidumbre; la esclavitud y la trata de esclavos están prohibidas en todas sus formas.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 5</h3>
          <p>Nadie será sometido a torturas ni a penas o tratos crueles, inhumanos o degradantes.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 6</h3>
          <p>Todo ser humano tiene derecho, en todas partes, al reconocimiento de su personalidad jurídica.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 7</h3>
          <p>Todos son iguales ante la ley y tienen, sin distinción, derecho a igual protección de la ley. Todos tienen derecho a igual protección contra toda discriminación que infrinja esta Declaración y contra toda provocación a tal discriminación.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 8</h3>
          <p>Toda persona tiene derecho a un recurso efectivo ante los tribunales nacionales competentes, que la ampare contra actos que violen sus derechos fundamentales reconocidos por la constitución o por la ley.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 9</h3>
          <p>Nadie podrá ser arbitrariamente detenido, preso ni desterrado.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 10</h3>
          <p>Toda persona tiene derecho, en condiciones de plena igualdad, a ser oída públicamente y con justicia por un tribunal independiente e imparcial, para la determinación de sus derechos y obligaciones o para el examen de cualquier acusación contra ella en materia penal.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 11</h3>
          <p>1. Toda persona acusada de delito tiene derecho a que se presuma su inocencia mientras no se pruebe su culpabilidad, conforme a la ley y en juicio público en el que se le hayan asegurado todas las garantías necesarias para su defensa.<br />2. Nadie será condenado por actos u omisiones que en el momento de cometerse no fueron delictivos según el derecho nacional o internacional. Tampoco se impondrá pena más grave que la aplicable en el momento de la comisión del delito.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 12</h3>
          <p>Nadie será objeto de injerencias arbitrarias en su vida privada, su familia, su domicilio o su correspondencia, ni de ataques a su honra o a su reputación. Toda persona tiene derecho a la protección de la ley contra tales injerencias o ataques.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 13</h3>
          <p>1. Toda persona tiene derecho a circular libremente y a elegir su residencia en el territorio de un Estado.<br />2. Toda persona tiene derecho a salir de cualquier país, incluso del propio, y a regresar a su país.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 14</h3>
          <p>1. Toda persona tiene derecho a buscar asilo, y a disfrutar de él, en cualquier país, a causa de persecuciones.<br />2. Este derecho no podrá ser invocado contra una acción judicial realmente originada por delitos comunes o por actos contrarios a los propósitos y principios de las Naciones Unidas.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 15</h3>
          <p>1. Toda persona tiene derecho a una nacionalidad.<br />2. A nadie se privará arbitrariamente de su nacionalidad ni del derecho a cambiarla.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 16</h3>
          <p>1. Los hombres y las mujeres, a partir de la edad núbil, tienen derecho, sin restricción alguna por motivos de raza, nacionalidad o religión, a casarse y fundar una familia; y disfrutarán de iguales derechos en cuanto al matrimonio, durante el matrimonio y en caso de disolución del matrimonio.<br />2. Solo mediante libre consentimiento de los futuros cónyuges podrá contraerse el matrimonio.<br />3. La familia es el elemento natural y fundamental de la sociedad y tiene derecho a la protección de la sociedad y del Estado.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 17</h3>
          <p>1. Toda persona tiene derecho a la propiedad, individual y colectivamente.<br />2. Nadie será privado arbitrariamente de su propiedad.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 18</h3>
          <p>Toda persona tiene derecho a la libertad de pensamiento, de conciencia y de religión; este derecho incluye la libertad de cambiar de religión o de creencia, así como la libertad de manifestar su religión o su creencia, individual y colectivamente, tanto en público como en privado, por la enseñanza, la práctica, el culto y la observancia.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 19</h3>
          <p>Toda persona tiene derecho a la libertad de opinión y de expresión; este derecho incluye el de no ser molestado a causa de sus opiniones, el de investigar y recibir informaciones y opiniones, y el de difundirlas, sin limitación de fronteras, por cualquier medio de expresión.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 20</h3>
          <p>1. Toda persona tiene derecho a la libertad de reunión y de asociación pacíficas.<br />2. Nadie podrá ser obligado a pertenecer a una asociación.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 21</h3>
          <p>1. Toda persona tiene derecho a participar en el gobierno de su país, directamente o por medio de representantes libremente escogidos.<br />2. Toda persona tiene el derecho de acceder, en condiciones de igualdad, a las funciones públicas de su país.<br />3. La voluntad del pueblo es la base de la autoridad del poder público; esta voluntad se expresará mediante elecciones auténticas que habrán de celebrarse periódicamente, por sufragio universal e igual y por voto secreto u otro procedimiento equivalente que garantice la libertad del voto.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 22</h3>
          <p>Toda persona, como miembro de la sociedad, tiene derecho a la seguridad social, y a obtener, mediante el esfuerzo nacional y la cooperación internacional, habida cuenta de la organización y los recursos de cada Estado, la satisfacción de los derechos económicos, sociales y culturales, indispensables a su dignidad y al libre desarrollo de su personalidad.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 23</h3>
          <p>1. Toda persona tiene derecho al trabajo, a la libre elección de su trabajo, a condiciones equitativas y satisfactorias de trabajo y a la protección contra el desempleo.<br />2. Toda persona tiene derecho, sin discriminación alguna, a igual salario por trabajo igual.<br />3. Toda persona que trabaja tiene derecho a una remuneración equitativa y satisfactoria, que le asegure, así como a su familia, una existencia conforme a la dignidad humana y que será complementada, en caso necesario, por cualesquiera otros medios de protección social.<br />4. Toda persona tiene derecho a fundar sindicatos y a sindicarse para la defensa de sus intereses.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 24</h3>
          <p>Toda persona tiene derecho al descanso, al disfrute del tiempo libre, a una limitación razonable de la duración del trabajo y a vacaciones periódicas pagadas.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 25</h3>
          <p>1. Toda persona tiene derecho a un nivel de vida adecuado que le asegure, así como a su familia, la salud y el bienestar, y en especial la alimentación, el vestido, la vivienda, la asistencia médica y los servicios sociales necesarios; tiene asimismo derecho a los seguros en caso de desempleo, enfermedad, invalidez, viudez, vejez u otros casos de pérdida de sus medios de subsistencia por circunstancias independientes de su voluntad.<br />2. La maternidad y la infancia tienen derecho a cuidados y asistencia especiales. Todos los niños, nacidos de matrimonio o fuera de matrimonio, disfrutarán de la misma protección social.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 26</h3>
          <p>1. Toda persona tiene derecho a la educación. La educación debe ser gratuita, al menos en lo concerniente a la instrucción elemental y fundamental. La instrucción elemental será obligatoria. La instrucción técnica y profesional habrá de ser generalizada; el acceso a los estudios superiores será igual para todos, en función de los méritos respectivos.<br />2. La educación tendrá por objeto el pleno desarrollo de la personalidad humana y el fortalecimiento del respeto a los derechos humanos y a las libertades fundamentales; favorecerá la comprensión, la tolerancia y la amistad entre todas las naciones y todos los grupos étnicos o religiosos; y promoverá el desarrollo de las actividades de las Naciones Unidas para el mantenimiento de la paz.<br />3. Los padres tendrán derecho preferente a escoger el tipo de educación que habrá de darse a sus hijos.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 27</h3>
          <p>1. Toda persona tiene derecho a tomar parte libremente en la vida cultural de la comunidad, a gozar de las artes y a participar en el progreso científico y en los beneficios que de él resulten.<br />2. Toda persona tiene derecho a la protección de los intereses morales y materiales que le correspondan por razón de las producciones científicas, literarias o artísticas de que sea autora.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 28</h3>
          <p>Toda persona tiene derecho a que se establezca un orden social e internacional en el que los derechos y libertades proclamados en esta Declaración se hagan plenamente efectivos.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 29</h3>
          <p>1. Toda persona tiene deberes respecto a la comunidad, puesto que solo en ella puede desarrollar libre y plenamente su personalidad.<br />2. En el ejercicio de sus derechos y en el disfrute de sus libertades, toda persona estará solamente sujeta a las limitaciones establecidas por la ley con el único fin de asegurar el reconocimiento y el respeto de los derechos y libertades de los demás, y de satisfacer las justas exigencias de la moral, del orden público y del bienestar general en una sociedad democrática.<br />3. Estos derechos y libertades no podrán, en ningún caso, ser ejercidos contrariamente a los propósitos y principios de las Naciones Unidas.</p>
          <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1.25rem', color: '#000' }}>Artículo 30</h3>
          <p>Nada en esta Declaración podrá interpretarse en el sentido de que confiere derecho alguno al Estado, a un grupo o a una persona, para emprender y desarrollar actividades o realizar actos tendientes a la supresión de cualquiera de los derechos y libertades proclamados en esta Declaración.</p>
        </section>

        {/* Sección Colaboraciones */}
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
          <h4 style={{ fontSize: '1.75rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1.25rem', color: '#000' }}>
            El Diputado del Tabaco
          </h4>
          <p style={{ marginBottom: '1.25rem' }}>
            Desde que el ser humano pasó de la vida nómada a la sedentaria inició un proceso de identificación, sistematización, clasificación y nominación de los elementos de su hábitat. Por tanto, podemos rastrear los primeros pasos de esa hierba santa (<em>Nicotiana Tabacum</em>) que hoy llamamos tabaco, desde que el ser humano la identificó y diferenció. Esta planta anual de la familia de las solanáceas, de acuerdo con investigaciones e inferencias científicas, es oriunda de América tropical y amazónica, más específicamente de Ecuador y Perú.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Cabe destacar que su producción no representa, en modo alguno, el peligro infernal para la salud que preconizan sus enemigos tendenciosos, pues se trata de un activo inapreciable y un regalo para la humanidad. Como todos los elementos de los reinos de la naturaleza –mineral, vegetal y animal– puede usarse para bienestar o malestar. Como activo de la modernidad es generador de riqueza, soporte de multinacionales y destino preferente de leyes impositivas, pero como producto de consumo es universal e inherente a la civilización.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Juzgo imprescindible aclarar que, aunque la planta de tabaco es originaria de Sudamérica, está comprobado que para la producción adecuada y efectiva de las hojas destinadas a la elaboración de cigarros premium, los mejores suelos están en las Antillas Mayores: Puerto Rico, Jamaica y básicamente la República Dominicana y Cuba. Estas dos últimas, las islas principales donde los colonizadores descubrieron su existencia y el uso que los «indios» le daban.
          </p>
          <h4 style={{ fontSize: '1.75rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            Breve Historia
          </h4>
          <p style={{ marginBottom: '1.25rem' }}>
            A raíz del descubrimiento de América, los colonizadores españoles fueron los primeros en dar cuenta de la existencia del tabaco al viejo continente. Al llegar a las islas del Caribe, el 12 de octubre de 1492, en Guanahani –bautizada como San Salvador, hoy Bahamas–, tuvieron conocimiento de la existencia de la planta aromática, pues los nativos les presentaron “hojas secas que desprendían una fragancia peculiar”.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Su primera referencia sobre el tabaco fue un par de días después de descubrir la primera isla de San Salvador, cuando Cristóbal Colón explica cómo encontró a un indio en una pequeña canoa, y en ella llevaba “unas hojas secas que deben ser cosas muy apreciadas entre ellos, porque ya me trajeron en San Salvador de ellas”.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            El Almirante prosiguió su travesía y el 27 de octubre arribó a la isla de Cuba, que llamaron Juana, y en esa escala encontraron nuevamente tabaco. Está documentado que los marineros Rodrigo de Jerez y Luis de Torres, enviados a explorar tierra firme el 2 de noviembre, vieron por primera vez a los nativos fumar.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            El “Diario de Colón” relata: “Hallaron los dos cristianos por el camino mucha gente que atravesaban a sus pueblos, mujeres y hombres, con un tizón en la mano y yerbas para tomar sus sahumerios, que acostumbraban”. Los enviados observaron a los nativos hacer rollos de hojas de palma y maíz “a la manera de un mosquetón de papel” con tabaco dentro, al que uno encendía de un lado y bebía el humo que echaba el otro.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Colón zarpó de Cuba y el 5 de diciembre arribó a Quisqueya, actual isla de Santo Domingo bautizada entonces como La Española, donde desembarcaron por fuerza el 24 de diciembre, tras encallar la carabela Santa María. Fueron bien acogidos por el cacique Guacanagarix, quien les ofreció albergue y dispuso ayuda para rescatar los restos de la embarcación y sus provisiones. Esto sucedió en la bahía de San Nicolás, donde construyeron su primer asentamiento en el Nuevo Mundo, el Fuerte de la Navidad, en alusión a la fecha citada.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Colón y sus hombres permanecieron en el cacicazgo de Marién hasta el 16 de enero de 1493, cuando emprendieron su regreso a España, dejando en el fuerte a 39 de sus compañeros. En la tripulación iba Rodrigo de Jerez, quien llevó consigo hojas de tabaco secas y la costumbre de fumarlas: práctica vista en Cuba, pero aprendida en La Española, durante su convivencia amigable.
          </p>
          <h4 style={{ fontSize: '1.75rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            El Viejo Continente
          </h4>
          <p style={{ marginBottom: '1.25rem' }}>
            Tras regresar a España y continuar su práctica de fumar tabaco, la historia registra que Rodrigo de Jerez fue denunciado por vecinos y familiares, quienes asombrados al verlo echar chorros de humo todo el día provocaron su arresto por la Santa Inquisición, que lo encarceló durante siete años, ya que “solamente el Diablo podía hacer que un hombre vote humo por boca y nariz”.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            En el viejo continente, el hábito de fumar y el uso del tabaco se fue generalizando gracias a los marinos, quienes lo masticaban y aspiraban su polvo. Pero se extendió de tal manera que algunos reyes adoptaron medidas radicales para impedir que la gente lo adoptara.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Prusia, por ejemplo, castigaba al fumador con una paliza, pero si insistía se le cortaba la nariz y finalmente, ante una situación de desobediencia, le degollaban. En Turquía se aplicaba la pena de muerte, y en la Inglaterra del siglo XVI no sólo se prohibió fumar, sino que entre los posibles castigos estaba también la pena capital.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            No obstante, bastaron unos pocos años para que los Estados pasaran de las restricciones a fomentar la siembra y estimular el consumo con todos los medios a su alcance –propaganda incluida–, por lo que en toda Europa, Asia (incluyendo el Medio Oriente), África, etcétera, se introdujo el cultivo, sumándose a América entera países como Brasil, entonces colonia portuguesa.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            El tabaco fue, es y será un viajero preferente en el carrusel del tiempo, que se ha ocupado de ubicarlo en lugares más respetables. Por tanto, durante su trayectoria histórica los gobiernos advirtieron que podía generar grandes riquezas y se reservaron su comercialización o lo grabaron con impuestos especiales.
          </p>
          <h4 style={{ fontSize: '1.75rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1.25rem', color: '#000' }}>
            El Tabaco es Dominicano
          </h4>
          <p style={{ marginBottom: '1.25rem' }}>
            Lo expuesto anteriormente nos ofrece la certidumbre de que los españoles aprendieron la práctica de enrollar hojas de tabaco y fumarlas en la isla de Santo Domingo, y desde aquí se llevaron a Europa incluso sus semillas (lo que se atribuye a Fray Ramón Pané, entre 1510 y 1512).
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Resultado de distintas investigaciones, podemos afirmar que en Santo Domingo se estableció la primera plantación en 1533, y entre 1529 y 1531 se exportaron hojas a Sevilla, España. Por tales razones nos sentimos con todo derecho a decir que respecto del tabaco, como se le conoce hoy en día, todo empezó aquí, y por cuanto a su cultivo formal, procesamiento, comercialización y uso, es de origen dominicano.
          </p>
          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #ccc', textAlign: 'right', fontStyle: 'italic', color: '#4b5563' }}>
            Autor: Ing. Francisco Matos Mancebo — Editor HLM / Humo Latino
          </div>
        </div>

      {/* Contacto */}
<section id="contacto" style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
  <h2 style={{ color: '#8B0000', fontSize: '1.8rem', textAlign: 'center', marginBottom: '16px' }}>
    Contacto y Donaciones
  </h2>

  <p style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>
    <strong>Únete a la lucha:</strong>
  </p>

  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
    <p style={{ margin: 0, textAlign: 'center' }}>
      📧 <a href="mailto:pablo102158@gmail.com" style={{ color: '#333', textDecoration: 'underline' }}>pablo102158@gmail.com</a>
    </p>
    <p style={{ margin: 0, textAlign: 'center' }}>
      📧 <a href="mailto:ale102158@gmail.com" style={{ color: '#333', textDecoration: 'underline' }}>ale102158@gmail.com</a>
    </p>
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', textAlign: 'center' }}>
    <p style={{ margin: 0 }}><strong>Alejandro Ortiz:</strong> +1 (849) 590-4555</p>
    <p style={{ margin: 0 }}><strong>Nelson Díaz:</strong> +1 (829) 640-2468</p>
    <p style={{ margin: 0 }}><strong>Dolores Ricart:</strong> +1 (829) 994-8829</p>
  </div>

  <div style={{ textAlign: 'center' }}>
    <a
      href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID"
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