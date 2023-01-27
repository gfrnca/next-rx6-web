/* General */
import Link from 'next/link';
import { useRouter } from 'next/router'
import { use } from 'react'

/* CSS */
import { InstitutionalSidebarStyles } from "./InstitutionalSidebar.styled"

const InstitutionalSidebar = () => {

  const router = useRouter();

  return (
    <InstitutionalSidebarStyles>
      <h1 className="title">Institucional</h1>

      <div className="policies-menu">
        <Link className={router.pathname === '/institucional/politicas-de-privacidade' ? 'policy active' : 'policy'} href='/institucional/politicas-de-privacidade'>          
          <p>Políticas de privacidade</p>
        </Link>

        <Link className={router.pathname === '/institucional/termos-de-servico' ? 'policy active' : 'policy'} href='/institucional/termos-de-servico'>         
          <p>Termos de serviço</p>            
        </Link>

        <Link className={router.pathname === '/institucional/atendimento' ? 'policy active' : 'policy'} href='/institucional/atendimento'>
          <p>Atendimento</p>
        </Link>
      </div>

      
    </InstitutionalSidebarStyles>
  )
}

export default InstitutionalSidebar