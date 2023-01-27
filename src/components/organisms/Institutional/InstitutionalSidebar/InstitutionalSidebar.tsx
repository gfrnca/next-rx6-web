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
        <div className={router.pathname === '/institucional/politicas-de-privacidade' ? 'policy active' : 'policy'}>
          <Link href='/institucional/politicas-de-privacidade'>
            <p>Políticas de privacidade</p>
          </Link>
        </div>
        <div className={router.pathname === '/institucional/termos-de-servico' ? 'policy active' : 'policy'}>
          <Link href='/institucional/termos-de-servico'>
            <p>Termos de serviço</p>
          </Link>
        </div>
        <div className="policy">
          <p>Atendimento</p>
        </div>
      </div>

      
    </InstitutionalSidebarStyles>
  )
}

export default InstitutionalSidebar