import GitHubIcon from '@mui/icons-material/GitHub';
import '../../styles/styles.scss'

export const Footer = () => {
    return (
<footer className="py-5 text-white backgroundMainColor">
    <p className='footerPhrase'>"Tu cuerpo puede soportar cualquier esfuerzo, es tu mente a la que debes convencer."</p>
    <div className="footer-header">
      <div className="fh-line"></div>            <div className="fh-logo">
        <img src='https://static.vecteezy.com/system/resources/previews/007/653/260/non_2x/masculine-fitness-gym-silhouette-illustration-vector.jpg' alt="Meat Palace Logo" />
      </div>
      <div className="fh-line"></div>
    </div>
    <div className='containerCredits'>
      <span>© 2022 - Fitness Shop</span>
      <div>
      <span>Desarrollo y diseño: Alejo Feas Matej</span>
      <a className='gitHubIcon' href="https://github.com/alefeas" target='blank'><GitHubIcon/></a>
      </div>
    </div>
  </footer>
  )
}