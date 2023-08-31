import './Fotter.css';

const Footer = () => {
    return (
        <footer className='footer' style={{backgroundImage: 'url(/img/footer-bg.png)'}}>
            <div className='redes'>
                <a href='https://www.facebook.com/ulises.rojas.18659' target='_blank'>
                    <img src="/img/facebook.png" alt="Facebook" />
                </a>
                <a href='https://www.x.com/rojas18_ulises/' target='_blank'>
                    <img src="/img/twitter.png" alt="Twitter" />
                </a>
                <a href='https://www.instagram.com/ulisesrojas70/' target='_blank'>
                    <img src="/img/instagram.png" alt="Instagram" />
                </a>
            </div>
            <img src="/img/logo-org.png" alt="org" />
            <strong>Desarrollado por: Ulises Rojas</strong>
        </footer>
    )
}

export default Footer;