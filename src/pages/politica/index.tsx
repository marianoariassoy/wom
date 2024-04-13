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
            <h1 className='text-2xl lg:text-3xl text-secondary font-bold'>Política de Privacidad</h1>
            <div className='text-black/25'>
              <DownBig />
            </div>
          </div>
          <div className='text-sm mb-20 flex flex-col gap-y-6 [&>h1]:font-bold max-w-3xl m-auto'>
            <p>
              Finalidad. Wom-latam.com utiliza la información personal brindada por los usuarios para procesar, validar
              y verificar las suscripciones de los usuarios. Asimismo, la información se utiliza para: (i) desarrollar
              nuevos productos y servicios que satisfagan las necesidades de los usuarios, y para (ii) contactarse, vía
              mail o telefónicamente, con los usuarios a fin de relevar opiniones sobre los servicios que presta
              Wom-latam.com y/o informar sobre productos y servicios. El cliente, tendrá derecho a solicitar a
              Wom-latam.com, en cualquier momento, su voluntad de no recibir información sobre productos y servicios,
              según lo dispuesto por el Artículo 16 de la Ley 25.326.
            </p>
            <p>
              Los datos personales recolectados no serán difundidos ni empleados para un fin distinto o incompatible al
              tenido en cuenta al ser ingresados en la base de datos de Wom-latam.com. Asimismo, Wom-latam.com podrá
              emplear a otras compañías y/o personas físicas para llevar a cabo tareas o funciones en su nombre, como
              por ejemplo enviar correo postal y electrónico, retirar información reiterativa de las listas de usuarios,
              analizar datos en forma estadística, etc. Dichas personas cuentan con acceso a la información personal
              necesaria para cumplir con sus tareas y funciones, pero no pueden utilizarla con fines distintos a los
              estipulados.
            </p>
            <p>
              En relación a lo dispuesto por el Artículo 5 de la Ley 25.326, el tratamiento de datos y el envío de
              información por correo electrónico que Wom-latam.com efectúa, se realiza con el expreso consentimiento
              libre, expreso e informado de los usuarios.
            </p>
            <p>
              Los lectores pueden en cualquier momento editar la información con la que se registraron o suscribieron o
              cancelar el servicio en cualquier momento. Asimismo, el titular de los datos personales tiene la facultad
              de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a 6 meses, salvo
              que se acredite un interés legítimo al efecto, conforme lo establecido en el art. 14, inc. 3 de la Ley
              25.326. Conforme Art 1 de la Disposición 10/2008.
            </p>
            <p>
              En cumplimiento del Artículo 10 de la Ley 25.326, Wom-latam.com mantendrá absoluta confidencialidad de los
              datos personales brindados por los usuarios. La información que Wom-latam.com recoge se archiva bajo
              extremas medidas de seguridad en sus servidores, en cumplimiento del Artículo 9 de la Ley 25.326.
            </p>
            <p>
              Sin perjuicio de lo establecido en el presente, en relación a las medidas de seguridad que Wom-latam.com
              adopta, considerando las condiciones generales de seguridad que ofrece hoy Internet, se debe tener en
              cuenta que toda vez que los usuarios divulguen voluntariamente información personal online, ésta puede ser
              recogida y utilizada por otros, situación que excede la voluntad de Wom-latam.com. Por lo tanto,
              considerando que Wom-latam.com pone su mejor esfuerzo en proteger la información personal de sus usuarios,
              no será responsable por la difusión de la misma cuando sea efectuada por fuentes ajenas a ésta ni será
              responsable por los daños y perjuicios que dicha divulgación genere.
            </p>
            <p>
              La DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, Órgano de Control de la Ley 25.326, tiene la
              atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las
              normas sobre protección de datos personales. Conforme Art 2 de la Disposición 10/2008.
            </p>
            <p>
              ART. 6°, Ley 25.326 (Información). Cuando se recaben datos personales se deberá informar previamente a sus
              titulares en forma expresa y clara: <br />
              a) La finalidad para la que serán tratados y quiénes pueden ser sus destinatarios o clase de
              destinatarios;
              <br />
              b) La existencia del archivo, registro, banco de datos, electrónico o de cualquier otro tipo, de que se
              trate y la identidad y domicilio de su responsable; <br />
              c) El carácter obligatorio o facultativo de las respuestas al cuestionario que se le proponga, en especial
              en cuanto a los datos referidos en el artículo siguiente; <br />
              d) Las consecuencias de proporcionar los datos, de la negativa a hacerlo o de la inexactitud de los
              mismos;
              <br />
              e) La posibilidad del interesado de ejercer los derechos de acceso, rectificación y supresión de los
              datos.
            </p>
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
