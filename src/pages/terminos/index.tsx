import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/Layout'
import { SocaloBottom } from '../../ui'
import { DownBig } from '../../components/icons'
import Contacto from '../home/Contacto'
import Newsletter from '../home/Newsletter'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section className='mt-20'>
        <div className='w-full m-auto max-w-6xl px-6'>
          <div className='flex flex-col gap-y-6 items-center mb-12'>
            <h1 className='text-2xl lg:text-3xl text-secondary font-secondary font-bold'>Terminos y Condiciones</h1>
            <div className='text-black/25'>
              <DownBig />
            </div>
          </div>
          <div className='text-sm mb-20 flex flex-col gap-y-6 [&>h1]:font-bold'>
            <h1>BIENVENIDO A NUESTRO SITIO WEB</h1>
            <p>
              El presente sitio web es propiedad exclusiva de la empresa WORLD OF MANAGEMENT S.R.L. CUIT: 30-71132812-9
              y con domicilio social en Tristán Malbrán 4011, Piso 1, Oficina 1, Cerro de las Rosas, CP 5009, Córdoba,
              Argentina.
            </p>
            <p>
              Para cualquier duda que le pueda surgir respecto de la interpretación y/o uso del presente sitio web por
              favor envíenos un correo electrónico planteando su consulta a: informes@wom-latam.com. Esta página
              contiene los términos y condiciones que regulan el acceso y la utilización del Sitio Web www.wom-latam.com
              y sus servicios. Estos términos y condiciones constituyen un acuerdo válido y obligatorio entre usted y
              WORLD OF MANAGEMENT S.R.L.
            </p>
            <p>
              El hecho de entrar en este sitio de Internet significa que usted acepta y está de acuerdo con los
              siguientes términos y condiciones de uso. Estos términos pueden cambiar periódicamente sin previo aviso y
              por decisión unilateral del administrador del sitio. El hecho de seguir usando este sitio Web después de
              que hayamos publicado cualquier cambio en los términos o condiciones de uso significa que usted acepta las
              modificaciones hechas a dichos términos. El administrador puede cambiar, restringir el acceso, suspender,
              o discontinuar este sitio o cualquiera de sus partes en el momento en que lo desee y sin previo aviso.
            </p>
            <p>
              Usted se compromete a hacer un uso lícito y doméstico de los contenidos del presente sitio web de
              conformidad con la legislación aplicable. De esta forma, el usuario deberá abstenerse de hacer un uso no
              autorizado o fraudulento del sitio web y/o de los contenidos con fines o efectos ilícitos, así como de
              introducir o difundir en la red virus informáticos u otros sistemas físicos o lógicos que sean
              susceptibles de provocar daños en los sistemas físicos o lógicos de la página, de sus proveedores o de
              terceros.
            </p>
            <p>
              WORLD OF MANAGEMENT S.R.L. se reserva el derecho a impedir o prohibir el acceso a cualquier usuario de
              Internet que introduzca en este sitio web cualquier contenido contrario a la legislación vigente al
              efecto, y sin perjuicio de lo anterior, se reserva el derecho para emprender las medidas legales que
              considere oportunas en cada momento.
            </p>
            <h1>PRIVACIDAD</h1>
            <p>
              Nosotros recopilamos información sobre los visitantes de este sitio. La manera en que recopilamos esta
              información está regida por nuestra Política de Privacidad.
            </p>
            <h1>MARCAS DE SERVICIO Y MARCAS REGISTRADAS</h1>
            <p>
              Nosotros protegemos nuestros derechos de propiedad intelectual y prohibimos el uso no autorizado de
              nuestras marcas de servicio, marcas de producto y nombres comerciales por parte de terceros. Sin previa
              autorización por escrito de nuestra parte, queda prohibido usar, copiar, reproducir, publicar y/o volver a
              publicar, poner en línea, transmitir, distribuir, registrar e intentar el registro o modificación de éstas
              u otras marcas que se encuentren en el sitio, incluyendo cualquier otra marca cuya similitud con nuestras
              marcas pueda causar confusión entre los consumidores. Esta prohibición contempla el uso de las marcas como
              meta etiquetas (meta tags), en nombres de dominio, y en otros sitios de Internet. Algunas de las marcas
              que aparecen en este sitio pueden pertenecer a terceros y son usadas con permiso expreso de sus dueños.
            </p>
            <h1>DERECHOS DE PROPIEDAD INTELECTUAL</h1>
            <p>
              El contenido de nuestro sitio, incluyendo textos, gráficos, logotipos, íconos de botones, imágenes,
              sonido, video, descargas digitales, compilación de datos, programas usados para operar el sitio, y la
              compilación de cualquier elemento aquí mencionado, y los programas de software que pueden ser descargados
              desde este sitio Web, constituyen nuestra propiedad o la propiedad de nuestros proveedores de contenido, y
              están protegidos por las leyes de propiedad intelectual de la República Argentina y por las leyes de
              propiedad intelectual internacionales. Usted puede utilizar el contenido y el software de este sitio sólo
              como recurso para sus necesidades de consumo de nuestros servicios y no para ningún otro uso directo o
              indirecto. Sin previa autorización por escrito de nuestra parte, queda prohibida, entre otras cosas, la
              publicación, distribución, modificación, reproducción, el desglose, y la transmisión de una parte o la
              totalidad del contenido del sitio y de los programas de software disponibles en el sitio para descargar.
              Se encuentra prohibido, copiar y/o reproducir los formularios, el diseño, proyectos, la tipología y demás
              condiciones expuestas y publicadas en este sitio web.
            </p>
            <h1>ENLACES</h1>
            <p>
              Cualquier tipo de enlace de un sitio Web a nuestro sitio tiene que haber sido autorizado previamente por
              nosotros. Este sitio Web puede contener enlaces a sitios de Internet administrados por terceros o
              pertenecientes a terceros. Estos enlaces están en el sitio sólo para su conveniencia. NOSOTROS NO
              CONTROLAMOS NI SOMOS RESPONSABLES POR EL CONTENIDO DE ESTOS SITIOS NI POR SUS POLÍTICAS DE PRIVACIDAD NI
              POR LOS NIVELES DE SEGURIDAD QUE MANEJAN LOS MISMOS. NEGAMOS CUALQUIER RESPONSABILIDAD SI ESTOS SITIOS
              INFRINGEN LOS DERECHOS DE PROPIEDAD DE TERCEROS, SI SON INEXACTOS, ESTÁN INCOMPLETOS O PRESENTAN
              INFORMACIÓN ENGAÑOSA, SI NO SIRVEN PARA CIERTOS PROPÓSITOS O NO ES POSIBLE REALIZAR CIERTAS TRANSACCIONES
              COMERCIALES A TRAVÉS DE ELLOS, SI NO OFRECEN UN NIVEL ADECUADO DE SEGURIDAD Y PRIVACIDAD, SI CONTIENEN
              VIRUS O MATERIAL DE ÍNDOLE DESTRUCTIVA, O SI TIENEN CONTENIDO DIFAMATORIO. NO RESPALDAMOS EL CONTENIDO NI
              NINGUNO DE LOS SERVICIOS O PRODUCTOS OFRECIDOS POR ESOS SITIOS. SI USTED ESTABLECE UN ENLACE CON ESOS
              SITIOS, LO HACE A SU PROPIO RIESGO Y SIN NUESTRO PERMISO.
            </p>
            <h1>ACCESO AL SITIO Y USO DEL MISMO</h1>
            <p>
              {' '}
              Usted no puede reproducir, duplicar, copiar, vender, revender, o explotar de ningún modo este sitio para
              uso comercial a menos que le otorguemos permiso escrito por anticipado para hacerlo. A nuestra discreción,
              nosotros podemos rehusar la prestación del servicio, interrumpir el acceso, y/o cancelar transacciones,
              sin que esto de derecho a indemnización de ningún tipo, ni requerir su restablecimiento. Usted se
              compromete a no usar ningún aparato, programa, u otro tipo de instrumento para interferir o intentar
              interferir con el correcto desempeño de nuestro sitio, y consiente también a no actuar con el propósito de
              imponer una carga desproporcionadamente grande a nuestra infraestructura. Adicionalmente, usted consiente
              en no usar ningún robot, "spider", u otro artefacto automático o proceso manual para monitorear o copiar
              nuestras páginas de Internet o su contenido sin nuestro consentimiento previo (en el caso de los sitios de
              Internet que son motores de búsqueda, utilizan una tecnología estándar de búsqueda, y cuyo propósito es
              dirigir a usuarios de Internet a este sitio, este consentimiento se considera como dado). Usted es
              responsable por la información o contenido que haya sometido, y usted nos autoriza a usar ese contenido de
              manera consistente con nuestra política de privacidad y seguridad. Usted no puede publicar ni transmitir a
              este sitio ningún tipo de material cuyo contenido se considere ilegal, difamatorio, ni profano. Usted
              tampoco tiene permiso de modificar ni limitar ninguna función de este sitio. Las tarifas que eventualmente
              aparezcan publicadas en este sitio están representadas en la moneda local, salvo que específicamente se
              establezca algo diferente. Es posible que este sitio de Internet haga conversiones de moneda cuando
              publica tarifas. Sin embargo, esto se hace sólo con fines informativos. El cambio de moneda internacional
              se hace en base a fuentes a disposición del público en general. Por lo tanto, no garantizamos que las
              tasas de cambio serán las mismas en el momento en que usted abone su transacción. Es por ello que las
              sumas y/o montos que figuren en el sitio son orientativas y no vinculantes. La compañía puede cambiar el
              precio y la disponibilidad de los servicios enumerados en este sitio sin previo aviso.
            </p>
            <h1>LIMITACIÓN DE RESPONSABILIDADES</h1>
            <p>
              USTED ENTIENDE Y ACEPTA ESPECIFICAMENTE QUE NOSOTROS NO SEREMOS RESPONSABLES POR NINGUNA PÉRDIDA O DAÑO
              (DIRECTO, INDIRECTO, PUNITIVO, ACTUAL, CONSECUENTE, INCIDENTAL, ESPECIAL, EXENTO, O CUALQUIER OTRO TIPO DE
              DAÑO O PÉRDIDA) RESULTANTE DEL ACCESO A, O DEL USO DE, O DE LA INHABILIDAD DE USAR O ACCEDER, O DE LA
              DEPENDENCIA DE, O DEL FUNCIONAMIENTO DE ESTE SITIO, O RESULTANTE DE ERRORES U OMISIONES EN EL CONTENIDO DE
              ESTE SITIO, SIN IMPORTAR CUÁL SEA LA BASE USADA PARA RECLAMAR RESPONSABILIDAD, INCLUSO SI HEMOS SIDO
              AVISADOS DE LA POSIBILIDAD DE ESA PÉRDIDA O DAÑO.
            </p>
            <h1>UTILIZACIÓN DEL SITIO WEB WWW.WOM-LATAM.COM</h1>
            <p>
              La aceptación de estos Términos y Condiciones implican su aceptación de las siguientes reglas: A. Reglas
              para Colocación: 1. Toda información que el usuario provea o suministre a nuestro Sitio Web (la
              "Información") no podrá contener: a) URLs o enlaces a Sitios Web. b) Material protegido por derecho de
              autor. c) Material que infrinja cualquier otro derecho de propiedad intelectual, o los derechos de
              privacidad de terceros. d) Cualquier material sexualmente explícito, obsceno, calumnioso, difamatorio o
              injurioso. e) Cualquier material ofensivo para terceros. f) Datos falsos o inexactos. 2. Usted no podrá
              utilizar la Información para: a) Asumir una falsa identidad. b) Colocar información falsa, imprecisa o
              engañosa. c) Colocar cartas en cadena o estructuras piramidales. d) Colocar opiniones o avisos,
              comerciales o de cualquier otra naturaleza. B. Reglas de Conducta: 1. El usuario no podrá responder a
              colocaciones de otros usuarios de ninguna manera o por ningún motivo distinto del esperado. 2. Los
              usuarios no podrán remitir correo electrónico de naturaleza comercial no solicitado a otros usuarios de
              www.wom-latam.com 3. El usuario no podrá revisar, modificar o eliminar cualquier material colocado por
              terceras personas en el Sitio Web www.wom-latam.com 4. WORLD OF MANAGEMENT S.R.L. no está obligada a
              monitorear la conducta de sus usuarios, pero puede investigar cuando se reporten violaciones. A los
              usuarios que violen estas Reglas de Conducta se les podrá negar el acceso al Sitio Web a la sola
              discreción de WORLD OF MANAGEMENT S.R.L.
            </p>
            <h1>AVISO LEGAL SOBRE GARANTÍAS</h1>
            <p>
              NO OFRECEMOS NINGUNA GARANTÍA DE QUE ESTE SITIO CUMPLIRÁ CON SUS REQUERIMIENTOS, O DE QUE NO HAYA
              INTERRUPCIONES, ESTÁ A TIEMPO, SEA SEGURO, O LIBRE DE ERRORES. TAMPOCO OFRECEMOS NINGUNA GARANTIA SOBRE
              LOS RESULTADOS OBTENIDOS POR MEDIO DEL USO DE ESTE SITIO NI DE LA EXACTITUD NI CONFIABILIDAD DE NINGUNA
              INFORMACIÓN OBTENIDA A TRAVÉS DE ESTE SITIO. USTED ENTIENDE Y ACEPTA QUE CUALQUIER INFORMACIÓN, CONTENIDO,
              O PROGRAMA DE SOFTWARE DESCARGADO U OBTENIDO DE CUALQUIER OTRA MANERA A TRAVÉS DEL USO DE ESTE SITIO ES
              OBTENIDO BAJO SU PROPIO RIESGO Y USTED ES EL ÚNICO RESPONSABLE POR CUALQUIER TIPO DE DAÑO QUE SUFRA SU
              SISTEMA, O DE LA PÉRDIDA DE DATOS RESULTANTE DE LA DESCARGA DEL MENCIONADO CONTENIDO. QUEDA PERFECTAMENTE
              ESTABLECIDO QUE EL USO DE ESTE SITIO ES GRATUITO ENTENDIENDO QUE SU UTILIZACIÓN NO GENERA DE NINGUNA
              MANERA DERECHOS. A NO SER QUE SE ESPECIFIQUE LO CONTRARIO, PROPORCIONAMOS ESTE SITIO EN EL "ESTADO EN QUE
              SE ENCUENTRA" SIN GARANTÍAS EXPRESAS NI IMPLÍCITAS DE NINGÚN TIPO, HASTA EL LÍMITE PERMITIDO POR LA LEY.
              DESCONOCEMOS TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS CONFORME CON LO PERMITIDO POR LA LEY APLICABLE,
              INCLUYENDO PERO SIN LIMITARSE A GARANTÍAS IMPLÍCITAS DE CONDICIONES APTAS PARA LA VENTA, NO INFRACCIÓN DE
              PROPIEDAD INTELECTUAL, Y ADECUACIÓN A FINES ESPECÍFICOS. EN NINGÚN CASO SEREMOS NOSOTROS NI NUESTRAS
              PARTES RELACIONADAS, RESPONSABLES POR NINGÚN DAÑO (INCLUYENDO PERO SIN LIMITARSE A DAÑOS POR PÉRDIDA DE
              GANANCIAS, INTERRUPCIÓN DE NEGOCIOS, O PÉRDIDA DE INFORMACIÓN) QUE SUCEDAN DEBIDO AL ACCESO, USO, O
              INHABILIDAD DE USO DEL CONTENIDO O PROGRAMAS DE SOFTW ARE DESCARGABLES CONTENIDOS EN ESTE SITIO, INCLUSO
              SI HEMOS SIDO AVISADOS DE LA POSIBILIDAD DE QUE ESTOS DAÑOS OCURRIERAN.
            </p>
            <h1>INDEMNIZACIÓN </h1>
            <p>
              Usted acepta, a expensas suyas, indemnizar, defender y a mantener indemne a WORLD OF MANAGEMENT S.R.L. y a
              nuestros directores, empleados, agentes y afiliados, y considerarnos como no responsables por pérdidas,
              deficiencias, daños, responsabilidades, costos, y gastos (incluyendo gastos y honorarios derivados de los
              servicios legales prestados por abogados) incurridos en conexión con, o debido a cualquier tipo de
              reclamo, demanda, acción o procedimiento legal surgido de su incumplimiento de estos términos de uso o en
              conexión con el uso que usted ha dado a este sitio, o a cualquier producto o servicio relacionado con este
              sitio.
            </p>
            <h1>RENUNCIA Y/O SEPARACIÓN DE CLÁUSULAS </h1>
            <p>
              La renuncia por parte de cualquiera de las partes a un derecho, o a hacer un reclamo por incumplimiento
              bajo estos términos o condiciones, no constituye una renuncia a presentar reclamos subsecuentes ni
              constituye una renuncia de los demás derechos. Si se encontrase que una de las provisiones contempladas en
              estos términos de uso no es válida o no puede dársele cumplimiento en una corte o jurisdicción competente,
              tal provisión será eliminada de estos términos de uso, que con excepción de la tal provisión, seguirán en
              fuerza y efecto.
            </p>
            <h1>INFORMACIÓN</h1>
            <p>
              La información que se otorga en virtud de la presente operación informática, implica la prestación del
              consentimiento expreso dispuesto por la ley 25.326. La información será archivada por WORLD OF MANAGEMENT
              S.R.L. con domicilio social en Calle Pública s/n - Casa 114 - Barrio Palmas de Claret - Ciudad de Córdoba
            </p>
            - Provincia de Córdoba, Argentina.
            <h1>DERECHOS RESERVADOS</h1>
            <p>Todo derecho no expresamente concedido a usted aquí, queda reservado para nosotros.</p>
            <h1>TRADUCCIÓN</h1>
            <p>
              En caso de que en algún momento se pusieran a disposición suya estos términos de uso en varios idiomas
              como un servicio para nuestros consumidores, y hubiera discrepancias entre las diferentes traducciones, la
              versión en español se considerará la correcta.
            </p>
            <h1>LEY APLICABLE Y JURISDICCIÓN </h1>
            <p>
              Los presentes Términos y Condiciones, así como sus enmiendas y modificaciones, serán regidos e
              interpretados de acuerdo a la ley de la República Argentina, con exclusión de las normas de derecho
              internacional privado o de conflicto de leyes que pudieran llevar a la aplicación del derecho de un tercer
              país. En caso de surgir cualquier diferencia, desacuerdo, controversia o conflicto respecto de la
              interpretación o cumplimiento de estos Términos y Condiciones, el conflicto será dirimido por los
              tribunales de la Ciudad de Córdoba, República Argentina.
            </p>
            <h1>Avisos Legales y Exenciones de Responsabilidad.</h1>
            <p>
              Todo el material presentado en este sitio web es para fines informativos y no constituye asesoramiento de
              inversión, ni constituye asesoramiento impositivo, legal, o de otro tipo. Los inversionistas deben
              consultar con su propio asesor fiscal y/o abogado con respecto a su situación fiscal. Todo inversor deberá
              efectuar su propia evaluación independiente de los riesgos asociados a la inversión que planea llevar a
              cabo. La información que se proporciona en este sitio no conlleva responsabilidad legal. Ha sido obtenida
              de fuentes que se consideran confiables, pero no aseguramos que sea precisa o completa. La información que
              se proporciona no implica responsabilidad legal por parte de WOM Latam. El material presentado puede
              contener ciertas declaraciones e información relacionada con WOM Latam que reflejan los puntos de vista
              y/o expectativas actuales de WOM Latam y su administración con respecto a su desempeño, negocio, y eventos
              futuros. Tales declaraciones están sujetas a una serie de riesgos, incertidumbres y suposiciones.
              Advertimos que una serie de factores externos importantes podrían hacer que los resultados reales difieran
              sustancialmente de los planes, objetivos, expectativas, estimaciones e intenciones expresados en el
              material informativo presentado en este sitio web. El material informativo brindado en este sitio web no
              es un memorando de oferta o prospecto y no debe tratarse como material de oferta de ningún tipo. La
              información o material informativo presentado, contenida en este sitio web, no constituirá una oferta de
              venta o la solicitud de una oferta de compra de valores, y está destinada a ser de interés general
              únicamente y no constituye ni establece opiniones o consejos. La información de este sitio web es
              especulativa y puede ser precisa o no y los resultados pueden diferir materialmente de los indicados en
              este sitio. WOM Latam no hace declaraciones ni garantías con respecto a la precisión de la totalidad o
              parte del material informativo presentado y renuncia a todas esas representaciones y garantías. En ningún
              caso, Wom Latam o cualquiera de sus afiliados, accionistas, directores, funcionarios, agentes o empleados
              serán responsables ante terceros (incluidos los inversionistas) por cualquier inversión o decisión
              comercial tomada o acción tomada en base a la información y declaraciones contenidas en este sitio web, el
              material presentado en el mismo, o por cualquier daño consecuente, especial o similar, como consecuencia a
              cualquier error u omisión en su contenido, independientemente de la causa de dicha inexactitud, error u
              omisión. Además, WOM Latam, sus afiliados, accionistas, directores, funcionarios, agentes o empleados no
              aceptan responsabilidad y renuncian a toda responsabilidad por las consecuencias de cualquier usuario de
              este material informativo presentando en este sitio web o cualquier otra persona que actúe, o se abstenga
              de actuar, basándose en la información contenida en este sitio web o para cualquier decisión basada en él,
              o por cualquier daño real, consecuente especial, incidental o punitivo a cualquier persona o entidad por
              cualquier asunto relacionado con el material presentado en este sitio incluso si se le advierte de la
              posibilidad de tales daños.
            </p>
            <h1>GRACIAS POR VISITAR NUESTRO SITIO WEB Y POR LEER ESTE DOCUMENTO.</h1>
          </div>

          <SocaloBottom color='bg-tertiary'> </SocaloBottom>
        </div>
      </section>

      <Newsletter />
      <Contacto />

      <HeadProvider>
        <Title>WOM Latam - Terminos y Condiciones</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
