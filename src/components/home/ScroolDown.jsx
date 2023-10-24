
export const ScroolDown = () => {
  return (
    <>
        <div className = 'home__scroll'>
            <a href="#about" className = 'home__scroll-button button--flex'>
                {/* <img src= '../src/assets/charge2.gif' className = 'imgCharge'  alt="" /> */}
                <span className = 'home__scroll-name'> Scroll Down </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="arrow-to-bottom"><path fill="#6563FF" d="M19,20H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Zm-7.71-2.29a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"></path></svg>
            </a>
        </div>
    </>
  )
}